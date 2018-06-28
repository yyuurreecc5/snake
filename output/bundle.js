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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/classes/AI/AI.ts":
/*!*****************************!*\
  !*** ./js/classes/AI/AI.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Snakes_EnemySnake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Snakes/EnemySnake */ "./js/classes/Snakes/EnemySnake.ts");
/* harmony import */ var _enums_eDirection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/eDirection */ "./js/enums/eDirection.ts");
/* harmony import */ var _Food__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Food */ "./js/classes/Food.ts");
/* harmony import */ var _Direction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Direction */ "./js/classes/Direction.ts");




var AI = /** @class */ (function () {
    function AI(scene) {
        this.scene = scene;
        this.phisyc = scene.getPhisyc();
    }
    AI.prototype.getVerticalOffset = function (snake, food, forbidDirections) {
        var head = snake.getHead();
        if (head.isUnder(food)) {
            if (!forbidDirections.includes(_enums_eDirection__WEBPACK_IMPORTED_MODULE_1__["default"].UP)) {
                return _enums_eDirection__WEBPACK_IMPORTED_MODULE_1__["default"].UP;
            }
            return _enums_eDirection__WEBPACK_IMPORTED_MODULE_1__["default"].DOWN;
        }
        else {
            if (!forbidDirections.includes(_enums_eDirection__WEBPACK_IMPORTED_MODULE_1__["default"].DOWN)) {
                return _enums_eDirection__WEBPACK_IMPORTED_MODULE_1__["default"].DOWN;
            }
            return _enums_eDirection__WEBPACK_IMPORTED_MODULE_1__["default"].UP;
        }
    };
    AI.prototype.getHorizontalOffset = function (snake, food, forbidDirections) {
        var head = snake.getHead();
        if (head.isRightOf(food)) {
            if (!forbidDirections.includes(_enums_eDirection__WEBPACK_IMPORTED_MODULE_1__["default"].LEFT)) {
                return _enums_eDirection__WEBPACK_IMPORTED_MODULE_1__["default"].LEFT;
            }
            return _enums_eDirection__WEBPACK_IMPORTED_MODULE_1__["default"].RIGHT;
        }
        else {
            if (!forbidDirections.includes(_enums_eDirection__WEBPACK_IMPORTED_MODULE_1__["default"].RIGHT)) {
                return _enums_eDirection__WEBPACK_IMPORTED_MODULE_1__["default"].RIGHT;
            }
            return _enums_eDirection__WEBPACK_IMPORTED_MODULE_1__["default"].LEFT;
        }
    };
    AI.prototype.getDirection = function (snake, forbidDirections) {
        if (forbidDirections === void 0) { forbidDirections = []; }
        var head = snake.getHead();
        var direction = snake.getDirection();
        var food = this.getNearestFood(snake);
        switch (direction) {
            case _enums_eDirection__WEBPACK_IMPORTED_MODULE_1__["default"].LEFT:
                if (head.isRightOf(food) && !forbidDirections.includes(direction)) {
                    return direction;
                }
                else {
                    return this.getVerticalOffset(snake, food, forbidDirections);
                }
            case _enums_eDirection__WEBPACK_IMPORTED_MODULE_1__["default"].RIGHT:
                if (head.isLeftOf(food) && !forbidDirections.includes(direction)) {
                    return direction;
                }
                else {
                    return this.getVerticalOffset(snake, food, forbidDirections);
                }
            case _enums_eDirection__WEBPACK_IMPORTED_MODULE_1__["default"].UP:
                if (head.isUnder(food) && !forbidDirections.includes(direction)) {
                    return direction;
                }
                else {
                    return this.getHorizontalOffset(snake, food, forbidDirections);
                }
            case _enums_eDirection__WEBPACK_IMPORTED_MODULE_1__["default"].DOWN:
                if (head.isAbove(food) && !forbidDirections.includes(direction)) {
                    return direction;
                }
                else {
                    return this.getHorizontalOffset(snake, food, forbidDirections);
                }
        }
    };
    AI.prototype.getNearestFood = function (snake) {
        var foods = this.scene.getObjects().filter(function (object) { return object instanceof _Food__WEBPACK_IMPORTED_MODULE_2__["default"]; });
        var head = snake.getHead();
        var sortedFoods = foods.sort(function (a, b) {
            var distanceA = Math.abs(head.x - a.x) + Math.abs(head.y - a.y);
            var distanceB = Math.abs(head.x - b.x) + Math.abs(head.y - b.y);
            return distanceA - distanceB;
        });
        return sortedFoods[0];
    };
    AI.prototype.proccess = function () {
        var _this = this;
        var objects = this.scene.getObjects();
        objects.forEach(function (object) {
            if (object instanceof _Snakes_EnemySnake__WEBPACK_IMPORTED_MODULE_0__["default"]) {
                _this.proccessDirection(object);
            }
        });
    };
    AI.prototype.proccessDirection = function (enemySnake) {
        var directions = _Direction__WEBPACK_IMPORTED_MODULE_3__["default"].getDirections();
        var checkedDirections = [];
        for (var i = 0; i < directions.length; i++) {
            var direction = this.getDirection(enemySnake, checkedDirections);
            if (this.canMove(enemySnake, direction)) {
                enemySnake.changeDirection(direction);
                break;
            }
            checkedDirections.push(direction);
        }
    };
    AI.prototype.canMove = function (snake, direction) {
        var sourceDirection = snake.getDirection();
        snake.changeDirection(direction);
        snake.move();
        var canMove = true;
        var collisions;
        if (snake.isEatSelf()) {
            canMove = false;
        }
        else if (this.phisyc.checkBoundaryOverflow()) {
            canMove = false;
        }
        else if (collisions = this.phisyc.detectCollisions()) {
            if (collisions.find(function (collision) { return collision.type !== 'EAT'; })) {
                canMove = false;
            }
        }
        snake.changeDirection(sourceDirection);
        snake.revertMove();
        return canMove;
    };
    return AI;
}());
/* harmony default export */ __webpack_exports__["default"] = (AI);


/***/ }),

/***/ "./js/classes/Controllers/Controller.ts":
/*!**********************************************!*\
  !*** ./js/classes/Controllers/Controller.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (Controller);


/***/ }),

/***/ "./js/classes/Controllers/KeyboardController.ts":
/*!******************************************************!*\
  !*** ./js/classes/Controllers/KeyboardController.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Controller */ "./js/classes/Controllers/Controller.ts");
/* harmony import */ var _enums_eDirection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/eDirection */ "./js/enums/eDirection.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var KeyboardController = /** @class */ (function (_super) {
    __extends(KeyboardController, _super);
    function KeyboardController() {
        var _this = _super.call(this) || this;
        window.addEventListener('keydown', function (event) {
            event.preventDefault();
            switch (event.key) {
                case 'ArrowUp':
                    _this.notifyObservers(_enums_eDirection__WEBPACK_IMPORTED_MODULE_1__["default"].UP);
                    break;
                case 'ArrowDown':
                    _this.notifyObservers(_enums_eDirection__WEBPACK_IMPORTED_MODULE_1__["default"].DOWN);
                    break;
                case 'ArrowLeft':
                    _this.notifyObservers(_enums_eDirection__WEBPACK_IMPORTED_MODULE_1__["default"].LEFT);
                    break;
                case 'ArrowRight':
                    _this.notifyObservers(_enums_eDirection__WEBPACK_IMPORTED_MODULE_1__["default"].RIGHT);
                    break;
            }
        });
        return _this;
    }
    return KeyboardController;
}(_Controller__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (KeyboardController);


/***/ }),

/***/ "./js/classes/Direction.ts":
/*!*********************************!*\
  !*** ./js/classes/Direction.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_eDirection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/eDirection */ "./js/enums/eDirection.ts");
/* harmony import */ var _helpers_math_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/math-helper */ "./js/helpers/math-helper.ts");


var Direction = /** @class */ (function () {
    function Direction(value) {
        this.value = value;
    }
    Direction.getRandom = function () {
        return _helpers_math_helper__WEBPACK_IMPORTED_MODULE_1__["default"].getRandomInt(0, 4);
    };
    Direction.getDirections = function () {
        var directions = [];
        for (var i = 0; i !== _enums_eDirection__WEBPACK_IMPORTED_MODULE_0__["default"].LAST; i++) {
            directions.push(i);
        }
        return directions;
    };
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
/* harmony default export */ __webpack_exports__["default"] = (Direction);


/***/ }),

/***/ "./js/classes/Field.ts":
/*!*****************************!*\
  !*** ./js/classes/Field.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ "./js/classes/Point.ts");
/* harmony import */ var _enums_eColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/eColor */ "./js/enums/eColor.ts");


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
                this.fields[row_i][col_i] = new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](row_i, col_i);
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
                ctx.strokeStyle = _enums_eColor__WEBPACK_IMPORTED_MODULE_1__["default"].WHITE;
                field.draw(ctx, 'stroke');
                ctx.fillStyle = _enums_eColor__WEBPACK_IMPORTED_MODULE_1__["default"].GREEN;
                field.draw(ctx);
            });
        });
    };
    Field.prototype.update = function () {
    };
    return Field;
}());
/* harmony default export */ __webpack_exports__["default"] = (Field);


/***/ }),

/***/ "./js/classes/Food.ts":
/*!****************************!*\
  !*** ./js/classes/Food.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ "./js/classes/Point.ts");
/* harmony import */ var _enums_eColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/eColor */ "./js/enums/eColor.ts");
/* harmony import */ var _enums_eObjectFlags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/eObjectFlags */ "./js/enums/eObjectFlags.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Food = /** @class */ (function (_super) {
    __extends(Food, _super);
    function Food(x, y, field) {
        var _this = _super.call(this, x, y) || this;
        _this.field = field;
        _this.flags = [_enums_eObjectFlags__WEBPACK_IMPORTED_MODULE_2__["default"].PICKUP];
        return _this;
    }
    Food.prototype.draw = function (ctx) {
        ctx.fillStyle = _enums_eColor__WEBPACK_IMPORTED_MODULE_1__["default"].YELLOW;
        _super.prototype.draw.call(this, ctx);
    };
    Food.prototype.getCoordinates = function () {
        return [this];
    };
    Food.prototype.update = function () {
        //console.log("food update");
    };
    return Food;
}(_Point__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Food);


/***/ }),

/***/ "./js/classes/FoodCreator.ts":
/*!***********************************!*\
  !*** ./js/classes/FoodCreator.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Food__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Food */ "./js/classes/Food.ts");
/* harmony import */ var _helpers_math_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/math-helper */ "./js/helpers/math-helper.ts");


var FoodCreator = /** @class */ (function () {
    function FoodCreator(field) {
        this.maxWidth = field.width;
        this.maxHeight = field.height;
        this.field = field;
    }
    FoodCreator.prototype.create = function () {
        var newFood = null;
        while (!newFood) {
            newFood = this.tryCreate();
        }
        return newFood;
    };
    FoodCreator.prototype.tryCreate = function () {
        var newFood = new _Food__WEBPACK_IMPORTED_MODULE_0__["default"](_helpers_math_helper__WEBPACK_IMPORTED_MODULE_1__["default"].getRandomInt(0, this.maxWidth - 1), _helpers_math_helper__WEBPACK_IMPORTED_MODULE_1__["default"].getRandomInt(0, this.maxHeight - 1), this.field);
        return newFood;
    };
    return FoodCreator;
}());
/* harmony default export */ __webpack_exports__["default"] = (FoodCreator);


/***/ }),

/***/ "./js/classes/Game.ts":
/*!****************************!*\
  !*** ./js/classes/Game.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Scene */ "./js/classes/Scene.ts");
/* harmony import */ var _enums_eGameState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/eGameState */ "./js/enums/eGameState.ts");


var Game = /** @class */ (function () {
    function Game() {
        this.gameSpeed = 100;
        this.scene = new _Scene__WEBPACK_IMPORTED_MODULE_0__["default"](this);
        this.timer = 0;
    }
    Game.prototype.init = function () {
        var _this = this;
        this.scene.update();
        this.state = _enums_eGameState__WEBPACK_IMPORTED_MODULE_1__["default"].PAUSE;
        document.addEventListener('keydown', function (e) {
            if (_this.state === _enums_eGameState__WEBPACK_IMPORTED_MODULE_1__["default"].PAUSE) {
                _this.run();
            }
        });
    };
    Game.prototype.run = function () {
        this.state = _enums_eGameState__WEBPACK_IMPORTED_MODULE_1__["default"].PLAY;
        this.timer = setInterval(this.scene.update.bind(this.scene), this.gameSpeed);
    };
    Game.prototype.gameOver = function () {
        clearInterval(this.timer);
        this.state = _enums_eGameState__WEBPACK_IMPORTED_MODULE_1__["default"].GAME_OVER;
    };
    return Game;
}());
/* harmony default export */ __webpack_exports__["default"] = (Game);


/***/ }),

/***/ "./js/classes/Physic/Phisyc.ts":
/*!*************************************!*\
  !*** ./js/classes/Physic/Phisyc.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_eObjectFlags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums/eObjectFlags */ "./js/enums/eObjectFlags.ts");
/* harmony import */ var _Snakes_Snake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Snakes/Snake */ "./js/classes/Snakes/Snake.ts");


