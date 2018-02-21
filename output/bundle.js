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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var eDirection_1 = __webpack_require__(0);
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
    Point.prototype.isRightOf = function (point) {
        if (this.x > point.x) {
            return true;
        }
        return false;
    };
    Point.prototype.isSameHorizontal = function (point) {
        if (this.x === point.x) {
            return true;
        }
        return false;
    };
    Point.prototype.isSameVertical = function (point) {
        if (this.y === point.y) {
            return true;
        }
        return false;
    };
    Point.prototype.isLeftOf = function (point) {
        if (this.x < point.x) {
            return true;
        }
        return false;
    };
    Point.prototype.isUnder = function (point) {
        if (this.y > point.y) {
            return true;
        }
        return false;
    };
    Point.prototype.isAbove = function (point) {
        if (this.y < point.y) {
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
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var eDirection_1 = __webpack_require__(0);
var Point_1 = __webpack_require__(1);
var Snake = /** @class */ (function () {
    function Snake(params) {
        this.body = [];
        this.position = null;
        this.controller = null;
        this.direction = null;
        this.direction = params.direction;
        this.position = params.position;
        this.HEAD_COLOR = params.headColor ? params.headColor : null;
        this.BODY_COLOR = params.bodyColor ? params.bodyColor : null;
        this.init(params.size);
    }
    Snake.prototype.init = function (size) {
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
    };
    Snake.prototype.handleEvent = function (event) {
        switch (event) {
            case eDirection_1.default.UP:
                this.direction.value = eDirection_1.default.UP;
                break;
            case eDirection_1.default.DOWN:
                this.direction.value = eDirection_1.default.DOWN;
                break;
            case eDirection_1.default.LEFT:
                this.direction.value = eDirection_1.default.LEFT;
                break;
            case eDirection_1.default.RIGHT:
                this.direction.value = eDirection_1.default.RIGHT;
                break;
            default:
                console.warn('Не обработанное событие в классе Snake');
        }
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
    Snake.prototype.getDirection = function () {
        return this.direction.value;
    };
    Snake.prototype.eat = function (food) {
        if (this.getHead().isOverlap(food)) {
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Controller = /** @class */ (function () {
    function Controller() {
        this.observers = [];
    }
    Controller.prototype.addObserver = function (observer) {
        this.observers.push(observer);
    };
    Controller.prototype.removeObserver = function (observer) {
        console.warn('Здесь удаляем наблюдателя, не реализовал тк не было надобновсти');
    };
    Controller.prototype.notifyObservers = function (event) {
        this.observers.forEach(function (observer) {
            observer.handleEvent(event);
        });
    };
    return Controller;
}());
exports.default = Controller;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = __webpack_require__(6);
window.onload = function () {
    var game = new Game_1.default();
    game.init();
    game.start();
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Screen_1 = __webpack_require__(7);
var Field_1 = __webpack_require__(8);
var FoodCreator_1 = __webpack_require__(9);
var eDirection_1 = __webpack_require__(0);
var Direction_1 = __webpack_require__(12);
var Point_1 = __webpack_require__(1);
var SnakesCollisionDetector_1 = __webpack_require__(13);
var PlayerSnake_1 = __webpack_require__(14);
var EnemySnake_1 = __webpack_require__(16);
var Game = /** @class */ (function () {
    function Game() {
        this.screen = null;
        this.field = null;
        this.playerSnake = null;
        this.enemySnake = null;
        this.speed = 100;
        this.food = null;
        this.foodCreator = null;
        this.snakesCollisionDetector = null;
        this.screen = new Screen_1.default();
        this.field = new Field_1.default(30, 30);
        var playerSnakeParams = {
            direction: null,
            position: null,
            size: null
        };
        playerSnakeParams.direction = new Direction_1.default(eDirection_1.default.RIGHT);
        playerSnakeParams.position = new Point_1.default(5, 5);
        playerSnakeParams.size = 5;
        this.playerSnake = new PlayerSnake_1.default(playerSnakeParams);
        this.foodCreator = new FoodCreator_1.default(this.field, this.playerSnake);
        this.food = this.foodCreator.create();
        var enemySnakeParams = {
            direction: null,
            position: null,
            size: null
        };
        enemySnakeParams.direction = new Direction_1.default(eDirection_1.default.LEFT);
        enemySnakeParams.position = new Point_1.default(10, 10);
        enemySnakeParams.size = 5;
        this.enemySnake = new EnemySnake_1.default(enemySnakeParams, this.food);
        this.snakesCollisionDetector = new SnakesCollisionDetector_1.default(this.playerSnake, [this.enemySnake]);
    }
    Game.prototype.init = function () {
        this.screen.addObject(this.field);
        this.screen.addObject(this.playerSnake);
        this.screen.addObject(this.enemySnake);
        this.screen.addObject(this.food);
    };
    Game.prototype.start = function () {
        setInterval(this.mainLoop.bind(this), this.speed);
    };
    Game.prototype.mainLoop = function () {
        if (this.playerSnake.isEatSelf()) {
            return;
        }
        if (this.snakesCollisionDetector.check()) {
            return;
        }
        if (this.playerSnake.eat(this.food) || this.enemySnake.eat(this.food)) {
            this.food.setNewPosition(this.foodCreator.create());
        }
        else {
            this.playerSnake.move();
            this.enemySnake.move();
        }
        if (!this.field.isInBoundary(this.playerSnake.getHead())) {
            return;
        }
        this.screen.draw();
    };
    return Game;
}());
exports.default = Game;


/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Point_1 = __webpack_require__(1);
var eColor_1 = __webpack_require__(2);
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Food_1 = __webpack_require__(10);
var math_helper_1 = __webpack_require__(11);
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
var Point_1 = __webpack_require__(1);
var eColor_1 = __webpack_require__(2);
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
/* 11 */
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


/***/ }),
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SnakesCollisionDetector = /** @class */ (function () {
    function SnakesCollisionDetector(snake, snakes) {
        this.snake = snake;
        this.snakes = snakes;
    }
    SnakesCollisionDetector.prototype.check = function () {
        var _this = this;
        if (!this.snakes.length) {
            return false;
        }
        return this.snakes.some(function (snake) {
            return snake.isOverlap(_this.snake.getHead());
        });
    };
    return SnakesCollisionDetector;
}());
exports.default = SnakesCollisionDetector;


/***/ }),
/* 14 */
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
var Snake_1 = __webpack_require__(3);
var eColor_1 = __webpack_require__(2);
var KeyboardController_1 = __webpack_require__(15);
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


/***/ }),
/* 15 */
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
var Controller_1 = __webpack_require__(4);
var eDirection_1 = __webpack_require__(0);
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


/***/ }),
/* 16 */
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
var Snake_1 = __webpack_require__(3);
var EnemyController_1 = __webpack_require__(17);
var EnemyLogic_1 = __webpack_require__(18);
var eColor_1 = __webpack_require__(2);
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


