"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SnakesCollisionDetector = /** @class */ (function () {
    function SnakesCollisionDetector(snake, snakes) {
        this.snake = snake;
        this.snakes = snakes;
    }
    SnakesCollisionDetector.prototype.check = function () {
        var _this = this;
        if (!this.snakes.length) {
            return false;
        }
        return this.snakes.some(function (snake) {
            return snake.isOverlap(_this.snake.getHead());
        });
    };
    return SnakesCollisionDetector;
}());
exports.default = SnakesCollisionDetector;
