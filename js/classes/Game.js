"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Screen_1 = require("./Screen");
var Field_1 = require("./Field");
var Snake_1 = require("./Snake");
var FoodCreator_1 = require("./FoodCreator");
var Game = /** @class */ (function () {
    function Game() {
        this.screen = null;
        this.field = null;
        this.snake = null;
        this.speed = 100;
        this.food = null;
        this.foodCreator = null;
        this.screen = new Screen_1.default();
        this.field = new Field_1.default(20, 20);
        this.snake = new Snake_1.default();
        this.foodCreator = new FoodCreator_1.default(this.field);
        this.food = this.foodCreator.create();
    }
    Game.prototype.init = function () {
        this.screen.addObject(this.field);
        this.screen.addObject(this.snake);
        this.screen.addObject(this.food);
    };
    Game.prototype.start = function () {
        setInterval(this.mainLoop.bind(this), this.speed);
    };
    Game.prototype.mainLoop = function () {
        if (this.snake.isEatSelf()) {
            return;
        }
        if (this.snake.eat(this.food)) {
            this.food.setNewPosition(this.foodCreator.create());
        }
        else {
            this.snake.move();
        }
        if (!this.field.isInBoundary(this.snake.body[0])) {
            return;
        }
        this.screen.draw();
    };
    return Game;
}());
exports.default = Game;
