"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Screen_1 = require("./Screen");
var Field_1 = require("./Field");
var FoodCreator_1 = require("./FoodCreator");
var eDirection_1 = require("../enums/eDirection");
var Direction_1 = require("./Direction");
var Point_1 = require("./Point");
var SnakesCollisionDetector_1 = require("./CollisionDetectors/SnakesCollisionDetector");
var PlayerSnake_1 = require("./Snakes/PlayerSnake");
var EnemySnake_1 = require("./Snakes/EnemySnake");
var Game = /** @class */ (function () {
    function Game() {
        this.screen = null;
        this.field = null;
        this.playerSnake = null;
        this.enemySnake = null;
        this.speed = 100;
        this.food = null;
        this.foodCreator = null;
        this.snakesCollisionDetector = null;
        this.screen = new Screen_1.default();
        this.field = new Field_1.default(30, 30);
        var playerSnakeParams = {
            direction: null,
            position: null,
            size: null
        };
        playerSnakeParams.direction = new Direction_1.default(eDirection_1.default.RIGHT);
        playerSnakeParams.position = new Point_1.default(5, 5);
        playerSnakeParams.size = 5;
        this.playerSnake = new PlayerSnake_1.default(playerSnakeParams);
        this.foodCreator = new FoodCreator_1.default(this.field, this.playerSnake);
        this.food = this.foodCreator.create();
        var enemySnakeParams = {
            direction: null,
            position: null,
            size: null
        };
        enemySnakeParams.direction = new Direction_1.default(eDirection_1.default.LEFT);
        enemySnakeParams.position = new Point_1.default(10, 10);
        enemySnakeParams.size = 5;
        this.enemySnake = new EnemySnake_1.default(enemySnakeParams, this.food);
        this.snakesCollisionDetector = new SnakesCollisionDetector_1.default(this.playerSnake, [this.enemySnake]);
    }
    Game.prototype.init = function () {
        this.screen.addObject(this.field);
        this.screen.addObject(this.playerSnake);
        this.screen.addObject(this.enemySnake);
        this.screen.addObject(this.food);
    };
    Game.prototype.start = function () {
        setInterval(this.mainLoop.bind(this), this.speed);
    };
    Game.prototype.mainLoop = function () {
        if (this.playerSnake.isEatSelf()) {
            return;
        }
        if (this.snakesCollisionDetector.check()) {
            return;
        }
        if (this.playerSnake.eat(this.food) || this.enemySnake.eat(this.food)) {
            this.food.setNewPosition(this.foodCreator.create());
        }
        else {
            this.playerSnake.move();
            this.enemySnake.move();
        }
        if (!this.field.isInBoundary(this.playerSnake.getHead())) {
            return;
        }
        this.screen.draw();
    };
    return Game;
}());
exports.default = Game;
