"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Direction_1 = require("../Direction");
var eDirection_1 = require("../../enums/eDirection");
var DirectionSerializer = /** @class */ (function () {
    function DirectionSerializer() {
    }
    DirectionSerializer.serialize = function (jsonDirection) {
        switch (jsonDirection) {
            case "left": return new Direction_1.default(eDirection_1.default.LEFT);
            case "right": return new Direction_1.default(eDirection_1.default.RIGHT);
            case "up": return new Direction_1.default(eDirection_1.default.UP);
            case "down": return new Direction_1.default(eDirection_1.default.DOWN);
            default:
                console.warn("incorrect direction value from json file");
                break;
        }
    };
    return DirectionSerializer;
}());
exports.default = DirectionSerializer;
