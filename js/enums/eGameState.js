"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var eGameState;
(function (eGameState) {
    eGameState[eGameState["PLAY"] = 0] = "PLAY";
    eGameState[eGameState["PAUSE"] = 1] = "PAUSE";
    eGameState[eGameState["GAME_OVER"] = 2] = "GAME_OVER";
})(eGameState || (eGameState = {}));
exports.default = eGameState;
