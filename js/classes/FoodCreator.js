"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Food_1 = require("./Food");
var math_helper_1 = require("../helpers/math-helper");
var FoodCreator = /** @class */ (function () {
    function FoodCreator(field, snake) {
        this.maxWidth = field.width;
        this.maxHeight = field.height;
        this.snake = snake;
    }
    FoodCreator.prototype.create = function () {
        var newFood = null;
        while (!newFood) {
            newFood = this.tryCreate();
        }
        return newFood;
    };
    FoodCreator.prototype.tryCreate = function () {
        var newFood = new Food_1.default(math_helper_1.default.getRandomInt(0, this.maxWidth - 1), math_helper_1.default.getRandomInt(0, this.maxHeight - 1));
        if (this.snake.isOverlap(newFood)) {
            return null;
        }
        return newFood;
    };
    return FoodCreator;
}());
exports.default = FoodCreator;
