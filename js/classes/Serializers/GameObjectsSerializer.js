"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Field_1 = require("../Field");
var PlayerSnakeSerializer_1 = require("./PlayerSnakeSerializer");
var Food_1 = require("../Food");
var EnemySnakeSerializer_1 = require("./EnemySnakeSerializer");
var ObjectFactory = /** @class */ (function () {
    function ObjectFactory(gameData) {
        this.gameData = gameData;
        this.objects = [];
    }
    ObjectFactory.prototype.createAll = function () {
        var _this = this;
        this.gameData.fields.forEach(function (fieldJSON) {
            var field = new Field_1.default(fieldJSON.width, fieldJSON.height);
            _this.objects.push(field);
            var snakes = fieldJSON.entries.snakes;
            snakes.forEach(function (snake) {
                if (snake.type === "player") {
                    _this.objects.push(PlayerSnakeSerializer_1.default.create(snake, field));
                }
                else if (snake.type === "enemy") {
                    _this.objects.push(EnemySnakeSerializer_1.default.create(snake, field));
                }
            });
            var eats = fieldJSON.eats;
            eats.forEach(function (eat) {
                _this.objects.push(new Food_1.default(eat.x, eat.y, field));
            });
        });
        return this.objects;
    };
    return ObjectFactory;
}());
exports.default = ObjectFactory;