var Physic = /** @class */ (function () {
    function Physic(objects) {
        this.objects = objects;
        this.observers = [];
    }
    Physic.prototype.addObserver = function (observer) {
        this.observers.push(observer);
    };
    Physic.prototype.removeObserver = function (observer) {
        console.warn('Здесь удаляем наблюдателя, не реализовал тк не было надобности');
    };
    Physic.prototype.notifyObservers = function (event) {
        this.observers.forEach(function (observer) {
            observer.handleEvent(event);
        });
    };
    Physic.prototype.proccess = function () {
        var _this = this;
        var collisions = this.detectCollisions();
        if (collisions) {
            collisions.forEach(function (collision) {
                _this.notifyObservers(collision);
            });
        }
        var overflowed = this.checkBoundaryOverflow();
        if (overflowed) {
            this.notifyObservers({ type: "BOUNDARY_OVERFLOW", data: overflowed });
        }
    };
    Physic.prototype.checkBoundaryOverflow = function () {
        var _this = this;
        return this.objects.find(function (object) {
            if (object instanceof _Snakes_Snake__WEBPACK_IMPORTED_MODULE_1__["default"]) {
                return _this.isOverflow(object);
            }
        });
    };
    Physic.prototype.isOverflow = function (object) {
        var head = object.getHead();
        if (head.x > object.field.width - 1 ||
            head.x < 0 ||
            head.y > object.field.height - 1 ||
            head.y < 0) {
            return true;
        }
        return false;
    };
    Physic.prototype.detectCollisions = function () {
        var _this = this;
        var collisions = [];
        this.objects.forEach(function (src, srcIndex) {
            if (typeof src.getCoordinates !== "undefined") {
                _this.objects.forEach(function (dest, destIndex) {
                    if (srcIndex !== destIndex) {
                        if (typeof dest.getCoordinates !== "undefined") {
                            var srcCoordinates = src.getCoordinates();
                            var destCoordinates = dest.getCoordinates();
                            if (_this.detectCollision(srcCoordinates, destCoordinates)) {
                                if (src.flags.includes(_enums_eObjectFlags__WEBPACK_IMPORTED_MODULE_0__["default"].SOLID) &&
                                    dest.flags.includes(_enums_eObjectFlags__WEBPACK_IMPORTED_MODULE_0__["default"].PICKUP)) {
                                    collisions.push({ type: "EAT", data: { src: src, dest: dest } });
                                }
                                else if (src.flags.includes(_enums_eObjectFlags__WEBPACK_IMPORTED_MODULE_0__["default"].SOLID) &&
                                    dest.flags.includes(_enums_eObjectFlags__WEBPACK_IMPORTED_MODULE_0__["default"].SOLID)) {
                                    collisions.push({ type: "SNAKE_COLLISION", data: { src: src, dest: dest } });
                                }
                            }
                        }
                    }
                    else {
                        if (src instanceof _Snakes_Snake__WEBPACK_IMPORTED_MODULE_1__["default"]) {
                            if (src.isEatSelf()) {
                                collisions.push({ type: "SNAKE_COLLISION", data: { src: src, dest: dest } });
                            }
                        }
                    }
                });
            }
        });
        if (collisions.length > 0) {
            return collisions;
        }
        return false;
    };
    Physic.prototype.detectCollision = function (src, dest) {
        return src.some(function (srcPoint) {
            return dest.some(function (destPoint) {
                if (srcPoint.x === destPoint.x && srcPoint.y === destPoint.y) {
                    return true;
                }
                return false;
            });
        });
    };
    return Physic;
}());
/* harmony default export */ __webpack_exports__["default"] = (Physic);


/***/ }),

/***/ "./js/classes/Point.ts":
/*!*****************************!*\
  !*** ./js/classes/Point.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_eDirection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/eDirection */ "./js/enums/eDirection.ts");

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
            case _enums_eDirection__WEBPACK_IMPORTED_MODULE_0__["default"].RIGHT:
                this.x += offset;
                break;
            case _enums_eDirection__WEBPACK_IMPORTED_MODULE_0__["default"].LEFT:
                this.x -= offset;
                break;
            case _enums_eDirection__WEBPACK_IMPORTED_MODULE_0__["default"].UP:
                this.y -= offset;
                break;
            case _enums_eDirection__WEBPACK_IMPORTED_MODULE_0__["default"].DOWN:
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
    Point.prototype.isRightOf = function (point) {
        if (this.x > point.x) {
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
    Point.SIZE = 15; // Размер в пикселях минимальной точки в игре
    return Point;
}());
/* harmony default export */ __webpack_exports__["default"] = (Point);


/***/ }),

/***/ "./js/classes/Scene.ts":
/*!*****************************!*\
  !*** ./js/classes/Scene.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Serializers_GameObjectsSerializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Serializers/GameObjectsSerializer */ "./js/classes/Serializers/GameObjectsSerializer.ts");
/* harmony import */ var _Serializers_GameData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Serializers/GameData */ "./js/classes/Serializers/GameData.ts");
/* harmony import */ var _Screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Screen */ "./js/classes/Screen.ts");
/* harmony import */ var _Physic_Phisyc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Physic/Phisyc */ "./js/classes/Physic/Phisyc.ts");
/* harmony import */ var _FoodCreator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FoodCreator */ "./js/classes/FoodCreator.ts");
/* harmony import */ var _AI_AI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AI/AI */ "./js/classes/AI/AI.ts");
/* harmony import */ var _enums_eGameState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../enums/eGameState */ "./js/enums/eGameState.ts");







var Scene = /** @class */ (function () {
    function Scene(game) {
        this.objectFactory = new _Serializers_GameObjectsSerializer__WEBPACK_IMPORTED_MODULE_0__["default"](_Serializers_GameData__WEBPACK_IMPORTED_MODULE_1__["default"]);
        this.objects = this.objectFactory.createAll();
        this.screen = new _Screen__WEBPACK_IMPORTED_MODULE_2__["default"](this.objects);
        this.physic = new _Physic_Phisyc__WEBPACK_IMPORTED_MODULE_3__["default"](this.objects);
        this.physic.addObserver(this);
        this.ai = new _AI_AI__WEBPACK_IMPORTED_MODULE_5__["default"](this);
        this.game = game;
    }
    Scene.prototype.getObjects = function () {
        return this.objects;
    };
    Scene.prototype.getPhisyc = function () {
        return this.physic;
    };
    Scene.prototype.getAI = function () {
        return this.ai;
    };
    Scene.prototype.update = function () {
        this.objects.forEach(function (object) {
            object.update();
        });
        this.ai.proccess();
        this.physic.proccess();
        if (this.lastPhisycEvent) {
            this.respondPhisycEvent(this.lastPhisycEvent);
        }
        if (this.game.state !== _enums_eGameState__WEBPACK_IMPORTED_MODULE_6__["default"].GAME_OVER) {
            this.screen.draw();
        }
    };
    Scene.prototype.addObject = function (object) {
        this.objects.push(object);
    };
    Scene.prototype.handleEvent = function (event) {
        this.lastPhisycEvent = event;
    };
    Scene.prototype.respondPhisycEvent = function (event) {
        switch (event.type) {
            case "SNAKE_COLLISION":
                this.game.gameOver();
                break;
            case "EAT":
                this.removeObject(event.data.dest);
                var foodCreator = new _FoodCreator__WEBPACK_IMPORTED_MODULE_4__["default"](event.data.dest.field);
                this.addObject(foodCreator.create());
                event.data.src.grow();
                break;
            case "EAT_SELF":
                this.game.gameOver();
                break;
            case "BOUNDARY_OVERFLOW":
                this.game.gameOver();
                break;
            default: console.log("unhandle event: ", event);
        }
        this.lastPhisycEvent = null;
    };
    Scene.prototype.removeObject = function (removableObject) {
        var _this = this;
        this.objects.some(function (object, index) {
            if (object === removableObject) {
                _this.objects.splice(index, 1);
            }
        });
    };
    return Scene;
}());
/* harmony default export */ __webpack_exports__["default"] = (Scene);


/***/ }),

/***/ "./js/classes/Screen.ts":
/*!******************************!*\
  !*** ./js/classes/Screen.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Screen = /** @class */ (function () {
    function Screen(objects) {
        this.canvas = null;
        this.ctx = null;
        this.toDrawObjects = [];
        this.canvas = document.getElementById('canvas');
        this.canvas.width = 1000;
        this.canvas.height = 1000;
        this.ctx = this.canvas.getContext('2d');
        this.toDrawObjects = objects;
    }
    Screen.prototype.draw = function () {
        var _this = this;
        this.toDrawObjects.forEach(function (object) {
            object.draw(_this.ctx);
        });
    };
    return Screen;
}());
/* harmony default export */ __webpack_exports__["default"] = (Screen);


/***/ }),

/***/ "./js/classes/Serializers/ColorSerializer.ts":
/*!***************************************************!*\
  !*** ./js/classes/Serializers/ColorSerializer.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_eColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums/eColor */ "./js/enums/eColor.ts");

var ColorSerializer = /** @class */ (function () {
    function ColorSerializer() {
    }
    ColorSerializer.serialize = function (jsonColor) {
        switch (jsonColor) {
            case "blue": return _enums_eColor__WEBPACK_IMPORTED_MODULE_0__["default"].BLUE;
            case "red": return _enums_eColor__WEBPACK_IMPORTED_MODULE_0__["default"].RED;
            case "green": return _enums_eColor__WEBPACK_IMPORTED_MODULE_0__["default"].GREEN;
            case "yellow": return _enums_eColor__WEBPACK_IMPORTED_MODULE_0__["default"].YELLOW;
            case "white": return _enums_eColor__WEBPACK_IMPORTED_MODULE_0__["default"].WHITE;
        }
    };
    return ColorSerializer;
}());
/* harmony default export */ __webpack_exports__["default"] = (ColorSerializer);


/***/ }),

/***/ "./js/classes/Serializers/DirectionSerializer.ts":
/*!*******************************************************!*\
  !*** ./js/classes/Serializers/DirectionSerializer.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Direction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Direction */ "./js/classes/Direction.ts");
/* harmony import */ var _enums_eDirection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/eDirection */ "./js/enums/eDirection.ts");


var DirectionSerializer = /** @class */ (function () {
    function DirectionSerializer() {
    }
    DirectionSerializer.serialize = function (jsonDirection) {
        switch (jsonDirection) {
            case "left": return new _Direction__WEBPACK_IMPORTED_MODULE_0__["default"](_enums_eDirection__WEBPACK_IMPORTED_MODULE_1__["default"].LEFT);
            case "right": return new _Direction__WEBPACK_IMPORTED_MODULE_0__["default"](_enums_eDirection__WEBPACK_IMPORTED_MODULE_1__["default"].RIGHT);
            case "up": return new _Direction__WEBPACK_IMPORTED_MODULE_0__["default"](_enums_eDirection__WEBPACK_IMPORTED_MODULE_1__["default"].UP);
            case "down": return new _Direction__WEBPACK_IMPORTED_MODULE_0__["default"](_enums_eDirection__WEBPACK_IMPORTED_MODULE_1__["default"].DOWN);
            default:
                console.warn("incorrect direction value from json file");
                break;
        }
    };
    return DirectionSerializer;
}());
/* harmony default export */ __webpack_exports__["default"] = (DirectionSerializer);


/***/ }),

/***/ "./js/classes/Serializers/EnemySnakeSerializer.ts":
/*!********************************************************!*\
  !*** ./js/classes/Serializers/EnemySnakeSerializer.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Point */ "./js/classes/Point.ts");
/* harmony import */ var _Snakes_EnemySnake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Snakes/EnemySnake */ "./js/classes/Snakes/EnemySnake.ts");
/* harmony import */ var _ColorSerializer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorSerializer */ "./js/classes/Serializers/ColorSerializer.ts");
/* harmony import */ var _DirectionSerializer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DirectionSerializer */ "./js/classes/Serializers/DirectionSerializer.ts");




var EnemySnakeFactory = /** @class */ (function () {
    function EnemySnakeFactory() {
    }
    EnemySnakeFactory.create = function (json, field) {
        var direction = _DirectionSerializer__WEBPACK_IMPORTED_MODULE_3__["default"].serialize(json.direction);
        var position = new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](json.position.x, json.position.y);
        var bodyColor = _ColorSerializer__WEBPACK_IMPORTED_MODULE_2__["default"].serialize(json.bodyColor);
        var headColor = _ColorSerializer__WEBPACK_IMPORTED_MODULE_2__["default"].serialize(json.headColor);
        var size = json.size;
        return new _Snakes_EnemySnake__WEBPACK_IMPORTED_MODULE_1__["default"]({
            direction: direction,
            position: position,
            bodyColor: bodyColor,
            headColor: headColor,
            size: size,
            field: field
        });
    };
    return EnemySnakeFactory;
}());
/* harmony default export */ __webpack_exports__["default"] = (EnemySnakeFactory);


/***/ }),

/***/ "./js/classes/Serializers/GameData.ts":
/*!********************************************!*\
  !*** ./js/classes/Serializers/GameData.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var gameData = {
    "fields": [
        {
            "width": 30,
            "height": 30,
            "entries": {
                "snakes": [
                    {
                        "size": 5,
                        "bodyColor": "red",
                        "headColor": "blue",
                        "direction": "left",
                        "position": {
                            "x": 11,
                            "y": 11
                        },
                        "type": "enemy"
                    },
                    {
                        "size": 5,
                        "bodyColor": "red",
                        "headColor": "white",
                        "direction": "down",
                        "position": {
                            "x": 29,
                            "y": 25
                        },
                        "type": "enemy"
                    },
                    {
                        "size": 5,
                        "bodyColor": "blue",
                        "headColor": "red",
                        "direction": "down",
                        "position": {
                            "x": 15,
                            "y": 15
                        },
                        "type": "player"
                    }
                ]
            },
            "eats": [
                {
                    "x": 29,
                    "y": 0
                },
                {
                    "x": 29,
                    "y": 29
                },
                {
                    "x": 4,
                    "y": 4
                }
            ]
        }
    ]
};
/* harmony default export */ __webpack_exports__["default"] = (gameData);


