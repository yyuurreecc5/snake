"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Scene_1 = require("./Scene");
var eGameState_1 = require("../enums/eGameState");
var Game = /** @class */ (function () {
    function Game() {
        this.gameSpeed = 100;
        this.scene = new Scene_1.default(this);
        this.timer = 0;
    }
    Game.prototype.init = function () {
        var _this = this;
        this.scene.update();
        this.state = eGameState_1.default.PAUSE;
        document.addEventListener('keydown', function (e) {
            if (_this.state === eGameState_1.default.PAUSE) {
                _this.run();
            }
        });
    };
    Game.prototype.run = function () {
        this.state = eGameState_1.default.PLAY;
        this.timer = setInterval(this.scene.update.bind(this.scene), this.gameSpeed);
    };
    Game.prototype.gameOver = function () {
        clearInterval(this.timer);
        this.state = eGameState_1.default.GAME_OVER;
    };
    return Game;
}());
exports.default = Game;
