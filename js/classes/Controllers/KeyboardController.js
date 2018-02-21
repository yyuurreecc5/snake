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
var Controller_1 = require("./Controller");
var eDirection_1 = require("../../enums/eDirection");
var KeyboardController = /** @class */ (function (_super) {
    __extends(KeyboardController, _super);
    function KeyboardController() {
        var _this = _super.call(this) || this;
        window.addEventListener('keydown', function (event) {
            event.preventDefault();
            switch (event.key) {
                case 'ArrowUp':
                    _this.notifyObservers(eDirection_1.default.UP);
                    break;
                case 'ArrowDown':
                    _this.notifyObservers(eDirection_1.default.DOWN);
                    break;
                case 'ArrowLeft':
                    _this.notifyObservers(eDirection_1.default.LEFT);
                    break;
                case 'ArrowRight':
                    _this.notifyObservers(eDirection_1.default.RIGHT);
                    break;
            }
        });
        return _this;
    }
    return KeyboardController;
}(Controller_1.default));
exports.default = KeyboardController;