/***/ }),

/***/ "./js/classes/Serializers/GameObjectsSerializer.ts":
/*!*********************************************************!*\
  !*** ./js/classes/Serializers/GameObjectsSerializer.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Field */ "./js/classes/Field.ts");
/* harmony import */ var _PlayerSnakeSerializer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlayerSnakeSerializer */ "./js/classes/Serializers/PlayerSnakeSerializer.ts");
/* harmony import */ var _Food__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Food */ "./js/classes/Food.ts");
/* harmony import */ var _EnemySnakeSerializer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EnemySnakeSerializer */ "./js/classes/Serializers/EnemySnakeSerializer.ts");




var ObjectFactory = /** @class */ (function () {
    function ObjectFactory(gameData) {
        this.gameData = gameData;
        this.objects = [];
    }
    ObjectFactory.prototype.createAll = function () {
        var _this = this;
        this.gameData.fields.forEach(function (fieldJSON) {
            var field = new _Field__WEBPACK_IMPORTED_MODULE_0__["default"](fieldJSON.width, fieldJSON.height);
            _this.objects.push(field);
            var snakes = fieldJSON.entries.snakes;
            snakes.forEach(function (snake) {
                if (snake.type === "player") {
                    _this.objects.push(_PlayerSnakeSerializer__WEBPACK_IMPORTED_MODULE_1__["default"].create(snake, field));
                }
                else if (snake.type === "enemy") {
                    _this.objects.push(_EnemySnakeSerializer__WEBPACK_IMPORTED_MODULE_3__["default"].create(snake, field));
                }
            });
            var eats = fieldJSON.eats;
            eats.forEach(function (eat) {
                _this.objects.push(new _Food__WEBPACK_IMPORTED_MODULE_2__["default"](eat.x, eat.y, field));
            });
        });
        return this.objects;
    };
    return ObjectFactory;
}());
/* harmony default export */ __webpack_exports__["default"] = (ObjectFactory);


/***/ }),

/***/ "./js/classes/Serializers/PlayerSnakeSerializer.ts":
/*!*********************************************************!*\
  !*** ./js/classes/Serializers/PlayerSnakeSerializer.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Point */ "./js/classes/Point.ts");
/* harmony import */ var _ColorSerializer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorSerializer */ "./js/classes/Serializers/ColorSerializer.ts");
/* harmony import */ var _DirectionSerializer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DirectionSerializer */ "./js/classes/Serializers/DirectionSerializer.ts");
/* harmony import */ var _Snakes_PlayerSnake__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Snakes/PlayerSnake */ "./js/classes/Snakes/PlayerSnake.ts");




var PlayerSnakeFactory = /** @class */ (function () {
    function PlayerSnakeFactory() {
    }
    PlayerSnakeFactory.create = function (json, field) {
        var direction = _DirectionSerializer__WEBPACK_IMPORTED_MODULE_2__["default"].serialize(json.direction);
        var position = new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](json.position.x, json.position.y);
        var bodyColor = _ColorSerializer__WEBPACK_IMPORTED_MODULE_1__["default"].serialize(json.bodyColor);
        var headColor = _ColorSerializer__WEBPACK_IMPORTED_MODULE_1__["default"].serialize(json.headColor);
        var size = json.size;
        return new _Snakes_PlayerSnake__WEBPACK_IMPORTED_MODULE_3__["default"]({
            direction: direction,
            position: position,
            bodyColor: bodyColor,
            headColor: headColor,
            size: size,
            field: field
        });
    };
    return PlayerSnakeFactory;
}());
/* harmony default export */ __webpack_exports__["default"] = (PlayerSnakeFactory);


/***/ }),

/***/ "./js/classes/Snakes/EnemySnake.ts":
/*!*****************************************!*\
  !*** ./js/classes/Snakes/EnemySnake.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Snake */ "./js/classes/Snakes/Snake.ts");
/* harmony import */ var _enums_eColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/eColor */ "./js/enums/eColor.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var EnemySnake = /** @class */ (function (_super) {
    __extends(EnemySnake, _super);
    function EnemySnake(params) {
        var _this = _super.call(this, params) || this;
        _this.DEFAULT_BODY_COLOR = _enums_eColor__WEBPACK_IMPORTED_MODULE_1__["default"].YELLOW;
        _this.DEFAULT_HEAD_COLOR = _enums_eColor__WEBPACK_IMPORTED_MODULE_1__["default"].WHITE;
        _this.HEAD_COLOR = _this.HEAD_COLOR || _this.DEFAULT_HEAD_COLOR;
        _this.BODY_COLOR = _this.BODY_COLOR || _this.DEFAULT_BODY_COLOR;
        return _this;
    }
    return EnemySnake;
}(_Snake__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (EnemySnake);


/***/ }),

/***/ "./js/classes/Snakes/PlayerSnake.ts":
/*!******************************************!*\
  !*** ./js/classes/Snakes/PlayerSnake.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Snake */ "./js/classes/Snakes/Snake.ts");
/* harmony import */ var _enums_eColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/eColor */ "./js/enums/eColor.ts");
/* harmony import */ var _Controllers_KeyboardController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controllers/KeyboardController */ "./js/classes/Controllers/KeyboardController.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var PlayerSnake = /** @class */ (function (_super) {
    __extends(PlayerSnake, _super);
    function PlayerSnake(params) {
        var _this = _super.call(this, params) || this;
        _this.DEFAULT_HEAD_COLOR = _enums_eColor__WEBPACK_IMPORTED_MODULE_1__["default"].RED;
        _this.DEFAULT_BODY_COLOR = _enums_eColor__WEBPACK_IMPORTED_MODULE_1__["default"].BLUE;
        _this.HEAD_COLOR = _this.HEAD_COLOR || _this.DEFAULT_HEAD_COLOR;
        _this.BODY_COLOR = _this.BODY_COLOR || _this.DEFAULT_BODY_COLOR;
        _this.controller = new _Controllers_KeyboardController__WEBPACK_IMPORTED_MODULE_2__["default"]();
        _this.controller.addObserver(_this);
        return _this;
    }
    return PlayerSnake;
}(_Snake__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (PlayerSnake);


/***/ }),

/***/ "./js/classes/Snakes/Snake.ts":
/*!************************************!*\
  !*** ./js/classes/Snakes/Snake.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_eDirection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums/eDirection */ "./js/enums/eDirection.ts");
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Point */ "./js/classes/Point.ts");
/* harmony import */ var _enums_eObjectFlags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums/eObjectFlags */ "./js/enums/eObjectFlags.ts");



var Snake = /** @class */ (function () {
    function Snake(params) {
        this.body = [];
        this.position = null;
        this.controller = null;
        this.direction = null;
        this.isGrowing = false;
        this.lastEvent = null;
        this.prevStep = null;
        this.flags = [_enums_eObjectFlags__WEBPACK_IMPORTED_MODULE_2__["default"].SOLID];
        this.direction = params.direction;
        this.position = params.position;
        this.HEAD_COLOR = params.headColor ? params.headColor : null;
        this.BODY_COLOR = params.bodyColor ? params.bodyColor : null;
        this.field = params.field;
        this.init(params.size);
    }
    Snake.prototype.init = function (size) {
        switch (this.direction.value) {
            case _enums_eDirection__WEBPACK_IMPORTED_MODULE_0__["default"].LEFT:
                for (var i = 0; i < size; i++) {
                    this.body.push(new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](this.position.x + i, this.position.y));
                }
                break;
            case _enums_eDirection__WEBPACK_IMPORTED_MODULE_0__["default"].RIGHT:
                for (var i = 0; i < size; i++) {
                    this.body.push(new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](this.position.x - i, this.position.y));
                }
                break;
            case _enums_eDirection__WEBPACK_IMPORTED_MODULE_0__["default"].UP:
                for (var i = 0; i < size; i++) {
                    this.body.push(new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](this.position.x, this.position.y + i));
                }
                break;
            case _enums_eDirection__WEBPACK_IMPORTED_MODULE_0__["default"].DOWN:
                for (var i = 0; i < size; i++) {
                    this.body.push(new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](this.position.x, this.position.y - i));
                }
                break;
            default:
                console.error('Ошибка инициализации змейки');
                break;
        }
    };
    Snake.prototype.handleEvent = function (event) {
        this.lastEvent = event;
    };
    Snake.prototype.changeDirection = function (newDirection) {
        if (this.direction.isOpposite(newDirection)) {
            return;
        }
        switch (newDirection) {
            case _enums_eDirection__WEBPACK_IMPORTED_MODULE_0__["default"].UP:
                this.direction.value = _enums_eDirection__WEBPACK_IMPORTED_MODULE_0__["default"].UP;
                break;
            case _enums_eDirection__WEBPACK_IMPORTED_MODULE_0__["default"].DOWN:
                this.direction.value = _enums_eDirection__WEBPACK_IMPORTED_MODULE_0__["default"].DOWN;
                break;
            case _enums_eDirection__WEBPACK_IMPORTED_MODULE_0__["default"].LEFT:
                this.direction.value = _enums_eDirection__WEBPACK_IMPORTED_MODULE_0__["default"].LEFT;
                break;
            case _enums_eDirection__WEBPACK_IMPORTED_MODULE_0__["default"].RIGHT:
                this.direction.value = _enums_eDirection__WEBPACK_IMPORTED_MODULE_0__["default"].RIGHT;
                break;
            default:
            //console.warn('Не обработанное событие в классе Snake');
        }
    };
    Snake.prototype.getHead = function () {
        return this.body[0] || null;
    };
    Snake.prototype.getCoordinates = function () {
        return this.body;
    };
    Snake.prototype.grow = function () {
        this.isGrowing = true;
    };
    Snake.prototype.savePrevStep = function () {
        this.prevStep = {
            position: new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](this.position.x, this.position.y),
            body: []
        };
        for (var i = 0; i < this.body.length; i++) {
            this.prevStep.body.push(new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](this.body[i].x, this.body[i].y));
        }
    };
    Snake.prototype.move = function () {
        this.savePrevStep();
        this.position.move(this.direction.value);
        for (var i = this.body.length - 1; i > 0; i--) {
            this.body[i].setNewPosition(this.body[i - 1]);
        }
        this.getHead().move(this.direction.value);
    };
    Snake.prototype.revertMove = function () {
        this.position = new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](this.prevStep.position.x, this.prevStep.position.y);
        this.body = [];
        for (var i = 0; i < this.prevStep.body.length; i++) {
            this.body.push(new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](this.prevStep.body[i].x, this.prevStep.body[i].y));
        }
    };
    Snake.prototype.update = function () {
        this.changeDirection(this.lastEvent);
        if (this.isGrowing) {
            var lastElement = Object.assign({}, this.body[this.body.length - 1]);
            this.body.push(new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](lastElement.x, lastElement.y));
            this.isGrowing = false;
        }
        this.move();
    };
    Snake.prototype.getDirection = function () {
        return this.direction.value;
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
/* harmony default export */ __webpack_exports__["default"] = (Snake);


/***/ }),

/***/ "./js/enums/eColor.ts":
/*!****************************!*\
  !*** ./js/enums/eColor.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var eColor;
(function (eColor) {
    eColor["WHITE"] = "#FFFFFF";
    eColor["BLUE"] = "#3F51B5";
    eColor["RED"] = "#F44336";
    eColor["GREEN"] = "#00BCD4";
    eColor["YELLOW"] = "#FFC107";
})(eColor || (eColor = {}));
/* harmony default export */ __webpack_exports__["default"] = (eColor);


/***/ }),

/***/ "./js/enums/eDirection.ts":
/*!********************************!*\
  !*** ./js/enums/eDirection.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var eDirection;
(function (eDirection) {
    eDirection[eDirection["LEFT"] = 0] = "LEFT";
    eDirection[eDirection["UP"] = 1] = "UP";
    eDirection[eDirection["RIGHT"] = 2] = "RIGHT";
    eDirection[eDirection["DOWN"] = 3] = "DOWN";
    eDirection[eDirection["LAST"] = 4] = "LAST";
})(eDirection || (eDirection = {}));
/* harmony default export */ __webpack_exports__["default"] = (eDirection);


/***/ }),

/***/ "./js/enums/eGameState.ts":
/*!********************************!*\
  !*** ./js/enums/eGameState.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var eGameState;
(function (eGameState) {
    eGameState[eGameState["PLAY"] = 0] = "PLAY";
    eGameState[eGameState["PAUSE"] = 1] = "PAUSE";
    eGameState[eGameState["GAME_OVER"] = 2] = "GAME_OVER";
})(eGameState || (eGameState = {}));
/* harmony default export */ __webpack_exports__["default"] = (eGameState);


/***/ }),

/***/ "./js/enums/eObjectFlags.ts":
/*!**********************************!*\
  !*** ./js/enums/eObjectFlags.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var eObjectFlags;
(function (eObjectFlags) {
    eObjectFlags[eObjectFlags["SOLID"] = 1] = "SOLID";
    eObjectFlags[eObjectFlags["PICKUP"] = 2] = "PICKUP";
})(eObjectFlags || (eObjectFlags = {}));
/* harmony default export */ __webpack_exports__["default"] = (eObjectFlags);


/***/ }),

/***/ "./js/helpers/math-helper.ts":
/*!***********************************!*\
  !*** ./js/helpers/math-helper.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Возвращает случайное целое число между min (включительно) и max (не включая max)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
/* harmony default export */ __webpack_exports__["default"] = ({
    getRandomInt: getRandomInt
});


/***/ }),

/***/ "./js/index.ts":
/*!*********************!*\
  !*** ./js/index.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Game */ "./js/classes/Game.ts");

