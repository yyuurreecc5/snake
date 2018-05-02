"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var eColor_1 = require("../../enums/eColor");
var ColorSerializer = /** @class */ (function () {
    function ColorSerializer() {
    }
    ColorSerializer.serialize = function (jsonColor) {
        switch (jsonColor) {
            case "blue": return eColor_1.default.BLUE;
            case "red": return eColor_1.default.RED;
            case "green": return eColor_1.default.GREEN;
            case "yellow": return eColor_1.default.YELLOW;
            case "white": return eColor_1.default.WHITE;
        }
    };
    return ColorSerializer;
}());
exports.default = ColorSerializer;
