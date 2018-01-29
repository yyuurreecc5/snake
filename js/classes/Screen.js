"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Screen = /** @class */ (function () {
    function Screen() {
        this.canvas = null;
        this.ctx = null;
        this.toDrawObjects = [];
        this.canvas = document.getElementById('canvas');
        this.canvas.width = 1000;
        this.canvas.height = 1000;
        this.ctx = this.canvas.getContext('2d');
    }
    Screen.prototype.addObject = function (drawable) {
        this.toDrawObjects.push(drawable);
        console.log(this.toDrawObjects);
    };
    Screen.prototype.draw = function () {
        var _this = this;
        this.toDrawObjects.forEach(function (object) {
            object.draw(_this.ctx);
        });
    };
    return Screen;
}());
exports.default = Screen;
