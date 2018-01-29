/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var eDirection_1 = __webpack_require__(2);
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = 0;
        this.y = 0;
        this.x = x;
        this.y = y;
    }
    Point.prototype.move = function (direction, offset) {
        if (offset === void 0) { offset = 1; }
        switch (direction) {
            case eDirection_1.default.RIGHT:
                this.x += offset;
                break;
            case eDirection_1.default.LEFT:
                this.x -= offset;
                break;
            case eDirection_1.default.UP:
                this.y -= offset;
                break;
            case eDirection_1.default.DOWN:
                this.y += offset;
                break;
        }
    };
    Point.prototype.setNewPosition = function (newPosition) {
        this.x = newPosition.x;
        this.y = newPosition.y;
    };
    Point.prototype.isOverlap = function (point) {
        if (this.x == point.x &&
            this.y == point.y) {
            return true;
        }
        return false;
    };
    Point.prototype.draw = function (ctx, type) {
        if (type === void 0) { type = 'fill'; }
        if (type == 'fill') {
            ctx.fillRect(this.x * Point.SIZE, this.y * Point.SIZE, Point.SIZE, Point.SIZE);
        }
        else {
            ctx.strokeRect(this.x * Point.SIZE, this.y * Point.SIZE, Point.SIZE, Point.SIZE);
        }
    };
    Point.SIZE = 20; // Размер в пикселях минимальной точки в игре
    return Point;
}());
exports.default = Point;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var eColor;
(function (eColor) {
    eColor["WHITE"] = "#FFFFFF";
    eColor["BLUE"] = "#3F51B5";
    eColor["RED"] = "#F44336";
    eColor["GREEN"] = "#00BCD4";
    eColor["YELLOW"] = "#FFC107";
})(eColor || (eColor = {}));
exports.default = eColor;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var eDirection;
(function (eDirection) {
    eDirection[eDirection["LEFT"] = 0] = "LEFT";
    eDirection[eDirection["UP"] = 1] = "UP";
    eDirection[eDirection["RIGHT"] = 2] = "RIGHT";
    eDirection[eDirection["DOWN"] = 3] = "DOWN";
})(eDirection || (eDirection = {}));
exports.default = eDirection;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = __webpack_require__(4);
window.onload = function () {
    var game = new Game_1.default();
    game.init();
    game.start();
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Screen_1 = __webpack_require__(5);
var Field_1 = __webpack_require__(6);
var Snake_1 = __webpack_require__(7);
var FoodCreator_1 = __webpack_require__(9);
var Game = /** @class */ (function () {
    function Game() {
        this.screen = null;
        this.field = null;
        this.snake = null;
        this.speed = 100;
        this.food = null;
        this.foodCreator = null;
        this.screen = new Screen_1.default();
        this.field = new Field_1.default(20, 20);
        this.snake = new Snake_1.default();
        this.foodCreator = new FoodCreator_1.default(this.field);
        this.food = this.foodCreator.create();
    }
    Game.prototype.init = function () {
        this.screen.addObject(this.field);
        this.screen.addObject(this.snake);
        this.screen.addObject(this.food);
    };
    Game.prototype.start = function () {
        setInterval(this.mainLoop.bind(this), this.speed);
    };
    Game.prototype.mainLoop = function () {
        if (this.snake.isEatSelf()) {
            return;
        }
        if (this.snake.eat(this.food)) {
            this.food.setNewPosition(this.foodCreator.create());
        }
        else {
            this.snake.move();
        }
        if (!this.field.isInBoundary(this.snake.body[0])) {
            return;
        }
        this.screen.draw();
    };
    return Game;
}());
exports.default = Game;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Point_1 = __webpack_require__(0);
var eColor_1 = __webpack_require__(1);
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


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Point_1 = __webpack_require__(0);
var eDirection_1 = __webpack_require__(2);
var eColor_1 = __webpack_require__(1);
var Direction_1 = __webpack_require__(8);
var Snake = /** @class */ (function () {
    function Snake(size, direction, position) {
        if (size === void 0) { size = 5; }
        if (direction === void 0) { direction = new Direction_1.default(eDirection_1.default.DOWN); }
        if (position === void 0) { position = new Point_1.default(5, 5); }
        this.body = [];
        this.BODY_COLOR = eColor_1.default.BLUE;
        this.HEAD_COLOR = eColor_1.default.RED;
        this.direction = direction;
        this.position = position;
        this.init(size);
    }
    Snake.prototype.init = function (size) {
        var _this = this;
        switch (this.direction.value) {
            case eDirection_1.default.LEFT:
                for (var i = 0; i < size; i++) {
                    this.body.push(new Point_1.default(this.position.x + i, this.position.y));
                }
                break;
            case eDirection_1.default.RIGHT:
                for (var i = 0; i < size; i++) {
                    this.body.push(new Point_1.default(this.position.x - i, this.position.y));
                }
                break;
            case eDirection_1.default.UP:
                for (var i = 0; i < size; i++) {
                    this.body.push(new Point_1.default(this.position.x, this.position.y + i));
                }
                break;
            case eDirection_1.default.DOWN:
                for (var i = 0; i < size; i++) {
                    this.body.push(new Point_1.default(this.position.x, this.position.y - i));
                }
                break;
            default:
                console.error('Ошибка инициализации змейки');
                break;
        }
        window.addEventListener('keydown', function (event) {
            event.preventDefault();
            switch (event.key) {
                case 'ArrowUp':
                    _this.direction.setValue(eDirection_1.default.UP);
                    break;
                case 'ArrowDown':
                    _this.direction.setValue(eDirection_1.default.DOWN);
                    break;
                case 'ArrowLeft':
                    _this.direction.setValue(eDirection_1.default.LEFT);
                    break;
                case 'ArrowRight':
                    _this.direction.setValue(eDirection_1.default.RIGHT);
                    break;
            }
        });
    };
    Snake.prototype.move = function () {
        this.position.move(this.direction.value);
        for (var i = this.body.length - 1; i > 0; i--) {
            this.body[i].setNewPosition(this.body[i - 1]);
        }
        this.body[0].move(this.direction.value);
    };
    Snake.prototype.eat = function (food) {
        if (this.body[0].isOverlap(food)) {
            var oldPosition = this.body[this.body.length - 1];
            this.move();
            this.body.push(new Point_1.default(oldPosition.x, oldPosition.y));
            return true;
        }
        return false;
    };
    Snake.prototype.isEatSelf = function () {
        var head = this.body[0];
        for (var i = 1; i < this.body.length; i++) {
            if (head.isOverlap(this.body[i])) {
                return true;
            }
        }
        return false;
    };
    Snake.prototype.draw = function (ctx) {
        var _this = this;
        ctx.fillStyle = this.HEAD_COLOR;
        this.body.forEach(function (point) {
            if (point.x != _this.position.x ||
                point.y != _this.position.y) {
                ctx.fillStyle = _this.BODY_COLOR;
            }
            point.draw(ctx);
        });
    };
    return Snake;
}());
exports.default = Snake;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Direction = /** @class */ (function () {
    function Direction(value) {
        this.value = value;
    }
    Direction.prototype.isOpposite = function (direction) {
        if (Math.abs(this.value - direction) == 2) {
            return true;
        }
        return false;
    };
    Direction.prototype.setValue = function (newDirection) {
        if (this.value == newDirection) {
            return false;
        }
        if (this.isOpposite(newDirection)) {
            return false;
        }
        this.value = newDirection;
        return true;
    };
    return Direction;
}());
exports.default = Direction;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Food_1 = __webpack_require__(10);
var FoodCreator = /** @class */ (function () {
    function FoodCreator(field) {
        this.maxWidth = field.width;
        this.maxHeight = field.height;
        console.log('field size');
        console.log(this.maxWidth);
    }
    FoodCreator.prototype.rand = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    FoodCreator.prototype.create = function () {
        return new Food_1.default(this.rand(0, this.maxWidth - 1), this.rand(0, this.maxHeight - 1));
    };
    return FoodCreator;
}());
exports.default = FoodCreator;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

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
var Point_1 = __webpack_require__(0);
var eColor_1 = __webpack_require__(1);
var Food = /** @class */ (function (_super) {
    __extends(Food, _super);
    function Food(x, y) {
        return _super.call(this, x, y) || this;
    }
    Food.prototype.draw = function (ctx) {
        ctx.fillStyle = eColor_1.default.YELLOW;
        _super.prototype.draw.call(this, ctx);
    };
    return Food;
}(Point_1.default));
exports.default = Food;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWRmNzU1NTA5NGQxMmE4YjBmYzYiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9Qb2ludC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9lbnVtcy9lQ29sb3IuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZW51bXMvZURpcmVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jbGFzc2VzL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9TY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9GaWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jbGFzc2VzL1NuYWtlLmpzIiwid2VicGFjazovLy8uL2pzL2NsYXNzZXMvRGlyZWN0aW9uLmpzIiwid2VicGFjazovLy8uL2pzL2NsYXNzZXMvRm9vZENyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9Gb29kLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsWUFBWTtBQUM1QztB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QUNyR0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7O0FDeEJBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDbkYseUJBQXlCLHVEQUF1RDtBQUNoRjtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNELDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxZGY3NTU1MDk0ZDEyYThiMGZjNiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGVEaXJlY3Rpb25fMSA9IHJlcXVpcmUoXCIuLi9lbnVtcy9lRGlyZWN0aW9uXCIpO1xudmFyIFBvaW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFBvaW50KHgsIHkpIHtcbiAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG4gICAgUG9pbnQucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiAoZGlyZWN0aW9uLCBvZmZzZXQpIHtcbiAgICAgICAgaWYgKG9mZnNldCA9PT0gdm9pZCAwKSB7IG9mZnNldCA9IDE7IH1cbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgZURpcmVjdGlvbl8xLmRlZmF1bHQuUklHSFQ6XG4gICAgICAgICAgICAgICAgdGhpcy54ICs9IG9mZnNldDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgZURpcmVjdGlvbl8xLmRlZmF1bHQuTEVGVDpcbiAgICAgICAgICAgICAgICB0aGlzLnggLT0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBlRGlyZWN0aW9uXzEuZGVmYXVsdC5VUDpcbiAgICAgICAgICAgICAgICB0aGlzLnkgLT0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBlRGlyZWN0aW9uXzEuZGVmYXVsdC5ET1dOOlxuICAgICAgICAgICAgICAgIHRoaXMueSArPSBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFBvaW50LnByb3RvdHlwZS5zZXROZXdQb3NpdGlvbiA9IGZ1bmN0aW9uIChuZXdQb3NpdGlvbikge1xuICAgICAgICB0aGlzLnggPSBuZXdQb3NpdGlvbi54O1xuICAgICAgICB0aGlzLnkgPSBuZXdQb3NpdGlvbi55O1xuICAgIH07XG4gICAgUG9pbnQucHJvdG90eXBlLmlzT3ZlcmxhcCA9IGZ1bmN0aW9uIChwb2ludCkge1xuICAgICAgICBpZiAodGhpcy54ID09IHBvaW50LnggJiZcbiAgICAgICAgICAgIHRoaXMueSA9PSBwb2ludC55KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBQb2ludC5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIChjdHgsIHR5cGUpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09IHZvaWQgMCkgeyB0eXBlID0gJ2ZpbGwnOyB9XG4gICAgICAgIGlmICh0eXBlID09ICdmaWxsJykge1xuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMueCAqIFBvaW50LlNJWkUsIHRoaXMueSAqIFBvaW50LlNJWkUsIFBvaW50LlNJWkUsIFBvaW50LlNJWkUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY3R4LnN0cm9rZVJlY3QodGhpcy54ICogUG9pbnQuU0laRSwgdGhpcy55ICogUG9pbnQuU0laRSwgUG9pbnQuU0laRSwgUG9pbnQuU0laRSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFBvaW50LlNJWkUgPSAyMDsgLy8g0KDQsNC30LzQtdGAINCyINC/0LjQutGB0LXQu9GP0YUg0LzQuNC90LjQvNCw0LvRjNC90L7QuSDRgtC+0YfQutC4INCyINC40LPRgNC1XG4gICAgcmV0dXJuIFBvaW50O1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFBvaW50O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9jbGFzc2VzL1BvaW50LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGVDb2xvcjtcbihmdW5jdGlvbiAoZUNvbG9yKSB7XG4gICAgZUNvbG9yW1wiV0hJVEVcIl0gPSBcIiNGRkZGRkZcIjtcbiAgICBlQ29sb3JbXCJCTFVFXCJdID0gXCIjM0Y1MUI1XCI7XG4gICAgZUNvbG9yW1wiUkVEXCJdID0gXCIjRjQ0MzM2XCI7XG4gICAgZUNvbG9yW1wiR1JFRU5cIl0gPSBcIiMwMEJDRDRcIjtcbiAgICBlQ29sb3JbXCJZRUxMT1dcIl0gPSBcIiNGRkMxMDdcIjtcbn0pKGVDb2xvciB8fCAoZUNvbG9yID0ge30pKTtcbmV4cG9ydHMuZGVmYXVsdCA9IGVDb2xvcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvZW51bXMvZUNvbG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGVEaXJlY3Rpb247XG4oZnVuY3Rpb24gKGVEaXJlY3Rpb24pIHtcbiAgICBlRGlyZWN0aW9uW2VEaXJlY3Rpb25bXCJMRUZUXCJdID0gMF0gPSBcIkxFRlRcIjtcbiAgICBlRGlyZWN0aW9uW2VEaXJlY3Rpb25bXCJVUFwiXSA9IDFdID0gXCJVUFwiO1xuICAgIGVEaXJlY3Rpb25bZURpcmVjdGlvbltcIlJJR0hUXCJdID0gMl0gPSBcIlJJR0hUXCI7XG4gICAgZURpcmVjdGlvbltlRGlyZWN0aW9uW1wiRE9XTlwiXSA9IDNdID0gXCJET1dOXCI7XG59KShlRGlyZWN0aW9uIHx8IChlRGlyZWN0aW9uID0ge30pKTtcbmV4cG9ydHMuZGVmYXVsdCA9IGVEaXJlY3Rpb247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2VudW1zL2VEaXJlY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgR2FtZV8xID0gcmVxdWlyZShcIi4vY2xhc3Nlcy9HYW1lXCIpO1xud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZ2FtZSA9IG5ldyBHYW1lXzEuZGVmYXVsdCgpO1xuICAgIGdhbWUuaW5pdCgpO1xuICAgIGdhbWUuc3RhcnQoKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFNjcmVlbl8xID0gcmVxdWlyZShcIi4vU2NyZWVuXCIpO1xudmFyIEZpZWxkXzEgPSByZXF1aXJlKFwiLi9GaWVsZFwiKTtcbnZhciBTbmFrZV8xID0gcmVxdWlyZShcIi4vU25ha2VcIik7XG52YXIgRm9vZENyZWF0b3JfMSA9IHJlcXVpcmUoXCIuL0Zvb2RDcmVhdG9yXCIpO1xudmFyIEdhbWUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gR2FtZSgpIHtcbiAgICAgICAgdGhpcy5zY3JlZW4gPSBudWxsO1xuICAgICAgICB0aGlzLmZpZWxkID0gbnVsbDtcbiAgICAgICAgdGhpcy5zbmFrZSA9IG51bGw7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAxMDA7XG4gICAgICAgIHRoaXMuZm9vZCA9IG51bGw7XG4gICAgICAgIHRoaXMuZm9vZENyZWF0b3IgPSBudWxsO1xuICAgICAgICB0aGlzLnNjcmVlbiA9IG5ldyBTY3JlZW5fMS5kZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuZmllbGQgPSBuZXcgRmllbGRfMS5kZWZhdWx0KDIwLCAyMCk7XG4gICAgICAgIHRoaXMuc25ha2UgPSBuZXcgU25ha2VfMS5kZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuZm9vZENyZWF0b3IgPSBuZXcgRm9vZENyZWF0b3JfMS5kZWZhdWx0KHRoaXMuZmllbGQpO1xuICAgICAgICB0aGlzLmZvb2QgPSB0aGlzLmZvb2RDcmVhdG9yLmNyZWF0ZSgpO1xuICAgIH1cbiAgICBHYW1lLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNjcmVlbi5hZGRPYmplY3QodGhpcy5maWVsZCk7XG4gICAgICAgIHRoaXMuc2NyZWVuLmFkZE9iamVjdCh0aGlzLnNuYWtlKTtcbiAgICAgICAgdGhpcy5zY3JlZW4uYWRkT2JqZWN0KHRoaXMuZm9vZCk7XG4gICAgfTtcbiAgICBHYW1lLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0SW50ZXJ2YWwodGhpcy5tYWluTG9vcC5iaW5kKHRoaXMpLCB0aGlzLnNwZWVkKTtcbiAgICB9O1xuICAgIEdhbWUucHJvdG90eXBlLm1haW5Mb29wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5zbmFrZS5pc0VhdFNlbGYoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNuYWtlLmVhdCh0aGlzLmZvb2QpKSB7XG4gICAgICAgICAgICB0aGlzLmZvb2Quc2V0TmV3UG9zaXRpb24odGhpcy5mb29kQ3JlYXRvci5jcmVhdGUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNuYWtlLm1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuZmllbGQuaXNJbkJvdW5kYXJ5KHRoaXMuc25ha2UuYm9keVswXSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjcmVlbi5kcmF3KCk7XG4gICAgfTtcbiAgICByZXR1cm4gR2FtZTtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBHYW1lO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9jbGFzc2VzL0dhbWUuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU2NyZWVuID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNjcmVlbigpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBudWxsO1xuICAgICAgICB0aGlzLmN0eCA9IG51bGw7XG4gICAgICAgIHRoaXMudG9EcmF3T2JqZWN0cyA9IFtdO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSAxMDAwO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSAxMDAwO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgfVxuICAgIFNjcmVlbi5wcm90b3R5cGUuYWRkT2JqZWN0ID0gZnVuY3Rpb24gKGRyYXdhYmxlKSB7XG4gICAgICAgIHRoaXMudG9EcmF3T2JqZWN0cy5wdXNoKGRyYXdhYmxlKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50b0RyYXdPYmplY3RzKTtcbiAgICB9O1xuICAgIFNjcmVlbi5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy50b0RyYXdPYmplY3RzLmZvckVhY2goZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgICAgICAgb2JqZWN0LmRyYXcoX3RoaXMuY3R4KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gU2NyZWVuO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFNjcmVlbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvY2xhc3Nlcy9TY3JlZW4uanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUG9pbnRfMSA9IHJlcXVpcmUoXCIuL1BvaW50XCIpO1xudmFyIGVDb2xvcl8xID0gcmVxdWlyZShcIi4uL2VudW1zL2VDb2xvclwiKTtcbnZhciBGaWVsZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBGaWVsZCh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMud2lkdGggPSAwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDA7XG4gICAgICAgIHRoaXMuZmllbGRzID0gW107XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgICBGaWVsZC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgcm93X2kgPSAwOyByb3dfaSA8IHRoaXMud2lkdGg7IHJvd19pKyspIHtcbiAgICAgICAgICAgIHRoaXMuZmllbGRzW3Jvd19pXSA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgY29sX2kgPSAwOyBjb2xfaSA8IHRoaXMuaGVpZ2h0OyBjb2xfaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZHNbcm93X2ldW2NvbF9pXSA9IG5ldyBQb2ludF8xLmRlZmF1bHQocm93X2ksIGNvbF9pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgRmllbGQucHJvdG90eXBlLmlzSW5Cb3VuZGFyeSA9IGZ1bmN0aW9uIChwb2ludCkge1xuICAgICAgICByZXR1cm4gcG9pbnQueCA8IHRoaXMud2lkdGggJiZcbiAgICAgICAgICAgIHBvaW50LnkgPCB0aGlzLmhlaWdodCAmJlxuICAgICAgICAgICAgcG9pbnQueCA+PSAwICYmXG4gICAgICAgICAgICBwb2ludC55ID49IDA7XG4gICAgfTtcbiAgICBGaWVsZC5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIChjdHgpIHtcbiAgICAgICAgdGhpcy5maWVsZHMuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgICByb3cuZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBlQ29sb3JfMS5kZWZhdWx0LldISVRFO1xuICAgICAgICAgICAgICAgIGZpZWxkLmRyYXcoY3R4LCAnc3Ryb2tlJyk7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGVDb2xvcl8xLmRlZmF1bHQuR1JFRU47XG4gICAgICAgICAgICAgICAgZmllbGQuZHJhdyhjdHgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEZpZWxkO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEZpZWxkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9jbGFzc2VzL0ZpZWxkLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFBvaW50XzEgPSByZXF1aXJlKFwiLi9Qb2ludFwiKTtcbnZhciBlRGlyZWN0aW9uXzEgPSByZXF1aXJlKFwiLi4vZW51bXMvZURpcmVjdGlvblwiKTtcbnZhciBlQ29sb3JfMSA9IHJlcXVpcmUoXCIuLi9lbnVtcy9lQ29sb3JcIik7XG52YXIgRGlyZWN0aW9uXzEgPSByZXF1aXJlKFwiLi9EaXJlY3Rpb25cIik7XG52YXIgU25ha2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU25ha2Uoc2l6ZSwgZGlyZWN0aW9uLCBwb3NpdGlvbikge1xuICAgICAgICBpZiAoc2l6ZSA9PT0gdm9pZCAwKSB7IHNpemUgPSA1OyB9XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IHZvaWQgMCkgeyBkaXJlY3Rpb24gPSBuZXcgRGlyZWN0aW9uXzEuZGVmYXVsdChlRGlyZWN0aW9uXzEuZGVmYXVsdC5ET1dOKTsgfVxuICAgICAgICBpZiAocG9zaXRpb24gPT09IHZvaWQgMCkgeyBwb3NpdGlvbiA9IG5ldyBQb2ludF8xLmRlZmF1bHQoNSwgNSk7IH1cbiAgICAgICAgdGhpcy5ib2R5ID0gW107XG4gICAgICAgIHRoaXMuQk9EWV9DT0xPUiA9IGVDb2xvcl8xLmRlZmF1bHQuQkxVRTtcbiAgICAgICAgdGhpcy5IRUFEX0NPTE9SID0gZUNvbG9yXzEuZGVmYXVsdC5SRUQ7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMuaW5pdChzaXplKTtcbiAgICB9XG4gICAgU25ha2UucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBzd2l0Y2ggKHRoaXMuZGlyZWN0aW9uLnZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIGVEaXJlY3Rpb25fMS5kZWZhdWx0LkxFRlQ6XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5LnB1c2gobmV3IFBvaW50XzEuZGVmYXVsdCh0aGlzLnBvc2l0aW9uLnggKyBpLCB0aGlzLnBvc2l0aW9uLnkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGVEaXJlY3Rpb25fMS5kZWZhdWx0LlJJR0hUOlxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keS5wdXNoKG5ldyBQb2ludF8xLmRlZmF1bHQodGhpcy5wb3NpdGlvbi54IC0gaSwgdGhpcy5wb3NpdGlvbi55KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBlRGlyZWN0aW9uXzEuZGVmYXVsdC5VUDpcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHkucHVzaChuZXcgUG9pbnRfMS5kZWZhdWx0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55ICsgaSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgZURpcmVjdGlvbl8xLmRlZmF1bHQuRE9XTjpcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHkucHVzaChuZXcgUG9pbnRfMS5kZWZhdWx0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55IC0gaSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign0J7RiNC40LHQutCwINC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNC4INC30LzQtdC50LrQuCcpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZGlyZWN0aW9uLnNldFZhbHVlKGVEaXJlY3Rpb25fMS5kZWZhdWx0LlVQKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZGlyZWN0aW9uLnNldFZhbHVlKGVEaXJlY3Rpb25fMS5kZWZhdWx0LkRPV04pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5kaXJlY3Rpb24uc2V0VmFsdWUoZURpcmVjdGlvbl8xLmRlZmF1bHQuTEVGVCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5kaXJlY3Rpb24uc2V0VmFsdWUoZURpcmVjdGlvbl8xLmRlZmF1bHQuUklHSFQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTbmFrZS5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5tb3ZlKHRoaXMuZGlyZWN0aW9uLnZhbHVlKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMuYm9keS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgICB0aGlzLmJvZHlbaV0uc2V0TmV3UG9zaXRpb24odGhpcy5ib2R5W2kgLSAxXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ib2R5WzBdLm1vdmUodGhpcy5kaXJlY3Rpb24udmFsdWUpO1xuICAgIH07XG4gICAgU25ha2UucHJvdG90eXBlLmVhdCA9IGZ1bmN0aW9uIChmb29kKSB7XG4gICAgICAgIGlmICh0aGlzLmJvZHlbMF0uaXNPdmVybGFwKGZvb2QpKSB7XG4gICAgICAgICAgICB2YXIgb2xkUG9zaXRpb24gPSB0aGlzLmJvZHlbdGhpcy5ib2R5Lmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgdGhpcy5tb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLmJvZHkucHVzaChuZXcgUG9pbnRfMS5kZWZhdWx0KG9sZFBvc2l0aW9uLngsIG9sZFBvc2l0aW9uLnkpKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIFNuYWtlLnByb3RvdHlwZS5pc0VhdFNlbGYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBoZWFkID0gdGhpcy5ib2R5WzBdO1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHRoaXMuYm9keS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGhlYWQuaXNPdmVybGFwKHRoaXMuYm9keVtpXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBTbmFrZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIChjdHgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuSEVBRF9DT0xPUjtcbiAgICAgICAgdGhpcy5ib2R5LmZvckVhY2goZnVuY3Rpb24gKHBvaW50KSB7XG4gICAgICAgICAgICBpZiAocG9pbnQueCAhPSBfdGhpcy5wb3NpdGlvbi54IHx8XG4gICAgICAgICAgICAgICAgcG9pbnQueSAhPSBfdGhpcy5wb3NpdGlvbi55KSB7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IF90aGlzLkJPRFlfQ09MT1I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb2ludC5kcmF3KGN0eCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFNuYWtlO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFNuYWtlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9jbGFzc2VzL1NuYWtlLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIERpcmVjdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEaXJlY3Rpb24odmFsdWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBEaXJlY3Rpb24ucHJvdG90eXBlLmlzT3Bwb3NpdGUgPSBmdW5jdGlvbiAoZGlyZWN0aW9uKSB7XG4gICAgICAgIGlmIChNYXRoLmFicyh0aGlzLnZhbHVlIC0gZGlyZWN0aW9uKSA9PSAyKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBEaXJlY3Rpb24ucHJvdG90eXBlLnNldFZhbHVlID0gZnVuY3Rpb24gKG5ld0RpcmVjdGlvbikge1xuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PSBuZXdEaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc09wcG9zaXRlKG5ld0RpcmVjdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZhbHVlID0gbmV3RGlyZWN0aW9uO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIHJldHVybiBEaXJlY3Rpb247XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gRGlyZWN0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9jbGFzc2VzL0RpcmVjdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBGb29kXzEgPSByZXF1aXJlKFwiLi9Gb29kXCIpO1xudmFyIEZvb2RDcmVhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZvb2RDcmVhdG9yKGZpZWxkKSB7XG4gICAgICAgIHRoaXMubWF4V2lkdGggPSBmaWVsZC53aWR0aDtcbiAgICAgICAgdGhpcy5tYXhIZWlnaHQgPSBmaWVsZC5oZWlnaHQ7XG4gICAgICAgIGNvbnNvbGUubG9nKCdmaWVsZCBzaXplJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubWF4V2lkdGgpO1xuICAgIH1cbiAgICBGb29kQ3JlYXRvci5wcm90b3R5cGUucmFuZCA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbiAgICB9O1xuICAgIEZvb2RDcmVhdG9yLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgRm9vZF8xLmRlZmF1bHQodGhpcy5yYW5kKDAsIHRoaXMubWF4V2lkdGggLSAxKSwgdGhpcy5yYW5kKDAsIHRoaXMubWF4SGVpZ2h0IC0gMSkpO1xuICAgIH07XG4gICAgcmV0dXJuIEZvb2RDcmVhdG9yO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEZvb2RDcmVhdG9yO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9jbGFzc2VzL0Zvb2RDcmVhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUG9pbnRfMSA9IHJlcXVpcmUoXCIuL1BvaW50XCIpO1xudmFyIGVDb2xvcl8xID0gcmVxdWlyZShcIi4uL2VudW1zL2VDb2xvclwiKTtcbnZhciBGb29kID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhGb29kLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEZvb2QoeCwgeSkge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgeCwgeSkgfHwgdGhpcztcbiAgICB9XG4gICAgRm9vZC5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIChjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGVDb2xvcl8xLmRlZmF1bHQuWUVMTE9XO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmRyYXcuY2FsbCh0aGlzLCBjdHgpO1xuICAgIH07XG4gICAgcmV0dXJuIEZvb2Q7XG59KFBvaW50XzEuZGVmYXVsdCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gRm9vZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvY2xhc3Nlcy9Gb29kLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9