"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Food_1 = require("./Food");
var FoodCreator = /** @class */ (function () {
    function FoodCreator(field) {
        this.maxWidth = field.width;
        this.maxHeight = field.height;
        console.log('field size');
        console.log(this.maxWidth);
    }
    FoodCreator.prototype.rand = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    FoodCreator.prototype.create = function () {
        return new Food_1.default(this.rand(0, this.maxWidth - 1), this.rand(0, this.maxHeight - 1));
    };
    return FoodCreator;
}());
exports.default = FoodCreator;
