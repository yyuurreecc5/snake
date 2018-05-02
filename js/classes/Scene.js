"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameObjectsSerializer_1 = require("./Serializers/GameObjectsSerializer");
var GameData_1 = require("./Serializers/GameData");
var Screen_1 = require("./Screen");
var Phisyc_1 = require("./Physic/Phisyc");
var FoodCreator_1 = require("./FoodCreator");
var AI_1 = require("./AI/AI");
var eGameState_1 = require("../enums/eGameState");
var Scene = /** @class */ (function () {
    function Scene(game) {
        this.objectFactory = new GameObjectsSerializer_1.default(GameData_1.default);
        this.objects = this.objectFactory.createAll();
        this.screen = new Screen_1.default(this.objects);
        this.physic = new Phisyc_1.default(this.objects);
        this.physic.addObserver(this);
        this.ai = new AI_1.default(this);
        this.game = game;
    }
    Scene.prototype.getObjects = function () {
        return this.objects;
    };
    Scene.prototype.getPhisyc = function () {
        return this.physic;
    };
    Scene.prototype.getAI = function () {
        return this.ai;
    };
    Scene.prototype.update = function () {
        this.objects.forEach(function (object) {
            object.update();
        });
        this.ai.proccess();
        this.physic.proccess();
        if (this.lastPhisycEvent) {
            this.respondPhisycEvent(this.lastPhisycEvent);
        }
        if (this.game.state !== eGameState_1.default.GAME_OVER) {
            this.screen.draw();
        }
    };
    Scene.prototype.addObject = function (object) {
        this.objects.push(object);
    };
    Scene.prototype.handleEvent = function (event) {
        this.lastPhisycEvent = event;
    };
    Scene.prototype.respondPhisycEvent = function (event) {
        switch (event.type) {
            case "SNAKE_COLLISION":
                this.game.gameOver();
                break;
            case "EAT":
                this.removeObject(event.data.dest);
                var foodCreator = new FoodCreator_1.default(event.data.dest.field);
                this.addObject(foodCreator.create());
                event.data.src.grow();
                break;
            case "EAT_SELF":
                this.game.gameOver();
                break;
            case "BOUNDARY_OVERFLOW":
                this.game.gameOver();
                break;
            default: console.log("unhandle event: ", event);
        }
        this.lastPhisycEvent = null;
    };
    Scene.prototype.removeObject = function (removableObject) {
        var _this = this;
        this.objects.some(function (object, index) {
            if (object === removableObject) {
                _this.objects.splice(index, 1);
            }
        });
    };
    return Scene;
}());
exports.default = Scene;