/***/ }),
/* 17 */
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
var Controller_1 = __webpack_require__(4);
var EnemyController = /** @class */ (function (_super) {
    __extends(EnemyController, _super);
    function EnemyController(logic) {
        var _this = _super.call(this) || this;
        _this.logic = logic;
        setInterval(function () {
            _this.notifyObservers(_this.logic.getNextAction());
        }, 100);
        return _this;
    }
    return EnemyController;
}(Controller_1.default));
exports.default = EnemyController;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var eDirection_1 = __webpack_require__(0);
var EnemyLogic = /** @class */ (function () {
    function EnemyLogic(level, food, snake) {
        this.lastActionIndex = 0;
        this.food = null;
        this.snake = null;
        this.level = level;
        this.food = food;
        console.log(this.food);
        this.snake = snake;
        this.directions = [eDirection_1.default.LEFT, eDirection_1.default.UP, eDirection_1.default.RIGHT, eDirection_1.default.DOWN];
    }
    EnemyLogic.prototype.getVerticalOffset = function () {
        var head = this.snake.getHead();
        if (head.isUnder(this.food)) {
            console.log('head is under');
            console.log(head);
            console.log(this.food);
            return eDirection_1.default.UP;
        }
        else {
            return eDirection_1.default.DOWN;
        }
    };
    EnemyLogic.prototype.getHorizontalOffset = function () {
        var head = this.snake.getHead();
        if (head.isRightOf(this.food)) {
            console.log('head right of food go left');
            console.log(head);
            console.log(this.food);
            return eDirection_1.default.LEFT;
        }
        else {
            return eDirection_1.default.RIGHT;
        }
    };
    EnemyLogic.prototype.getNextAction = function () {
        // this.lastActionIndex = (++this.lastActionIndex) % this.directions.length;
        var head = this.snake.getHead();
        var direction = this.snake.getDirection();
        switch (direction) {
            case eDirection_1.default.LEFT:
                if (head.isRightOf(this.food)) {
                    return direction;
                }
                else {
                    return this.getVerticalOffset();
                }
            case eDirection_1.default.RIGHT:
                if (head.isLeftOf(this.food)) {
                    return direction;
                }
                else {
                    return this.getVerticalOffset();
                }
            case eDirection_1.default.UP:
                if (head.isUnder(this.food)) {
                    return direction;
                }
                else {
                    return this.getHorizontalOffset();
                }
            case eDirection_1.default.DOWN:
                if (head.isAbove(this.food)) {
                    return direction;
                }
                else {
                    this.getHorizontalOffset();
                }
        }
        return this.directions[this.lastActionIndex];
    };
    return EnemyLogic;
}());
exports.default = EnemyLogic;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2UyY2Q3YmRhNTk5NDNhYmM2ZTQiLCJ3ZWJwYWNrOi8vLy4vanMvZW51bXMvZURpcmVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jbGFzc2VzL1BvaW50LmpzIiwid2VicGFjazovLy8uL2pzL2VudW1zL2VDb2xvci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jbGFzc2VzL1NuYWtlcy9TbmFrZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jbGFzc2VzL0NvbnRyb2xsZXJzL0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9HYW1lLmpzIiwid2VicGFjazovLy8uL2pzL2NsYXNzZXMvU2NyZWVuLmpzIiwid2VicGFjazovLy8uL2pzL2NsYXNzZXMvRmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9Gb29kQ3JlYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jbGFzc2VzL0Zvb2QuanMiLCJ3ZWJwYWNrOi8vLy4vanMvaGVscGVycy9tYXRoLWhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jbGFzc2VzL0RpcmVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jbGFzc2VzL0NvbGxpc2lvbkRldGVjdG9ycy9TbmFrZXNDb2xsaXNpb25EZXRlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jbGFzc2VzL1NuYWtlcy9QbGF5ZXJTbmFrZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jbGFzc2VzL0NvbnRyb2xsZXJzL0tleWJvYXJkQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jbGFzc2VzL1NuYWtlcy9FbmVteVNuYWtlLmpzIiwid2VicGFjazovLy8uL2pzL2NsYXNzZXMvQ29udHJvbGxlcnMvRW5lbXlDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2pzL2NsYXNzZXMvQUkvRW5lbXlMb2dpYy5qcyJdLCJuYW1lcyI6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Q0FBQztBQUNEOzs7Ozs7OztBQ25CQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNQQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7QUMzRUE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7QUN4QkE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsb0JBQW9CO0FBQy9DO0FBQ0EsK0JBQStCLHFCQUFxQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgY2UyY2Q3YmRhNTk5NDNhYmM2ZTQiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBlRGlyZWN0aW9uO1xuKGZ1bmN0aW9uIChlRGlyZWN0aW9uKSB7XG4gICAgZURpcmVjdGlvbltlRGlyZWN0aW9uW1wiTEVGVFwiXSA9IDBdID0gXCJMRUZUXCI7XG4gICAgZURpcmVjdGlvbltlRGlyZWN0aW9uW1wiVVBcIl0gPSAxXSA9IFwiVVBcIjtcbiAgICBlRGlyZWN0aW9uW2VEaXJlY3Rpb25bXCJSSUdIVFwiXSA9IDJdID0gXCJSSUdIVFwiO1xuICAgIGVEaXJlY3Rpb25bZURpcmVjdGlvbltcIkRPV05cIl0gPSAzXSA9IFwiRE9XTlwiO1xufSkoZURpcmVjdGlvbiB8fCAoZURpcmVjdGlvbiA9IHt9KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBlRGlyZWN0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9lbnVtcy9lRGlyZWN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGVEaXJlY3Rpb25fMSA9IHJlcXVpcmUoXCIuLi9lbnVtcy9lRGlyZWN0aW9uXCIpO1xudmFyIFBvaW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFBvaW50KHgsIHkpIHtcbiAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG4gICAgUG9pbnQucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiAoZGlyZWN0aW9uLCBvZmZzZXQpIHtcbiAgICAgICAgaWYgKG9mZnNldCA9PT0gdm9pZCAwKSB7IG9mZnNldCA9IDE7IH1cbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgZURpcmVjdGlvbl8xLmRlZmF1bHQuUklHSFQ6XG4gICAgICAgICAgICAgICAgdGhpcy54ICs9IG9mZnNldDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgZURpcmVjdGlvbl8xLmRlZmF1bHQuTEVGVDpcbiAgICAgICAgICAgICAgICB0aGlzLnggLT0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBlRGlyZWN0aW9uXzEuZGVmYXVsdC5VUDpcbiAgICAgICAgICAgICAgICB0aGlzLnkgLT0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBlRGlyZWN0aW9uXzEuZGVmYXVsdC5ET1dOOlxuICAgICAgICAgICAgICAgIHRoaXMueSArPSBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFBvaW50LnByb3RvdHlwZS5zZXROZXdQb3NpdGlvbiA9IGZ1bmN0aW9uIChuZXdQb3NpdGlvbikge1xuICAgICAgICB0aGlzLnggPSBuZXdQb3NpdGlvbi54O1xuICAgICAgICB0aGlzLnkgPSBuZXdQb3NpdGlvbi55O1xuICAgIH07XG4gICAgUG9pbnQucHJvdG90eXBlLmlzT3ZlcmxhcCA9IGZ1bmN0aW9uIChwb2ludCkge1xuICAgICAgICBpZiAodGhpcy54ID09IHBvaW50LnggJiZcbiAgICAgICAgICAgIHRoaXMueSA9PSBwb2ludC55KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBQb2ludC5wcm90b3R5cGUuaXNSaWdodE9mID0gZnVuY3Rpb24gKHBvaW50KSB7XG4gICAgICAgIGlmICh0aGlzLnggPiBwb2ludC54KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBQb2ludC5wcm90b3R5cGUuaXNTYW1lSG9yaXpvbnRhbCA9IGZ1bmN0aW9uIChwb2ludCkge1xuICAgICAgICBpZiAodGhpcy54ID09PSBwb2ludC54KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBQb2ludC5wcm90b3R5cGUuaXNTYW1lVmVydGljYWwgPSBmdW5jdGlvbiAocG9pbnQpIHtcbiAgICAgICAgaWYgKHRoaXMueSA9PT0gcG9pbnQueSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgUG9pbnQucHJvdG90eXBlLmlzTGVmdE9mID0gZnVuY3Rpb24gKHBvaW50KSB7XG4gICAgICAgIGlmICh0aGlzLnggPCBwb2ludC54KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBQb2ludC5wcm90b3R5cGUuaXNVbmRlciA9IGZ1bmN0aW9uIChwb2ludCkge1xuICAgICAgICBpZiAodGhpcy55ID4gcG9pbnQueSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgUG9pbnQucHJvdG90eXBlLmlzQWJvdmUgPSBmdW5jdGlvbiAocG9pbnQpIHtcbiAgICAgICAgaWYgKHRoaXMueSA8IHBvaW50LnkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIFBvaW50LnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKGN0eCwgdHlwZSkge1xuICAgICAgICBpZiAodHlwZSA9PT0gdm9pZCAwKSB7IHR5cGUgPSAnZmlsbCc7IH1cbiAgICAgICAgaWYgKHR5cGUgPT0gJ2ZpbGwnKSB7XG4gICAgICAgICAgICBjdHguZmlsbFJlY3QodGhpcy54ICogUG9pbnQuU0laRSwgdGhpcy55ICogUG9pbnQuU0laRSwgUG9pbnQuU0laRSwgUG9pbnQuU0laRSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjdHguc3Ryb2tlUmVjdCh0aGlzLnggKiBQb2ludC5TSVpFLCB0aGlzLnkgKiBQb2ludC5TSVpFLCBQb2ludC5TSVpFLCBQb2ludC5TSVpFKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUG9pbnQuU0laRSA9IDIwOyAvLyDQoNCw0LfQvNC10YAg0LIg0L/QuNC60YHQtdC70Y/RhSDQvNC40L3QuNC80LDQu9GM0L3QvtC5INGC0L7Rh9C60Lgg0LIg0LjQs9GA0LVcbiAgICByZXR1cm4gUG9pbnQ7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gUG9pbnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2NsYXNzZXMvUG9pbnQuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZUNvbG9yO1xuKGZ1bmN0aW9uIChlQ29sb3IpIHtcbiAgICBlQ29sb3JbXCJXSElURVwiXSA9IFwiI0ZGRkZGRlwiO1xuICAgIGVDb2xvcltcIkJMVUVcIl0gPSBcIiMzRjUxQjVcIjtcbiAgICBlQ29sb3JbXCJSRURcIl0gPSBcIiNGNDQzMzZcIjtcbiAgICBlQ29sb3JbXCJHUkVFTlwiXSA9IFwiIzAwQkNENFwiO1xuICAgIGVDb2xvcltcIllFTExPV1wiXSA9IFwiI0ZGQzEwN1wiO1xufSkoZUNvbG9yIHx8IChlQ29sb3IgPSB7fSkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gZUNvbG9yO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9lbnVtcy9lQ29sb3IuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZURpcmVjdGlvbl8xID0gcmVxdWlyZShcIi4uLy4uL2VudW1zL2VEaXJlY3Rpb25cIik7XG52YXIgUG9pbnRfMSA9IHJlcXVpcmUoXCIuLi9Qb2ludFwiKTtcbnZhciBTbmFrZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTbmFrZShwYXJhbXMpIHtcbiAgICAgICAgdGhpcy5ib2R5ID0gW107XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gcGFyYW1zLmRpcmVjdGlvbjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBhcmFtcy5wb3NpdGlvbjtcbiAgICAgICAgdGhpcy5IRUFEX0NPTE9SID0gcGFyYW1zLmhlYWRDb2xvciA/IHBhcmFtcy5oZWFkQ29sb3IgOiBudWxsO1xuICAgICAgICB0aGlzLkJPRFlfQ09MT1IgPSBwYXJhbXMuYm9keUNvbG9yID8gcGFyYW1zLmJvZHlDb2xvciA6IG51bGw7XG4gICAgICAgIHRoaXMuaW5pdChwYXJhbXMuc2l6ZSk7XG4gICAgfVxuICAgIFNuYWtlLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLmRpcmVjdGlvbi52YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSBlRGlyZWN0aW9uXzEuZGVmYXVsdC5MRUZUOlxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keS5wdXNoKG5ldyBQb2ludF8xLmRlZmF1bHQodGhpcy5wb3NpdGlvbi54ICsgaSwgdGhpcy5wb3NpdGlvbi55KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBlRGlyZWN0aW9uXzEuZGVmYXVsdC5SSUdIVDpcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHkucHVzaChuZXcgUG9pbnRfMS5kZWZhdWx0KHRoaXMucG9zaXRpb24ueCAtIGksIHRoaXMucG9zaXRpb24ueSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgZURpcmVjdGlvbl8xLmRlZmF1bHQuVVA6XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5LnB1c2gobmV3IFBvaW50XzEuZGVmYXVsdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSArIGkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGVEaXJlY3Rpb25fMS5kZWZhdWx0LkRPV046XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5LnB1c2gobmV3IFBvaW50XzEuZGVmYXVsdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSAtIGkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ9Ce0YjQuNCx0LrQsCDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjQuCDQt9C80LXQudC60LgnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgU25ha2UucHJvdG90eXBlLmhhbmRsZUV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQpIHtcbiAgICAgICAgICAgIGNhc2UgZURpcmVjdGlvbl8xLmRlZmF1bHQuVVA6XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24udmFsdWUgPSBlRGlyZWN0aW9uXzEuZGVmYXVsdC5VUDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgZURpcmVjdGlvbl8xLmRlZmF1bHQuRE9XTjpcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbi52YWx1ZSA9IGVEaXJlY3Rpb25fMS5kZWZhdWx0LkRPV047XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGVEaXJlY3Rpb25fMS5kZWZhdWx0LkxFRlQ6XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24udmFsdWUgPSBlRGlyZWN0aW9uXzEuZGVmYXVsdC5MRUZUO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBlRGlyZWN0aW9uXzEuZGVmYXVsdC5SSUdIVDpcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbi52YWx1ZSA9IGVEaXJlY3Rpb25fMS5kZWZhdWx0LlJJR0hUO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ9Cd0LUg0L7QsdGA0LDQsdC+0YLQsNC90L3QvtC1INGB0L7QsdGL0YLQuNC1INCyINC60LvQsNGB0YHQtSBTbmFrZScpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTbmFrZS5wcm90b3R5cGUuZ2V0SGVhZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9keVswXSB8fCBudWxsO1xuICAgIH07XG4gICAgU25ha2UucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ubW92ZSh0aGlzLmRpcmVjdGlvbi52YWx1ZSk7XG4gICAgICAgIGZvciAodmFyIGkgPSB0aGlzLmJvZHkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgICAgICAgdGhpcy5ib2R5W2ldLnNldE5ld1Bvc2l0aW9uKHRoaXMuYm9keVtpIC0gMV0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm9keVswXS5tb3ZlKHRoaXMuZGlyZWN0aW9uLnZhbHVlKTtcbiAgICB9O1xuICAgIFNuYWtlLnByb3RvdHlwZS5nZXREaXJlY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbi52YWx1ZTtcbiAgICB9O1xuICAgIFNuYWtlLnByb3RvdHlwZS5lYXQgPSBmdW5jdGlvbiAoZm9vZCkge1xuICAgICAgICBpZiAodGhpcy5nZXRIZWFkKCkuaXNPdmVybGFwKGZvb2QpKSB7XG4gICAgICAgICAgICB2YXIgb2xkUG9zaXRpb24gPSB0aGlzLmJvZHlbdGhpcy5ib2R5Lmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgdGhpcy5tb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLmJvZHkucHVzaChuZXcgUG9pbnRfMS5kZWZhdWx0KG9sZFBvc2l0aW9uLngsIG9sZFBvc2l0aW9uLnkpKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIFNuYWtlLnByb3RvdHlwZS5pc0VhdFNlbGYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBoZWFkID0gdGhpcy5ib2R5WzBdO1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHRoaXMuYm9keS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGhlYWQuaXNPdmVybGFwKHRoaXMuYm9keVtpXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBTbmFrZS5wcm90b3R5cGUuaXNPdmVybGFwID0gZnVuY3Rpb24gKHBvaW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvZHkuc29tZShmdW5jdGlvbiAoYm9keVBvaW50KSB7XG4gICAgICAgICAgICBpZiAoYm9keVBvaW50LmlzT3ZlcmxhcChwb2ludCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTbmFrZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIChjdHgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuSEVBRF9DT0xPUjtcbiAgICAgICAgdGhpcy5ib2R5LmZvckVhY2goZnVuY3Rpb24gKHBvaW50KSB7XG4gICAgICAgICAgICBpZiAocG9pbnQueCAhPSBfdGhpcy5wb3NpdGlvbi54IHx8XG4gICAgICAgICAgICAgICAgcG9pbnQueSAhPSBfdGhpcy5wb3NpdGlvbi55KSB7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IF90aGlzLkJPRFlfQ09MT1I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb2ludC5kcmF3KGN0eCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFNuYWtlO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFNuYWtlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9jbGFzc2VzL1NuYWtlcy9TbmFrZS5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBDb250cm9sbGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvbnRyb2xsZXIoKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW107XG4gICAgfVxuICAgIENvbnRyb2xsZXIucHJvdG90eXBlLmFkZE9ic2VydmVyID0gZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpO1xuICAgIH07XG4gICAgQ29udHJvbGxlci5wcm90b3R5cGUucmVtb3ZlT2JzZXJ2ZXIgPSBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCfQl9C00LXRgdGMINGD0LTQsNC70Y/QtdC8INC90LDQsdC70Y7QtNCw0YLQtdC70Y8sINC90LUg0YDQtdCw0LvQuNC30L7QstCw0Lsg0YLQuiDQvdC1INCx0YvQu9C+INC90LDQtNC+0LHQvdC+0LLRgdGC0LgnKTtcbiAgICB9O1xuICAgIENvbnRyb2xsZXIucHJvdG90eXBlLm5vdGlmeU9ic2VydmVycyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuaGFuZGxlRXZlbnQoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBDb250cm9sbGVyO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IENvbnRyb2xsZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2NsYXNzZXMvQ29udHJvbGxlcnMvQ29udHJvbGxlci5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBHYW1lXzEgPSByZXF1aXJlKFwiLi9jbGFzc2VzL0dhbWVcIik7XG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBnYW1lID0gbmV3IEdhbWVfMS5kZWZhdWx0KCk7XG4gICAgZ2FtZS5pbml0KCk7XG4gICAgZ2FtZS5zdGFydCgpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU2NyZWVuXzEgPSByZXF1aXJlKFwiLi9TY3JlZW5cIik7XG52YXIgRmllbGRfMSA9IHJlcXVpcmUoXCIuL0ZpZWxkXCIpO1xudmFyIEZvb2RDcmVhdG9yXzEgPSByZXF1aXJlKFwiLi9Gb29kQ3JlYXRvclwiKTtcbnZhciBlRGlyZWN0aW9uXzEgPSByZXF1aXJlKFwiLi4vZW51bXMvZURpcmVjdGlvblwiKTtcbnZhciBEaXJlY3Rpb25fMSA9IHJlcXVpcmUoXCIuL0RpcmVjdGlvblwiKTtcbnZhciBQb2ludF8xID0gcmVxdWlyZShcIi4vUG9pbnRcIik7XG52YXIgU25ha2VzQ29sbGlzaW9uRGV0ZWN0b3JfMSA9IHJlcXVpcmUoXCIuL0NvbGxpc2lvbkRldGVjdG9ycy9TbmFrZXNDb2xsaXNpb25EZXRlY3RvclwiKTtcbnZhciBQbGF5ZXJTbmFrZV8xID0gcmVxdWlyZShcIi4vU25ha2VzL1BsYXllclNuYWtlXCIpO1xudmFyIEVuZW15U25ha2VfMSA9IHJlcXVpcmUoXCIuL1NuYWtlcy9FbmVteVNuYWtlXCIpO1xudmFyIEdhbWUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gR2FtZSgpIHtcbiAgICAgICAgdGhpcy5zY3JlZW4gPSBudWxsO1xuICAgICAgICB0aGlzLmZpZWxkID0gbnVsbDtcbiAgICAgICAgdGhpcy5wbGF5ZXJTbmFrZSA9IG51bGw7XG4gICAgICAgIHRoaXMuZW5lbXlTbmFrZSA9IG51bGw7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAxMDA7XG4gICAgICAgIHRoaXMuZm9vZCA9IG51bGw7XG4gICAgICAgIHRoaXMuZm9vZENyZWF0b3IgPSBudWxsO1xuICAgICAgICB0aGlzLnNuYWtlc0NvbGxpc2lvbkRldGVjdG9yID0gbnVsbDtcbiAgICAgICAgdGhpcy5zY3JlZW4gPSBuZXcgU2NyZWVuXzEuZGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmZpZWxkID0gbmV3IEZpZWxkXzEuZGVmYXVsdCgzMCwgMzApO1xuICAgICAgICB2YXIgcGxheWVyU25ha2VQYXJhbXMgPSB7XG4gICAgICAgICAgICBkaXJlY3Rpb246IG51bGwsXG4gICAgICAgICAgICBwb3NpdGlvbjogbnVsbCxcbiAgICAgICAgICAgIHNpemU6IG51bGxcbiAgICAgICAgfTtcbiAgICAgICAgcGxheWVyU25ha2VQYXJhbXMuZGlyZWN0aW9uID0gbmV3IERpcmVjdGlvbl8xLmRlZmF1bHQoZURpcmVjdGlvbl8xLmRlZmF1bHQuUklHSFQpO1xuICAgICAgICBwbGF5ZXJTbmFrZVBhcmFtcy5wb3NpdGlvbiA9IG5ldyBQb2ludF8xLmRlZmF1bHQoNSwgNSk7XG4gICAgICAgIHBsYXllclNuYWtlUGFyYW1zLnNpemUgPSA1O1xuICAgICAgICB0aGlzLnBsYXllclNuYWtlID0gbmV3IFBsYXllclNuYWtlXzEuZGVmYXVsdChwbGF5ZXJTbmFrZVBhcmFtcyk7XG4gICAgICAgIHRoaXMuZm9vZENyZWF0b3IgPSBuZXcgRm9vZENyZWF0b3JfMS5kZWZhdWx0KHRoaXMuZmllbGQsIHRoaXMucGxheWVyU25ha2UpO1xuICAgICAgICB0aGlzLmZvb2QgPSB0aGlzLmZvb2RDcmVhdG9yLmNyZWF0ZSgpO1xuICAgICAgICB2YXIgZW5lbXlTbmFrZVBhcmFtcyA9IHtcbiAgICAgICAgICAgIGRpcmVjdGlvbjogbnVsbCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBudWxsLFxuICAgICAgICAgICAgc2l6ZTogbnVsbFxuICAgICAgICB9O1xuICAgICAgICBlbmVteVNuYWtlUGFyYW1zLmRpcmVjdGlvbiA9IG5ldyBEaXJlY3Rpb25fMS5kZWZhdWx0KGVEaXJlY3Rpb25fMS5kZWZhdWx0LkxFRlQpO1xuICAgICAgICBlbmVteVNuYWtlUGFyYW1zLnBvc2l0aW9uID0gbmV3IFBvaW50XzEuZGVmYXVsdCgxMCwgMTApO1xuICAgICAgICBlbmVteVNuYWtlUGFyYW1zLnNpemUgPSA1O1xuICAgICAgICB0aGlzLmVuZW15U25ha2UgPSBuZXcgRW5lbXlTbmFrZV8xLmRlZmF1bHQoZW5lbXlTbmFrZVBhcmFtcywgdGhpcy5mb29kKTtcbiAgICAgICAgdGhpcy5zbmFrZXNDb2xsaXNpb25EZXRlY3RvciA9IG5ldyBTbmFrZXNDb2xsaXNpb25EZXRlY3Rvcl8xLmRlZmF1bHQodGhpcy5wbGF5ZXJTbmFrZSwgW3RoaXMuZW5lbXlTbmFrZV0pO1xuICAgIH1cbiAgICBHYW1lLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNjcmVlbi5hZGRPYmplY3QodGhpcy5maWVsZCk7XG4gICAgICAgIHRoaXMuc2NyZWVuLmFkZE9iamVjdCh0aGlzLnBsYXllclNuYWtlKTtcbiAgICAgICAgdGhpcy5zY3JlZW4uYWRkT2JqZWN0KHRoaXMuZW5lbXlTbmFrZSk7XG4gICAgICAgIHRoaXMuc2NyZWVuLmFkZE9iamVjdCh0aGlzLmZvb2QpO1xuICAgIH07XG4gICAgR2FtZS5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldEludGVydmFsKHRoaXMubWFpbkxvb3AuYmluZCh0aGlzKSwgdGhpcy5zcGVlZCk7XG4gICAgfTtcbiAgICBHYW1lLnByb3RvdHlwZS5tYWluTG9vcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyU25ha2UuaXNFYXRTZWxmKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zbmFrZXNDb2xsaXNpb25EZXRlY3Rvci5jaGVjaygpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucGxheWVyU25ha2UuZWF0KHRoaXMuZm9vZCkgfHwgdGhpcy5lbmVteVNuYWtlLmVhdCh0aGlzLmZvb2QpKSB7XG4gICAgICAgICAgICB0aGlzLmZvb2Quc2V0TmV3UG9zaXRpb24odGhpcy5mb29kQ3JlYXRvci5jcmVhdGUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllclNuYWtlLm1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMuZW5lbXlTbmFrZS5tb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmZpZWxkLmlzSW5Cb3VuZGFyeSh0aGlzLnBsYXllclNuYWtlLmdldEhlYWQoKSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjcmVlbi5kcmF3KCk7XG4gICAgfTtcbiAgICByZXR1cm4gR2FtZTtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBHYW1lO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9jbGFzc2VzL0dhbWUuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU2NyZWVuID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNjcmVlbigpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBudWxsO1xuICAgICAgICB0aGlzLmN0eCA9IG51bGw7XG4gICAgICAgIHRoaXMudG9EcmF3T2JqZWN0cyA9IFtdO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSAxMDAwO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSAxMDAwO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgfVxuICAgIFNjcmVlbi5wcm90b3R5cGUuYWRkT2JqZWN0ID0gZnVuY3Rpb24gKGRyYXdhYmxlKSB7XG4gICAgICAgIHRoaXMudG9EcmF3T2JqZWN0cy5wdXNoKGRyYXdhYmxlKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50b0RyYXdPYmplY3RzKTtcbiAgICB9O1xuICAgIFNjcmVlbi5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy50b0RyYXdPYmplY3RzLmZvckVhY2goZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgICAgICAgb2JqZWN0LmRyYXcoX3RoaXMuY3R4KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gU2NyZWVuO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFNjcmVlbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvY2xhc3Nlcy9TY3JlZW4uanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUG9pbnRfMSA9IHJlcXVpcmUoXCIuL1BvaW50XCIpO1xudmFyIGVDb2xvcl8xID0gcmVxdWlyZShcIi4uL2VudW1zL2VDb2xvclwiKTtcbnZhciBGaWVsZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBGaWVsZCh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMud2lkdGggPSAwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDA7XG4gICAgICAgIHRoaXMuZmllbGRzID0gW107XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgICBGaWVsZC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgcm93X2kgPSAwOyByb3dfaSA8IHRoaXMud2lkdGg7IHJvd19pKyspIHtcbiAgICAgICAgICAgIHRoaXMuZmllbGRzW3Jvd19pXSA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgY29sX2kgPSAwOyBjb2xfaSA8IHRoaXMuaGVpZ2h0OyBjb2xfaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZHNbcm93X2ldW2NvbF9pXSA9IG5ldyBQb2ludF8xLmRlZmF1bHQocm93X2ksIGNvbF9pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgRmllbGQucHJvdG90eXBlLmlzSW5Cb3VuZGFyeSA9IGZ1bmN0aW9uIChwb2ludCkge1xuICAgICAgICByZXR1cm4gcG9pbnQueCA8IHRoaXMud2lkdGggJiZcbiAgICAgICAgICAgIHBvaW50LnkgPCB0aGlzLmhlaWdodCAmJlxuICAgICAgICAgICAgcG9pbnQueCA+PSAwICYmXG4gICAgICAgICAgICBwb2ludC55ID49IDA7XG4gICAgfTtcbiAgICBGaWVsZC5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIChjdHgpIHtcbiAgICAgICAgdGhpcy5maWVsZHMuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgICByb3cuZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBlQ29sb3JfMS5kZWZhdWx0LldISVRFO1xuICAgICAgICAgICAgICAgIGZpZWxkLmRyYXcoY3R4LCAnc3Ryb2tlJyk7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGVDb2xvcl8xLmRlZmF1bHQuR1JFRU47XG4gICAgICAgICAgICAgICAgZmllbGQuZHJhdyhjdHgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEZpZWxkO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEZpZWxkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9jbGFzc2VzL0ZpZWxkLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEZvb2RfMSA9IHJlcXVpcmUoXCIuL0Zvb2RcIik7XG52YXIgbWF0aF9oZWxwZXJfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL21hdGgtaGVscGVyXCIpO1xudmFyIEZvb2RDcmVhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZvb2RDcmVhdG9yKGZpZWxkLCBzbmFrZSkge1xuICAgICAgICB0aGlzLm1heFdpZHRoID0gZmllbGQud2lkdGg7XG4gICAgICAgIHRoaXMubWF4SGVpZ2h0ID0gZmllbGQuaGVpZ2h0O1xuICAgICAgICB0aGlzLnNuYWtlID0gc25ha2U7XG4gICAgfVxuICAgIEZvb2RDcmVhdG9yLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBuZXdGb29kID0gbnVsbDtcbiAgICAgICAgd2hpbGUgKCFuZXdGb29kKSB7XG4gICAgICAgICAgICBuZXdGb29kID0gdGhpcy50cnlDcmVhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3Rm9vZDtcbiAgICB9O1xuICAgIEZvb2RDcmVhdG9yLnByb3RvdHlwZS50cnlDcmVhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBuZXdGb29kID0gbmV3IEZvb2RfMS5kZWZhdWx0KG1hdGhfaGVscGVyXzEuZGVmYXVsdC5nZXRSYW5kb21JbnQoMCwgdGhpcy5tYXhXaWR0aCAtIDEpLCBtYXRoX2hlbHBlcl8xLmRlZmF1bHQuZ2V0UmFuZG9tSW50KDAsIHRoaXMubWF4SGVpZ2h0IC0gMSkpO1xuICAgICAgICBpZiAodGhpcy5zbmFrZS5pc092ZXJsYXAobmV3Rm9vZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdGb29kO1xuICAgIH07XG4gICAgcmV0dXJuIEZvb2RDcmVhdG9yO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEZvb2RDcmVhdG9yO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9jbGFzc2VzL0Zvb2RDcmVhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUG9pbnRfMSA9IHJlcXVpcmUoXCIuL1BvaW50XCIpO1xudmFyIGVDb2xvcl8xID0gcmVxdWlyZShcIi4uL2VudW1zL2VDb2xvclwiKTtcbnZhciBGb29kID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhGb29kLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEZvb2QoeCwgeSkge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgeCwgeSkgfHwgdGhpcztcbiAgICB9XG4gICAgRm9vZC5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIChjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGVDb2xvcl8xLmRlZmF1bHQuWUVMTE9XO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmRyYXcuY2FsbCh0aGlzLCBjdHgpO1xuICAgIH07XG4gICAgcmV0dXJuIEZvb2Q7XG59KFBvaW50XzEuZGVmYXVsdCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gRm9vZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvY2xhc3Nlcy9Gb29kLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINGB0LvRg9GH0LDQudC90L7QtSDRhtC10LvQvtC1INGH0LjRgdC70L4g0LzQtdC20LTRgyBtaW4gKNCy0LrQu9GO0YfQuNGC0LXQu9GM0L3Qvikg0LggbWF4ICjQvdC1INCy0LrQu9GO0YfQsNGPIG1heClcbmZ1bmN0aW9uIGdldFJhbmRvbUludChtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XG59XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZ2V0UmFuZG9tSW50OiBnZXRSYW5kb21JbnRcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2hlbHBlcnMvbWF0aC1oZWxwZXIuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIERpcmVjdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEaXJlY3Rpb24odmFsdWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBEaXJlY3Rpb24ucHJvdG90eXBlLmlzT3Bwb3NpdGUgPSBmdW5jdGlvbiAoZGlyZWN0aW9uKSB7XG4gICAgICAgIGlmIChNYXRoLmFicyh0aGlzLnZhbHVlIC0gZGlyZWN0aW9uKSA9PSAyKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBEaXJlY3Rpb24ucHJvdG90eXBlLnNldFZhbHVlID0gZnVuY3Rpb24gKG5ld0RpcmVjdGlvbikge1xuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PSBuZXdEaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc09wcG9zaXRlKG5ld0RpcmVjdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZhbHVlID0gbmV3RGlyZWN0aW9uO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIHJldHVybiBEaXJlY3Rpb247XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gRGlyZWN0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9jbGFzc2VzL0RpcmVjdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU25ha2VzQ29sbGlzaW9uRGV0ZWN0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU25ha2VzQ29sbGlzaW9uRGV0ZWN0b3Ioc25ha2UsIHNuYWtlcykge1xuICAgICAgICB0aGlzLnNuYWtlID0gc25ha2U7XG4gICAgICAgIHRoaXMuc25ha2VzID0gc25ha2VzO1xuICAgIH1cbiAgICBTbmFrZXNDb2xsaXNpb25EZXRlY3Rvci5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5zbmFrZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc25ha2VzLnNvbWUoZnVuY3Rpb24gKHNuYWtlKSB7XG4gICAgICAgICAgICByZXR1cm4gc25ha2UuaXNPdmVybGFwKF90aGlzLnNuYWtlLmdldEhlYWQoKSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFNuYWtlc0NvbGxpc2lvbkRldGVjdG9yO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFNuYWtlc0NvbGxpc2lvbkRldGVjdG9yO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9jbGFzc2VzL0NvbGxpc2lvbkRldGVjdG9ycy9TbmFrZXNDb2xsaXNpb25EZXRlY3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTbmFrZV8xID0gcmVxdWlyZShcIi4vU25ha2VcIik7XG52YXIgZUNvbG9yXzEgPSByZXF1aXJlKFwiLi4vLi4vZW51bXMvZUNvbG9yXCIpO1xudmFyIEtleWJvYXJkQ29udHJvbGxlcl8xID0gcmVxdWlyZShcIi4uL0NvbnRyb2xsZXJzL0tleWJvYXJkQ29udHJvbGxlclwiKTtcbnZhciBQbGF5ZXJTbmFrZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUGxheWVyU25ha2UsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUGxheWVyU25ha2UocGFyYW1zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHBhcmFtcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuREVGQVVMVF9CT0RZX0NPTE9SID0gZUNvbG9yXzEuZGVmYXVsdC5CTFVFO1xuICAgICAgICBfdGhpcy5ERUZBVUxUX0hFQURfQ09MT1IgPSBlQ29sb3JfMS5kZWZhdWx0LlJFRDtcbiAgICAgICAgX3RoaXMuSEVBRF9DT0xPUiA9IF90aGlzLkhFQURfQ09MT1IgfHwgX3RoaXMuREVGQVVMVF9IRUFEX0NPTE9SO1xuICAgICAgICBfdGhpcy5CT0RZX0NPTE9SID0gX3RoaXMuQk9EWV9DT0xPUiB8fCBfdGhpcy5ERUZBVUxUX0JPRFlfQ09MT1I7XG4gICAgICAgIF90aGlzLmNvbnRyb2xsZXIgPSBuZXcgS2V5Ym9hcmRDb250cm9sbGVyXzEuZGVmYXVsdCgpO1xuICAgICAgICBfdGhpcy5jb250cm9sbGVyLmFkZE9ic2VydmVyKF90aGlzKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICByZXR1cm4gUGxheWVyU25ha2U7XG59KFNuYWtlXzEuZGVmYXVsdCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gUGxheWVyU25ha2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2NsYXNzZXMvU25ha2VzL1BsYXllclNuYWtlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIENvbnRyb2xsZXJfMSA9IHJlcXVpcmUoXCIuL0NvbnRyb2xsZXJcIik7XG52YXIgZURpcmVjdGlvbl8xID0gcmVxdWlyZShcIi4uLy4uL2VudW1zL2VEaXJlY3Rpb25cIik7XG52YXIgS2V5Ym9hcmRDb250cm9sbGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhLZXlib2FyZENvbnRyb2xsZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gS2V5Ym9hcmRDb250cm9sbGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm5vdGlmeU9ic2VydmVycyhlRGlyZWN0aW9uXzEuZGVmYXVsdC5VUCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm5vdGlmeU9ic2VydmVycyhlRGlyZWN0aW9uXzEuZGVmYXVsdC5ET1dOKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubm90aWZ5T2JzZXJ2ZXJzKGVEaXJlY3Rpb25fMS5kZWZhdWx0LkxFRlQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubm90aWZ5T2JzZXJ2ZXJzKGVEaXJlY3Rpb25fMS5kZWZhdWx0LlJJR0hUKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBLZXlib2FyZENvbnRyb2xsZXI7XG59KENvbnRyb2xsZXJfMS5kZWZhdWx0KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBLZXlib2FyZENvbnRyb2xsZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2NsYXNzZXMvQ29udHJvbGxlcnMvS2V5Ym9hcmRDb250cm9sbGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFNuYWtlXzEgPSByZXF1aXJlKFwiLi9TbmFrZVwiKTtcbnZhciBFbmVteUNvbnRyb2xsZXJfMSA9IHJlcXVpcmUoXCIuLi9Db250cm9sbGVycy9FbmVteUNvbnRyb2xsZXJcIik7XG52YXIgRW5lbXlMb2dpY18xID0gcmVxdWlyZShcIi4uL0FJL0VuZW15TG9naWNcIik7XG52YXIgZUNvbG9yXzEgPSByZXF1aXJlKFwiLi4vLi4vZW51bXMvZUNvbG9yXCIpO1xudmFyIEVuZW15U25ha2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEVuZW15U25ha2UsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRW5lbXlTbmFrZShwYXJhbXMsIGZvb2QpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcGFyYW1zKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5ERUZBVUxUX0JPRFlfQ09MT1IgPSBlQ29sb3JfMS5kZWZhdWx0LllFTExPVztcbiAgICAgICAgX3RoaXMuREVGQVVMVF9IRUFEX0NPTE9SID0gZUNvbG9yXzEuZGVmYXVsdC5XSElURTtcbiAgICAgICAgX3RoaXMuSEVBRF9DT0xPUiA9IF90aGlzLkhFQURfQ09MT1IgfHwgX3RoaXMuREVGQVVMVF9IRUFEX0NPTE9SO1xuICAgICAgICBfdGhpcy5CT0RZX0NPTE9SID0gX3RoaXMuQk9EWV9DT0xPUiB8fCBfdGhpcy5ERUZBVUxUX0JPRFlfQ09MT1I7XG4gICAgICAgIGNvbnNvbGUubG9nKGZvb2QpO1xuICAgICAgICBfdGhpcy5jb250cm9sbGVyID0gbmV3IEVuZW15Q29udHJvbGxlcl8xLmRlZmF1bHQobmV3IEVuZW15TG9naWNfMS5kZWZhdWx0KDIsIGZvb2QsIF90aGlzKSk7XG4gICAgICAgIF90aGlzLmNvbnRyb2xsZXIuYWRkT2JzZXJ2ZXIoX3RoaXMpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBFbmVteVNuYWtlO1xufShTbmFrZV8xLmRlZmF1bHQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEVuZW15U25ha2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2NsYXNzZXMvU25ha2VzL0VuZW15U25ha2UuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQ29udHJvbGxlcl8xID0gcmVxdWlyZShcIi4vQ29udHJvbGxlclwiKTtcbnZhciBFbmVteUNvbnRyb2xsZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEVuZW15Q29udHJvbGxlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBFbmVteUNvbnRyb2xsZXIobG9naWMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMubG9naWMgPSBsb2dpYztcbiAgICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMubm90aWZ5T2JzZXJ2ZXJzKF90aGlzLmxvZ2ljLmdldE5leHRBY3Rpb24oKSk7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIEVuZW15Q29udHJvbGxlcjtcbn0oQ29udHJvbGxlcl8xLmRlZmF1bHQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEVuZW15Q29udHJvbGxlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvY2xhc3Nlcy9Db250cm9sbGVycy9FbmVteUNvbnRyb2xsZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGVEaXJlY3Rpb25fMSA9IHJlcXVpcmUoXCIuLi8uLi9lbnVtcy9lRGlyZWN0aW9uXCIpO1xudmFyIEVuZW15TG9naWMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRW5lbXlMb2dpYyhsZXZlbCwgZm9vZCwgc25ha2UpIHtcbiAgICAgICAgdGhpcy5sYXN0QWN0aW9uSW5kZXggPSAwO1xuICAgICAgICB0aGlzLmZvb2QgPSBudWxsO1xuICAgICAgICB0aGlzLnNuYWtlID0gbnVsbDtcbiAgICAgICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICAgICAgICB0aGlzLmZvb2QgPSBmb29kO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZvb2QpO1xuICAgICAgICB0aGlzLnNuYWtlID0gc25ha2U7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9ucyA9IFtlRGlyZWN0aW9uXzEuZGVmYXVsdC5MRUZULCBlRGlyZWN0aW9uXzEuZGVmYXVsdC5VUCwgZURpcmVjdGlvbl8xLmRlZmF1bHQuUklHSFQsIGVEaXJlY3Rpb25fMS5kZWZhdWx0LkRPV05dO1xuICAgIH1cbiAgICBFbmVteUxvZ2ljLnByb3RvdHlwZS5nZXRWZXJ0aWNhbE9mZnNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGhlYWQgPSB0aGlzLnNuYWtlLmdldEhlYWQoKTtcbiAgICAgICAgaWYgKGhlYWQuaXNVbmRlcih0aGlzLmZvb2QpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaGVhZCBpcyB1bmRlcicpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coaGVhZCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZvb2QpO1xuICAgICAgICAgICAgcmV0dXJuIGVEaXJlY3Rpb25fMS5kZWZhdWx0LlVQO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGVEaXJlY3Rpb25fMS5kZWZhdWx0LkRPV047XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEVuZW15TG9naWMucHJvdG90eXBlLmdldEhvcml6b250YWxPZmZzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBoZWFkID0gdGhpcy5zbmFrZS5nZXRIZWFkKCk7XG4gICAgICAgIGlmIChoZWFkLmlzUmlnaHRPZih0aGlzLmZvb2QpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaGVhZCByaWdodCBvZiBmb29kIGdvIGxlZnQnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGhlYWQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5mb29kKTtcbiAgICAgICAgICAgIHJldHVybiBlRGlyZWN0aW9uXzEuZGVmYXVsdC5MRUZUO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGVEaXJlY3Rpb25fMS5kZWZhdWx0LlJJR0hUO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBFbmVteUxvZ2ljLnByb3RvdHlwZS5nZXROZXh0QWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyB0aGlzLmxhc3RBY3Rpb25JbmRleCA9ICgrK3RoaXMubGFzdEFjdGlvbkluZGV4KSAlIHRoaXMuZGlyZWN0aW9ucy5sZW5ndGg7XG4gICAgICAgIHZhciBoZWFkID0gdGhpcy5zbmFrZS5nZXRIZWFkKCk7XG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSB0aGlzLnNuYWtlLmdldERpcmVjdGlvbigpO1xuICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSBlRGlyZWN0aW9uXzEuZGVmYXVsdC5MRUZUOlxuICAgICAgICAgICAgICAgIGlmIChoZWFkLmlzUmlnaHRPZih0aGlzLmZvb2QpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRWZXJ0aWNhbE9mZnNldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgZURpcmVjdGlvbl8xLmRlZmF1bHQuUklHSFQ6XG4gICAgICAgICAgICAgICAgaWYgKGhlYWQuaXNMZWZ0T2YodGhpcy5mb29kKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmVydGljYWxPZmZzZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIGVEaXJlY3Rpb25fMS5kZWZhdWx0LlVQOlxuICAgICAgICAgICAgICAgIGlmIChoZWFkLmlzVW5kZXIodGhpcy5mb29kKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SG9yaXpvbnRhbE9mZnNldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgZURpcmVjdGlvbl8xLmRlZmF1bHQuRE9XTjpcbiAgICAgICAgICAgICAgICBpZiAoaGVhZC5pc0Fib3ZlKHRoaXMuZm9vZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0SG9yaXpvbnRhbE9mZnNldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb25zW3RoaXMubGFzdEFjdGlvbkluZGV4XTtcbiAgICB9O1xuICAgIHJldHVybiBFbmVteUxvZ2ljO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEVuZW15TG9naWM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2NsYXNzZXMvQUkvRW5lbXlMb2dpYy5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==