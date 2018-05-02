"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point_1 = require("../Point");
var ColorSerializer_1 = require("./ColorSerializer");
var DirectionSerializer_1 = require("./DirectionSerializer");
var PlayerSnake_1 = require("../Snakes/PlayerSnake");
var PlayerSnakeFactory = /** @class */ (function () {
    function PlayerSnakeFactory() {
    }
    PlayerSnakeFactory.create = function (json, field) {
        var direction = DirectionSerializer_1.default.serialize(json.direction);
        var position = new Point_1.default(json.position.x, json.position.y);
        var bodyColor = ColorSerializer_1.default.serialize(json.bodyColor);
        var headColor = ColorSerializer_1.default.serialize(json.headColor);
        var size = json.size;
        return new PlayerSnake_1.default({
            direction: direction,
            position: position,
            bodyColor: bodyColor,
            headColor: headColor,
            size: size,
            field: field
        });
    };
    return PlayerSnakeFactory;
}());
exports.default = PlayerSnakeFactory;
