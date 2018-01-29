"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point_1 = require("./Point");
var eColor_1 = require("../enums/eColor");
var Field = /** @class */ (function () {
    function Field(width, height) {
        this.width = 0;
        this.height = 0;
        this.fields = [];
        this.width = width;
        this.height = height;
        this.init();
    }
    Field.prototype.init = function () {
        for (var row_i = 0; row_i < this.width; row_i++) {
            this.fields[row_i] = [];
            for (var col_i = 0; col_i < this.height; col_i++) {
                this.fields[row_i][col_i] = new Point_1.default(row_i, col_i);
            }
        }
    };
    Field.prototype.isInBoundary = function (point) {
        return point.x < this.width &&
            point.y < this.height &&
            point.x >= 0 &&
            point.y >= 0;
    };
    Field.prototype.draw = function (ctx) {
        this.fields.forEach(function (row) {
            row.forEach(function (field) {
                ctx.strokeStyle = eColor_1.default.WHITE;
                field.draw(ctx, 'stroke');
                ctx.fillStyle = eColor_1.default.GREEN;
                field.draw(ctx);
            });
        });
    };
    return Field;
}());
exports.default = Field;
