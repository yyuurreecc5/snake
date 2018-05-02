"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EnemySnake_1 = require("../Snakes/EnemySnake");
var eDirection_1 = require("../../enums/eDirection");
var Food_1 = require("../Food");
var Direction_1 = require("../Direction");
var AI = /** @class */ (function () {
    function AI(scene) {
        this.scene = scene;
        this.phisyc = scene.getPhisyc();
    }
    AI.prototype.getVerticalOffset = function (snake, food, forbidDirections) {
        var head = snake.getHead();
        if (head.isUnder(food)) {
            if (!forbidDirections.includes(eDirection_1.default.UP)) {
                return eDirection_1.default.UP;
            }
            return eDirection_1.default.DOWN;
        }
        else {
            if (!forbidDirections.includes(eDirection_1.default.DOWN)) {
                return eDirection_1.default.DOWN;
            }
            return eDirection_1.default.UP;
        }
    };
    AI.prototype.getHorizontalOffset = function (snake, food, forbidDirections) {
        var head = snake.getHead();
        if (head.isRightOf(food)) {
            if (!forbidDirections.includes(eDirection_1.default.LEFT)) {
                return eDirection_1.default.LEFT;
            }
            return eDirection_1.default.RIGHT;
        }
        else {
            if (!forbidDirections.includes(eDirection_1.default.RIGHT)) {
                return eDirection_1.default.RIGHT;
            }
            return eDirection_1.default.LEFT;
        }
    };
    AI.prototype.getDirection = function (snake, forbidDirections) {
        if (forbidDirections === void 0) { forbidDirections = []; }
        var head = snake.getHead();
        var direction = snake.getDirection();
        var food = this.getNearestFood(snake);
        switch (direction) {
            case eDirection_1.default.LEFT:
                if (head.isRightOf(food) && !forbidDirections.includes(direction)) {
                    return direction;
                }
                else {
                    return this.getVerticalOffset(snake, food, forbidDirections);
                }
            case eDirection_1.default.RIGHT:
                if (head.isLeftOf(food) && !forbidDirections.includes(direction)) {
                    return direction;
                }
                else {
                    return this.getVerticalOffset(snake, food, forbidDirections);
                }
            case eDirection_1.default.UP:
                if (head.isUnder(food) && !forbidDirections.includes(direction)) {
                    return direction;
                }
                else {
                    return this.getHorizontalOffset(snake, food, forbidDirections);
                }
            case eDirection_1.default.DOWN:
                if (head.isAbove(food) && !forbidDirections.includes(direction)) {
                    return direction;
                }
                else {
                    return this.getHorizontalOffset(snake, food, forbidDirections);
                }
        }
    };
    AI.prototype.getNearestFood = function (snake) {
        var foods = this.scene.getObjects().filter(function (object) { return object instanceof Food_1.default; });
        var head = snake.getHead();
        var sortedFoods = foods.sort(function (a, b) {
            var distanceA = Math.abs(head.x - a.x) + Math.abs(head.y - a.y);
            var distanceB = Math.abs(head.x - b.x) + Math.abs(head.y - b.y);
            return distanceA - distanceB;
        });
        return sortedFoods[0];
    };
    AI.prototype.proccess = function () {
        var _this = this;
        var objects = this.scene.getObjects();
        objects.forEach(function (object) {
            if (object instanceof EnemySnake_1.default) {
                _this.proccessDirection(object);
            }
        });
    };
    AI.prototype.proccessDirection = function (enemySnake) {
        var directions = Direction_1.default.getDirections();
        var checkedDirections = [];
        for (var i = 0; i < directions.length; i++) {
            var direction = this.getDirection(enemySnake, checkedDirections);
            if (this.canMove(enemySnake, direction)) {
                enemySnake.changeDirection(direction);
                break;
            }
            checkedDirections.push(direction);
        }
    };
    AI.prototype.canMove = function (snake, direction) {
        var sourceDirection = snake.getDirection();
        snake.changeDirection(direction);
        snake.move();
        var canMove = true;
        var collisions = [];
        if (snake.isEatSelf()) {
            canMove = false;
        }
        else if (this.phisyc.checkBoundaryOverflow()) {
            canMove = false;
        }
        else if (collisions = this.phisyc.detectCollisions()) {
            if (collisions.find(function (collision) { return collision.type !== 'EAT'; })) {
                canMove = false;
            }
        }
        snake.changeDirection(sourceDirection);
        snake.revertMove();
        return canMove;
    };
    return AI;
}());
exports.default = AI;
