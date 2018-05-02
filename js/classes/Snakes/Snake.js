"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var eDirection_1 = require("../../enums/eDirection");
var Point_1 = require("../Point");
var eObjectFlags_1 = require("../../enums/eObjectFlags");
var Snake = /** @class */ (function () {
    function Snake(params) {
        this.body = [];
        this.position = null;
        this.controller = null;
        this.direction = null;
        this.isGrowing = false;
        this.lastEvent = null;
        this.prevStep = null;
        this.flags = [eObjectFlags_1.default.SOLID];
        this.direction = params.direction;
        this.position = params.position;
        this.HEAD_COLOR = params.headColor ? params.headColor : null;
        this.BODY_COLOR = params.bodyColor ? params.bodyColor : null;
        this.field = params.field;
        this.init(params.size);
    }
    Snake.prototype.init = function (size) {
        switch (this.direction.value) {
            case eDirection_1.default.LEFT:
                for (var i = 0; i < size; i++) {
                    this.body.push(new Point_1.default(this.position.x + i, this.position.y));
                }
                break;
            case eDirection_1.default.RIGHT:
                for (var i = 0; i < size; i++) {
                    this.body.push(new Point_1.default(this.position.x - i, this.position.y));
                }
                break;
            case eDirection_1.default.UP:
                for (var i = 0; i < size; i++) {
                    this.body.push(new Point_1.default(this.position.x, this.position.y + i));
                }
                break;
            case eDirection_1.default.DOWN:
                for (var i = 0; i < size; i++) {
                    this.body.push(new Point_1.default(this.position.x, this.position.y - i));
                }
                break;
            default:
                console.error('Ошибка инициализации змейки');
                break;
        }
    };
    Snake.prototype.handleEvent = function (event) {
        this.lastEvent = event;
    };
    Snake.prototype.changeDirection = function (newDirection) {
        if (this.direction.isOpposite(newDirection)) {
            return;
        }
        switch (newDirection) {
            case eDirection_1.default.UP:
                this.direction.value = eDirection_1.default.UP;
                break;
            case eDirection_1.default.DOWN:
                this.direction.value = eDirection_1.default.DOWN;
                break;
            case eDirection_1.default.LEFT:
                this.direction.value = eDirection_1.default.LEFT;
                break;
            case eDirection_1.default.RIGHT:
                this.direction.value = eDirection_1.default.RIGHT;
                break;
            default:
        }
    };
    Snake.prototype.getHead = function () {
        return this.body[0] || null;
    };
    Snake.prototype.getCoordinates = function () {
        return this.body;
    };
    Snake.prototype.grow = function () {
        this.isGrowing = true;
    };
    Snake.prototype.savePrevStep = function () {
        this.prevStep = {
            position: new Point_1.default(this.position.x, this.position.y),
            body: []
        };
        for (var i = 0; i < this.body.length; i++) {
            this.prevStep.body.push(new Point_1.default(this.body[i].x, this.body[i].y));
        }
    };
    Snake.prototype.move = function () {
        this.savePrevStep();
        this.position.move(this.direction.value);
        for (var i = this.body.length - 1; i > 0; i--) {
            this.body[i].setNewPosition(this.body[i - 1]);
        }
        this.getHead().move(this.direction.value);
    };
    Snake.prototype.revertMove = function () {
        this.position = new Point_1.default(this.prevStep.position.x, this.prevStep.position.y);
        this.body = [];
        for (var i = 0; i < this.prevStep.body.length; i++) {
            this.body.push(new Point_1.default(this.prevStep.body[i].x, this.prevStep.body[i].y));
        }
    };
    Snake.prototype.update = function () {
        this.changeDirection(this.lastEvent);
        if (this.isGrowing) {
            var lastElement = Object.assign({}, this.body[this.body.length - 1]);
            this.body.push(new Point_1.default(lastElement.x, lastElement.y));
            this.isGrowing = false;
        }
        this.move();
    };
    Snake.prototype.getDirection = function () {
        return this.direction.value;
    };
    Snake.prototype.isEatSelf = function () {
        var head = this.body[0];
        for (var i = 1; i < this.body.length; i++) {
            if (head.isOverlap(this.body[i])) {
                return true;
            }
        }
        return false;
    };
    Snake.prototype.isOverlap = function (point) {
        return this.body.some(function (bodyPoint) {
            if (bodyPoint.isOverlap(point)) {
                return true;
            }
            return false;
        });
    };
    Snake.prototype.draw = function (ctx) {
        var _this = this;
        ctx.fillStyle = this.HEAD_COLOR;
        this.body.forEach(function (point) {
            if (point.x != _this.position.x ||
                point.y != _this.position.y) {
                ctx.fillStyle = _this.BODY_COLOR;
            }
            point.draw(ctx);
        });
    };
    return Snake;
}());
exports.default = Snake;
