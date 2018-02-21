"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Snake_1 = require("./Snake");
var eColor_1 = require("../../enums/eColor");
var KeyboardController_1 = require("../Controllers/KeyboardController");
var PlayerSnake = /** @class */ (function (_super) {
    __extends(PlayerSnake, _super);
    function PlayerSnake(params) {
        var _this = _super.call(this, params) || this;
        _this.DEFAULT_BODY_COLOR = eColor_1.default.BLUE;
        _this.DEFAULT_HEAD_COLOR = eColor_1.default.RED;
        _this.HEAD_COLOR = _this.HEAD_COLOR || _this.DEFAULT_HEAD_COLOR;
        _this.BODY_COLOR = _this.BODY_COLOR || _this.DEFAULT_BODY_COLOR;
        _this.controller = new KeyboardController_1.default();
        _this.controller.addObserver(_this);
        return _this;
    }
    return PlayerSnake;
}(Snake_1.default));
exports.default = PlayerSnake;
