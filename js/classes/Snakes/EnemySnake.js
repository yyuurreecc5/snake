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
var EnemyController_1 = require("../Controllers/EnemyController");
var EnemyLogic_1 = require("../AI/EnemyLogic");
var eColor_1 = require("../../enums/eColor");
var EnemySnake = /** @class */ (function (_super) {
    __extends(EnemySnake, _super);
    function EnemySnake(params, food) {
        var _this = _super.call(this, params) || this;
        _this.DEFAULT_BODY_COLOR = eColor_1.default.YELLOW;
        _this.DEFAULT_HEAD_COLOR = eColor_1.default.WHITE;
        _this.HEAD_COLOR = _this.HEAD_COLOR || _this.DEFAULT_HEAD_COLOR;
        _this.BODY_COLOR = _this.BODY_COLOR || _this.DEFAULT_BODY_COLOR;
        console.log(food);
        _this.controller = new EnemyController_1.default(new EnemyLogic_1.default(2, food, _this));
        _this.controller.addObserver(_this);
        return _this;
    }
    return EnemySnake;
}(Snake_1.default));
exports.default = EnemySnake;
