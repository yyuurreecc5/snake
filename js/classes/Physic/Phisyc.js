"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var eObjectFlags_1 = require("../../enums/eObjectFlags");
var Snake_1 = require("../Snakes/Snake");
var Physic = /** @class */ (function () {
    function Physic(objects) {
        this.objects = objects;
        this.observers = [];
    }
    Physic.prototype.addObserver = function (observer) {
        this.observers.push(observer);
    };
    Physic.prototype.removeObserver = function (observer) {
        console.warn('Здесь удаляем наблюдателя, не реализовал тк не было надобности');
    };
    Physic.prototype.notifyObservers = function (event) {
        this.observers.forEach(function (observer) {
            observer.handleEvent(event);
        });
    };
    Physic.prototype.proccess = function () {
        var _this = this;
        var collisions = this.detectCollisions();
        if (collisions) {
            collisions.forEach(function (collision) {
                _this.notifyObservers(collision);
            });
        }
        var overflowed = this.checkBoundaryOverflow();
        if (overflowed) {
            this.notifyObservers({ type: "BOUNDARY_OVERFLOW", data: overflowed });
        }
    };
    Physic.prototype.checkBoundaryOverflow = function () {
        var _this = this;
        return this.objects.find(function (object) {
            if (object instanceof Snake_1.default) {
                return _this.isOverflow(object);
            }
        });
    };
    Physic.prototype.isOverflow = function (object) {
        var head = object.getHead();
        if (head.x > object.field.width - 1 ||
            head.x < 0 ||
            head.y > object.field.height - 1 ||
            head.y < 0) {
            return true;
        }
        return false;
    };
    Physic.prototype.detectCollisions = function () {
        var _this = this;
        var collisions = [];
        this.objects.forEach(function (src, srcIndex) {
            if (typeof src.getCoordinates !== "undefined") {
                _this.objects.forEach(function (dest, destIndex) {
                    if (srcIndex !== destIndex) {
                        if (typeof dest.getCoordinates !== "undefined") {
                            var srcCoordinates = src.getCoordinates();
                            var destCoordinates = dest.getCoordinates();
                            if (_this.detectCollision(srcCoordinates, destCoordinates)) {
                                if (src.flags.includes(eObjectFlags_1.default.SOLID) &&
                                    dest.flags.includes(eObjectFlags_1.default.PICKUP)) {
                                    collisions.push({ type: "EAT", data: { src: src, dest: dest } });
                                }
                                else if (src.flags.includes(eObjectFlags_1.default.SOLID) &&
                                    dest.flags.includes(eObjectFlags_1.default.SOLID)) {
                                    collisions.push({ type: "SNAKE_COLLISION", data: { src: src, dest: dest } });
                                }
                            }
                        }
                    }
                    else {
                        if (src instanceof Snake_1.default) {
                            if (src.isEatSelf()) {
                                collisions.push({ type: "SNAKE_COLLISION", data: { src: src, dest: dest } });
                            }
                        }
                    }
                });
            }
        });
        if (collisions.length > 0) {
            return collisions;
        }
        return false;
    };
    Physic.prototype.detectCollision = function (src, dest) {
        return src.some(function (srcPoint) {
            return dest.some(function (destPoint) {
                if (srcPoint.x === destPoint.x && srcPoint.y === destPoint.y) {
                    return true;
                }
                return false;
            });
        });
    };
    return Physic;
}());
exports.default = Physic;
