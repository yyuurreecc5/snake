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
var math_helper_1 = require("../../helpers/math-helper");
var Controller_1 = require("./Controller");
var RandomController = /** @class */ (function (_super) {
    __extends(RandomController, _super);
    function RandomController() {
        var _this = _super.call(this) || this;
        _this.events = ["LEFT", "UP", "RIGHT", "DOWN"];
        setInterval(_this.generateEvent.bind(_this), 500);
        return _this;
    }
    RandomController.prototype.generateEvent = function () {
        var event = this.events[math_helper_1.default.getRandomInt(0, this.events.length - 1)];
        this.notifyObservers(event);
    };
    return RandomController;
}(Controller_1.default));
exports.default = RandomController;
