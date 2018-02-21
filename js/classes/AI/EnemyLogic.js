"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var eDirection_1 = require("../../enums/eDirection");
var EnemyLogic = /** @class */ (function () {
    function EnemyLogic(level, food, snake) {
        this.lastActionIndex = 0;
        this.food = null;
        this.snake = null;
        this.level = level;
        this.food = food;
        console.log(this.food);
        this.snake = snake;
        this.directions = [eDirection_1.default.LEFT, eDirection_1.default.UP, eDirection_1.default.RIGHT, eDirection_1.default.DOWN];
    }
    EnemyLogic.prototype.getVerticalOffset = function () {
        var head = this.snake.getHead();
        if (head.isUnder(this.food)) {
            console.log('head is under');
            console.log(head);
            console.log(this.food);
            return eDirection_1.default.UP;
        }
        else {
            return eDirection_1.default.DOWN;
        }
    };
    EnemyLogic.prototype.getHorizontalOffset = function () {
        var head = this.snake.getHead();
        if (head.isRightOf(this.food)) {
            console.log('head right of food go left');
            console.log(head);
            console.log(this.food);
            return eDirection_1.default.LEFT;
        }
        else {
            return eDirection_1.default.RIGHT;
        }
    };
    EnemyLogic.prototype.getNextAction = function () {
        // this.lastActionIndex = (++this.lastActionIndex) % this.directions.length;
        var head = this.snake.getHead();
        var direction = this.snake.getDirection();
        switch (direction) {
            case eDirection_1.default.LEFT:
                if (head.isRightOf(this.food)) {
                    return direction;
                }
                else {
                    return this.getVerticalOffset();
                }
            case eDirection_1.default.RIGHT:
                if (head.isLeftOf(this.food)) {
                    return direction;
                }
                else {
                    return this.getVerticalOffset();
                }
            case eDirection_1.default.UP:
                if (head.isUnder(this.food)) {
                    return direction;
                }
                else {
                    return this.getHorizontalOffset();
                }
            case eDirection_1.default.DOWN:
                if (head.isAbove(this.food)) {
                    return direction;
                }
                else {
                    this.getHorizontalOffset();
                }
        }
        return this.directions[this.lastActionIndex];
    };
    return EnemyLogic;
}());
exports.default = EnemyLogic;
