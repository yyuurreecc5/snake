"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var eDirection_1 = require("../enums/eDirection");
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = 0;
        this.y = 0;
        this.x = x;
        this.y = y;
    }
    Point.prototype.move = function (direction, offset) {
        if (offset === void 0) { offset = 1; }
        switch (direction) {
            case eDirection_1.default.RIGHT:
                this.x += offset;
                break;
            case eDirection_1.default.LEFT:
                this.x -= offset;
                break;
            case eDirection_1.default.UP:
                this.y -= offset;
                break;
            case eDirection_1.default.DOWN:
                this.y += offset;
                break;
        }
    };
    Point.prototype.setNewPosition = function (newPosition) {
        this.x = newPosition.x;
        this.y = newPosition.y;
    };
    Point.prototype.isOverlap = function (point) {
        if (this.x == point.x &&
            this.y == point.y) {
            return true;
        }
        return false;
    };
    Point.prototype.isRightOf = function (point) {
        if (this.x > point.x) {
            return true;
        }
        return false;
    };
    Point.prototype.isSameHorizontal = function (point) {
        if (this.x === point.x) {
            return true;
        }
        return false;
    };
    Point.prototype.isSameVertical = function (point) {
        if (this.y === point.y) {
            return true;
        }
        return false;
    };
    Point.prototype.isLeftOf = function (point) {
        if (this.x < point.x) {
            return true;
        }
        return false;
    };
    Point.prototype.isUnder = function (point) {
        if (this.y > point.y) {
            return true;
        }
        return false;
    };
    Point.prototype.isAbove = function (point) {
        if (this.y < point.y) {
            return true;
        }
        return false;
    };
    Point.prototype.draw = function (ctx, type) {
        if (type === void 0) { type = 'fill'; }
        if (type == 'fill') {
            ctx.fillRect(this.x * Point.SIZE, this.y * Point.SIZE, Point.SIZE, Point.SIZE);
        }
        else {
            ctx.strokeRect(this.x * Point.SIZE, this.y * Point.SIZE, Point.SIZE, Point.SIZE);
        }
    };
    Point.SIZE = 20; // Размер в пикселях минимальной точки в игре
    return Point;
}());
exports.default = Point;
