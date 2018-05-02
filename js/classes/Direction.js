"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var eDirection_1 = require("../enums/eDirection");
var math_helper_1 = require("../helpers/math-helper");
var Direction = /** @class */ (function () {
    function Direction(value) {
        this.value = value;
    }
    Direction.getRandom = function () {
        return math_helper_1.default.getRandomInt(0, 4);
    };
    Direction.getDirections = function () {
        var directions = [];
        for (var i = 0; i !== eDirection_1.default.LAST; i++) {
            directions.push(i);
        }
        return directions;
    };
    Direction.prototype.isOpposite = function (direction) {
        if (Math.abs(this.value - direction) == 2) {
            return true;
        }
        return false;
    };
    Direction.prototype.setValue = function (newDirection) {
        if (this.value == newDirection) {
            return false;
        }
        if (this.isOpposite(newDirection)) {
            return false;
        }
        this.value = newDirection;
        return true;
    };
    return Direction;
}());
exports.default = Direction;
