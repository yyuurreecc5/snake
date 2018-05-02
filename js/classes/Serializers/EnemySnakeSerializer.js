"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point_1 = require("../Point");
var EnemySnake_1 = require("../Snakes/EnemySnake");
var ColorSerializer_1 = require("./ColorSerializer");
var DirectionSerializer_1 = require("./DirectionSerializer");
var EnemySnakeFactory = /** @class */ (function () {
    function EnemySnakeFactory() {
    }
    EnemySnakeFactory.create = function (json, field) {
        var direction = DirectionSerializer_1.default.serialize(json.direction);
        var position = new Point_1.default(json.position.x, json.position.y);
        var bodyColor = ColorSerializer_1.default.serialize(json.bodyColor);
        var headColor = ColorSerializer_1.default.serialize(json.headColor);
        var size = json.size;
        return new EnemySnake_1.default({
            direction: direction,
            position: position,
            bodyColor: bodyColor,
            headColor: headColor,
            size: size,
            field: field
        });
    };
    return EnemySnakeFactory;
}());
exports.default = EnemySnakeFactory;
