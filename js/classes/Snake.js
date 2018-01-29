"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point_1 = require("./Point");
var eDirection_1 = require("../enums/eDirection");
var eColor_1 = require("../enums/eColor");
var Direction_1 = require("./Direction");
var Snake = /** @class */ (function () {
    function Snake(size, direction, position) {
        if (size === void 0) { size = 5; }
        if (direction === void 0) { direction = new Direction_1.default(eDirection_1.default.DOWN); }
        if (position === void 0) { position = new Point_1.default(5, 5); }
        this.body = [];
        this.BODY_COLOR = eColor_1.default.BLUE;
        this.HEAD_COLOR = eColor_1.default.RED;
        this.direction = direction;
        this.position = position;
        this.init(size);
    }
    Snake.prototype.init = function (size) {
        var _this = this;
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
        window.addEventListener('keydown', function (event) {
            event.preventDefault();
            switch (event.key) {
                case 'ArrowUp':
                    _this.direction.setValue(eDirection_1.default.UP);
                    break;
                case 'ArrowDown':
                    _this.direction.setValue(eDirection_1.default.DOWN);
                    break;
                case 'ArrowLeft':
                    _this.direction.setValue(eDirection_1.default.LEFT);
                    break;
                case 'ArrowRight':
                    _this.direction.setValue(eDirection_1.default.RIGHT);
                    break;
            }
        });
    };
    Snake.prototype.move = function () {
        this.position.move(this.direction.value);
        for (var i = this.body.length - 1; i > 0; i--) {
            this.body[i].setNewPosition(this.body[i - 1]);
        }
        this.body[0].move(this.direction.value);
    };
    Snake.prototype.eat = function (food) {
        if (this.body[0].isOverlap(food)) {
            var oldPosition = this.body[this.body.length - 1];
            this.move();
            this.body.push(new Point_1.default(oldPosition.x, oldPosition.y));
            return true;
        }
        return false;
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
