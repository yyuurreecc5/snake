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
        this.foodCreator = new FoodCreator_1.default(this.field, this.snake);
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
        if (!this.field.isInBoundary(this.snake.getHead())) {
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
    Snake.prototype.getHead = function () {
        return this.body[0] || null;
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
    Snake.prototype.isOverlap = function (point) {
        return this.body.some(function (bodyPoint) {
            if (bodyPoint.isOverlap(point)) {
                return true;
            }
            return false;
        });
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
var math_helper_1 = __webpack_require__(12);
var FoodCreator = /** @class */ (function () {
    function FoodCreator(field, snake) {
        this.maxWidth = field.width;
        this.maxHeight = field.height;
        this.snake = snake;
    }
    FoodCreator.prototype.create = function () {
        var newFood = null;
        while (!newFood) {
            newFood = this.tryCreate();
        }
        return newFood;
    };
    FoodCreator.prototype.tryCreate = function () {
        var newFood = new Food_1.default(math_helper_1.default.getRandomInt(0, this.maxWidth - 1), math_helper_1.default.getRandomInt(0, this.maxHeight - 1));
        if (this.snake.isOverlap(newFood)) {
            return null;
        }
        return newFood;
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


/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Возвращает случайное целое число между min (включительно) и max (не включая max)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
exports.default = {
    getRandomInt: getRandomInt
};


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2I2ZjRiYWIxY2JiMzYyNmM3YzEiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9Qb2ludC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9lbnVtcy9lQ29sb3IuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZW51bXMvZURpcmVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jbGFzc2VzL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9TY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9GaWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jbGFzc2VzL1NuYWtlLmpzIiwid2VicGFjazovLy8uL2pzL2NsYXNzZXMvRGlyZWN0aW9uLmpzIiwid2VicGFjazovLy8uL2pzL2NsYXNzZXMvRm9vZENyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9Gb29kLmpzIiwid2VicGFjazovLy8uL2pzL2hlbHBlcnMvbWF0aC1oZWxwZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxZQUFZO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixlQUFlO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7OztBQ2xEQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyx3QkFBd0I7QUFDekI7Ozs7Ozs7O0FDVkE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdDQUFnQztBQUNqQzs7Ozs7Ozs7QUNUQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNQQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7QUM3Q0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7QUN4QkE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsb0JBQW9CO0FBQy9DO0FBQ0EsK0JBQStCLHFCQUFxQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7OztBQ3ZDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixVQUFVO0FBQ3hDLG1DQUFtQyxnRUFBZ0U7QUFDbkcsa0NBQWtDLHNDQUFzQztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFVBQVU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsVUFBVTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixVQUFVO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFVBQVU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsT0FBTztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7OztBQ2hIQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7QUN4QkE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDbkYseUJBQXlCLHVEQUF1RDtBQUNoRjtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNELDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7O0FDekJBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgN2I2ZjRiYWIxY2JiMzYyNmM3YzEiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBlRGlyZWN0aW9uXzEgPSByZXF1aXJlKFwiLi4vZW51bXMvZURpcmVjdGlvblwiKTtcbnZhciBQb2ludCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQb2ludCh4LCB5KSB7XG4gICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgfVxuICAgIFBvaW50LnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24gKGRpcmVjdGlvbiwgb2Zmc2V0KSB7XG4gICAgICAgIGlmIChvZmZzZXQgPT09IHZvaWQgMCkgeyBvZmZzZXQgPSAxOyB9XG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIGVEaXJlY3Rpb25fMS5kZWZhdWx0LlJJR0hUOlxuICAgICAgICAgICAgICAgIHRoaXMueCArPSBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGVEaXJlY3Rpb25fMS5kZWZhdWx0LkxFRlQ6XG4gICAgICAgICAgICAgICAgdGhpcy54IC09IG9mZnNldDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgZURpcmVjdGlvbl8xLmRlZmF1bHQuVVA6XG4gICAgICAgICAgICAgICAgdGhpcy55IC09IG9mZnNldDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgZURpcmVjdGlvbl8xLmRlZmF1bHQuRE9XTjpcbiAgICAgICAgICAgICAgICB0aGlzLnkgKz0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBQb2ludC5wcm90b3R5cGUuc2V0TmV3UG9zaXRpb24gPSBmdW5jdGlvbiAobmV3UG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy54ID0gbmV3UG9zaXRpb24ueDtcbiAgICAgICAgdGhpcy55ID0gbmV3UG9zaXRpb24ueTtcbiAgICB9O1xuICAgIFBvaW50LnByb3RvdHlwZS5pc092ZXJsYXAgPSBmdW5jdGlvbiAocG9pbnQpIHtcbiAgICAgICAgaWYgKHRoaXMueCA9PSBwb2ludC54ICYmXG4gICAgICAgICAgICB0aGlzLnkgPT0gcG9pbnQueSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgUG9pbnQucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoY3R4LCB0eXBlKSB7XG4gICAgICAgIGlmICh0eXBlID09PSB2b2lkIDApIHsgdHlwZSA9ICdmaWxsJzsgfVxuICAgICAgICBpZiAodHlwZSA9PSAnZmlsbCcpIHtcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnggKiBQb2ludC5TSVpFLCB0aGlzLnkgKiBQb2ludC5TSVpFLCBQb2ludC5TSVpFLCBQb2ludC5TSVpFKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGN0eC5zdHJva2VSZWN0KHRoaXMueCAqIFBvaW50LlNJWkUsIHRoaXMueSAqIFBvaW50LlNJWkUsIFBvaW50LlNJWkUsIFBvaW50LlNJWkUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBQb2ludC5TSVpFID0gMjA7IC8vINCg0LDQt9C80LXRgCDQsiDQv9C40LrRgdC10LvRj9GFINC80LjQvdC40LzQsNC70YzQvdC+0Lkg0YLQvtGH0LrQuCDQsiDQuNCz0YDQtVxuICAgIHJldHVybiBQb2ludDtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBQb2ludDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvY2xhc3Nlcy9Qb2ludC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBlQ29sb3I7XG4oZnVuY3Rpb24gKGVDb2xvcikge1xuICAgIGVDb2xvcltcIldISVRFXCJdID0gXCIjRkZGRkZGXCI7XG4gICAgZUNvbG9yW1wiQkxVRVwiXSA9IFwiIzNGNTFCNVwiO1xuICAgIGVDb2xvcltcIlJFRFwiXSA9IFwiI0Y0NDMzNlwiO1xuICAgIGVDb2xvcltcIkdSRUVOXCJdID0gXCIjMDBCQ0Q0XCI7XG4gICAgZUNvbG9yW1wiWUVMTE9XXCJdID0gXCIjRkZDMTA3XCI7XG59KShlQ29sb3IgfHwgKGVDb2xvciA9IHt9KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBlQ29sb3I7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2VudW1zL2VDb2xvci5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBlRGlyZWN0aW9uO1xuKGZ1bmN0aW9uIChlRGlyZWN0aW9uKSB7XG4gICAgZURpcmVjdGlvbltlRGlyZWN0aW9uW1wiTEVGVFwiXSA9IDBdID0gXCJMRUZUXCI7XG4gICAgZURpcmVjdGlvbltlRGlyZWN0aW9uW1wiVVBcIl0gPSAxXSA9IFwiVVBcIjtcbiAgICBlRGlyZWN0aW9uW2VEaXJlY3Rpb25bXCJSSUdIVFwiXSA9IDJdID0gXCJSSUdIVFwiO1xuICAgIGVEaXJlY3Rpb25bZURpcmVjdGlvbltcIkRPV05cIl0gPSAzXSA9IFwiRE9XTlwiO1xufSkoZURpcmVjdGlvbiB8fCAoZURpcmVjdGlvbiA9IHt9KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBlRGlyZWN0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9lbnVtcy9lRGlyZWN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEdhbWVfMSA9IHJlcXVpcmUoXCIuL2NsYXNzZXMvR2FtZVwiKTtcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGdhbWUgPSBuZXcgR2FtZV8xLmRlZmF1bHQoKTtcbiAgICBnYW1lLmluaXQoKTtcbiAgICBnYW1lLnN0YXJ0KCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTY3JlZW5fMSA9IHJlcXVpcmUoXCIuL1NjcmVlblwiKTtcbnZhciBGaWVsZF8xID0gcmVxdWlyZShcIi4vRmllbGRcIik7XG52YXIgU25ha2VfMSA9IHJlcXVpcmUoXCIuL1NuYWtlXCIpO1xudmFyIEZvb2RDcmVhdG9yXzEgPSByZXF1aXJlKFwiLi9Gb29kQ3JlYXRvclwiKTtcbnZhciBHYW1lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEdhbWUoKSB7XG4gICAgICAgIHRoaXMuc2NyZWVuID0gbnVsbDtcbiAgICAgICAgdGhpcy5maWVsZCA9IG51bGw7XG4gICAgICAgIHRoaXMuc25ha2UgPSBudWxsO1xuICAgICAgICB0aGlzLnNwZWVkID0gMTAwO1xuICAgICAgICB0aGlzLmZvb2QgPSBudWxsO1xuICAgICAgICB0aGlzLmZvb2RDcmVhdG9yID0gbnVsbDtcbiAgICAgICAgdGhpcy5zY3JlZW4gPSBuZXcgU2NyZWVuXzEuZGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmZpZWxkID0gbmV3IEZpZWxkXzEuZGVmYXVsdCgyMCwgMjApO1xuICAgICAgICB0aGlzLnNuYWtlID0gbmV3IFNuYWtlXzEuZGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmZvb2RDcmVhdG9yID0gbmV3IEZvb2RDcmVhdG9yXzEuZGVmYXVsdCh0aGlzLmZpZWxkLCB0aGlzLnNuYWtlKTtcbiAgICAgICAgdGhpcy5mb29kID0gdGhpcy5mb29kQ3JlYXRvci5jcmVhdGUoKTtcbiAgICB9XG4gICAgR2FtZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zY3JlZW4uYWRkT2JqZWN0KHRoaXMuZmllbGQpO1xuICAgICAgICB0aGlzLnNjcmVlbi5hZGRPYmplY3QodGhpcy5zbmFrZSk7XG4gICAgICAgIHRoaXMuc2NyZWVuLmFkZE9iamVjdCh0aGlzLmZvb2QpO1xuICAgIH07XG4gICAgR2FtZS5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldEludGVydmFsKHRoaXMubWFpbkxvb3AuYmluZCh0aGlzKSwgdGhpcy5zcGVlZCk7XG4gICAgfTtcbiAgICBHYW1lLnByb3RvdHlwZS5tYWluTG9vcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuc25ha2UuaXNFYXRTZWxmKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zbmFrZS5lYXQodGhpcy5mb29kKSkge1xuICAgICAgICAgICAgdGhpcy5mb29kLnNldE5ld1Bvc2l0aW9uKHRoaXMuZm9vZENyZWF0b3IuY3JlYXRlKCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zbmFrZS5tb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmZpZWxkLmlzSW5Cb3VuZGFyeSh0aGlzLnNuYWtlLmdldEhlYWQoKSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjcmVlbi5kcmF3KCk7XG4gICAgfTtcbiAgICByZXR1cm4gR2FtZTtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBHYW1lO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9jbGFzc2VzL0dhbWUuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU2NyZWVuID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNjcmVlbigpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBudWxsO1xuICAgICAgICB0aGlzLmN0eCA9IG51bGw7XG4gICAgICAgIHRoaXMudG9EcmF3T2JqZWN0cyA9IFtdO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSAxMDAwO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSAxMDAwO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgfVxuICAgIFNjcmVlbi5wcm90b3R5cGUuYWRkT2JqZWN0ID0gZnVuY3Rpb24gKGRyYXdhYmxlKSB7XG4gICAgICAgIHRoaXMudG9EcmF3T2JqZWN0cy5wdXNoKGRyYXdhYmxlKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50b0RyYXdPYmplY3RzKTtcbiAgICB9O1xuICAgIFNjcmVlbi5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy50b0RyYXdPYmplY3RzLmZvckVhY2goZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgICAgICAgb2JqZWN0LmRyYXcoX3RoaXMuY3R4KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gU2NyZWVuO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFNjcmVlbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvY2xhc3Nlcy9TY3JlZW4uanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUG9pbnRfMSA9IHJlcXVpcmUoXCIuL1BvaW50XCIpO1xudmFyIGVDb2xvcl8xID0gcmVxdWlyZShcIi4uL2VudW1zL2VDb2xvclwiKTtcbnZhciBGaWVsZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBGaWVsZCh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMud2lkdGggPSAwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDA7XG4gICAgICAgIHRoaXMuZmllbGRzID0gW107XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgICBGaWVsZC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgcm93X2kgPSAwOyByb3dfaSA8IHRoaXMud2lkdGg7IHJvd19pKyspIHtcbiAgICAgICAgICAgIHRoaXMuZmllbGRzW3Jvd19pXSA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgY29sX2kgPSAwOyBjb2xfaSA8IHRoaXMuaGVpZ2h0OyBjb2xfaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZHNbcm93X2ldW2NvbF9pXSA9IG5ldyBQb2ludF8xLmRlZmF1bHQocm93X2ksIGNvbF9pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgRmllbGQucHJvdG90eXBlLmlzSW5Cb3VuZGFyeSA9IGZ1bmN0aW9uIChwb2ludCkge1xuICAgICAgICByZXR1cm4gcG9pbnQueCA8IHRoaXMud2lkdGggJiZcbiAgICAgICAgICAgIHBvaW50LnkgPCB0aGlzLmhlaWdodCAmJlxuICAgICAgICAgICAgcG9pbnQueCA+PSAwICYmXG4gICAgICAgICAgICBwb2ludC55ID49IDA7XG4gICAgfTtcbiAgICBGaWVsZC5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIChjdHgpIHtcbiAgICAgICAgdGhpcy5maWVsZHMuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgICByb3cuZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBlQ29sb3JfMS5kZWZhdWx0LldISVRFO1xuICAgICAgICAgICAgICAgIGZpZWxkLmRyYXcoY3R4LCAnc3Ryb2tlJyk7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGVDb2xvcl8xLmRlZmF1bHQuR1JFRU47XG4gICAgICAgICAgICAgICAgZmllbGQuZHJhdyhjdHgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEZpZWxkO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEZpZWxkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9jbGFzc2VzL0ZpZWxkLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFBvaW50XzEgPSByZXF1aXJlKFwiLi9Qb2ludFwiKTtcbnZhciBlRGlyZWN0aW9uXzEgPSByZXF1aXJlKFwiLi4vZW51bXMvZURpcmVjdGlvblwiKTtcbnZhciBlQ29sb3JfMSA9IHJlcXVpcmUoXCIuLi9lbnVtcy9lQ29sb3JcIik7XG52YXIgRGlyZWN0aW9uXzEgPSByZXF1aXJlKFwiLi9EaXJlY3Rpb25cIik7XG52YXIgU25ha2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU25ha2Uoc2l6ZSwgZGlyZWN0aW9uLCBwb3NpdGlvbikge1xuICAgICAgICBpZiAoc2l6ZSA9PT0gdm9pZCAwKSB7IHNpemUgPSA1OyB9XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IHZvaWQgMCkgeyBkaXJlY3Rpb24gPSBuZXcgRGlyZWN0aW9uXzEuZGVmYXVsdChlRGlyZWN0aW9uXzEuZGVmYXVsdC5ET1dOKTsgfVxuICAgICAgICBpZiAocG9zaXRpb24gPT09IHZvaWQgMCkgeyBwb3NpdGlvbiA9IG5ldyBQb2ludF8xLmRlZmF1bHQoNSwgNSk7IH1cbiAgICAgICAgdGhpcy5ib2R5ID0gW107XG4gICAgICAgIHRoaXMuQk9EWV9DT0xPUiA9IGVDb2xvcl8xLmRlZmF1bHQuQkxVRTtcbiAgICAgICAgdGhpcy5IRUFEX0NPTE9SID0gZUNvbG9yXzEuZGVmYXVsdC5SRUQ7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMuaW5pdChzaXplKTtcbiAgICB9XG4gICAgU25ha2UucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBzd2l0Y2ggKHRoaXMuZGlyZWN0aW9uLnZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIGVEaXJlY3Rpb25fMS5kZWZhdWx0LkxFRlQ6XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5LnB1c2gobmV3IFBvaW50XzEuZGVmYXVsdCh0aGlzLnBvc2l0aW9uLnggKyBpLCB0aGlzLnBvc2l0aW9uLnkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGVEaXJlY3Rpb25fMS5kZWZhdWx0LlJJR0hUOlxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keS5wdXNoKG5ldyBQb2ludF8xLmRlZmF1bHQodGhpcy5wb3NpdGlvbi54IC0gaSwgdGhpcy5wb3NpdGlvbi55KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBlRGlyZWN0aW9uXzEuZGVmYXVsdC5VUDpcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHkucHVzaChuZXcgUG9pbnRfMS5kZWZhdWx0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55ICsgaSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgZURpcmVjdGlvbl8xLmRlZmF1bHQuRE9XTjpcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHkucHVzaChuZXcgUG9pbnRfMS5kZWZhdWx0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55IC0gaSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign0J7RiNC40LHQutCwINC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNC4INC30LzQtdC50LrQuCcpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZGlyZWN0aW9uLnNldFZhbHVlKGVEaXJlY3Rpb25fMS5kZWZhdWx0LlVQKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZGlyZWN0aW9uLnNldFZhbHVlKGVEaXJlY3Rpb25fMS5kZWZhdWx0LkRPV04pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5kaXJlY3Rpb24uc2V0VmFsdWUoZURpcmVjdGlvbl8xLmRlZmF1bHQuTEVGVCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5kaXJlY3Rpb24uc2V0VmFsdWUoZURpcmVjdGlvbl8xLmRlZmF1bHQuUklHSFQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTbmFrZS5wcm90b3R5cGUuZ2V0SGVhZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9keVswXSB8fCBudWxsO1xuICAgIH07XG4gICAgU25ha2UucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ubW92ZSh0aGlzLmRpcmVjdGlvbi52YWx1ZSk7XG4gICAgICAgIGZvciAodmFyIGkgPSB0aGlzLmJvZHkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgICAgICAgdGhpcy5ib2R5W2ldLnNldE5ld1Bvc2l0aW9uKHRoaXMuYm9keVtpIC0gMV0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm9keVswXS5tb3ZlKHRoaXMuZGlyZWN0aW9uLnZhbHVlKTtcbiAgICB9O1xuICAgIFNuYWtlLnByb3RvdHlwZS5lYXQgPSBmdW5jdGlvbiAoZm9vZCkge1xuICAgICAgICBpZiAodGhpcy5ib2R5WzBdLmlzT3ZlcmxhcChmb29kKSkge1xuICAgICAgICAgICAgdmFyIG9sZFBvc2l0aW9uID0gdGhpcy5ib2R5W3RoaXMuYm9keS5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIHRoaXMubW92ZSgpO1xuICAgICAgICAgICAgdGhpcy5ib2R5LnB1c2gobmV3IFBvaW50XzEuZGVmYXVsdChvbGRQb3NpdGlvbi54LCBvbGRQb3NpdGlvbi55KSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBTbmFrZS5wcm90b3R5cGUuaXNFYXRTZWxmID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaGVhZCA9IHRoaXMuYm9keVswXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCB0aGlzLmJvZHkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChoZWFkLmlzT3ZlcmxhcCh0aGlzLmJvZHlbaV0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgU25ha2UucHJvdG90eXBlLmlzT3ZlcmxhcCA9IGZ1bmN0aW9uIChwb2ludCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib2R5LnNvbWUoZnVuY3Rpb24gKGJvZHlQb2ludCkge1xuICAgICAgICAgICAgaWYgKGJvZHlQb2ludC5pc092ZXJsYXAocG9pbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU25ha2UucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoY3R4KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLkhFQURfQ09MT1I7XG4gICAgICAgIHRoaXMuYm9keS5mb3JFYWNoKGZ1bmN0aW9uIChwb2ludCkge1xuICAgICAgICAgICAgaWYgKHBvaW50LnggIT0gX3RoaXMucG9zaXRpb24ueCB8fFxuICAgICAgICAgICAgICAgIHBvaW50LnkgIT0gX3RoaXMucG9zaXRpb24ueSkge1xuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBfdGhpcy5CT0RZX0NPTE9SO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9pbnQuZHJhdyhjdHgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBTbmFrZTtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBTbmFrZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvY2xhc3Nlcy9TbmFrZS5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBEaXJlY3Rpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRGlyZWN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgRGlyZWN0aW9uLnByb3RvdHlwZS5pc09wcG9zaXRlID0gZnVuY3Rpb24gKGRpcmVjdGlvbikge1xuICAgICAgICBpZiAoTWF0aC5hYnModGhpcy52YWx1ZSAtIGRpcmVjdGlvbikgPT0gMikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgRGlyZWN0aW9uLnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uIChuZXdEaXJlY3Rpb24pIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT0gbmV3RGlyZWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNPcHBvc2l0ZShuZXdEaXJlY3Rpb24pKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52YWx1ZSA9IG5ld0RpcmVjdGlvbjtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICByZXR1cm4gRGlyZWN0aW9uO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IERpcmVjdGlvbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvY2xhc3Nlcy9EaXJlY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgRm9vZF8xID0gcmVxdWlyZShcIi4vRm9vZFwiKTtcbnZhciBtYXRoX2hlbHBlcl8xID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvbWF0aC1oZWxwZXJcIik7XG52YXIgRm9vZENyZWF0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRm9vZENyZWF0b3IoZmllbGQsIHNuYWtlKSB7XG4gICAgICAgIHRoaXMubWF4V2lkdGggPSBmaWVsZC53aWR0aDtcbiAgICAgICAgdGhpcy5tYXhIZWlnaHQgPSBmaWVsZC5oZWlnaHQ7XG4gICAgICAgIHRoaXMuc25ha2UgPSBzbmFrZTtcbiAgICB9XG4gICAgRm9vZENyZWF0b3IucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG5ld0Zvb2QgPSBudWxsO1xuICAgICAgICB3aGlsZSAoIW5ld0Zvb2QpIHtcbiAgICAgICAgICAgIG5ld0Zvb2QgPSB0aGlzLnRyeUNyZWF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdGb29kO1xuICAgIH07XG4gICAgRm9vZENyZWF0b3IucHJvdG90eXBlLnRyeUNyZWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG5ld0Zvb2QgPSBuZXcgRm9vZF8xLmRlZmF1bHQobWF0aF9oZWxwZXJfMS5kZWZhdWx0LmdldFJhbmRvbUludCgwLCB0aGlzLm1heFdpZHRoIC0gMSksIG1hdGhfaGVscGVyXzEuZGVmYXVsdC5nZXRSYW5kb21JbnQoMCwgdGhpcy5tYXhIZWlnaHQgLSAxKSk7XG4gICAgICAgIGlmICh0aGlzLnNuYWtlLmlzT3ZlcmxhcChuZXdGb29kKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0Zvb2Q7XG4gICAgfTtcbiAgICByZXR1cm4gRm9vZENyZWF0b3I7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gRm9vZENyZWF0b3I7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2NsYXNzZXMvRm9vZENyZWF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBQb2ludF8xID0gcmVxdWlyZShcIi4vUG9pbnRcIik7XG52YXIgZUNvbG9yXzEgPSByZXF1aXJlKFwiLi4vZW51bXMvZUNvbG9yXCIpO1xudmFyIEZvb2QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZvb2QsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRm9vZCh4LCB5KSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCB4LCB5KSB8fCB0aGlzO1xuICAgIH1cbiAgICBGb29kLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKGN0eCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZUNvbG9yXzEuZGVmYXVsdC5ZRUxMT1c7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuZHJhdy5jYWxsKHRoaXMsIGN0eCk7XG4gICAgfTtcbiAgICByZXR1cm4gRm9vZDtcbn0oUG9pbnRfMS5kZWZhdWx0KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBGb29kO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9jbGFzc2VzL0Zvb2QuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8g0JLQvtC30LLRgNCw0YnQsNC10YIg0YHQu9GD0YfQsNC50L3QvtC1INGG0LXQu9C+0LUg0YfQuNGB0LvQviDQvNC10LbQtNGDIG1pbiAo0LLQutC70Y7Rh9C40YLQtdC70YzQvdC+KSDQuCBtYXggKNC90LUg0LLQutC70Y7Rh9Cw0Y8gbWF4KVxuZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBnZXRSYW5kb21JbnQ6IGdldFJhbmRvbUludFxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvaGVscGVycy9tYXRoLWhlbHBlci5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==