window.onload = function () {
    var game = new _classes_Game__WEBPACK_IMPORTED_MODULE_0__["default"]();
    game.init();
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9BSS9BSS50cyIsIndlYnBhY2s6Ly8vLi9qcy9jbGFzc2VzL0NvbnRyb2xsZXJzL0NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9Db250cm9sbGVycy9LZXlib2FyZENvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9EaXJlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9GaWVsZC50cyIsIndlYnBhY2s6Ly8vLi9qcy9jbGFzc2VzL0Zvb2QudHMiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9Gb29kQ3JlYXRvci50cyIsIndlYnBhY2s6Ly8vLi9qcy9jbGFzc2VzL0dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9QaHlzaWMvUGhpc3ljLnRzIiwid2VicGFjazovLy8uL2pzL2NsYXNzZXMvUG9pbnQudHMiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9TY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9qcy9jbGFzc2VzL1NjcmVlbi50cyIsIndlYnBhY2s6Ly8vLi9qcy9jbGFzc2VzL1NlcmlhbGl6ZXJzL0NvbG9yU2VyaWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9qcy9jbGFzc2VzL1NlcmlhbGl6ZXJzL0RpcmVjdGlvblNlcmlhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9TZXJpYWxpemVycy9FbmVteVNuYWtlU2VyaWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9qcy9jbGFzc2VzL1NlcmlhbGl6ZXJzL0dhbWVEYXRhLnRzIiwid2VicGFjazovLy8uL2pzL2NsYXNzZXMvU2VyaWFsaXplcnMvR2FtZU9iamVjdHNTZXJpYWxpemVyLnRzIiwid2VicGFjazovLy8uL2pzL2NsYXNzZXMvU2VyaWFsaXplcnMvUGxheWVyU25ha2VTZXJpYWxpemVyLnRzIiwid2VicGFjazovLy8uL2pzL2NsYXNzZXMvU25ha2VzL0VuZW15U25ha2UudHMiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9TbmFrZXMvUGxheWVyU25ha2UudHMiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9TbmFrZXMvU25ha2UudHMiLCJ3ZWJwYWNrOi8vLy4vanMvZW51bXMvZUNvbG9yLnRzIiwid2VicGFjazovLy8uL2pzL2VudW1zL2VEaXJlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vanMvZW51bXMvZUdhbWVTdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9qcy9lbnVtcy9lT2JqZWN0RmxhZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vanMvaGVscGVycy9tYXRoLWhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9qcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRjhDO0FBQ0U7QUFDckI7QUFFVTtBQUVyQztJQUdJLFlB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QUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUN6RCxDQUFDO0FBRUQsK0RBQWU7SUFDWCxZQUFZO0NBQ2Y7Ozs7Ozs7Ozs7Ozs7OztBQ1BrQztBQUVuQyxNQUFNLENBQUMsTUFBTSxHQUFHO0lBQ1osSUFBSSxJQUFJLEdBQUcsSUFBSSxxREFBSSxFQUFFLENBQUM7SUFDdEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2hCLENBQUMsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IFNjZW5lIGZyb20gXCIuLi9TY2VuZVwiO1xuaW1wb3J0IEVuZW15U25ha2UgZnJvbSBcIi4uL1NuYWtlcy9FbmVteVNuYWtlXCI7XG5pbXBvcnQgZURpcmVjdGlvbiBmcm9tIFwiLi4vLi4vZW51bXMvZURpcmVjdGlvblwiO1xuaW1wb3J0IEZvb2QgZnJvbSBcIi4uL0Zvb2RcIjtcbmltcG9ydCBQaHlzaWMgZnJvbSBcIi4uL1BoeXNpYy9QaGlzeWNcIjtcbmltcG9ydCBEaXJlY3Rpb24gZnJvbSBcIi4uL0RpcmVjdGlvblwiO1xuXG5jbGFzcyBBSSB7XG4gICAgcHJpdmF0ZSBzY2VuZTogU2NlbmU7XG4gICAgcHJpdmF0ZSBwaGlzeWM6IFBoeXNpYztcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogU2NlbmUpIHtcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xuICAgICAgICB0aGlzLnBoaXN5YyA9IHNjZW5lLmdldFBoaXN5YygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0VmVydGljYWxPZmZzZXQoc25ha2UsIGZvb2QsIGZvcmJpZERpcmVjdGlvbnMpIHtcbiAgICAgICAgbGV0IGhlYWQgPSBzbmFrZS5nZXRIZWFkKCk7XG4gICAgICAgIGlmKGhlYWQuaXNVbmRlcihmb29kKSkge1xuICAgICAgICAgICAgaWYoICFmb3JiaWREaXJlY3Rpb25zLmluY2x1ZGVzKGVEaXJlY3Rpb24uVVAgKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlRGlyZWN0aW9uLlVQO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGVEaXJlY3Rpb24uRE9XTjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmKCAhZm9yYmlkRGlyZWN0aW9ucy5pbmNsdWRlcyhlRGlyZWN0aW9uLkRPV04pICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlRGlyZWN0aW9uLkRPV047XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZURpcmVjdGlvbi5VUDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0SG9yaXpvbnRhbE9mZnNldChzbmFrZSwgZm9vZCwgZm9yYmlkRGlyZWN0aW9ucykge1xuICAgICAgICBsZXQgaGVhZCA9IHNuYWtlLmdldEhlYWQoKTtcbiAgICAgICAgaWYoaGVhZC5pc1JpZ2h0T2YoZm9vZCkpIHtcbiAgICAgICAgICAgIGlmKCFmb3JiaWREaXJlY3Rpb25zLmluY2x1ZGVzKGVEaXJlY3Rpb24uTEVGVCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZURpcmVjdGlvbi5MRUZUO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGVEaXJlY3Rpb24uUklHSFQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZighZm9yYmlkRGlyZWN0aW9ucy5pbmNsdWRlcyhlRGlyZWN0aW9uLlJJR0hUKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlRGlyZWN0aW9uLlJJR0hUO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGVEaXJlY3Rpb24uTEVGVDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0RGlyZWN0aW9uKHNuYWtlLCBmb3JiaWREaXJlY3Rpb25zID0gW10pIHtcbiAgICAgICAgbGV0IGhlYWQgPSBzbmFrZS5nZXRIZWFkKCk7XG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSBzbmFrZS5nZXREaXJlY3Rpb24oKTtcbiAgICAgICAgbGV0IGZvb2QgPSB0aGlzLmdldE5lYXJlc3RGb29kKHNuYWtlKTtcblxuICAgICAgICBzd2l0Y2goZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIGVEaXJlY3Rpb24uTEVGVDpcbiAgICAgICAgICAgICAgICBpZihoZWFkLmlzUmlnaHRPZihmb29kKSAmJiAhZm9yYmlkRGlyZWN0aW9ucy5pbmNsdWRlcyhkaXJlY3Rpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb247XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmVydGljYWxPZmZzZXQoc25ha2UsIGZvb2QsIGZvcmJpZERpcmVjdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgZURpcmVjdGlvbi5SSUdIVDpcbiAgICAgICAgICAgICAgICBpZihoZWFkLmlzTGVmdE9mKGZvb2QpICYmICFmb3JiaWREaXJlY3Rpb25zLmluY2x1ZGVzKGRpcmVjdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRWZXJ0aWNhbE9mZnNldChzbmFrZSwgZm9vZCwgZm9yYmlkRGlyZWN0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBlRGlyZWN0aW9uLlVQOlxuICAgICAgICAgICAgICAgIGlmKGhlYWQuaXNVbmRlcihmb29kKSAmJiAhZm9yYmlkRGlyZWN0aW9ucy5pbmNsdWRlcyhkaXJlY3Rpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb247XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SG9yaXpvbnRhbE9mZnNldChzbmFrZSwgZm9vZCwgZm9yYmlkRGlyZWN0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBlRGlyZWN0aW9uLkRPV046XG4gICAgICAgICAgICAgICAgaWYoaGVhZC5pc0Fib3ZlKGZvb2QpICYmICFmb3JiaWREaXJlY3Rpb25zLmluY2x1ZGVzKGRpcmVjdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRIb3Jpem9udGFsT2Zmc2V0KHNuYWtlLCBmb29kLCBmb3JiaWREaXJlY3Rpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldE5lYXJlc3RGb29kKHNuYWtlKSB7XG4gICAgICAgIGxldCBmb29kcyA9IHRoaXMuc2NlbmUuZ2V0T2JqZWN0cygpLmZpbHRlcihvYmplY3QgPT4gb2JqZWN0IGluc3RhbmNlb2YgRm9vZCk7XG4gICAgICAgIGxldCBoZWFkID0gc25ha2UuZ2V0SGVhZCgpO1xuICAgICAgICBsZXQgc29ydGVkRm9vZHMgPSBmb29kcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgIGxldCBkaXN0YW5jZUEgPSBNYXRoLmFicyhoZWFkLnggLSBhLngpICsgTWF0aC5hYnMoaGVhZC55IC0gYS55KTtcbiAgICAgICAgICAgbGV0IGRpc3RhbmNlQiA9IE1hdGguYWJzKGhlYWQueCAtIGIueCkgKyBNYXRoLmFicyhoZWFkLnkgLSBiLnkpO1xuICAgICAgICAgICByZXR1cm4gZGlzdGFuY2VBIC0gZGlzdGFuY2VCO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc29ydGVkRm9vZHNbMF07XG4gICAgfVxuXG4gICAgcHJvY2Nlc3MoKSB7XG4gICAgICAgIGxldCBvYmplY3RzID0gdGhpcy5zY2VuZS5nZXRPYmplY3RzKCk7XG4gICAgICAgIG9iamVjdHMuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZihvYmplY3QgaW5zdGFuY2VvZiBFbmVteVNuYWtlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jY2Vzc0RpcmVjdGlvbihvYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHByb2NjZXNzRGlyZWN0aW9uKGVuZW15U25ha2U6IEVuZW15U25ha2UpIHtcbiAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSBEaXJlY3Rpb24uZ2V0RGlyZWN0aW9ucygpO1xuICAgICAgICBsZXQgY2hlY2tlZERpcmVjdGlvbnMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGRpcmVjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb24gPSB0aGlzLmdldERpcmVjdGlvbihlbmVteVNuYWtlLCBjaGVja2VkRGlyZWN0aW9ucyk7XG4gICAgICAgICAgICBpZih0aGlzLmNhbk1vdmUoZW5lbXlTbmFrZSwgZGlyZWN0aW9uKSkge1xuICAgICAgICAgICAgICAgIGVuZW15U25ha2UuY2hhbmdlRGlyZWN0aW9uKGRpcmVjdGlvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGVja2VkRGlyZWN0aW9ucy5wdXNoKGRpcmVjdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjYW5Nb3ZlKHNuYWtlLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgbGV0IHNvdXJjZURpcmVjdGlvbiA9IHNuYWtlLmdldERpcmVjdGlvbigpO1xuICAgICAgICBzbmFrZS5jaGFuZ2VEaXJlY3Rpb24oZGlyZWN0aW9uKTtcbiAgICAgICAgc25ha2UubW92ZSgpO1xuXG4gICAgICAgIGxldCBjYW5Nb3ZlID0gdHJ1ZTtcbiAgICAgICAgbGV0IGNvbGxpc2lvbnM7XG4gICAgICAgIGlmKHNuYWtlLmlzRWF0U2VsZigpKSB7XG4gICAgICAgICAgICBjYW5Nb3ZlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnBoaXN5Yy5jaGVja0JvdW5kYXJ5T3ZlcmZsb3coKSkge1xuICAgICAgICAgICAgY2FuTW92ZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYoY29sbGlzaW9ucyA9IHRoaXMucGhpc3ljLmRldGVjdENvbGxpc2lvbnMoKSkge1xuICAgICAgICAgICAgaWYoY29sbGlzaW9ucy5maW5kKGNvbGxpc2lvbiA9PiBjb2xsaXNpb24udHlwZSAhPT0gJ0VBVCcpKSB7XG4gICAgICAgICAgICAgICAgY2FuTW92ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNuYWtlLmNoYW5nZURpcmVjdGlvbihzb3VyY2VEaXJlY3Rpb24pO1xuICAgICAgICBzbmFrZS5yZXZlcnRNb3ZlKCk7XG4gICAgICAgIHJldHVybiBjYW5Nb3ZlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQUk7IiwiaW1wb3J0IGlPYnNlcnZhYmxlIGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2lPYnNlcnZhYmxlXCI7XG5pbXBvcnQgaU9ic2VydmVyIGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2lPYnNlcnZlclwiO1xuXG5jbGFzcyBDb250cm9sbGVyIGltcGxlbWVudHMgaU9ic2VydmFibGUge1xuICAgIHByb3RlY3RlZCBvYnNlcnZlcnM6IGlPYnNlcnZlcltdID0gW107XG5cbiAgICBwdWJsaWMgYWRkT2JzZXJ2ZXIob2JzZXJ2ZXI6IGlPYnNlcnZlcikge1xuICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKG9ic2VydmVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlT2JzZXJ2ZXIob2JzZXJ2ZXI6IGlPYnNlcnZlcikge1xuICAgICAgICBjb25zb2xlLndhcm4oJ9CX0LTQtdGB0Ywg0YPQtNCw0LvRj9C10Lwg0L3QsNCx0LvRjtC00LDRgtC10LvRjywg0L3QtSDRgNC10LDQu9C40LfQvtCy0LDQuyDRgtC6INC90LUg0LHRi9C70L4g0L3QsNC00L7QsdC90L7QstGB0YLQuCcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBub3RpZnlPYnNlcnZlcnMoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaCgob2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIG9ic2VydmVyLmhhbmRsZUV2ZW50KGV2ZW50KTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xsZXI7IiwiaW1wb3J0IENvbnRyb2xsZXIgZnJvbSBcIi4vQ29udHJvbGxlclwiO1xuaW1wb3J0IGVEaXJlY3Rpb24gZnJvbSBcIi4uLy4uL2VudW1zL2VEaXJlY3Rpb25cIjtcblxuY2xhc3MgS2V5Ym9hcmRDb250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc3dpdGNoKGV2ZW50LmtleSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeU9ic2VydmVycyhlRGlyZWN0aW9uLlVQKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlPYnNlcnZlcnMoZURpcmVjdGlvbi5ET1dOKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlPYnNlcnZlcnMoZURpcmVjdGlvbi5MRUZUKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5T2JzZXJ2ZXJzKGVEaXJlY3Rpb24uUklHSFQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEtleWJvYXJkQ29udHJvbGxlcjsiLCJpbXBvcnQgZURpcmVjdGlvbiBmcm9tIFwiLi4vZW51bXMvZURpcmVjdGlvblwiO1xuaW1wb3J0IE1hdGhIZWxwZXIgZnJvbSBcIi4uL2hlbHBlcnMvbWF0aC1oZWxwZXJcIjtcblxuY2xhc3MgRGlyZWN0aW9uIHtcbiAgICBwdWJsaWMgdmFsdWU7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogZURpcmVjdGlvbikge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXRSYW5kb20oKSB7XG4gICAgICAgIHJldHVybiBNYXRoSGVscGVyLmdldFJhbmRvbUludCgwLCA0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldERpcmVjdGlvbnMoKSB7XG4gICAgICAgIGxldCBkaXJlY3Rpb25zID0gW107XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgIT09IGVEaXJlY3Rpb24uTEFTVDsgaSsrKSB7XG4gICAgICAgICAgICBkaXJlY3Rpb25zLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvbnM7XG4gICAgfVxuXG4gICAgcHVibGljIGlzT3Bwb3NpdGUoZGlyZWN0aW9uOiBlRGlyZWN0aW9uKSB7XG4gICAgICAgIGlmKE1hdGguYWJzKHRoaXMudmFsdWUgLSBkaXJlY3Rpb24gKSA9PSAyKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBzZXRWYWx1ZShuZXdEaXJlY3Rpb246IGVEaXJlY3Rpb24pIHtcbiAgICAgICAgaWYoIHRoaXMudmFsdWUgPT0gbmV3RGlyZWN0aW9uICkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmKCB0aGlzLmlzT3Bwb3NpdGUobmV3RGlyZWN0aW9uKSApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZhbHVlID0gbmV3RGlyZWN0aW9uO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERpcmVjdGlvbjsiLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9Qb2ludCc7XG5pbXBvcnQgZUNvbG9yIGZyb20gXCIuLi9lbnVtcy9lQ29sb3JcIjtcbmltcG9ydCBpRHJhd2FibGUgZnJvbSBcIi4uL2ludGVyZmFjZXMvaURyYXdhYmxlXCI7XG5pbXBvcnQgaVVwZGF0YWJsZSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pVXBkYXRhYmxlXCI7XG5cbmNsYXNzIEZpZWxkIGltcGxlbWVudHMgaURyYXdhYmxlLCBpVXBkYXRhYmxlIHtcblxuICAgIHB1YmxpYyB3aWR0aCA9IDA7XG4gICAgcHVibGljIGhlaWdodCA9IDA7XG4gICAgcHVibGljIGZpZWxkcyA9IFtdO1xuXG4gICAgY29uc3RydWN0b3Iod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0KCkge1xuICAgICAgICBmb3IobGV0IHJvd19pID0gMDsgcm93X2kgPCB0aGlzLndpZHRoOyByb3dfaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmZpZWxkc1tyb3dfaV0gPSBbXTtcbiAgICAgICAgICAgIGZvcihsZXQgY29sX2kgPSAwOyBjb2xfaSA8IHRoaXMuaGVpZ2h0OyBjb2xfaSArKykge1xuICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzW3Jvd19pXVtjb2xfaV0gPSBuZXcgUG9pbnQocm93X2ksIGNvbF9pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzSW5Cb3VuZGFyeShwb2ludDogUG9pbnQpIHtcblxuICAgICAgICByZXR1cm4gcG9pbnQueCA8IHRoaXMud2lkdGggJiZcbiAgICAgICAgICAgIHBvaW50LnkgPCB0aGlzLmhlaWdodCAmJlxuICAgICAgICAgICAgcG9pbnQueCA+PSAwICYmXG4gICAgICAgICAgICBwb2ludC55ID49IDA7XG5cbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICB0aGlzLmZpZWxkcy5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGVDb2xvci5XSElURTtcbiAgICAgICAgICAgICAgICBmaWVsZC5kcmF3KGN0eCwgJ3N0cm9rZScpO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBlQ29sb3IuR1JFRU47XG4gICAgICAgICAgICAgICAgZmllbGQuZHJhdyhjdHgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpZWxkOyIsImltcG9ydCBQb2ludCBmcm9tIFwiLi9Qb2ludFwiO1xuaW1wb3J0IGVDb2xvciBmcm9tIFwiLi4vZW51bXMvZUNvbG9yXCI7XG5pbXBvcnQgaVVwZGF0YWJsZSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pVXBkYXRhYmxlXCI7XG5pbXBvcnQgZU9iamVjdEZsYWdzIGZyb20gXCIuLi9lbnVtcy9lT2JqZWN0RmxhZ3NcIjtcbmltcG9ydCBGaWVsZCBmcm9tIFwiLi9GaWVsZFwiO1xuXG5jbGFzcyBGb29kIGV4dGVuZHMgUG9pbnQgaW1wbGVtZW50cyBpVXBkYXRhYmxlIHtcbiAgICBwdWJsaWMgZmxhZ3M6IGVPYmplY3RGbGFnc1tdO1xuICAgIHB1YmxpYyBmaWVsZDogRmllbGQ7XG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIGZpZWxkOiBGaWVsZCkge1xuICAgICAgICBzdXBlcih4LCB5KTtcbiAgICAgICAgdGhpcy5maWVsZCA9IGZpZWxkO1xuICAgICAgICB0aGlzLmZsYWdzID0gW2VPYmplY3RGbGFncy5QSUNLVVBdO1xuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBlQ29sb3IuWUVMTE9XO1xuICAgICAgICBzdXBlci5kcmF3KGN0eCk7XG4gICAgfVxuXG4gICAgZ2V0Q29vcmRpbmF0ZXMoKSB7XG4gICAgICAgIHJldHVybiBbdGhpc107XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZm9vZCB1cGRhdGVcIik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb29kOyIsImltcG9ydCBGb29kIGZyb20gXCIuL0Zvb2RcIjtcbmltcG9ydCBGaWVsZCBmcm9tIFwiLi9GaWVsZFwiO1xuaW1wb3J0IFNuYWtlIGZyb20gXCIuL1NuYWtlcy9TbmFrZVwiO1xuaW1wb3J0IG1hdGhIZWxwZXIgZnJvbSBcIi4uL2hlbHBlcnMvbWF0aC1oZWxwZXJcIjtcblxuY2xhc3MgRm9vZENyZWF0b3Ige1xuICAgIHByaXZhdGUgbWF4V2lkdGg6IG51bWJlcjtcbiAgICBwcml2YXRlIG1heEhlaWdodDogbnVtYmVyO1xuICAgIHByaXZhdGUgZmllbGQ6IEZpZWxkO1xuXG4gICAgY29uc3RydWN0b3IoZmllbGQ6IEZpZWxkKSB7XG4gICAgICAgIHRoaXMubWF4V2lkdGggPSBmaWVsZC53aWR0aDtcbiAgICAgICAgdGhpcy5tYXhIZWlnaHQgPSBmaWVsZC5oZWlnaHQ7XG4gICAgICAgIHRoaXMuZmllbGQgPSBmaWVsZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlKCkge1xuICAgICAgICBsZXQgbmV3Rm9vZCA9IG51bGw7XG4gICAgICAgIHdoaWxlKCFuZXdGb29kKSB7XG4gICAgICAgICAgICBuZXdGb29kID0gdGhpcy50cnlDcmVhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3Rm9vZDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHRyeUNyZWF0ZSgpIHtcbiAgICAgICAgbGV0IG5ld0Zvb2QgPSBuZXcgRm9vZChcbiAgICAgICAgICAgIG1hdGhIZWxwZXIuZ2V0UmFuZG9tSW50KDAsIHRoaXMubWF4V2lkdGggLSAxKSxcbiAgICAgICAgICAgIG1hdGhIZWxwZXIuZ2V0UmFuZG9tSW50KDAsIHRoaXMubWF4SGVpZ2h0IC0gMSksXG4gICAgICAgICAgICB0aGlzLmZpZWxkXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIG5ld0Zvb2Q7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb29kQ3JlYXRvcjsiLCJpbXBvcnQgU2NlbmUgZnJvbSBcIi4vU2NlbmVcIjtcbmltcG9ydCBlR2FtZVN0YXRlIGZyb20gXCIuLi9lbnVtcy9lR2FtZVN0YXRlXCI7XG5cbmNsYXNzIEdhbWUge1xuICAgIHByaXZhdGUgZ2FtZVNwZWVkOiBOdW1iZXI7XG4gICAgcHJpdmF0ZSBzY2VuZSA6IFNjZW5lO1xuICAgIHByaXZhdGUgdGltZXI7XG4gICAgcHVibGljIHN0YXRlOiBlR2FtZVN0YXRlO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmdhbWVTcGVlZCA9IDEwMDtcbiAgICAgICAgdGhpcy5zY2VuZSA9IG5ldyBTY2VuZSh0aGlzKTtcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5zY2VuZS51cGRhdGUoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGVHYW1lU3RhdGUuUEFVU0U7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZSA9PT0gZUdhbWVTdGF0ZS5QQVVTRSkge1xuICAgICAgICAgICAgICAgIHRoaXMucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcnVuKCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gZUdhbWVTdGF0ZS5QTEFZO1xuICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwodGhpcy5zY2VuZS51cGRhdGUuYmluZCh0aGlzLnNjZW5lKSwgdGhpcy5nYW1lU3BlZWQpO1xuICAgIH1cblxuICAgIGdhbWVPdmVyKCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICAgICAgICB0aGlzLnN0YXRlID0gZUdhbWVTdGF0ZS5HQU1FX09WRVI7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuXG4iLCJpbXBvcnQgaVVwZGF0YWJsZSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9pVXBkYXRhYmxlXCI7XG5pbXBvcnQgZU9iamVjdEZsYWdzIGZyb20gXCIuLi8uLi9lbnVtcy9lT2JqZWN0RmxhZ3NcIjtcbmltcG9ydCBpT2JzZXJ2YWJsZSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9pT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IGlPYnNlcnZlciBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9pT2JzZXJ2ZXJcIjtcbmltcG9ydCBQb2ludCBmcm9tIFwiLi4vUG9pbnRcIjtcbmltcG9ydCBTbmFrZSBmcm9tIFwiLi4vU25ha2VzL1NuYWtlXCI7XG5cbmNsYXNzIFBoeXNpYyBpbXBsZW1lbnRzIGlPYnNlcnZhYmxlIHtcbiAgICBwcml2YXRlIG9iamVjdHM7XG4gICAgcHJpdmF0ZSBvYnNlcnZlcnM6IGlPYnNlcnZlcltdO1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdHM6IGlVcGRhdGFibGVbXSkge1xuICAgICAgICB0aGlzLm9iamVjdHMgPSBvYmplY3RzO1xuICAgICAgICB0aGlzLm9ic2VydmVycyA9IFtdO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRPYnNlcnZlcihvYnNlcnZlcjogaU9ic2VydmVyKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVPYnNlcnZlcihvYnNlcnZlcjogaU9ic2VydmVyKSB7XG4gICAgICAgIGNvbnNvbGUud2Fybign0JfQtNC10YHRjCDRg9C00LDQu9GP0LXQvCDQvdCw0LHQu9GO0LTQsNGC0LXQu9GPLCDQvdC1INGA0LXQsNC70LjQt9C+0LLQsNC7INGC0Log0L3QtSDQsdGL0LvQviDQvdCw0LTQvtCx0L3QvtGB0YLQuCcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBub3RpZnlPYnNlcnZlcnMoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaCgob2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIG9ic2VydmVyLmhhbmRsZUV2ZW50KGV2ZW50KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcm9jY2VzcygpIHtcbiAgICAgICAgbGV0IGNvbGxpc2lvbnMgPSB0aGlzLmRldGVjdENvbGxpc2lvbnMoKTtcbiAgICAgICAgaWYoY29sbGlzaW9ucykge1xuICAgICAgICAgICAgY29sbGlzaW9ucy5mb3JFYWNoKChjb2xsaXNpb24pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeU9ic2VydmVycyhjb2xsaXNpb24pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBvdmVyZmxvd2VkID0gdGhpcy5jaGVja0JvdW5kYXJ5T3ZlcmZsb3coKTtcbiAgICAgICAgaWYob3ZlcmZsb3dlZCkge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlPYnNlcnZlcnMoe3R5cGU6IFwiQk9VTkRBUllfT1ZFUkZMT1dcIiwgZGF0YTogb3ZlcmZsb3dlZH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0JvdW5kYXJ5T3ZlcmZsb3coKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9iamVjdHMuZmluZCgob2JqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiggb2JqZWN0IGluc3RhbmNlb2YgU25ha2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pc092ZXJmbG93KG9iamVjdClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBpc092ZXJmbG93KG9iamVjdDogU25ha2UpIHtcbiAgICAgICAgbGV0IGhlYWQgPSBvYmplY3QuZ2V0SGVhZCgpO1xuICAgICAgICBpZiggaGVhZC54ID4gb2JqZWN0LmZpZWxkLndpZHRoIC0gMSB8fFxuICAgICAgICAgICAgaGVhZC54IDwgMCB8fFxuICAgICAgICAgICAgaGVhZC55ID4gb2JqZWN0LmZpZWxkLmhlaWdodCAtIDEgfHxcbiAgICAgICAgICAgIGhlYWQueSA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBkZXRlY3RDb2xsaXNpb25zKCkge1xuICAgICAgICBsZXQgY29sbGlzaW9ucyA9IFtdO1xuICAgICAgICB0aGlzLm9iamVjdHMuZm9yRWFjaCgoc3JjLCBzcmNJbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYodHlwZW9mIHNyYy5nZXRDb29yZGluYXRlcyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIHRoaXMub2JqZWN0cy5mb3JFYWNoKChkZXN0LCBkZXN0SW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoc3JjSW5kZXggIT09IGRlc3RJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIGRlc3QuZ2V0Q29vcmRpbmF0ZXMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3JjQ29vcmRpbmF0ZXMgPSBzcmMuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGVzdENvb3JkaW5hdGVzID0gZGVzdC5nZXRDb29yZGluYXRlcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRldGVjdENvbGxpc2lvbihzcmNDb29yZGluYXRlcywgZGVzdENvb3JkaW5hdGVzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggc3JjLmZsYWdzLmluY2x1ZGVzKGVPYmplY3RGbGFncy5TT0xJRCkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc3QuZmxhZ3MuaW5jbHVkZXMoZU9iamVjdEZsYWdzLlBJQ0tVUCkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb25zLnB1c2goe3R5cGU6IFwiRUFUXCIsIGRhdGE6IHtzcmMsIGRlc3R9IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiggc3JjLmZsYWdzLmluY2x1ZGVzKGVPYmplY3RGbGFncy5TT0xJRCApICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXN0LmZsYWdzLmluY2x1ZGVzKGVPYmplY3RGbGFncy5TT0xJRCApICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9ucy5wdXNoKHt0eXBlOiBcIlNOQUtFX0NPTExJU0lPTlwiLCBkYXRhOiB7c3JjLCBkZXN0fSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc3JjIGluc3RhbmNlb2YgU25ha2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihzcmMuaXNFYXRTZWxmKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9ucy5wdXNoKHt0eXBlOiBcIlNOQUtFX0NPTExJU0lPTlwiLCBkYXRhOiB7c3JjLCBkZXN0fSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZihjb2xsaXNpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBjb2xsaXNpb25zO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBkZXRlY3RDb2xsaXNpb24oc3JjOiBQb2ludFtdLCBkZXN0OiBQb2ludFtdKSB7XG4gICAgICAgIHJldHVybiBzcmMuc29tZSgoc3JjUG9pbnQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBkZXN0LnNvbWUoKGRlc3RQb2ludCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHNyY1BvaW50LnggPT09IGRlc3RQb2ludC54ICYmIHNyY1BvaW50LnkgPT09IGRlc3RQb2ludC55KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBoeXNpYzsiLCJpbXBvcnQgZURpcmVjdGlvbiBmcm9tIFwiLi4vZW51bXMvZURpcmVjdGlvblwiO1xuaW1wb3J0IERyYXdhYmxlIGZyb20gXCIuLi9pbnRlcmZhY2VzL2lEcmF3YWJsZVwiO1xuXG5jbGFzcyBQb2ludCBpbXBsZW1lbnRzIERyYXdhYmxlIHtcbiAgICBwdWJsaWMgeCA9IDA7XG4gICAgcHVibGljIHkgPSAwO1xuXG4gICAgcHVibGljIHN0YXRpYyBTSVpFID0gMTU7IC8vINCg0LDQt9C80LXRgCDQsiDQv9C40LrRgdC10LvRj9GFINC80LjQvdC40LzQsNC70YzQvdC+0Lkg0YLQvtGH0LrQuCDQsiDQuNCz0YDQtVxuXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG5cbiAgICBtb3ZlKGRpcmVjdGlvbjogZURpcmVjdGlvbiwgb2Zmc2V0OiBudW1iZXIgPSAxKSB7XG4gICAgICAgIHN3aXRjaChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgZURpcmVjdGlvbi5SSUdIVDpcbiAgICAgICAgICAgICAgICB0aGlzLnggKz0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBlRGlyZWN0aW9uLkxFRlQ6XG4gICAgICAgICAgICAgICAgdGhpcy54IC09IG9mZnNldDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgZURpcmVjdGlvbi5VUDpcbiAgICAgICAgICAgICAgICB0aGlzLnkgLT0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBlRGlyZWN0aW9uLkRPV046XG4gICAgICAgICAgICAgICAgdGhpcy55ICs9IG9mZnNldDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldE5ld1Bvc2l0aW9uKG5ld1Bvc2l0aW9uOiBQb2ludCkge1xuICAgICAgICB0aGlzLnggPSBuZXdQb3NpdGlvbi54O1xuICAgICAgICB0aGlzLnkgPSBuZXdQb3NpdGlvbi55O1xuICAgIH1cblxuICAgIGlzT3ZlcmxhcChwb2ludDogUG9pbnQpIHtcbiAgICAgICAgaWYoIHRoaXMueCA9PSBwb2ludC54ICYmXG4gICAgICAgICAgICB0aGlzLnkgPT0gcG9pbnQueSApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpc1NhbWVIb3Jpem9udGFsKHBvaW50OiBQb2ludCkge1xuICAgICAgICBpZih0aGlzLnggPT09IHBvaW50LngpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpc1NhbWVWZXJ0aWNhbChwb2ludDogUG9pbnQpIHtcbiAgICAgICAgaWYodGhpcy55ID09PSBwb2ludC55KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaXNSaWdodE9mKHBvaW50OiBQb2ludCkge1xuICAgICAgICBpZih0aGlzLnggPiBwb2ludC54KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaXNMZWZ0T2YocG9pbnQ6IFBvaW50KSB7XG4gICAgICAgIGlmKHRoaXMueCA8IHBvaW50LngpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpc1VuZGVyKHBvaW50OiBQb2ludCkge1xuICAgICAgICBpZih0aGlzLnkgPiBwb2ludC55KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaXNBYm92ZShwb2ludDogUG9pbnQpIHtcbiAgICAgICAgaWYodGhpcy55IDwgcG9pbnQueSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGRyYXcoY3R4LCB0eXBlID0gJ2ZpbGwnKSB7XG4gICAgICAgIGlmKHR5cGUgPT0gJ2ZpbGwnKSB7XG4gICAgICAgICAgICBjdHguZmlsbFJlY3QodGhpcy54ICogUG9pbnQuU0laRSwgdGhpcy55ICogUG9pbnQuU0laRSwgUG9pbnQuU0laRSwgUG9pbnQuU0laRSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdHguc3Ryb2tlUmVjdCh0aGlzLnggKiBQb2ludC5TSVpFLCB0aGlzLnkgKiBQb2ludC5TSVpFLCBQb2ludC5TSVpFLCBQb2ludC5TSVpFKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnQ7IiwiaW1wb3J0IE9iamVjdEZhY3RvcnkgZnJvbSBcIi4vU2VyaWFsaXplcnMvR2FtZU9iamVjdHNTZXJpYWxpemVyXCI7XG5pbXBvcnQgZ2FtZURhdGEgZnJvbSBcIi4vU2VyaWFsaXplcnMvR2FtZURhdGFcIjtcbmltcG9ydCBTY3JlZW4gZnJvbSBcIi4vU2NyZWVuXCI7XG5pbXBvcnQgUGh5c2ljIGZyb20gXCIuL1BoeXNpYy9QaGlzeWNcIjtcbmltcG9ydCBpT2JzZXJ2ZXIgZnJvbSBcIi4uL2ludGVyZmFjZXMvaU9ic2VydmVyXCI7XG5pbXBvcnQgRm9vZENyZWF0b3IgZnJvbSBcIi4vRm9vZENyZWF0b3JcIjtcbmltcG9ydCBBSSBmcm9tIFwiLi9BSS9BSVwiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4vR2FtZVwiO1xuaW1wb3J0IGVHYW1lU3RhdGUgZnJvbSAnLi4vZW51bXMvZUdhbWVTdGF0ZSc7XG5cbmNsYXNzIFNjZW5lIGltcGxlbWVudHMgaU9ic2VydmVye1xuICAgIHByaXZhdGUgb2JqZWN0RmFjdG9yeSA6IE9iamVjdEZhY3Rvcnk7XG4gICAgcHJpdmF0ZSBvYmplY3RzO1xuICAgIHByaXZhdGUgc2NyZWVuOiBTY3JlZW47XG4gICAgcHJpdmF0ZSBwaHlzaWM6IFBoeXNpYztcbiAgICBwcml2YXRlIGFpOiBBSTtcbiAgICBwcml2YXRlIGdhbWU6IEdhbWU7XG4gICAgcHJpdmF0ZSBsYXN0UGhpc3ljRXZlbnQ7XG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSkge1xuICAgICAgICB0aGlzLm9iamVjdEZhY3RvcnkgPSBuZXcgT2JqZWN0RmFjdG9yeShnYW1lRGF0YSk7XG4gICAgICAgIHRoaXMub2JqZWN0cyA9IHRoaXMub2JqZWN0RmFjdG9yeS5jcmVhdGVBbGwoKTtcbiAgICAgICAgdGhpcy5zY3JlZW4gPSBuZXcgU2NyZWVuKHRoaXMub2JqZWN0cyk7XG4gICAgICAgIHRoaXMucGh5c2ljID0gbmV3IFBoeXNpYyh0aGlzLm9iamVjdHMpO1xuICAgICAgICB0aGlzLnBoeXNpYy5hZGRPYnNlcnZlcih0aGlzKTtcbiAgICAgICAgdGhpcy5haSA9IG5ldyBBSSh0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICB9XG5cbiAgICBnZXRPYmplY3RzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vYmplY3RzO1xuICAgIH1cblxuICAgIGdldFBoaXN5YygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGh5c2ljO1xuICAgIH1cblxuICAgIGdldEFJKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5haTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMub2JqZWN0cy5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICAgICAgICAgIG9iamVjdC51cGRhdGUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5haS5wcm9jY2VzcygpO1xuICAgICAgICB0aGlzLnBoeXNpYy5wcm9jY2VzcygpO1xuICAgICAgICBpZih0aGlzLmxhc3RQaGlzeWNFdmVudCkge1xuICAgICAgICAgICAgdGhpcy5yZXNwb25kUGhpc3ljRXZlbnQodGhpcy5sYXN0UGhpc3ljRXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuZ2FtZS5zdGF0ZSAhPT0gZUdhbWVTdGF0ZS5HQU1FX09WRVIpIHtcbiAgICAgICAgICAgIHRoaXMuc2NyZWVuLmRyYXcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZE9iamVjdChvYmplY3QpIHtcbiAgICAgICAgdGhpcy5vYmplY3RzLnB1c2gob2JqZWN0KTtcbiAgICB9XG5cbiAgICBoYW5kbGVFdmVudChldmVudCkge1xuICAgICAgICB0aGlzLmxhc3RQaGlzeWNFdmVudCA9IGV2ZW50O1xuICAgIH1cblxuICAgIHJlc3BvbmRQaGlzeWNFdmVudChldmVudCkge1xuICAgICAgICBzd2l0Y2goZXZlbnQudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcIlNOQUtFX0NPTExJU0lPTlwiOlxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5nYW1lT3ZlcigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkVBVFwiOlxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlT2JqZWN0KGV2ZW50LmRhdGEuZGVzdCk7XG4gICAgICAgICAgICAgICAgbGV0IGZvb2RDcmVhdG9yID0gbmV3IEZvb2RDcmVhdG9yKGV2ZW50LmRhdGEuZGVzdC5maWVsZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRPYmplY3QoZm9vZENyZWF0b3IuY3JlYXRlKCkpO1xuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuc3JjLmdyb3coKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJFQVRfU0VMRlwiOlxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5nYW1lT3ZlcigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkJPVU5EQVJZX09WRVJGTE9XXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLmdhbWVPdmVyKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OiBjb25zb2xlLmxvZyhcInVuaGFuZGxlIGV2ZW50OiBcIiwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGFzdFBoaXN5Y0V2ZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICByZW1vdmVPYmplY3QocmVtb3ZhYmxlT2JqZWN0KSB7XG4gICAgICAgIHRoaXMub2JqZWN0cy5zb21lKChvYmplY3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZihvYmplY3QgPT09IHJlbW92YWJsZU9iamVjdCkge1xuICAgICAgICAgICAgICAgIHRoaXMub2JqZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NlbmU7IiwiaW1wb3J0IGlEcmF3YWJsZSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pRHJhd2FibGVcIjtcblxuY2xhc3MgU2NyZWVuIGltcGxlbWVudHMgaURyYXdhYmxle1xuXG4gICAgcHJpdmF0ZSBjYW52YXMgPSBudWxsO1xuICAgIHByaXZhdGUgY3R4ID0gbnVsbDtcbiAgICBwcml2YXRlIHRvRHJhd09iamVjdHMgPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKG9iamVjdHMpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gMTAwMDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gMTAwMDtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLnRvRHJhd09iamVjdHMgPSBvYmplY3RzO1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMudG9EcmF3T2JqZWN0cy5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICAgICAgICAgIG9iamVjdC5kcmF3KHRoaXMuY3R4KTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjcmVlbjtcbiIsImltcG9ydCBlQ29sb3IgZnJvbSBcIi4uLy4uL2VudW1zL2VDb2xvclwiO1xuXG5cbmNsYXNzIENvbG9yU2VyaWFsaXplciB7XG4gICAgc3RhdGljIHNlcmlhbGl6ZShqc29uQ29sb3IpIHtcbiAgICAgICAgc3dpdGNoKGpzb25Db2xvcikge1xuICAgICAgICAgICAgY2FzZSBcImJsdWVcIjogcmV0dXJuIGVDb2xvci5CTFVFO1xuICAgICAgICAgICAgY2FzZSBcInJlZFwiOiByZXR1cm4gZUNvbG9yLlJFRDtcbiAgICAgICAgICAgIGNhc2UgXCJncmVlblwiOiByZXR1cm4gZUNvbG9yLkdSRUVOO1xuICAgICAgICAgICAgY2FzZSBcInllbGxvd1wiOiByZXR1cm4gZUNvbG9yLllFTExPVztcbiAgICAgICAgICAgIGNhc2UgXCJ3aGl0ZVwiOiByZXR1cm4gZUNvbG9yLldISVRFO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb2xvclNlcmlhbGl6ZXI7IiwiaW1wb3J0IERpcmVjdGlvbiBmcm9tIFwiLi4vRGlyZWN0aW9uXCI7XG5pbXBvcnQgZURpcmVjdGlvbiBmcm9tIFwiLi4vLi4vZW51bXMvZURpcmVjdGlvblwiO1xuXG5jbGFzcyBEaXJlY3Rpb25TZXJpYWxpemVyIHtcbiAgICBzdGF0aWMgc2VyaWFsaXplKGpzb25EaXJlY3Rpb24pIHtcbiAgICAgICAgc3dpdGNoKGpzb25EaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6IHJldHVybiBuZXcgRGlyZWN0aW9uKGVEaXJlY3Rpb24uTEVGVCk7XG4gICAgICAgICAgICBjYXNlIFwicmlnaHRcIjogcmV0dXJuIG5ldyBEaXJlY3Rpb24oZURpcmVjdGlvbi5SSUdIVCk7XG4gICAgICAgICAgICBjYXNlIFwidXBcIjogcmV0dXJuIG5ldyBEaXJlY3Rpb24oZURpcmVjdGlvbi5VUCk7XG4gICAgICAgICAgICBjYXNlIFwiZG93blwiOiByZXR1cm4gbmV3IERpcmVjdGlvbihlRGlyZWN0aW9uLkRPV04pO1xuICAgICAgICAgICAgZGVmYXVsdDogY29uc29sZS53YXJuKFwiaW5jb3JyZWN0IGRpcmVjdGlvbiB2YWx1ZSBmcm9tIGpzb24gZmlsZVwiKTsgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERpcmVjdGlvblNlcmlhbGl6ZXI7IiwiaW1wb3J0IFBvaW50IGZyb20gXCIuLi9Qb2ludFwiO1xuaW1wb3J0IEVuZW15U25ha2UgZnJvbSBcIi4uL1NuYWtlcy9FbmVteVNuYWtlXCI7XG5pbXBvcnQgQ29sb3JTZXJpYWxpemVyIGZyb20gXCIuL0NvbG9yU2VyaWFsaXplclwiO1xuaW1wb3J0IERpcmVjdGlvblNlcmlhbGl6ZXIgZnJvbSBcIi4vRGlyZWN0aW9uU2VyaWFsaXplclwiO1xuXG5jbGFzcyBFbmVteVNuYWtlRmFjdG9yeSB7XG4gICAgc3RhdGljIGNyZWF0ZShqc29uLCBmaWVsZCkge1xuICAgICAgICBsZXQgZGlyZWN0aW9uID0gRGlyZWN0aW9uU2VyaWFsaXplci5zZXJpYWxpemUoanNvbi5kaXJlY3Rpb24pO1xuICAgICAgICBsZXQgcG9zaXRpb24gPSBuZXcgUG9pbnQoanNvbi5wb3NpdGlvbi54LCBqc29uLnBvc2l0aW9uLnkpO1xuICAgICAgICBsZXQgYm9keUNvbG9yID0gQ29sb3JTZXJpYWxpemVyLnNlcmlhbGl6ZShqc29uLmJvZHlDb2xvcik7XG4gICAgICAgIGxldCBoZWFkQ29sb3IgPSBDb2xvclNlcmlhbGl6ZXIuc2VyaWFsaXplKGpzb24uaGVhZENvbG9yKTtcbiAgICAgICAgbGV0IHNpemUgPSBqc29uLnNpemU7XG4gICAgICAgIHJldHVybiBuZXcgRW5lbXlTbmFrZSh7XG4gICAgICAgICAgICBkaXJlY3Rpb24sXG4gICAgICAgICAgICBwb3NpdGlvbixcbiAgICAgICAgICAgIGJvZHlDb2xvcixcbiAgICAgICAgICAgIGhlYWRDb2xvcixcbiAgICAgICAgICAgIHNpemUsXG4gICAgICAgICAgICBmaWVsZFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVuZW15U25ha2VGYWN0b3J5OyIsImxldCBnYW1lRGF0YSA9IHtcbiAgXCJmaWVsZHNcIjogW1xuICAgIHtcbiAgICAgIFwid2lkdGhcIjogMzAsXG4gICAgICBcImhlaWdodFwiOiAzMCxcbiAgICAgIFwiZW50cmllc1wiOiB7XG4gICAgICAgIFwic25ha2VzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInNpemVcIjogNSxcbiAgICAgICAgICAgIFwiYm9keUNvbG9yXCI6IFwicmVkXCIsXG4gICAgICAgICAgICBcImhlYWRDb2xvclwiOiBcImJsdWVcIixcbiAgICAgICAgICAgIFwiZGlyZWN0aW9uXCI6IFwibGVmdFwiLFxuICAgICAgICAgICAgXCJwb3NpdGlvblwiOiB7XG4gICAgICAgICAgICAgIFwieFwiOiAxMSxcbiAgICAgICAgICAgICAgXCJ5XCI6IDExXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZW5lbXlcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJzaXplXCI6IDUsXG4gICAgICAgICAgICBcImJvZHlDb2xvclwiOiBcInJlZFwiLFxuICAgICAgICAgICAgXCJoZWFkQ29sb3JcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgXCJkaXJlY3Rpb25cIjogXCJkb3duXCIsXG4gICAgICAgICAgICBcInBvc2l0aW9uXCI6IHtcbiAgICAgICAgICAgICAgXCJ4XCI6IDI5LFxuICAgICAgICAgICAgICBcInlcIjogMjVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInR5cGVcIjogXCJlbmVteVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInNpemVcIjogNSxcbiAgICAgICAgICAgIFwiYm9keUNvbG9yXCI6IFwiYmx1ZVwiLFxuICAgICAgICAgICAgXCJoZWFkQ29sb3JcIjogXCJyZWRcIixcbiAgICAgICAgICAgIFwiZGlyZWN0aW9uXCI6IFwiZG93blwiLFxuICAgICAgICAgICAgXCJwb3NpdGlvblwiOiB7XG4gICAgICAgICAgICAgIFwieFwiOiAxNSxcbiAgICAgICAgICAgICAgXCJ5XCI6IDE1XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGxheWVyXCJcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImVhdHNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwieFwiOiAyOSxcbiAgICAgICAgICAgIFwieVwiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInhcIjogMjksXG4gICAgICAgICAgICBcInlcIjogMjlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwieFwiOiA0LFxuICAgICAgICAgICAgXCJ5XCI6IDRcbiAgICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVEYXRhOyIsImltcG9ydCBGaWVsZCBmcm9tIFwiLi4vRmllbGRcIjtcbmltcG9ydCBQbGF5ZXJTbmFrZUZhY3RvcnkgZnJvbSBcIi4vUGxheWVyU25ha2VTZXJpYWxpemVyXCI7XG5pbXBvcnQgRm9vZCBmcm9tIFwiLi4vRm9vZFwiO1xuaW1wb3J0IEVuZW15U25ha2VGYWN0b3J5IGZyb20gXCIuL0VuZW15U25ha2VTZXJpYWxpemVyXCI7XG5cbmNsYXNzIE9iamVjdEZhY3Rvcnkge1xuICAgIHByaXZhdGUgZ2FtZURhdGE7XG4gICAgcHJpdmF0ZSBvYmplY3RzO1xuICAgIGNvbnN0cnVjdG9yKGdhbWVEYXRhKSB7XG4gICAgICAgIHRoaXMuZ2FtZURhdGEgPSBnYW1lRGF0YTtcbiAgICAgICAgdGhpcy5vYmplY3RzID0gW107XG4gICAgfVxuXG4gICAgY3JlYXRlQWxsKCkge1xuICAgICAgICB0aGlzLmdhbWVEYXRhLmZpZWxkcy5mb3JFYWNoKChmaWVsZEpTT04pID0+IHtcbiAgICAgICAgICAgIGxldCBmaWVsZCA9IG5ldyBGaWVsZChmaWVsZEpTT04ud2lkdGgsIGZpZWxkSlNPTi5oZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy5vYmplY3RzLnB1c2goZmllbGQpO1xuICAgICAgICAgICAgbGV0IHNuYWtlcyA9IGZpZWxkSlNPTi5lbnRyaWVzLnNuYWtlcztcbiAgICAgICAgICAgIHNuYWtlcy5mb3JFYWNoKChzbmFrZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHNuYWtlLnR5cGUgPT09IFwicGxheWVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmplY3RzLnB1c2goUGxheWVyU25ha2VGYWN0b3J5LmNyZWF0ZShzbmFrZSwgZmllbGQpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoc25ha2UudHlwZSA9PT0gXCJlbmVteVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqZWN0cy5wdXNoKEVuZW15U25ha2VGYWN0b3J5LmNyZWF0ZShzbmFrZSwgZmllbGQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBsZXQgZWF0cyA9IGZpZWxkSlNPTi5lYXRzO1xuICAgICAgICAgICAgZWF0cy5mb3JFYWNoKChlYXQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9iamVjdHMucHVzaChuZXcgRm9vZChlYXQueCwgZWF0LnksIGZpZWxkKSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gdGhpcy5vYmplY3RzO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0RmFjdG9yeTsiLCJpbXBvcnQgUG9pbnQgZnJvbSBcIi4uL1BvaW50XCI7XG5pbXBvcnQgQ29sb3JGYWN0b3J5IGZyb20gXCIuL0NvbG9yU2VyaWFsaXplclwiO1xuaW1wb3J0IERpcmVjdGlvbkZhY3RvcnkgZnJvbSBcIi4vRGlyZWN0aW9uU2VyaWFsaXplclwiO1xuaW1wb3J0IFBsYXllclNuYWtlIGZyb20gXCIuLi9TbmFrZXMvUGxheWVyU25ha2VcIjtcblxuY2xhc3MgUGxheWVyU25ha2VGYWN0b3J5IHtcbiAgICBzdGF0aWMgY3JlYXRlKGpzb24sIGZpZWxkKSB7XG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSBEaXJlY3Rpb25GYWN0b3J5LnNlcmlhbGl6ZShqc29uLmRpcmVjdGlvbik7XG4gICAgICAgIGxldCBwb3NpdGlvbiA9IG5ldyBQb2ludChqc29uLnBvc2l0aW9uLngsIGpzb24ucG9zaXRpb24ueSk7XG4gICAgICAgIGxldCBib2R5Q29sb3IgPSBDb2xvckZhY3Rvcnkuc2VyaWFsaXplKGpzb24uYm9keUNvbG9yKTtcbiAgICAgICAgbGV0IGhlYWRDb2xvciA9IENvbG9yRmFjdG9yeS5zZXJpYWxpemUoanNvbi5oZWFkQ29sb3IpO1xuICAgICAgICBsZXQgc2l6ZSA9IGpzb24uc2l6ZTtcbiAgICAgICAgcmV0dXJuIG5ldyBQbGF5ZXJTbmFrZSh7XG4gICAgICAgICAgICBkaXJlY3Rpb24sXG4gICAgICAgICAgICBwb3NpdGlvbixcbiAgICAgICAgICAgIGJvZHlDb2xvcixcbiAgICAgICAgICAgIGhlYWRDb2xvcixcbiAgICAgICAgICAgIHNpemUsXG4gICAgICAgICAgICBmaWVsZFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllclNuYWtlRmFjdG9yeTsiLCJpbXBvcnQgU25ha2UgZnJvbSBcIi4vU25ha2VcIjtcbmltcG9ydCBlQ29sb3IgZnJvbSBcIi4uLy4uL2VudW1zL2VDb2xvclwiO1xuXG5jbGFzcyBFbmVteVNuYWtlIGV4dGVuZHMgU25ha2Uge1xuICAgIHByaXZhdGUgREVGQVVMVF9CT0RZX0NPTE9SOiBlQ29sb3I7XG4gICAgcHJpdmF0ZSBERUZBVUxUX0hFQURfQ09MT1I6IGVDb2xvcjtcblxuICAgIGNvbnN0cnVjdG9yKHBhcmFtcykge1xuICAgICAgICBzdXBlcihwYXJhbXMpO1xuICAgICAgICB0aGlzLkRFRkFVTFRfQk9EWV9DT0xPUiA9IGVDb2xvci5ZRUxMT1c7XG4gICAgICAgIHRoaXMuREVGQVVMVF9IRUFEX0NPTE9SID0gZUNvbG9yLldISVRFO1xuXG4gICAgICAgIHRoaXMuSEVBRF9DT0xPUiA9IHRoaXMuSEVBRF9DT0xPUiB8fCB0aGlzLkRFRkFVTFRfSEVBRF9DT0xPUjtcbiAgICAgICAgdGhpcy5CT0RZX0NPTE9SID0gdGhpcy5CT0RZX0NPTE9SIHx8IHRoaXMuREVGQVVMVF9CT0RZX0NPTE9SO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRW5lbXlTbmFrZTsiLCJpbXBvcnQgU25ha2UgZnJvbSBcIi4vU25ha2VcIjtcbmltcG9ydCBlQ29sb3IgZnJvbSBcIi4uLy4uL2VudW1zL2VDb2xvclwiO1xuaW1wb3J0IEtleWJvYXJkQ29udHJvbGxlciBmcm9tIFwiLi4vQ29udHJvbGxlcnMvS2V5Ym9hcmRDb250cm9sbGVyXCI7XG5cblxuY2xhc3MgUGxheWVyU25ha2UgZXh0ZW5kcyBTbmFrZSB7XG4gICAgcHJpdmF0ZSBERUZBVUxUX0hFQURfQ09MT1I6IGVDb2xvcjtcbiAgICBwcml2YXRlIERFRkFVTFRfQk9EWV9DT0xPUjogZUNvbG9yO1xuICAgIGNvbnN0cnVjdG9yKHBhcmFtcykge1xuICAgICAgICBzdXBlcihwYXJhbXMpO1xuICAgICAgICB0aGlzLkRFRkFVTFRfSEVBRF9DT0xPUiA9IGVDb2xvci5SRUQ7XG4gICAgICAgIHRoaXMuREVGQVVMVF9CT0RZX0NPTE9SID0gZUNvbG9yLkJMVUU7XG5cbiAgICAgICAgdGhpcy5IRUFEX0NPTE9SID0gdGhpcy5IRUFEX0NPTE9SIHx8IHRoaXMuREVGQVVMVF9IRUFEX0NPTE9SO1xuICAgICAgICB0aGlzLkJPRFlfQ09MT1IgPSB0aGlzLkJPRFlfQ09MT1IgfHwgdGhpcy5ERUZBVUxUX0JPRFlfQ09MT1I7XG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IG5ldyBLZXlib2FyZENvbnRyb2xsZXIoKTtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLmFkZE9ic2VydmVyKHRoaXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyU25ha2U7IiwiaW1wb3J0IGlEcmF3YWJsZSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9pRHJhd2FibGVcIjtcbmltcG9ydCBpT2JzZXJ2ZXIgZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvaU9ic2VydmVyXCI7XG5pbXBvcnQgZURpcmVjdGlvbiBmcm9tIFwiLi4vLi4vZW51bXMvZURpcmVjdGlvblwiO1xuaW1wb3J0IFBvaW50IGZyb20gXCIuLi9Qb2ludFwiO1xuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSBcIi4uL0NvbnRyb2xsZXJzL0NvbnRyb2xsZXJcIjtcbmltcG9ydCBEaXJlY3Rpb24gZnJvbSBcIi4uL0RpcmVjdGlvblwiO1xuaW1wb3J0IGVDb2xvciBmcm9tIFwiLi4vLi4vZW51bXMvZUNvbG9yXCI7XG5pbXBvcnQgaVVwZGF0YWJsZSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9pVXBkYXRhYmxlXCI7XG5pbXBvcnQgZU9iamVjdEZsYWdzIGZyb20gXCIuLi8uLi9lbnVtcy9lT2JqZWN0RmxhZ3NcIjtcbmltcG9ydCBGaWVsZCBmcm9tIFwiLi4vRmllbGRcIjtcblxuY2xhc3MgU25ha2UgaW1wbGVtZW50cyBpRHJhd2FibGUsIGlPYnNlcnZlciwgaVVwZGF0YWJsZSB7XG4gICAgcHJvdGVjdGVkIGJvZHkgOiBQb2ludFtdID0gW107XG4gICAgcHJvdGVjdGVkIHBvc2l0aW9uIDogUG9pbnQgPSBudWxsO1xuICAgIHByb3RlY3RlZCBIRUFEX0NPTE9SOiBlQ29sb3I7XG4gICAgcHJvdGVjdGVkIEJPRFlfQ09MT1I6IGVDb2xvcjtcblxuICAgIHByb3RlY3RlZCBjb250cm9sbGVyIDogQ29udHJvbGxlciA9IG51bGw7XG4gICAgcHJvdGVjdGVkIGRpcmVjdGlvbiA6IERpcmVjdGlvbiA9IG51bGw7XG4gICAgcHVibGljIGZsYWdzOiBlT2JqZWN0RmxhZ3NbXTtcbiAgICBwdWJsaWMgZmllbGQ6IEZpZWxkO1xuXG4gICAgcHJpdmF0ZSBpc0dyb3dpbmcgPSBmYWxzZTtcbiAgICBwcml2YXRlIGxhc3RFdmVudCA9IG51bGw7XG4gICAgcHJpdmF0ZSBwcmV2U3RlcCA9IG51bGw7XG4gICAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgICAgIHRoaXMuZmxhZ3MgPSBbZU9iamVjdEZsYWdzLlNPTElEXTtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBwYXJhbXMuZGlyZWN0aW9uO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcGFyYW1zLnBvc2l0aW9uO1xuICAgICAgICB0aGlzLkhFQURfQ09MT1IgPSBwYXJhbXMuaGVhZENvbG9yID8gcGFyYW1zLmhlYWRDb2xvciA6IG51bGw7XG4gICAgICAgIHRoaXMuQk9EWV9DT0xPUiA9IHBhcmFtcy5ib2R5Q29sb3IgPyBwYXJhbXMuYm9keUNvbG9yIDogbnVsbDtcbiAgICAgICAgdGhpcy5maWVsZCA9IHBhcmFtcy5maWVsZDtcbiAgICAgICAgdGhpcy5pbml0KHBhcmFtcy5zaXplKTtcbiAgICB9XG5cbiAgICBpbml0KHNpemUpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLmRpcmVjdGlvbi52YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSBlRGlyZWN0aW9uLkxFRlQ6XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5LnB1c2gobmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCArIGksIHRoaXMucG9zaXRpb24ueSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgZURpcmVjdGlvbi5SSUdIVDpcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHkucHVzaChuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54IC0gaSwgdGhpcy5wb3NpdGlvbi55KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBlRGlyZWN0aW9uLlVQOlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keS5wdXNoKG5ldyBQb2ludCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSArIGkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGVEaXJlY3Rpb24uRE9XTjpcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHkucHVzaChuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkgLSBpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCfQntGI0LjQsdC60LAg0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40Lgg0LfQvNC10LnQutC4Jyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVFdmVudChldmVudDogZURpcmVjdGlvbikge1xuICAgICAgICB0aGlzLmxhc3RFdmVudCA9IGV2ZW50O1xuICAgIH1cblxuICAgIGNoYW5nZURpcmVjdGlvbihuZXdEaXJlY3Rpb246IGVEaXJlY3Rpb24pIHtcblxuICAgICAgICBpZih0aGlzLmRpcmVjdGlvbi5pc09wcG9zaXRlKG5ld0RpcmVjdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgc3dpdGNoKG5ld0RpcmVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSBlRGlyZWN0aW9uLlVQOlxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uLnZhbHVlID0gZURpcmVjdGlvbi5VUDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgZURpcmVjdGlvbi5ET1dOOlxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uLnZhbHVlID0gZURpcmVjdGlvbi5ET1dOO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBlRGlyZWN0aW9uLkxFRlQ6XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24udmFsdWUgPSBlRGlyZWN0aW9uLkxFRlQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGVEaXJlY3Rpb24uUklHSFQ6XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24udmFsdWUgPSBlRGlyZWN0aW9uLlJJR0hUO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUud2Fybign0J3QtSDQvtCx0YDQsNCx0L7RgtCw0L3QvdC+0LUg0YHQvtCx0YvRgtC40LUg0LIg0LrQu9Cw0YHRgdC1IFNuYWtlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRIZWFkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib2R5WzBdIHx8IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0Q29vcmRpbmF0ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvZHk7XG4gICAgfVxuXG4gICAgZ3JvdygpIHtcbiAgICAgICAgdGhpcy5pc0dyb3dpbmcgPSB0cnVlO1xuICAgIH1cblxuICAgIHNhdmVQcmV2U3RlcCgpIHtcbiAgICAgICAgdGhpcy5wcmV2U3RlcCA9IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkpLFxuICAgICAgICAgICAgYm9keTogW11cbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2R5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZTdGVwLmJvZHkucHVzaChuZXcgUG9pbnQodGhpcy5ib2R5W2ldLngsIHRoaXMuYm9keVtpXS55KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICB0aGlzLnNhdmVQcmV2U3RlcCgpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLm1vdmUodGhpcy5kaXJlY3Rpb24udmFsdWUpO1xuICAgICAgICBmb3IobGV0IGkgPSB0aGlzLmJvZHkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgICAgICAgdGhpcy5ib2R5W2ldLnNldE5ld1Bvc2l0aW9uKHRoaXMuYm9keVtpIC0gMV0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2V0SGVhZCgpLm1vdmUodGhpcy5kaXJlY3Rpb24udmFsdWUpO1xuICAgIH1cblxuICAgIHJldmVydE1vdmUoKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBuZXcgUG9pbnQodGhpcy5wcmV2U3RlcC5wb3NpdGlvbi54LCB0aGlzLnByZXZTdGVwLnBvc2l0aW9uLnkpO1xuICAgICAgICB0aGlzLmJvZHkgPSBbXTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMucHJldlN0ZXAuYm9keS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5ib2R5LnB1c2gobmV3IFBvaW50KHRoaXMucHJldlN0ZXAuYm9keVtpXS54LCB0aGlzLnByZXZTdGVwLmJvZHlbaV0ueSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbih0aGlzLmxhc3RFdmVudCk7XG4gICAgICAgIGlmKHRoaXMuaXNHcm93aW5nKSB7XG4gICAgICAgICAgICBsZXQgbGFzdEVsZW1lbnQgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmJvZHlbdGhpcy5ib2R5Lmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgIHRoaXMuYm9keS5wdXNoKG5ldyBQb2ludChsYXN0RWxlbWVudC54LCBsYXN0RWxlbWVudC55KSk7XG4gICAgICAgICAgICB0aGlzLmlzR3Jvd2luZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW92ZSgpO1xuICAgIH1cblxuICAgIGdldERpcmVjdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uLnZhbHVlO1xuICAgIH1cblxuICAgIGlzRWF0U2VsZigpIHtcbiAgICAgICAgbGV0IGhlYWQgPSB0aGlzLmJvZHlbMF07XG4gICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCB0aGlzLmJvZHkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKGhlYWQuaXNPdmVybGFwKHRoaXMuYm9keVtpXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaXNPdmVybGFwKHBvaW50OiBQb2ludCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib2R5LnNvbWUoKGJvZHlQb2ludCkgPT4ge1xuICAgICAgICAgICAgaWYoYm9keVBvaW50LmlzT3ZlcmxhcChwb2ludCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5IRUFEX0NPTE9SO1xuICAgICAgICB0aGlzLmJvZHkuZm9yRWFjaCgocG9pbnQpID0+IHtcbiAgICAgICAgICAgIGlmKCBwb2ludC54ICE9IHRoaXMucG9zaXRpb24ueCB8fFxuICAgICAgICAgICAgICAgIHBvaW50LnkgIT0gdGhpcy5wb3NpdGlvbi55IClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5CT0RZX0NPTE9SO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9pbnQuZHJhdyhjdHgpO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU25ha2U7IiwiZW51bSBlQ29sb3Ige1xuICAgIFdISVRFID0gJyNGRkZGRkYnLFxuICAgIEJMVUUgPSAnIzNGNTFCNScsXG4gICAgUkVEID0gJyNGNDQzMzYnLFxuICAgIEdSRUVOID0gJyMwMEJDRDQnLFxuICAgIFlFTExPVyA9ICcjRkZDMTA3J1xufVxuXG5leHBvcnQgZGVmYXVsdCBlQ29sb3I7IiwiZW51bSBlRGlyZWN0aW9uIHtcbiAgICBMRUZULFxuICAgIFVQLFxuICAgIFJJR0hULFxuICAgIERPV04sXG4gICAgTEFTVFxufVxuXG5leHBvcnQgZGVmYXVsdCBlRGlyZWN0aW9uOyIsImVudW0gZUdhbWVTdGF0ZSB7XG4gICAgUExBWSxcbiAgICBQQVVTRSxcbiAgICBHQU1FX09WRVJcbn1cblxuZXhwb3J0IGRlZmF1bHQgZUdhbWVTdGF0ZTsiLCJlbnVtIGVPYmplY3RGbGFncyB7XG4gICAgU09MSUQgPSAxLFxuICAgIFBJQ0tVUCA9IDJcbn1cblxuZXhwb3J0IGRlZmF1bHQgZU9iamVjdEZsYWdzOyIsIi8vINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINGB0LvRg9GH0LDQudC90L7QtSDRhtC10LvQvtC1INGH0LjRgdC70L4g0LzQtdC20LTRgyBtaW4gKNCy0LrQu9GO0YfQuNGC0LXQu9GM0L3Qvikg0LggbWF4ICjQvdC1INCy0LrQu9GO0YfQsNGPIG1heClcbmZ1bmN0aW9uIGdldFJhbmRvbUludChtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBnZXRSYW5kb21JbnRcbn1cbiIsImltcG9ydCBHYW1lICBmcm9tIFwiLi9jbGFzc2VzL0dhbWVcIjtcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgICBsZXQgZ2FtZSA9IG5ldyBHYW1lKCk7XG4gICAgZ2FtZS5pbml0KCk7XG59OyJdLCJzb3VyY2VSb290IjoiIn0=