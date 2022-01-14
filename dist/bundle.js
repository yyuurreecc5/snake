/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/classes/AI/AI.ts":
/*!*****************************!*\
  !*** ./js/classes/AI/AI.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AI);


/***/ }),

/***/ "./js/classes/Controllers/Controller.ts":
/*!**********************************************!*\
  !*** ./js/classes/Controllers/Controller.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Controller);


/***/ }),

/***/ "./js/classes/Controllers/KeyboardController.ts":
/*!******************************************************!*\
  !*** ./js/classes/Controllers/KeyboardController.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Controller */ "./js/classes/Controllers/Controller.ts");
/* harmony import */ var _enums_eDirection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/eDirection */ "./js/enums/eDirection.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KeyboardController);


/***/ }),

/***/ "./js/classes/Direction.ts":
/*!*********************************!*\
  !*** ./js/classes/Direction.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Direction);


/***/ }),

/***/ "./js/classes/Field.ts":
/*!*****************************!*\
  !*** ./js/classes/Field.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Field);


/***/ }),

/***/ "./js/classes/Food.ts":
/*!****************************!*\
  !*** ./js/classes/Food.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ "./js/classes/Point.ts");
/* harmony import */ var _enums_eColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/eColor */ "./js/enums/eColor.ts");
/* harmony import */ var _enums_eObjectFlags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/eObjectFlags */ "./js/enums/eObjectFlags.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Food);


/***/ }),

/***/ "./js/classes/FoodCreator.ts":
/*!***********************************!*\
  !*** ./js/classes/FoodCreator.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FoodCreator);


/***/ }),

/***/ "./js/classes/Game.ts":
/*!****************************!*\
  !*** ./js/classes/Game.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);


/***/ }),

/***/ "./js/classes/Physic/Phisyc.ts":
/*!*************************************!*\
  !*** ./js/classes/Physic/Phisyc.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Physic);


/***/ }),

/***/ "./js/classes/Point.ts":
/*!*****************************!*\
  !*** ./js/classes/Point.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Point);


/***/ }),

/***/ "./js/classes/Scene.ts":
/*!*****************************!*\
  !*** ./js/classes/Scene.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scene);


/***/ }),

/***/ "./js/classes/Screen.ts":
/*!******************************!*\
  !*** ./js/classes/Screen.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Screen);


/***/ }),

/***/ "./js/classes/Serializers/ColorSerializer.ts":
/*!***************************************************!*\
  !*** ./js/classes/Serializers/ColorSerializer.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorSerializer);


/***/ }),

/***/ "./js/classes/Serializers/DirectionSerializer.ts":
/*!*******************************************************!*\
  !*** ./js/classes/Serializers/DirectionSerializer.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DirectionSerializer);


/***/ }),

/***/ "./js/classes/Serializers/EnemySnakeSerializer.ts":
/*!********************************************************!*\
  !*** ./js/classes/Serializers/EnemySnakeSerializer.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EnemySnakeFactory);


/***/ }),

/***/ "./js/classes/Serializers/GameData.ts":
/*!********************************************!*\
  !*** ./js/classes/Serializers/GameData.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameData);


/***/ }),

/***/ "./js/classes/Serializers/GameObjectsSerializer.ts":
/*!*********************************************************!*\
  !*** ./js/classes/Serializers/GameObjectsSerializer.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ObjectFactory);


/***/ }),

/***/ "./js/classes/Serializers/PlayerSnakeSerializer.ts":
/*!*********************************************************!*\
  !*** ./js/classes/Serializers/PlayerSnakeSerializer.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayerSnakeFactory);


/***/ }),

/***/ "./js/classes/Snakes/EnemySnake.ts":
/*!*****************************************!*\
  !*** ./js/classes/Snakes/EnemySnake.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Snake */ "./js/classes/Snakes/Snake.ts");
/* harmony import */ var _enums_eColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/eColor */ "./js/enums/eColor.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EnemySnake);


/***/ }),

/***/ "./js/classes/Snakes/PlayerSnake.ts":
/*!******************************************!*\
  !*** ./js/classes/Snakes/PlayerSnake.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Snake */ "./js/classes/Snakes/Snake.ts");
/* harmony import */ var _enums_eColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/eColor */ "./js/enums/eColor.ts");
/* harmony import */ var _Controllers_KeyboardController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controllers/KeyboardController */ "./js/classes/Controllers/KeyboardController.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayerSnake);


/***/ }),

/***/ "./js/classes/Snakes/Snake.ts":
/*!************************************!*\
  !*** ./js/classes/Snakes/Snake.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Snake);


/***/ }),

/***/ "./js/enums/eColor.ts":
/*!****************************!*\
  !*** ./js/enums/eColor.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var eColor;
(function (eColor) {
    eColor["WHITE"] = "#FFFFFF";
    eColor["BLUE"] = "#3F51B5";
    eColor["RED"] = "#F44336";
    eColor["GREEN"] = "#00BCD4";
    eColor["YELLOW"] = "#FFC107";
})(eColor || (eColor = {}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eColor);


/***/ }),

/***/ "./js/enums/eDirection.ts":
/*!********************************!*\
  !*** ./js/enums/eDirection.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var eDirection;
(function (eDirection) {
    eDirection[eDirection["LEFT"] = 0] = "LEFT";
    eDirection[eDirection["UP"] = 1] = "UP";
    eDirection[eDirection["RIGHT"] = 2] = "RIGHT";
    eDirection[eDirection["DOWN"] = 3] = "DOWN";
    eDirection[eDirection["LAST"] = 4] = "LAST";
})(eDirection || (eDirection = {}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eDirection);


/***/ }),

/***/ "./js/enums/eGameState.ts":
/*!********************************!*\
  !*** ./js/enums/eGameState.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var eGameState;
(function (eGameState) {
    eGameState[eGameState["PLAY"] = 0] = "PLAY";
    eGameState[eGameState["PAUSE"] = 1] = "PAUSE";
    eGameState[eGameState["GAME_OVER"] = 2] = "GAME_OVER";
})(eGameState || (eGameState = {}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eGameState);


/***/ }),

/***/ "./js/enums/eObjectFlags.ts":
/*!**********************************!*\
  !*** ./js/enums/eObjectFlags.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var eObjectFlags;
(function (eObjectFlags) {
    eObjectFlags[eObjectFlags["SOLID"] = 1] = "SOLID";
    eObjectFlags[eObjectFlags["PICKUP"] = 2] = "PICKUP";
})(eObjectFlags || (eObjectFlags = {}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eObjectFlags);


/***/ }),

/***/ "./js/helpers/math-helper.ts":
/*!***********************************!*\
  !*** ./js/helpers/math-helper.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Возвращает случайное целое число между min (включительно) и max (не включая max)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    getRandomInt: getRandomInt
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./js/index.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Game */ "./js/classes/Game.ts");

window.onload = function () {
    var game = new _classes_Game__WEBPACK_IMPORTED_MODULE_0__["default"]();
    game.init();
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUM4QztBQUNFO0FBQ3JCO0FBRVU7QUFFckM7SUFHSSxZQUFZLEtBQVk7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVPLDhCQUFpQixHQUF6QixVQUEwQixLQUFLLEVBQUUsSUFBSSxFQUFFLGdCQUFnQjtRQUNuRCxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDM0IsSUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ25CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsNERBQWEsQ0FBRSxFQUFFO2dCQUM1QyxPQUFPLDREQUFhLENBQUM7YUFDeEI7WUFDRCxPQUFPLDhEQUFlLENBQUM7U0FDMUI7YUFBTTtZQUNILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsOERBQWUsQ0FBQyxFQUFHO2dCQUM5QyxPQUFPLDhEQUFlLENBQUM7YUFDMUI7WUFDRCxPQUFPLDREQUFhLENBQUM7U0FDeEI7SUFDTCxDQUFDO0lBRU8sZ0NBQW1CLEdBQTNCLFVBQTRCLEtBQUssRUFBRSxJQUFJLEVBQUUsZ0JBQWdCO1FBQ3JELElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMzQixJQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDckIsSUFBRyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyw4REFBZSxDQUFDLEVBQUU7Z0JBQzVDLE9BQU8sOERBQWUsQ0FBQzthQUMxQjtZQUNELE9BQU8sK0RBQWdCLENBQUM7U0FDM0I7YUFBTTtZQUNILElBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsK0RBQWdCLENBQUMsRUFBRTtnQkFDN0MsT0FBTywrREFBZ0IsQ0FBQzthQUMzQjtZQUNELE9BQU8sOERBQWUsQ0FBQztTQUMxQjtJQUNMLENBQUM7SUFFTyx5QkFBWSxHQUFwQixVQUFxQixLQUFLLEVBQUUsZ0JBQXFCO1FBQXJCLHdEQUFxQjtRQUM3QyxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDM0IsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3JDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdEMsUUFBTyxTQUFTLEVBQUU7WUFDZCxLQUFLLDhEQUFlO2dCQUNoQixJQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7b0JBQzlELE9BQU8sU0FBUyxDQUFDO2lCQUNwQjtxQkFBTTtvQkFDSCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixDQUFDLENBQUM7aUJBQ2hFO1lBQ0wsS0FBSywrREFBZ0I7Z0JBQ2pCLElBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtvQkFDN0QsT0FBTyxTQUFTLENBQUM7aUJBQ3BCO3FCQUFNO29CQUNILE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztpQkFDaEU7WUFDTCxLQUFLLDREQUFhO2dCQUNkLElBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtvQkFDNUQsT0FBTyxTQUFTLENBQUM7aUJBQ3BCO3FCQUFNO29CQUNILE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztpQkFDbEU7WUFDTCxLQUFLLDhEQUFlO2dCQUNoQixJQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7b0JBQzVELE9BQU8sU0FBUyxDQUFDO2lCQUNwQjtxQkFBTTtvQkFDSCxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixDQUFDLENBQUM7aUJBQ2xFO1NBQ1I7SUFDTCxDQUFDO0lBRU8sMkJBQWMsR0FBdEIsVUFBdUIsS0FBSztRQUN4QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxnQkFBTSxJQUFJLGFBQU0sWUFBWSw2Q0FBSSxFQUF0QixDQUFzQixDQUFDLENBQUM7UUFDN0UsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzNCLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztZQUMvQixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEUsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hFLE9BQU8sU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxxQkFBUSxHQUFSO1FBQUEsaUJBT0M7UUFORyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO1lBQ25CLElBQUcsTUFBTSxZQUFZLDBEQUFVLEVBQUU7Z0JBQzdCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNsQztRQUNMLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFRCw4QkFBaUIsR0FBakIsVUFBa0IsVUFBc0I7UUFDcEMsSUFBSSxVQUFVLEdBQUcsZ0VBQXVCLEVBQUUsQ0FBQztRQUMzQyxJQUFJLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUMzQixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN2QyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1lBQ2pFLElBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLEVBQUU7Z0JBQ3BDLFVBQVUsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3RDLE1BQU07YUFDVDtZQUNELGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNyQztJQUNMLENBQUM7SUFFRCxvQkFBTyxHQUFQLFVBQVEsS0FBSyxFQUFFLFNBQVM7UUFDcEIsSUFBSSxlQUFlLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzNDLEtBQUssQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRWIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksVUFBVSxDQUFDO1FBQ2YsSUFBRyxLQUFLLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDbEIsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUNuQjthQUFNLElBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxFQUFFO1lBQzNDLE9BQU8sR0FBRyxLQUFLLENBQUM7U0FDbkI7YUFBTSxJQUFHLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLEVBQUU7WUFDbkQsSUFBRyxVQUFVLENBQUMsSUFBSSxDQUFDLG1CQUFTLElBQUksZ0JBQVMsQ0FBQyxJQUFJLEtBQUssS0FBSyxFQUF4QixDQUF3QixDQUFDLEVBQUU7Z0JBQ3ZELE9BQU8sR0FBRyxLQUFLLENBQUM7YUFDbkI7U0FDSjtRQUNELEtBQUssQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDdkMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ25CLE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFDTCxTQUFDO0FBQUQsQ0FBQztBQUVELGlFQUFlLEVBQUUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDbklsQjtJQUFBO1FBQ2MsY0FBUyxHQUFnQixFQUFFLENBQUM7SUFlMUMsQ0FBQztJQWJVLGdDQUFXLEdBQWxCLFVBQW1CLFFBQW1CO1FBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTSxtQ0FBYyxHQUFyQixVQUFzQixRQUFtQjtRQUNyQyxPQUFPLENBQUMsSUFBSSxDQUFDLGlFQUFpRSxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUVNLG9DQUFlLEdBQXRCLFVBQXVCLEtBQUs7UUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFRO1lBQzVCLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQztBQUVELGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQlk7QUFDVTtBQUVoRDtJQUFpQyxzQ0FBVTtJQUN2QztRQUFBLFlBQ0ksaUJBQU8sU0FrQlY7UUFqQkcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxVQUFDLEtBQUs7WUFDckMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLFFBQU8sS0FBSyxDQUFDLEdBQUcsRUFBRTtnQkFDZCxLQUFLLFNBQVM7b0JBQ1YsS0FBSSxDQUFDLGVBQWUsQ0FBQyw0REFBYSxDQUFDLENBQUM7b0JBQ3BDLE1BQU07Z0JBQ1YsS0FBSyxXQUFXO29CQUNaLEtBQUksQ0FBQyxlQUFlLENBQUMsOERBQWUsQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2dCQUNWLEtBQUssV0FBVztvQkFDWixLQUFJLENBQUMsZUFBZSxDQUFDLDhEQUFlLENBQUMsQ0FBQztvQkFDdEMsTUFBTTtnQkFDVixLQUFLLFlBQVk7b0JBQ2IsS0FBSSxDQUFDLGVBQWUsQ0FBQywrREFBZ0IsQ0FBQyxDQUFDO29CQUN2QyxNQUFNO2FBQ2I7UUFDTCxDQUFDLENBQUM7O0lBQ04sQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FBQyxDQXJCZ0MsbURBQVUsR0FxQjFDO0FBRUQsaUVBQWUsa0JBQWtCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJXO0FBQ0c7QUFFaEQ7SUFHSSxtQkFBWSxLQUFpQjtRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRWEsbUJBQVMsR0FBdkI7UUFDSSxPQUFPLHlFQUF1QixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRWEsdUJBQWEsR0FBM0I7UUFDSSxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDcEIsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLDhEQUFlLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdkMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0QjtRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3RCLENBQUM7SUFFTSw4QkFBVSxHQUFqQixVQUFrQixTQUFxQjtRQUNuQyxJQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUUsSUFBSSxDQUFDLEVBQUU7WUFDdkMsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCw0QkFBUSxHQUFSLFVBQVMsWUFBd0I7UUFDN0IsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLFlBQVksRUFBRztZQUM3QixPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRztZQUNoQyxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO1FBQzFCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTCxnQkFBQztBQUFELENBQUM7QUFFRCxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNHO0FBQ1M7QUFJckM7SUFNSSxlQUFZLEtBQWEsRUFBRSxNQUFjO1FBSmxDLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDVixXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUdmLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRU8sb0JBQUksR0FBWjtRQUNJLEtBQUksSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3hCLEtBQUksSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRyxFQUFFO2dCQUM5QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksOENBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDdkQ7U0FDSjtJQUNMLENBQUM7SUFFRCw0QkFBWSxHQUFaLFVBQWEsS0FBWTtRQUVyQixPQUFPLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUs7WUFDdkIsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTTtZQUNyQixLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDWixLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVyQixDQUFDO0lBRUQsb0JBQUksR0FBSixVQUFLLEdBQUc7UUFDSixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7WUFDcEIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUs7Z0JBQ2QsR0FBRyxDQUFDLFdBQVcsR0FBRywyREFBWSxDQUFDO2dCQUMvQixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDMUIsR0FBRyxDQUFDLFNBQVMsR0FBRywyREFBWSxDQUFDO2dCQUM3QixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLENBQUMsQ0FBQztRQUNOLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFRCxzQkFBTSxHQUFOO0lBRUEsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQUFDO0FBRUQsaUVBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRE87QUFDUztBQUVZO0FBR2pEO0lBQW1CLHdCQUFLO0lBR3BCLGNBQVksQ0FBUyxFQUFFLENBQVMsRUFBRSxLQUFZO1FBQTlDLFlBQ0ksa0JBQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUdkO1FBRkcsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLGtFQUFtQixDQUFDLENBQUM7O0lBQ3ZDLENBQUM7SUFFRCxtQkFBSSxHQUFKLFVBQUssR0FBRztRQUNKLEdBQUcsQ0FBQyxTQUFTLEdBQUcsNERBQWEsQ0FBQztRQUM5QixpQkFBTSxJQUFJLFlBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELDZCQUFjLEdBQWQ7UUFDSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUVELHFCQUFNLEdBQU47UUFDSSw2QkFBNkI7SUFDakMsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQUFDLENBckJrQiw4Q0FBSyxHQXFCdkI7QUFFRCxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JNO0FBR3NCO0FBRWhEO0lBS0kscUJBQVksS0FBWTtRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFTSw0QkFBTSxHQUFiO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ25CLE9BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDWixPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQzlCO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVPLCtCQUFTLEdBQWpCO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSw2Q0FBSSxDQUNsQix5RUFBdUIsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsRUFDN0MseUVBQXVCLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQzlDLElBQUksQ0FBQyxLQUFLLENBQ2IsQ0FBQztRQUVGLE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUM7QUFFRCxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNDO0FBQ2lCO0FBRTdDO0lBS0k7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksOENBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRUQsbUJBQUksR0FBSjtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLCtEQUFnQixDQUFDO1FBQzlCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsVUFBQyxDQUFDO1lBQ25DLElBQUcsS0FBSSxDQUFDLEtBQUssS0FBSywrREFBZ0IsRUFBRTtnQkFDaEMsS0FBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQ2Q7UUFDTCxDQUFDLENBQUM7SUFDTixDQUFDO0lBRUQsa0JBQUcsR0FBSDtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsOERBQWUsQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRUQsdUJBQVEsR0FBUjtRQUNJLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxtRUFBb0IsQ0FBQztJQUN0QyxDQUFDO0lBQ0wsV0FBQztBQUFELENBQUM7QUFFRCxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENnQztBQUloQjtBQUVwQztJQUdJLGdCQUFZLE9BQXFCO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFTSw0QkFBVyxHQUFsQixVQUFtQixRQUFtQjtRQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0sK0JBQWMsR0FBckIsVUFBc0IsUUFBbUI7UUFDckMsT0FBTyxDQUFDLElBQUksQ0FBQyxnRUFBZ0UsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFTSxnQ0FBZSxHQUF0QixVQUF1QixLQUFLO1FBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBUTtZQUM1QixRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFRCx5QkFBUSxHQUFSO1FBQUEsaUJBWUM7UUFYRyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN6QyxJQUFHLFVBQVUsRUFBRTtZQUNYLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQyxTQUFTO2dCQUN6QixLQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3BDLENBQUMsQ0FBQztTQUNMO1FBRUQsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDOUMsSUFBRyxVQUFVLEVBQUU7WUFDWCxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUMsSUFBSSxFQUFFLG1CQUFtQixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUMsQ0FBQztTQUN0RTtJQUNMLENBQUM7SUFFRCxzQ0FBcUIsR0FBckI7UUFBQSxpQkFNQztRQUxHLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQzVCLElBQUksTUFBTSxZQUFZLHFEQUFLLEVBQUU7Z0JBQ3pCLE9BQU8sS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7YUFDakM7UUFDTCxDQUFDLENBQUM7SUFDTixDQUFDO0lBRUQsMkJBQVUsR0FBVixVQUFXLE1BQWE7UUFDcEIsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDO1lBQy9CLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUNWLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUNoQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNaLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsaUNBQWdCLEdBQWhCO1FBQUEsaUJBa0NDO1FBakNHLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUcsRUFBRSxRQUFRO1lBQy9CLElBQUcsT0FBTyxHQUFHLENBQUMsY0FBYyxLQUFLLFdBQVcsRUFBRTtnQkFDMUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLEVBQUUsU0FBUztvQkFDakMsSUFBRyxRQUFRLEtBQUssU0FBUyxFQUFFO3dCQUN2QixJQUFHLE9BQU8sSUFBSSxDQUFDLGNBQWMsS0FBSyxXQUFXLEVBQUU7NEJBQzNDLElBQUksY0FBYyxHQUFHLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQzs0QkFDMUMsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDOzRCQUM1QyxJQUFJLEtBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxFQUFFLGVBQWUsQ0FBQyxFQUFFO2dDQUN2RCxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGlFQUFrQixDQUFDO29DQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxrRUFBbUIsQ0FBQyxFQUFHO29DQUMzQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBQyxHQUFHLE9BQUUsSUFBSSxRQUFDLEVBQUUsQ0FBQztpQ0FDckQ7cUNBQU0sSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxpRUFBa0IsQ0FBRTtvQ0FDOUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsaUVBQWtCLENBQUUsRUFBRztvQ0FDM0MsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsRUFBQyxHQUFHLE9BQUUsSUFBSSxRQUFDLEVBQUUsQ0FBQztpQ0FDakU7NkJBQ0o7eUJBQ0o7cUJBQ0o7eUJBQU07d0JBQ0gsSUFBRyxHQUFHLFlBQVkscURBQUssRUFBRTs0QkFDckIsSUFBRyxHQUFHLENBQUMsU0FBUyxFQUFFLEVBQUU7Z0NBQ2hCLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLEVBQUMsR0FBRyxPQUFFLElBQUksUUFBQyxFQUFFLENBQUMsQ0FBQzs2QkFDbEU7eUJBQ0o7cUJBQ0o7Z0JBQ0wsQ0FBQyxDQUFDO2FBQ0w7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUcsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDdEIsT0FBTyxVQUFVLENBQUM7U0FDckI7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsZ0NBQWUsR0FBZixVQUFnQixHQUFZLEVBQUUsSUFBYTtRQUN2QyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBQyxRQUFRO1lBQ3JCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFDLFNBQVM7Z0JBQ3ZCLElBQUcsUUFBUSxDQUFDLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsRUFBRTtvQkFDekQsT0FBTyxJQUFJLENBQUM7aUJBQ2Y7Z0JBQ0QsT0FBTyxLQUFLLENBQUM7WUFDakIsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsYUFBQztBQUFELENBQUM7QUFFRCxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5R3VCO0FBRzdDO0lBTUksZUFBWSxDQUFTLEVBQUUsQ0FBUztRQUx6QixNQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ04sTUFBQyxHQUFHLENBQUMsQ0FBQztRQUtULElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDO0lBRUQsb0JBQUksR0FBSixVQUFLLFNBQXFCLEVBQUUsTUFBa0I7UUFBbEIsbUNBQWtCO1FBQzFDLFFBQU8sU0FBUyxFQUFFO1lBQ2QsS0FBSywrREFBZ0I7Z0JBQ2pCLElBQUksQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDO2dCQUNqQixNQUFNO1lBQ1YsS0FBSyw4REFBZTtnQkFDaEIsSUFBSSxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUM7Z0JBQ2pCLE1BQU07WUFDVixLQUFLLDREQUFhO2dCQUNkLElBQUksQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDO2dCQUNqQixNQUFNO1lBQ1YsS0FBSyw4REFBZTtnQkFDaEIsSUFBSSxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUM7Z0JBQ2pCLE1BQU07U0FDYjtJQUNMLENBQUM7SUFFRCw4QkFBYyxHQUFkLFVBQWUsV0FBa0I7UUFDN0IsSUFBSSxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQseUJBQVMsR0FBVCxVQUFVLEtBQVk7UUFDbEIsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsRUFDckI7WUFDSSxPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVELGdDQUFnQixHQUFoQixVQUFpQixLQUFZO1FBQ3pCLElBQUcsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ25CLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsOEJBQWMsR0FBZCxVQUFlLEtBQVk7UUFDdkIsSUFBRyxJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDbkIsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCx5QkFBUyxHQUFULFVBQVUsS0FBWTtRQUNsQixJQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNqQixPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVELHdCQUFRLEdBQVIsVUFBUyxLQUFZO1FBQ2pCLElBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2pCLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsdUJBQU8sR0FBUCxVQUFRLEtBQVk7UUFDaEIsSUFBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDakIsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCx1QkFBTyxHQUFQLFVBQVEsS0FBWTtRQUNoQixJQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNqQixPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVELG9CQUFJLEdBQUosVUFBSyxHQUFHLEVBQUUsSUFBYTtRQUFiLG9DQUFhO1FBQ25CLElBQUcsSUFBSSxJQUFJLE1BQU0sRUFBRTtZQUNmLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNsRjthQUFNO1lBQ0gsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BGO0lBQ0wsQ0FBQztJQXRGYSxVQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsNkNBQTZDO0lBdUYxRSxZQUFDO0NBQUE7QUFFRCxpRUFBZSxLQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRzJDO0FBQ2xCO0FBQ2hCO0FBQ087QUFFRztBQUNmO0FBRW9CO0FBRTdDO0lBUUksZUFBWSxJQUFVO1FBQ2xCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSwwRUFBYSxDQUFDLDZEQUFRLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLCtDQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxzREFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksOENBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsMEJBQVUsR0FBVjtRQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRUQseUJBQVMsR0FBVDtRQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQscUJBQUssR0FBTDtRQUNJLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsc0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTTtZQUN4QixNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3ZCLElBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUNyQixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxtRUFBb0IsRUFBRTtZQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQztJQUVELHlCQUFTLEdBQVQsVUFBVSxNQUFNO1FBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELDJCQUFXLEdBQVgsVUFBWSxLQUFLO1FBQ2IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQztJQUVELGtDQUFrQixHQUFsQixVQUFtQixLQUFLO1FBQ3BCLFFBQU8sS0FBSyxDQUFDLElBQUksRUFBRTtZQUNmLEtBQUssaUJBQWlCO2dCQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNyQixNQUFNO1lBQ1YsS0FBSyxLQUFLO2dCQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkMsSUFBSSxXQUFXLEdBQUcsSUFBSSxvREFBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN6RCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO2dCQUNyQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDdEIsTUFBTTtZQUNWLEtBQUssVUFBVTtnQkFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNyQixNQUFNO1lBQ1YsS0FBSyxtQkFBbUI7Z0JBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3JCLE1BQU07WUFDVixPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDaEMsQ0FBQztJQUVELDRCQUFZLEdBQVosVUFBYSxlQUFlO1FBQTVCLGlCQU1DO1FBTEcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNLEVBQUUsS0FBSztZQUM1QixJQUFHLE1BQU0sS0FBSyxlQUFlLEVBQUU7Z0JBQzNCLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNqQztRQUNMLENBQUMsQ0FBQztJQUNOLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQztBQUVELGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDM0ZyQjtJQU1JLGdCQUFZLE9BQU87UUFKWCxXQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsUUFBRyxHQUFHLElBQUksQ0FBQztRQUNYLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBR3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7SUFDakMsQ0FBQztJQUVELHFCQUFJLEdBQUo7UUFBQSxpQkFJQztRQUhHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTTtZQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUM7SUFDTixDQUFDO0lBQ0wsYUFBQztBQUFELENBQUM7QUFFRCxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QmtCO0FBR3hDO0lBQUE7SUFVQSxDQUFDO0lBVFUseUJBQVMsR0FBaEIsVUFBaUIsU0FBUztRQUN0QixRQUFPLFNBQVMsRUFBRTtZQUNkLEtBQUssTUFBTSxDQUFDLENBQUMsT0FBTywwREFBVyxDQUFDO1lBQ2hDLEtBQUssS0FBSyxDQUFDLENBQUMsT0FBTyx5REFBVSxDQUFDO1lBQzlCLEtBQUssT0FBTyxDQUFDLENBQUMsT0FBTywyREFBWSxDQUFDO1lBQ2xDLEtBQUssUUFBUSxDQUFDLENBQUMsT0FBTyw0REFBYSxDQUFDO1lBQ3BDLEtBQUssT0FBTyxDQUFDLENBQUMsT0FBTywyREFBWSxDQUFDO1NBQ3JDO0lBQ0wsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQztBQUVELGlFQUFlLGVBQWUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmTTtBQUNXO0FBRWhEO0lBQUE7SUFVQSxDQUFDO0lBVFUsNkJBQVMsR0FBaEIsVUFBaUIsYUFBYTtRQUMxQixRQUFPLGFBQWEsRUFBRTtZQUNsQixLQUFLLE1BQU0sQ0FBQyxDQUFDLE9BQU8sSUFBSSxrREFBUyxDQUFDLDhEQUFlLENBQUMsQ0FBQztZQUNuRCxLQUFLLE9BQU8sQ0FBQyxDQUFDLE9BQU8sSUFBSSxrREFBUyxDQUFDLCtEQUFnQixDQUFDLENBQUM7WUFDckQsS0FBSyxJQUFJLENBQUMsQ0FBQyxPQUFPLElBQUksa0RBQVMsQ0FBQyw0REFBYSxDQUFDLENBQUM7WUFDL0MsS0FBSyxNQUFNLENBQUMsQ0FBQyxPQUFPLElBQUksa0RBQVMsQ0FBQyw4REFBZSxDQUFDLENBQUM7WUFDbkQ7Z0JBQVMsT0FBTyxDQUFDLElBQUksQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO2dCQUFDLE1BQU07U0FDNUU7SUFDTCxDQUFDO0lBQ0wsMEJBQUM7QUFBRCxDQUFDO0FBRUQsaUVBQWUsbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmTjtBQUNpQjtBQUNFO0FBQ1E7QUFFeEQ7SUFBQTtJQWdCQSxDQUFDO0lBZlUsd0JBQU0sR0FBYixVQUFjLElBQUksRUFBRSxLQUFLO1FBQ3JCLElBQUksU0FBUyxHQUFHLHNFQUE2QixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5RCxJQUFJLFFBQVEsR0FBRyxJQUFJLDhDQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRCxJQUFJLFNBQVMsR0FBRyxrRUFBeUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDMUQsSUFBSSxTQUFTLEdBQUcsa0VBQXlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsT0FBTyxJQUFJLDBEQUFVLENBQUM7WUFDbEIsU0FBUztZQUNULFFBQVE7WUFDUixTQUFTO1lBQ1QsU0FBUztZQUNULElBQUk7WUFDSixLQUFLO1NBQ1IsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQztBQUVELGlFQUFlLGlCQUFpQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN2QmpDLElBQUksUUFBUSxHQUFHO0lBQ2IsUUFBUSxFQUFFO1FBQ1I7WUFDRSxPQUFPLEVBQUUsRUFBRTtZQUNYLFFBQVEsRUFBRSxFQUFFO1lBQ1osU0FBUyxFQUFFO2dCQUNULFFBQVEsRUFBRTtvQkFDUjt3QkFDRSxNQUFNLEVBQUUsQ0FBQzt3QkFDVCxXQUFXLEVBQUUsS0FBSzt3QkFDbEIsV0FBVyxFQUFFLE1BQU07d0JBQ25CLFdBQVcsRUFBRSxNQUFNO3dCQUNuQixVQUFVLEVBQUU7NEJBQ1YsR0FBRyxFQUFFLEVBQUU7NEJBQ1AsR0FBRyxFQUFFLEVBQUU7eUJBQ1I7d0JBQ0QsTUFBTSxFQUFFLE9BQU87cUJBQ2hCO29CQUNEO3dCQUNFLE1BQU0sRUFBRSxDQUFDO3dCQUNULFdBQVcsRUFBRSxLQUFLO3dCQUNsQixXQUFXLEVBQUUsT0FBTzt3QkFDcEIsV0FBVyxFQUFFLE1BQU07d0JBQ25CLFVBQVUsRUFBRTs0QkFDVixHQUFHLEVBQUUsRUFBRTs0QkFDUCxHQUFHLEVBQUUsRUFBRTt5QkFDUjt3QkFDRCxNQUFNLEVBQUUsT0FBTztxQkFDaEI7b0JBQ0Q7d0JBQ0UsTUFBTSxFQUFFLENBQUM7d0JBQ1QsV0FBVyxFQUFFLE1BQU07d0JBQ25CLFdBQVcsRUFBRSxLQUFLO3dCQUNsQixXQUFXLEVBQUUsTUFBTTt3QkFDbkIsVUFBVSxFQUFFOzRCQUNWLEdBQUcsRUFBRSxFQUFFOzRCQUNQLEdBQUcsRUFBRSxFQUFFO3lCQUNSO3dCQUNELE1BQU0sRUFBRSxRQUFRO3FCQUNqQjtpQkFDRjthQUNGO1lBQ0QsTUFBTSxFQUFFO2dCQUNKO29CQUNFLEdBQUcsRUFBRSxFQUFFO29CQUNQLEdBQUcsRUFBRSxDQUFDO2lCQUNQO2dCQUNEO29CQUNFLEdBQUcsRUFBRSxFQUFFO29CQUNQLEdBQUcsRUFBRSxFQUFFO2lCQUNSO2dCQUNEO29CQUNFLEdBQUcsRUFBRSxDQUFDO29CQUNOLEdBQUcsRUFBRSxDQUFDO2lCQUNQO2FBQ0o7U0FDRjtLQUNGO0NBQ0Y7QUFFRCxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1REs7QUFDNEI7QUFDOUI7QUFDNEI7QUFFdkQ7SUFHSSx1QkFBWSxRQUFRO1FBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxpQ0FBUyxHQUFUO1FBQUEsaUJBbUJDO1FBbEJHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLFNBQVM7WUFDbkMsSUFBSSxLQUFLLEdBQUcsSUFBSSw4Q0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pELEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pCLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ3RDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO2dCQUNqQixJQUFHLEtBQUssQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO29CQUN4QixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxxRUFBeUIsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDOUQ7cUJBQU0sSUFBRyxLQUFLLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtvQkFDOUIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsb0VBQXdCLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7aUJBQzdEO1lBQ0wsQ0FBQyxDQUFDO1lBRUYsSUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztZQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRztnQkFDYixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLDZDQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDckQsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUM7QUFFRCxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDZ0I7QUFDUTtBQUNMO0FBRWhEO0lBQUE7SUFnQkEsQ0FBQztJQWZVLHlCQUFNLEdBQWIsVUFBYyxJQUFJLEVBQUUsS0FBSztRQUNyQixJQUFJLFNBQVMsR0FBRyxzRUFBMEIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0QsSUFBSSxRQUFRLEdBQUcsSUFBSSw4Q0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0QsSUFBSSxTQUFTLEdBQUcsa0VBQXNCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksU0FBUyxHQUFHLGtFQUFzQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2RCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLE9BQU8sSUFBSSwyREFBVyxDQUFDO1lBQ25CLFNBQVM7WUFDVCxRQUFRO1lBQ1IsU0FBUztZQUNULFNBQVM7WUFDVCxJQUFJO1lBQ0osS0FBSztTQUNSLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUM7QUFFRCxpRUFBZSxrQkFBa0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Qk47QUFDWTtBQUV4QztJQUF5Qiw4QkFBSztJQUkxQixvQkFBWSxNQUFNO1FBQWxCLFlBQ0ksa0JBQU0sTUFBTSxDQUFDLFNBTWhCO1FBTEcsS0FBSSxDQUFDLGtCQUFrQixHQUFHLDREQUFhLENBQUM7UUFDeEMsS0FBSSxDQUFDLGtCQUFrQixHQUFHLDJEQUFZLENBQUM7UUFFdkMsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsVUFBVSxJQUFJLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUM3RCxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxVQUFVLElBQUksS0FBSSxDQUFDLGtCQUFrQixDQUFDOztJQUNqRSxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLENBWndCLDhDQUFLLEdBWTdCO0FBRUQsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkU7QUFDWTtBQUMyQjtBQUduRTtJQUEwQiwrQkFBSztJQUczQixxQkFBWSxNQUFNO1FBQWxCLFlBQ0ksa0JBQU0sTUFBTSxDQUFDLFNBUWhCO1FBUEcsS0FBSSxDQUFDLGtCQUFrQixHQUFHLHlEQUFVLENBQUM7UUFDckMsS0FBSSxDQUFDLGtCQUFrQixHQUFHLDBEQUFXLENBQUM7UUFFdEMsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsVUFBVSxJQUFJLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUM3RCxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxVQUFVLElBQUksS0FBSSxDQUFDLGtCQUFrQixDQUFDO1FBQzdELEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSx1RUFBa0IsRUFBRSxDQUFDO1FBQzNDLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxDQUFDOztJQUN0QyxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLENBYnlCLDhDQUFLLEdBYTlCO0FBRUQsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQnFCO0FBQ25CO0FBS3VCO0FBR3BEO0lBY0ksZUFBWSxNQUFNO1FBYlIsU0FBSSxHQUFhLEVBQUUsQ0FBQztRQUNwQixhQUFRLEdBQVcsSUFBSSxDQUFDO1FBSXhCLGVBQVUsR0FBZ0IsSUFBSSxDQUFDO1FBQy9CLGNBQVMsR0FBZSxJQUFJLENBQUM7UUFJL0IsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFFcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLGlFQUFrQixDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUM3RCxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUM3RCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELG9CQUFJLEdBQUosVUFBSyxJQUFJO1FBQ0wsUUFBUSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRTtZQUMxQixLQUFLLDhEQUFlO2dCQUNoQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLDhDQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDbkU7Z0JBQ0QsTUFBTTtZQUNWLEtBQUssK0RBQWdCO2dCQUNqQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLDhDQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDbkU7Z0JBQ0QsTUFBTTtZQUNWLEtBQUssNERBQWE7Z0JBQ2QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSw4Q0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ25FO2dCQUNELE1BQU07WUFDVixLQUFLLDhEQUFlO2dCQUNoQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLDhDQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDbkU7Z0JBQ0QsTUFBTTtZQUNWO2dCQUNJLE9BQU8sQ0FBQyxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztnQkFDN0MsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQUVELDJCQUFXLEdBQVgsVUFBWSxLQUFpQjtRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRUQsK0JBQWUsR0FBZixVQUFnQixZQUF3QjtRQUVwQyxJQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ3hDLE9BQU87U0FDVjtRQUVELFFBQU8sWUFBWSxFQUFFO1lBQ2pCLEtBQUssNERBQWE7Z0JBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsNERBQWEsQ0FBQztnQkFDckMsTUFBTTtZQUNWLEtBQUssOERBQWU7Z0JBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLDhEQUFlLENBQUM7Z0JBQ3ZDLE1BQU07WUFDVixLQUFLLDhEQUFlO2dCQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyw4REFBZSxDQUFDO2dCQUN2QyxNQUFNO1lBQ1YsS0FBSywrREFBZ0I7Z0JBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLCtEQUFnQixDQUFDO2dCQUN4QyxNQUFNO1lBQ1YsUUFBUTtZQUNKLHlEQUF5RDtTQUNoRTtJQUNMLENBQUM7SUFFRCx1QkFBTyxHQUFQO1FBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBRUQsOEJBQWMsR0FBZDtRQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsb0JBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFRCw0QkFBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRztZQUNaLFFBQVEsRUFBRSxJQUFJLDhDQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDckQsSUFBSSxFQUFFLEVBQUU7U0FDWDtRQUNELEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSw4Q0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0RTtJQUNMLENBQUM7SUFFRCxvQkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsS0FBSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCwwQkFBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLDhDQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLDhDQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0U7SUFDTCxDQUFDO0lBRUQsc0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JDLElBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNmLElBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLDhDQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUMxQjtRQUNELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsNEJBQVksR0FBWjtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7SUFDaEMsQ0FBQztJQUVELHlCQUFTLEdBQVQ7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0QyxJQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUM3QixPQUFPLElBQUksQ0FBQzthQUNmO1NBQ0o7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQseUJBQVMsR0FBVCxVQUFVLEtBQVk7UUFDbEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFDLFNBQVM7WUFDNUIsSUFBRyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMzQixPQUFPLElBQUksQ0FBQzthQUNmO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVELG9CQUFJLEdBQUosVUFBSyxHQUFHO1FBQVIsaUJBVUM7UUFURyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO1lBQ3BCLElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzFCLEtBQUssQ0FBQyxDQUFDLElBQUksS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQzlCO2dCQUNJLEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQzthQUNuQztZQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUNMLFlBQUM7QUFBRCxDQUFDO0FBRUQsaUVBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNoTHJCLElBQUssTUFNSjtBQU5ELFdBQUssTUFBTTtJQUNQLDJCQUFpQjtJQUNqQiwwQkFBZ0I7SUFDaEIseUJBQWU7SUFDZiwyQkFBaUI7SUFDakIsNEJBQWtCO0FBQ3RCLENBQUMsRUFOSSxNQUFNLEtBQU4sTUFBTSxRQU1WO0FBRUQsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNSdEIsSUFBSyxVQU1KO0FBTkQsV0FBSyxVQUFVO0lBQ1gsMkNBQUk7SUFDSix1Q0FBRTtJQUNGLDZDQUFLO0lBQ0wsMkNBQUk7SUFDSiwyQ0FBSTtBQUNSLENBQUMsRUFOSSxVQUFVLEtBQVYsVUFBVSxRQU1kO0FBRUQsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNSMUIsSUFBSyxVQUlKO0FBSkQsV0FBSyxVQUFVO0lBQ1gsMkNBQUk7SUFDSiw2Q0FBSztJQUNMLHFEQUFTO0FBQ2IsQ0FBQyxFQUpJLFVBQVUsS0FBVixVQUFVLFFBSWQ7QUFFRCxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ04xQixJQUFLLFlBR0o7QUFIRCxXQUFLLFlBQVk7SUFDYixpREFBUztJQUNULG1EQUFVO0FBQ2QsQ0FBQyxFQUhJLFlBQVksS0FBWixZQUFZLFFBR2hCO0FBRUQsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNMNUIsbUZBQW1GO0FBQ25GLFNBQVMsWUFBWSxDQUFDLEdBQUcsRUFBRSxHQUFHO0lBQzFCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDekQsQ0FBQztBQUVELGlFQUFlO0lBQ1gsWUFBWTtDQUNmOzs7Ozs7O1VDUEQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05tQztBQUVuQyxNQUFNLENBQUMsTUFBTSxHQUFHO0lBQ1osSUFBSSxJQUFJLEdBQUcsSUFBSSxxREFBSSxFQUFFLENBQUM7SUFDdEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2hCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NuYWtlLy4vanMvY2xhc3Nlcy9BSS9BSS50cyIsIndlYnBhY2s6Ly9zbmFrZS8uL2pzL2NsYXNzZXMvQ29udHJvbGxlcnMvQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9zbmFrZS8uL2pzL2NsYXNzZXMvQ29udHJvbGxlcnMvS2V5Ym9hcmRDb250cm9sbGVyLnRzIiwid2VicGFjazovL3NuYWtlLy4vanMvY2xhc3Nlcy9EaXJlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9qcy9jbGFzc2VzL0ZpZWxkLnRzIiwid2VicGFjazovL3NuYWtlLy4vanMvY2xhc3Nlcy9Gb29kLnRzIiwid2VicGFjazovL3NuYWtlLy4vanMvY2xhc3Nlcy9Gb29kQ3JlYXRvci50cyIsIndlYnBhY2s6Ly9zbmFrZS8uL2pzL2NsYXNzZXMvR2FtZS50cyIsIndlYnBhY2s6Ly9zbmFrZS8uL2pzL2NsYXNzZXMvUGh5c2ljL1BoaXN5Yy50cyIsIndlYnBhY2s6Ly9zbmFrZS8uL2pzL2NsYXNzZXMvUG9pbnQudHMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9qcy9jbGFzc2VzL1NjZW5lLnRzIiwid2VicGFjazovL3NuYWtlLy4vanMvY2xhc3Nlcy9TY3JlZW4udHMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9qcy9jbGFzc2VzL1NlcmlhbGl6ZXJzL0NvbG9yU2VyaWFsaXplci50cyIsIndlYnBhY2s6Ly9zbmFrZS8uL2pzL2NsYXNzZXMvU2VyaWFsaXplcnMvRGlyZWN0aW9uU2VyaWFsaXplci50cyIsIndlYnBhY2s6Ly9zbmFrZS8uL2pzL2NsYXNzZXMvU2VyaWFsaXplcnMvRW5lbXlTbmFrZVNlcmlhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9qcy9jbGFzc2VzL1NlcmlhbGl6ZXJzL0dhbWVEYXRhLnRzIiwid2VicGFjazovL3NuYWtlLy4vanMvY2xhc3Nlcy9TZXJpYWxpemVycy9HYW1lT2JqZWN0c1NlcmlhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9qcy9jbGFzc2VzL1NlcmlhbGl6ZXJzL1BsYXllclNuYWtlU2VyaWFsaXplci50cyIsIndlYnBhY2s6Ly9zbmFrZS8uL2pzL2NsYXNzZXMvU25ha2VzL0VuZW15U25ha2UudHMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9qcy9jbGFzc2VzL1NuYWtlcy9QbGF5ZXJTbmFrZS50cyIsIndlYnBhY2s6Ly9zbmFrZS8uL2pzL2NsYXNzZXMvU25ha2VzL1NuYWtlLnRzIiwid2VicGFjazovL3NuYWtlLy4vanMvZW51bXMvZUNvbG9yLnRzIiwid2VicGFjazovL3NuYWtlLy4vanMvZW51bXMvZURpcmVjdGlvbi50cyIsIndlYnBhY2s6Ly9zbmFrZS8uL2pzL2VudW1zL2VHYW1lU3RhdGUudHMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9qcy9lbnVtcy9lT2JqZWN0RmxhZ3MudHMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9qcy9oZWxwZXJzL21hdGgtaGVscGVyLnRzIiwid2VicGFjazovL3NuYWtlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NuYWtlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zbmFrZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NuYWtlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc25ha2UvLi9qcy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2NlbmUgZnJvbSBcIi4uL1NjZW5lXCI7XG5pbXBvcnQgRW5lbXlTbmFrZSBmcm9tIFwiLi4vU25ha2VzL0VuZW15U25ha2VcIjtcbmltcG9ydCBlRGlyZWN0aW9uIGZyb20gXCIuLi8uLi9lbnVtcy9lRGlyZWN0aW9uXCI7XG5pbXBvcnQgRm9vZCBmcm9tIFwiLi4vRm9vZFwiO1xuaW1wb3J0IFBoeXNpYyBmcm9tIFwiLi4vUGh5c2ljL1BoaXN5Y1wiO1xuaW1wb3J0IERpcmVjdGlvbiBmcm9tIFwiLi4vRGlyZWN0aW9uXCI7XG5cbmNsYXNzIEFJIHtcbiAgICBwcml2YXRlIHNjZW5lOiBTY2VuZTtcbiAgICBwcml2YXRlIHBoaXN5YzogUGh5c2ljO1xuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBTY2VuZSkge1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgICAgIHRoaXMucGhpc3ljID0gc2NlbmUuZ2V0UGhpc3ljKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRWZXJ0aWNhbE9mZnNldChzbmFrZSwgZm9vZCwgZm9yYmlkRGlyZWN0aW9ucykge1xuICAgICAgICBsZXQgaGVhZCA9IHNuYWtlLmdldEhlYWQoKTtcbiAgICAgICAgaWYoaGVhZC5pc1VuZGVyKGZvb2QpKSB7XG4gICAgICAgICAgICBpZiggIWZvcmJpZERpcmVjdGlvbnMuaW5jbHVkZXMoZURpcmVjdGlvbi5VUCApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVEaXJlY3Rpb24uVVA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZURpcmVjdGlvbi5ET1dOO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYoICFmb3JiaWREaXJlY3Rpb25zLmluY2x1ZGVzKGVEaXJlY3Rpb24uRE9XTikgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVEaXJlY3Rpb24uRE9XTjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlRGlyZWN0aW9uLlVQO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRIb3Jpem9udGFsT2Zmc2V0KHNuYWtlLCBmb29kLCBmb3JiaWREaXJlY3Rpb25zKSB7XG4gICAgICAgIGxldCBoZWFkID0gc25ha2UuZ2V0SGVhZCgpO1xuICAgICAgICBpZihoZWFkLmlzUmlnaHRPZihmb29kKSkge1xuICAgICAgICAgICAgaWYoIWZvcmJpZERpcmVjdGlvbnMuaW5jbHVkZXMoZURpcmVjdGlvbi5MRUZUKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlRGlyZWN0aW9uLkxFRlQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZURpcmVjdGlvbi5SSUdIVDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmKCFmb3JiaWREaXJlY3Rpb25zLmluY2x1ZGVzKGVEaXJlY3Rpb24uUklHSFQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVEaXJlY3Rpb24uUklHSFQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZURpcmVjdGlvbi5MRUZUO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXREaXJlY3Rpb24oc25ha2UsIGZvcmJpZERpcmVjdGlvbnMgPSBbXSkge1xuICAgICAgICBsZXQgaGVhZCA9IHNuYWtlLmdldEhlYWQoKTtcbiAgICAgICAgbGV0IGRpcmVjdGlvbiA9IHNuYWtlLmdldERpcmVjdGlvbigpO1xuICAgICAgICBsZXQgZm9vZCA9IHRoaXMuZ2V0TmVhcmVzdEZvb2Qoc25ha2UpO1xuXG4gICAgICAgIHN3aXRjaChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgZURpcmVjdGlvbi5MRUZUOlxuICAgICAgICAgICAgICAgIGlmKGhlYWQuaXNSaWdodE9mKGZvb2QpICYmICFmb3JiaWREaXJlY3Rpb25zLmluY2x1ZGVzKGRpcmVjdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRWZXJ0aWNhbE9mZnNldChzbmFrZSwgZm9vZCwgZm9yYmlkRGlyZWN0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBlRGlyZWN0aW9uLlJJR0hUOlxuICAgICAgICAgICAgICAgIGlmKGhlYWQuaXNMZWZ0T2YoZm9vZCkgJiYgIWZvcmJpZERpcmVjdGlvbnMuaW5jbHVkZXMoZGlyZWN0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFZlcnRpY2FsT2Zmc2V0KHNuYWtlLCBmb29kLCBmb3JiaWREaXJlY3Rpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIGVEaXJlY3Rpb24uVVA6XG4gICAgICAgICAgICAgICAgaWYoaGVhZC5pc1VuZGVyKGZvb2QpICYmICFmb3JiaWREaXJlY3Rpb25zLmluY2x1ZGVzKGRpcmVjdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRIb3Jpem9udGFsT2Zmc2V0KHNuYWtlLCBmb29kLCBmb3JiaWREaXJlY3Rpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIGVEaXJlY3Rpb24uRE9XTjpcbiAgICAgICAgICAgICAgICBpZihoZWFkLmlzQWJvdmUoZm9vZCkgJiYgIWZvcmJpZERpcmVjdGlvbnMuaW5jbHVkZXMoZGlyZWN0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEhvcml6b250YWxPZmZzZXQoc25ha2UsIGZvb2QsIGZvcmJpZERpcmVjdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0TmVhcmVzdEZvb2Qoc25ha2UpIHtcbiAgICAgICAgbGV0IGZvb2RzID0gdGhpcy5zY2VuZS5nZXRPYmplY3RzKCkuZmlsdGVyKG9iamVjdCA9PiBvYmplY3QgaW5zdGFuY2VvZiBGb29kKTtcbiAgICAgICAgbGV0IGhlYWQgPSBzbmFrZS5nZXRIZWFkKCk7XG4gICAgICAgIGxldCBzb3J0ZWRGb29kcyA9IGZvb2RzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgbGV0IGRpc3RhbmNlQSA9IE1hdGguYWJzKGhlYWQueCAtIGEueCkgKyBNYXRoLmFicyhoZWFkLnkgLSBhLnkpO1xuICAgICAgICAgICBsZXQgZGlzdGFuY2VCID0gTWF0aC5hYnMoaGVhZC54IC0gYi54KSArIE1hdGguYWJzKGhlYWQueSAtIGIueSk7XG4gICAgICAgICAgIHJldHVybiBkaXN0YW5jZUEgLSBkaXN0YW5jZUI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzb3J0ZWRGb29kc1swXTtcbiAgICB9XG5cbiAgICBwcm9jY2VzcygpIHtcbiAgICAgICAgbGV0IG9iamVjdHMgPSB0aGlzLnNjZW5lLmdldE9iamVjdHMoKTtcbiAgICAgICAgb2JqZWN0cy5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICAgICAgICAgIGlmKG9iamVjdCBpbnN0YW5jZW9mIEVuZW15U25ha2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2NjZXNzRGlyZWN0aW9uKG9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJvY2Nlc3NEaXJlY3Rpb24oZW5lbXlTbmFrZTogRW5lbXlTbmFrZSkge1xuICAgICAgICBsZXQgZGlyZWN0aW9ucyA9IERpcmVjdGlvbi5nZXREaXJlY3Rpb25zKCk7XG4gICAgICAgIGxldCBjaGVja2VkRGlyZWN0aW9ucyA9IFtdO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZGlyZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbiA9IHRoaXMuZ2V0RGlyZWN0aW9uKGVuZW15U25ha2UsIGNoZWNrZWREaXJlY3Rpb25zKTtcbiAgICAgICAgICAgIGlmKHRoaXMuY2FuTW92ZShlbmVteVNuYWtlLCBkaXJlY3Rpb24pKSB7XG4gICAgICAgICAgICAgICAgZW5lbXlTbmFrZS5jaGFuZ2VEaXJlY3Rpb24oZGlyZWN0aW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoZWNrZWREaXJlY3Rpb25zLnB1c2goZGlyZWN0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhbk1vdmUoc25ha2UsIGRpcmVjdGlvbikge1xuICAgICAgICBsZXQgc291cmNlRGlyZWN0aW9uID0gc25ha2UuZ2V0RGlyZWN0aW9uKCk7XG4gICAgICAgIHNuYWtlLmNoYW5nZURpcmVjdGlvbihkaXJlY3Rpb24pO1xuICAgICAgICBzbmFrZS5tb3ZlKCk7XG5cbiAgICAgICAgbGV0IGNhbk1vdmUgPSB0cnVlO1xuICAgICAgICBsZXQgY29sbGlzaW9ucztcbiAgICAgICAgaWYoc25ha2UuaXNFYXRTZWxmKCkpIHtcbiAgICAgICAgICAgIGNhbk1vdmUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMucGhpc3ljLmNoZWNrQm91bmRhcnlPdmVyZmxvdygpKSB7XG4gICAgICAgICAgICBjYW5Nb3ZlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZihjb2xsaXNpb25zID0gdGhpcy5waGlzeWMuZGV0ZWN0Q29sbGlzaW9ucygpKSB7XG4gICAgICAgICAgICBpZihjb2xsaXNpb25zLmZpbmQoY29sbGlzaW9uID0+IGNvbGxpc2lvbi50eXBlICE9PSAnRUFUJykpIHtcbiAgICAgICAgICAgICAgICBjYW5Nb3ZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc25ha2UuY2hhbmdlRGlyZWN0aW9uKHNvdXJjZURpcmVjdGlvbik7XG4gICAgICAgIHNuYWtlLnJldmVydE1vdmUoKTtcbiAgICAgICAgcmV0dXJuIGNhbk1vdmU7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBSTsiLCJpbXBvcnQgaU9ic2VydmFibGUgZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvaU9ic2VydmFibGVcIjtcbmltcG9ydCBpT2JzZXJ2ZXIgZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvaU9ic2VydmVyXCI7XG5cbmNsYXNzIENvbnRyb2xsZXIgaW1wbGVtZW50cyBpT2JzZXJ2YWJsZSB7XG4gICAgcHJvdGVjdGVkIG9ic2VydmVyczogaU9ic2VydmVyW10gPSBbXTtcblxuICAgIHB1YmxpYyBhZGRPYnNlcnZlcihvYnNlcnZlcjogaU9ic2VydmVyKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVPYnNlcnZlcihvYnNlcnZlcjogaU9ic2VydmVyKSB7XG4gICAgICAgIGNvbnNvbGUud2Fybign0JfQtNC10YHRjCDRg9C00LDQu9GP0LXQvCDQvdCw0LHQu9GO0LTQsNGC0LXQu9GPLCDQvdC1INGA0LXQsNC70LjQt9C+0LLQsNC7INGC0Log0L3QtSDQsdGL0LvQviDQvdCw0LTQvtCx0L3QvtCy0YHRgtC4Jyk7XG4gICAgfVxuXG4gICAgcHVibGljIG5vdGlmeU9ic2VydmVycyhldmVudCkge1xuICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKChvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuaGFuZGxlRXZlbnQoZXZlbnQpO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbGxlcjsiLCJpbXBvcnQgQ29udHJvbGxlciBmcm9tIFwiLi9Db250cm9sbGVyXCI7XG5pbXBvcnQgZURpcmVjdGlvbiBmcm9tIFwiLi4vLi4vZW51bXMvZURpcmVjdGlvblwiO1xuXG5jbGFzcyBLZXlib2FyZENvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzd2l0Y2goZXZlbnQua2V5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5T2JzZXJ2ZXJzKGVEaXJlY3Rpb24uVVApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeU9ic2VydmVycyhlRGlyZWN0aW9uLkRPV04pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeU9ic2VydmVycyhlRGlyZWN0aW9uLkxFRlQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlPYnNlcnZlcnMoZURpcmVjdGlvbi5SSUdIVCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgS2V5Ym9hcmRDb250cm9sbGVyOyIsImltcG9ydCBlRGlyZWN0aW9uIGZyb20gXCIuLi9lbnVtcy9lRGlyZWN0aW9uXCI7XG5pbXBvcnQgTWF0aEhlbHBlciBmcm9tIFwiLi4vaGVscGVycy9tYXRoLWhlbHBlclwiO1xuXG5jbGFzcyBEaXJlY3Rpb24ge1xuICAgIHB1YmxpYyB2YWx1ZTtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBlRGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldFJhbmRvbSgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGhIZWxwZXIuZ2V0UmFuZG9tSW50KDAsIDQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0RGlyZWN0aW9ucygpIHtcbiAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSAhPT0gZURpcmVjdGlvbi5MQVNUOyBpKyspIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbnMucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGlyZWN0aW9ucztcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNPcHBvc2l0ZShkaXJlY3Rpb246IGVEaXJlY3Rpb24pIHtcbiAgICAgICAgaWYoTWF0aC5hYnModGhpcy52YWx1ZSAtIGRpcmVjdGlvbiApID09IDIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHNldFZhbHVlKG5ld0RpcmVjdGlvbjogZURpcmVjdGlvbikge1xuICAgICAgICBpZiggdGhpcy52YWx1ZSA9PSBuZXdEaXJlY3Rpb24gKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYoIHRoaXMuaXNPcHBvc2l0ZShuZXdEaXJlY3Rpb24pICkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmFsdWUgPSBuZXdEaXJlY3Rpb247XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGlyZWN0aW9uOyIsImltcG9ydCBQb2ludCBmcm9tICcuL1BvaW50JztcbmltcG9ydCBlQ29sb3IgZnJvbSBcIi4uL2VudW1zL2VDb2xvclwiO1xuaW1wb3J0IGlEcmF3YWJsZSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pRHJhd2FibGVcIjtcbmltcG9ydCBpVXBkYXRhYmxlIGZyb20gXCIuLi9pbnRlcmZhY2VzL2lVcGRhdGFibGVcIjtcblxuY2xhc3MgRmllbGQgaW1wbGVtZW50cyBpRHJhd2FibGUsIGlVcGRhdGFibGUge1xuXG4gICAgcHVibGljIHdpZHRoID0gMDtcbiAgICBwdWJsaWMgaGVpZ2h0ID0gMDtcbiAgICBwdWJsaWMgZmllbGRzID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXQoKSB7XG4gICAgICAgIGZvcihsZXQgcm93X2kgPSAwOyByb3dfaSA8IHRoaXMud2lkdGg7IHJvd19pKyspIHtcbiAgICAgICAgICAgIHRoaXMuZmllbGRzW3Jvd19pXSA9IFtdO1xuICAgICAgICAgICAgZm9yKGxldCBjb2xfaSA9IDA7IGNvbF9pIDwgdGhpcy5oZWlnaHQ7IGNvbF9pICsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZHNbcm93X2ldW2NvbF9pXSA9IG5ldyBQb2ludChyb3dfaSwgY29sX2kpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNJbkJvdW5kYXJ5KHBvaW50OiBQb2ludCkge1xuXG4gICAgICAgIHJldHVybiBwb2ludC54IDwgdGhpcy53aWR0aCAmJlxuICAgICAgICAgICAgcG9pbnQueSA8IHRoaXMuaGVpZ2h0ICYmXG4gICAgICAgICAgICBwb2ludC54ID49IDAgJiZcbiAgICAgICAgICAgIHBvaW50LnkgPj0gMDtcblxuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIHRoaXMuZmllbGRzLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgICAgICAgcm93LmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gZUNvbG9yLldISVRFO1xuICAgICAgICAgICAgICAgIGZpZWxkLmRyYXcoY3R4LCAnc3Ryb2tlJyk7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGVDb2xvci5HUkVFTjtcbiAgICAgICAgICAgICAgICBmaWVsZC5kcmF3KGN0eCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmllbGQ7IiwiaW1wb3J0IFBvaW50IGZyb20gXCIuL1BvaW50XCI7XG5pbXBvcnQgZUNvbG9yIGZyb20gXCIuLi9lbnVtcy9lQ29sb3JcIjtcbmltcG9ydCBpVXBkYXRhYmxlIGZyb20gXCIuLi9pbnRlcmZhY2VzL2lVcGRhdGFibGVcIjtcbmltcG9ydCBlT2JqZWN0RmxhZ3MgZnJvbSBcIi4uL2VudW1zL2VPYmplY3RGbGFnc1wiO1xuaW1wb3J0IEZpZWxkIGZyb20gXCIuL0ZpZWxkXCI7XG5cbmNsYXNzIEZvb2QgZXh0ZW5kcyBQb2ludCBpbXBsZW1lbnRzIGlVcGRhdGFibGUge1xuICAgIHB1YmxpYyBmbGFnczogZU9iamVjdEZsYWdzW107XG4gICAgcHVibGljIGZpZWxkOiBGaWVsZDtcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgZmllbGQ6IEZpZWxkKSB7XG4gICAgICAgIHN1cGVyKHgsIHkpO1xuICAgICAgICB0aGlzLmZpZWxkID0gZmllbGQ7XG4gICAgICAgIHRoaXMuZmxhZ3MgPSBbZU9iamVjdEZsYWdzLlBJQ0tVUF07XG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGVDb2xvci5ZRUxMT1c7XG4gICAgICAgIHN1cGVyLmRyYXcoY3R4KTtcbiAgICB9XG5cbiAgICBnZXRDb29yZGluYXRlcygpIHtcbiAgICAgICAgcmV0dXJuIFt0aGlzXTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJmb29kIHVwZGF0ZVwiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb2Q7IiwiaW1wb3J0IEZvb2QgZnJvbSBcIi4vRm9vZFwiO1xuaW1wb3J0IEZpZWxkIGZyb20gXCIuL0ZpZWxkXCI7XG5pbXBvcnQgU25ha2UgZnJvbSBcIi4vU25ha2VzL1NuYWtlXCI7XG5pbXBvcnQgbWF0aEhlbHBlciBmcm9tIFwiLi4vaGVscGVycy9tYXRoLWhlbHBlclwiO1xuXG5jbGFzcyBGb29kQ3JlYXRvciB7XG4gICAgcHJpdmF0ZSBtYXhXaWR0aDogbnVtYmVyO1xuICAgIHByaXZhdGUgbWF4SGVpZ2h0OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBmaWVsZDogRmllbGQ7XG5cbiAgICBjb25zdHJ1Y3RvcihmaWVsZDogRmllbGQpIHtcbiAgICAgICAgdGhpcy5tYXhXaWR0aCA9IGZpZWxkLndpZHRoO1xuICAgICAgICB0aGlzLm1heEhlaWdodCA9IGZpZWxkLmhlaWdodDtcbiAgICAgICAgdGhpcy5maWVsZCA9IGZpZWxkO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGUoKSB7XG4gICAgICAgIGxldCBuZXdGb29kID0gbnVsbDtcbiAgICAgICAgd2hpbGUoIW5ld0Zvb2QpIHtcbiAgICAgICAgICAgIG5ld0Zvb2QgPSB0aGlzLnRyeUNyZWF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdGb29kO1xuICAgIH1cblxuICAgIHByaXZhdGUgdHJ5Q3JlYXRlKCkge1xuICAgICAgICBsZXQgbmV3Rm9vZCA9IG5ldyBGb29kKFxuICAgICAgICAgICAgbWF0aEhlbHBlci5nZXRSYW5kb21JbnQoMCwgdGhpcy5tYXhXaWR0aCAtIDEpLFxuICAgICAgICAgICAgbWF0aEhlbHBlci5nZXRSYW5kb21JbnQoMCwgdGhpcy5tYXhIZWlnaHQgLSAxKSxcbiAgICAgICAgICAgIHRoaXMuZmllbGRcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gbmV3Rm9vZDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb2RDcmVhdG9yOyIsImltcG9ydCBTY2VuZSBmcm9tIFwiLi9TY2VuZVwiO1xuaW1wb3J0IGVHYW1lU3RhdGUgZnJvbSBcIi4uL2VudW1zL2VHYW1lU3RhdGVcIjtcblxuY2xhc3MgR2FtZSB7XG4gICAgcHJpdmF0ZSBnYW1lU3BlZWQ6IG51bWJlcjtcbiAgICBwcml2YXRlIHNjZW5lIDogU2NlbmU7XG4gICAgcHJpdmF0ZSB0aW1lcjtcbiAgICBwdWJsaWMgc3RhdGU6IGVHYW1lU3RhdGU7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZ2FtZVNwZWVkID0gMTAwO1xuICAgICAgICB0aGlzLnNjZW5lID0gbmV3IFNjZW5lKHRoaXMpO1xuICAgICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLnNjZW5lLnVwZGF0ZSgpO1xuICAgICAgICB0aGlzLnN0YXRlID0gZUdhbWVTdGF0ZS5QQVVTRTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlID09PSBlR2FtZVN0YXRlLlBBVVNFKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBydW4oKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBlR2FtZVN0YXRlLlBMQVk7XG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCh0aGlzLnNjZW5lLnVwZGF0ZS5iaW5kKHRoaXMuc2NlbmUpLCB0aGlzLmdhbWVTcGVlZCk7XG4gICAgfVxuXG4gICAgZ2FtZU92ZXIoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBlR2FtZVN0YXRlLkdBTUVfT1ZFUjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG5cbiIsImltcG9ydCBpVXBkYXRhYmxlIGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2lVcGRhdGFibGVcIjtcbmltcG9ydCBlT2JqZWN0RmxhZ3MgZnJvbSBcIi4uLy4uL2VudW1zL2VPYmplY3RGbGFnc1wiO1xuaW1wb3J0IGlPYnNlcnZhYmxlIGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2lPYnNlcnZhYmxlXCI7XG5pbXBvcnQgaU9ic2VydmVyIGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2lPYnNlcnZlclwiO1xuaW1wb3J0IFBvaW50IGZyb20gXCIuLi9Qb2ludFwiO1xuaW1wb3J0IFNuYWtlIGZyb20gXCIuLi9TbmFrZXMvU25ha2VcIjtcblxuY2xhc3MgUGh5c2ljIGltcGxlbWVudHMgaU9ic2VydmFibGUge1xuICAgIHByaXZhdGUgb2JqZWN0cztcbiAgICBwcml2YXRlIG9ic2VydmVyczogaU9ic2VydmVyW107XG4gICAgY29uc3RydWN0b3Iob2JqZWN0czogaVVwZGF0YWJsZVtdKSB7XG4gICAgICAgIHRoaXMub2JqZWN0cyA9IG9iamVjdHM7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW107XG4gICAgfVxuXG4gICAgcHVibGljIGFkZE9ic2VydmVyKG9ic2VydmVyOiBpT2JzZXJ2ZXIpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChvYnNlcnZlcik7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZU9ic2VydmVyKG9ic2VydmVyOiBpT2JzZXJ2ZXIpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCfQl9C00LXRgdGMINGD0LTQsNC70Y/QtdC8INC90LDQsdC70Y7QtNCw0YLQtdC70Y8sINC90LUg0YDQtdCw0LvQuNC30L7QstCw0Lsg0YLQuiDQvdC1INCx0YvQu9C+INC90LDQtNC+0LHQvdC+0YHRgtC4Jyk7XG4gICAgfVxuXG4gICAgcHVibGljIG5vdGlmeU9ic2VydmVycyhldmVudCkge1xuICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKChvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuaGFuZGxlRXZlbnQoZXZlbnQpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHByb2NjZXNzKCkge1xuICAgICAgICBsZXQgY29sbGlzaW9ucyA9IHRoaXMuZGV0ZWN0Q29sbGlzaW9ucygpO1xuICAgICAgICBpZihjb2xsaXNpb25zKSB7XG4gICAgICAgICAgICBjb2xsaXNpb25zLmZvckVhY2goKGNvbGxpc2lvbikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5T2JzZXJ2ZXJzKGNvbGxpc2lvbik7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG92ZXJmbG93ZWQgPSB0aGlzLmNoZWNrQm91bmRhcnlPdmVyZmxvdygpO1xuICAgICAgICBpZihvdmVyZmxvd2VkKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeU9ic2VydmVycyh7dHlwZTogXCJCT1VOREFSWV9PVkVSRkxPV1wiLCBkYXRhOiBvdmVyZmxvd2VkfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrQm91bmRhcnlPdmVyZmxvdygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub2JqZWN0cy5maW5kKChvYmplY3QpID0+IHtcbiAgICAgICAgICAgIGlmKCBvYmplY3QgaW5zdGFuY2VvZiBTbmFrZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlzT3ZlcmZsb3cob2JqZWN0KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGlzT3ZlcmZsb3cob2JqZWN0OiBTbmFrZSkge1xuICAgICAgICBsZXQgaGVhZCA9IG9iamVjdC5nZXRIZWFkKCk7XG4gICAgICAgIGlmKCBoZWFkLnggPiBvYmplY3QuZmllbGQud2lkdGggLSAxIHx8XG4gICAgICAgICAgICBoZWFkLnggPCAwIHx8XG4gICAgICAgICAgICBoZWFkLnkgPiBvYmplY3QuZmllbGQuaGVpZ2h0IC0gMSB8fFxuICAgICAgICAgICAgaGVhZC55IDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGRldGVjdENvbGxpc2lvbnMoKSB7XG4gICAgICAgIGxldCBjb2xsaXNpb25zID0gW107XG4gICAgICAgIHRoaXMub2JqZWN0cy5mb3JFYWNoKChzcmMsIHNyY0luZGV4KSA9PiB7XG4gICAgICAgICAgICBpZih0eXBlb2Ygc3JjLmdldENvb3JkaW5hdGVzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vYmplY3RzLmZvckVhY2goKGRlc3QsIGRlc3RJbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihzcmNJbmRleCAhPT0gZGVzdEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YgZGVzdC5nZXRDb29yZGluYXRlcyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzcmNDb29yZGluYXRlcyA9IHNyYy5nZXRDb29yZGluYXRlcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkZXN0Q29vcmRpbmF0ZXMgPSBkZXN0LmdldENvb3JkaW5hdGVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGV0ZWN0Q29sbGlzaW9uKHNyY0Nvb3JkaW5hdGVzLCBkZXN0Q29vcmRpbmF0ZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBzcmMuZmxhZ3MuaW5jbHVkZXMoZU9iamVjdEZsYWdzLlNPTElEKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzdC5mbGFncy5pbmNsdWRlcyhlT2JqZWN0RmxhZ3MuUElDS1VQKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvbnMucHVzaCh7dHlwZTogXCJFQVRcIiwgZGF0YToge3NyYywgZGVzdH0gfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKCBzcmMuZmxhZ3MuaW5jbHVkZXMoZU9iamVjdEZsYWdzLlNPTElEICkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc3QuZmxhZ3MuaW5jbHVkZXMoZU9iamVjdEZsYWdzLlNPTElEICkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb25zLnB1c2goe3R5cGU6IFwiU05BS0VfQ09MTElTSU9OXCIsIGRhdGE6IHtzcmMsIGRlc3R9IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzcmMgaW5zdGFuY2VvZiBTbmFrZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNyYy5pc0VhdFNlbGYoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb25zLnB1c2goe3R5cGU6IFwiU05BS0VfQ09MTElTSU9OXCIsIGRhdGE6IHtzcmMsIGRlc3R9IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKGNvbGxpc2lvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbGxpc2lvbnM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGRldGVjdENvbGxpc2lvbihzcmM6IFBvaW50W10sIGRlc3Q6IFBvaW50W10pIHtcbiAgICAgICAgcmV0dXJuIHNyYy5zb21lKChzcmNQb2ludCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGRlc3Quc29tZSgoZGVzdFBvaW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoc3JjUG9pbnQueCA9PT0gZGVzdFBvaW50LnggJiYgc3JjUG9pbnQueSA9PT0gZGVzdFBvaW50LnkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGh5c2ljOyIsImltcG9ydCBlRGlyZWN0aW9uIGZyb20gXCIuLi9lbnVtcy9lRGlyZWN0aW9uXCI7XG5pbXBvcnQgRHJhd2FibGUgZnJvbSBcIi4uL2ludGVyZmFjZXMvaURyYXdhYmxlXCI7XG5cbmNsYXNzIFBvaW50IGltcGxlbWVudHMgRHJhd2FibGUge1xuICAgIHB1YmxpYyB4ID0gMDtcbiAgICBwdWJsaWMgeSA9IDA7XG5cbiAgICBwdWJsaWMgc3RhdGljIFNJWkUgPSAxNTsgLy8g0KDQsNC30LzQtdGAINCyINC/0LjQutGB0LXQu9GP0YUg0LzQuNC90LjQvNCw0LvRjNC90L7QuSDRgtC+0YfQutC4INCyINC40LPRgNC1XG5cbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cblxuICAgIG1vdmUoZGlyZWN0aW9uOiBlRGlyZWN0aW9uLCBvZmZzZXQ6IG51bWJlciA9IDEpIHtcbiAgICAgICAgc3dpdGNoKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSBlRGlyZWN0aW9uLlJJR0hUOlxuICAgICAgICAgICAgICAgIHRoaXMueCArPSBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGVEaXJlY3Rpb24uTEVGVDpcbiAgICAgICAgICAgICAgICB0aGlzLnggLT0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBlRGlyZWN0aW9uLlVQOlxuICAgICAgICAgICAgICAgIHRoaXMueSAtPSBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGVEaXJlY3Rpb24uRE9XTjpcbiAgICAgICAgICAgICAgICB0aGlzLnkgKz0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0TmV3UG9zaXRpb24obmV3UG9zaXRpb246IFBvaW50KSB7XG4gICAgICAgIHRoaXMueCA9IG5ld1Bvc2l0aW9uLng7XG4gICAgICAgIHRoaXMueSA9IG5ld1Bvc2l0aW9uLnk7XG4gICAgfVxuXG4gICAgaXNPdmVybGFwKHBvaW50OiBQb2ludCkge1xuICAgICAgICBpZiggdGhpcy54ID09IHBvaW50LnggJiZcbiAgICAgICAgICAgIHRoaXMueSA9PSBwb2ludC55IClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlzU2FtZUhvcml6b250YWwocG9pbnQ6IFBvaW50KSB7XG4gICAgICAgIGlmKHRoaXMueCA9PT0gcG9pbnQueCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlzU2FtZVZlcnRpY2FsKHBvaW50OiBQb2ludCkge1xuICAgICAgICBpZih0aGlzLnkgPT09IHBvaW50LnkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpc1JpZ2h0T2YocG9pbnQ6IFBvaW50KSB7XG4gICAgICAgIGlmKHRoaXMueCA+IHBvaW50LngpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpc0xlZnRPZihwb2ludDogUG9pbnQpIHtcbiAgICAgICAgaWYodGhpcy54IDwgcG9pbnQueCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlzVW5kZXIocG9pbnQ6IFBvaW50KSB7XG4gICAgICAgIGlmKHRoaXMueSA+IHBvaW50LnkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpc0Fib3ZlKHBvaW50OiBQb2ludCkge1xuICAgICAgICBpZih0aGlzLnkgPCBwb2ludC55KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZHJhdyhjdHgsIHR5cGUgPSAnZmlsbCcpIHtcbiAgICAgICAgaWYodHlwZSA9PSAnZmlsbCcpIHtcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnggKiBQb2ludC5TSVpFLCB0aGlzLnkgKiBQb2ludC5TSVpFLCBQb2ludC5TSVpFLCBQb2ludC5TSVpFKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN0eC5zdHJva2VSZWN0KHRoaXMueCAqIFBvaW50LlNJWkUsIHRoaXMueSAqIFBvaW50LlNJWkUsIFBvaW50LlNJWkUsIFBvaW50LlNJWkUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb2ludDsiLCJpbXBvcnQgT2JqZWN0RmFjdG9yeSBmcm9tIFwiLi9TZXJpYWxpemVycy9HYW1lT2JqZWN0c1NlcmlhbGl6ZXJcIjtcbmltcG9ydCBnYW1lRGF0YSBmcm9tIFwiLi9TZXJpYWxpemVycy9HYW1lRGF0YVwiO1xuaW1wb3J0IFNjcmVlbiBmcm9tIFwiLi9TY3JlZW5cIjtcbmltcG9ydCBQaHlzaWMgZnJvbSBcIi4vUGh5c2ljL1BoaXN5Y1wiO1xuaW1wb3J0IGlPYnNlcnZlciBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pT2JzZXJ2ZXJcIjtcbmltcG9ydCBGb29kQ3JlYXRvciBmcm9tIFwiLi9Gb29kQ3JlYXRvclwiO1xuaW1wb3J0IEFJIGZyb20gXCIuL0FJL0FJXCI7XG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9HYW1lXCI7XG5pbXBvcnQgZUdhbWVTdGF0ZSBmcm9tICcuLi9lbnVtcy9lR2FtZVN0YXRlJztcblxuY2xhc3MgU2NlbmUgaW1wbGVtZW50cyBpT2JzZXJ2ZXJ7XG4gICAgcHJpdmF0ZSBvYmplY3RGYWN0b3J5IDogT2JqZWN0RmFjdG9yeTtcbiAgICBwcml2YXRlIG9iamVjdHM7XG4gICAgcHJpdmF0ZSBzY3JlZW46IFNjcmVlbjtcbiAgICBwcml2YXRlIHBoeXNpYzogUGh5c2ljO1xuICAgIHByaXZhdGUgYWk6IEFJO1xuICAgIHByaXZhdGUgZ2FtZTogR2FtZTtcbiAgICBwcml2YXRlIGxhc3RQaGlzeWNFdmVudDtcbiAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lKSB7XG4gICAgICAgIHRoaXMub2JqZWN0RmFjdG9yeSA9IG5ldyBPYmplY3RGYWN0b3J5KGdhbWVEYXRhKTtcbiAgICAgICAgdGhpcy5vYmplY3RzID0gdGhpcy5vYmplY3RGYWN0b3J5LmNyZWF0ZUFsbCgpO1xuICAgICAgICB0aGlzLnNjcmVlbiA9IG5ldyBTY3JlZW4odGhpcy5vYmplY3RzKTtcbiAgICAgICAgdGhpcy5waHlzaWMgPSBuZXcgUGh5c2ljKHRoaXMub2JqZWN0cyk7XG4gICAgICAgIHRoaXMucGh5c2ljLmFkZE9ic2VydmVyKHRoaXMpO1xuICAgICAgICB0aGlzLmFpID0gbmV3IEFJKHRoaXMpO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgIH1cblxuICAgIGdldE9iamVjdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9iamVjdHM7XG4gICAgfVxuXG4gICAgZ2V0UGhpc3ljKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5waHlzaWM7XG4gICAgfVxuXG4gICAgZ2V0QUkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5vYmplY3RzLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgICAgICAgICAgb2JqZWN0LnVwZGF0ZSgpO1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLmFpLnByb2NjZXNzKCk7XG4gICAgICAgIHRoaXMucGh5c2ljLnByb2NjZXNzKCk7XG4gICAgICAgIGlmKHRoaXMubGFzdFBoaXN5Y0V2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLnJlc3BvbmRQaGlzeWNFdmVudCh0aGlzLmxhc3RQaGlzeWNFdmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5nYW1lLnN0YXRlICE9PSBlR2FtZVN0YXRlLkdBTUVfT1ZFUikge1xuICAgICAgICAgICAgdGhpcy5zY3JlZW4uZHJhdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkT2JqZWN0KG9iamVjdCkge1xuICAgICAgICB0aGlzLm9iamVjdHMucHVzaChvYmplY3QpO1xuICAgIH1cblxuICAgIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgICAgIHRoaXMubGFzdFBoaXN5Y0V2ZW50ID0gZXZlbnQ7XG4gICAgfVxuXG4gICAgcmVzcG9uZFBoaXN5Y0V2ZW50KGV2ZW50KSB7XG4gICAgICAgIHN3aXRjaChldmVudC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwiU05BS0VfQ09MTElTSU9OXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLmdhbWVPdmVyKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiRUFUXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVPYmplY3QoZXZlbnQuZGF0YS5kZXN0KTtcbiAgICAgICAgICAgICAgICBsZXQgZm9vZENyZWF0b3IgPSBuZXcgRm9vZENyZWF0b3IoZXZlbnQuZGF0YS5kZXN0LmZpZWxkKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZE9iamVjdChmb29kQ3JlYXRvci5jcmVhdGUoKSk7XG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5zcmMuZ3JvdygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkVBVF9TRUxGXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLmdhbWVPdmVyKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQk9VTkRBUllfT1ZFUkZMT1dcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUuZ2FtZU92ZXIoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6IGNvbnNvbGUubG9nKFwidW5oYW5kbGUgZXZlbnQ6IFwiLCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXN0UGhpc3ljRXZlbnQgPSBudWxsO1xuICAgIH1cblxuICAgIHJlbW92ZU9iamVjdChyZW1vdmFibGVPYmplY3QpIHtcbiAgICAgICAgdGhpcy5vYmplY3RzLnNvbWUoKG9iamVjdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmKG9iamVjdCA9PT0gcmVtb3ZhYmxlT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vYmplY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY2VuZTsiLCJpbXBvcnQgaURyYXdhYmxlIGZyb20gXCIuLi9pbnRlcmZhY2VzL2lEcmF3YWJsZVwiO1xuXG5jbGFzcyBTY3JlZW4gaW1wbGVtZW50cyBpRHJhd2FibGV7XG5cbiAgICBwcml2YXRlIGNhbnZhcyA9IG51bGw7XG4gICAgcHJpdmF0ZSBjdHggPSBudWxsO1xuICAgIHByaXZhdGUgdG9EcmF3T2JqZWN0cyA9IFtdO1xuXG4gICAgY29uc3RydWN0b3Iob2JqZWN0cykge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSAxMDAwO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSAxMDAwO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRoaXMudG9EcmF3T2JqZWN0cyA9IG9iamVjdHM7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy50b0RyYXdPYmplY3RzLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgICAgICAgICAgb2JqZWN0LmRyYXcodGhpcy5jdHgpO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NyZWVuO1xuIiwiaW1wb3J0IGVDb2xvciBmcm9tIFwiLi4vLi4vZW51bXMvZUNvbG9yXCI7XG5cblxuY2xhc3MgQ29sb3JTZXJpYWxpemVyIHtcbiAgICBzdGF0aWMgc2VyaWFsaXplKGpzb25Db2xvcikge1xuICAgICAgICBzd2l0Y2goanNvbkNvbG9yKSB7XG4gICAgICAgICAgICBjYXNlIFwiYmx1ZVwiOiByZXR1cm4gZUNvbG9yLkJMVUU7XG4gICAgICAgICAgICBjYXNlIFwicmVkXCI6IHJldHVybiBlQ29sb3IuUkVEO1xuICAgICAgICAgICAgY2FzZSBcImdyZWVuXCI6IHJldHVybiBlQ29sb3IuR1JFRU47XG4gICAgICAgICAgICBjYXNlIFwieWVsbG93XCI6IHJldHVybiBlQ29sb3IuWUVMTE9XO1xuICAgICAgICAgICAgY2FzZSBcIndoaXRlXCI6IHJldHVybiBlQ29sb3IuV0hJVEU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbG9yU2VyaWFsaXplcjsiLCJpbXBvcnQgRGlyZWN0aW9uIGZyb20gXCIuLi9EaXJlY3Rpb25cIjtcbmltcG9ydCBlRGlyZWN0aW9uIGZyb20gXCIuLi8uLi9lbnVtcy9lRGlyZWN0aW9uXCI7XG5cbmNsYXNzIERpcmVjdGlvblNlcmlhbGl6ZXIge1xuICAgIHN0YXRpYyBzZXJpYWxpemUoanNvbkRpcmVjdGlvbikge1xuICAgICAgICBzd2l0Y2goanNvbkRpcmVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSBcImxlZnRcIjogcmV0dXJuIG5ldyBEaXJlY3Rpb24oZURpcmVjdGlvbi5MRUZUKTtcbiAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOiByZXR1cm4gbmV3IERpcmVjdGlvbihlRGlyZWN0aW9uLlJJR0hUKTtcbiAgICAgICAgICAgIGNhc2UgXCJ1cFwiOiByZXR1cm4gbmV3IERpcmVjdGlvbihlRGlyZWN0aW9uLlVQKTtcbiAgICAgICAgICAgIGNhc2UgXCJkb3duXCI6IHJldHVybiBuZXcgRGlyZWN0aW9uKGVEaXJlY3Rpb24uRE9XTik7XG4gICAgICAgICAgICBkZWZhdWx0OiBjb25zb2xlLndhcm4oXCJpbmNvcnJlY3QgZGlyZWN0aW9uIHZhbHVlIGZyb20ganNvbiBmaWxlXCIpOyBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGlyZWN0aW9uU2VyaWFsaXplcjsiLCJpbXBvcnQgUG9pbnQgZnJvbSBcIi4uL1BvaW50XCI7XG5pbXBvcnQgRW5lbXlTbmFrZSBmcm9tIFwiLi4vU25ha2VzL0VuZW15U25ha2VcIjtcbmltcG9ydCBDb2xvclNlcmlhbGl6ZXIgZnJvbSBcIi4vQ29sb3JTZXJpYWxpemVyXCI7XG5pbXBvcnQgRGlyZWN0aW9uU2VyaWFsaXplciBmcm9tIFwiLi9EaXJlY3Rpb25TZXJpYWxpemVyXCI7XG5cbmNsYXNzIEVuZW15U25ha2VGYWN0b3J5IHtcbiAgICBzdGF0aWMgY3JlYXRlKGpzb24sIGZpZWxkKSB7XG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSBEaXJlY3Rpb25TZXJpYWxpemVyLnNlcmlhbGl6ZShqc29uLmRpcmVjdGlvbik7XG4gICAgICAgIGxldCBwb3NpdGlvbiA9IG5ldyBQb2ludChqc29uLnBvc2l0aW9uLngsIGpzb24ucG9zaXRpb24ueSk7XG4gICAgICAgIGxldCBib2R5Q29sb3IgPSBDb2xvclNlcmlhbGl6ZXIuc2VyaWFsaXplKGpzb24uYm9keUNvbG9yKTtcbiAgICAgICAgbGV0IGhlYWRDb2xvciA9IENvbG9yU2VyaWFsaXplci5zZXJpYWxpemUoanNvbi5oZWFkQ29sb3IpO1xuICAgICAgICBsZXQgc2l6ZSA9IGpzb24uc2l6ZTtcbiAgICAgICAgcmV0dXJuIG5ldyBFbmVteVNuYWtlKHtcbiAgICAgICAgICAgIGRpcmVjdGlvbixcbiAgICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICAgICAgYm9keUNvbG9yLFxuICAgICAgICAgICAgaGVhZENvbG9yLFxuICAgICAgICAgICAgc2l6ZSxcbiAgICAgICAgICAgIGZpZWxkXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRW5lbXlTbmFrZUZhY3Rvcnk7IiwibGV0IGdhbWVEYXRhID0ge1xuICBcImZpZWxkc1wiOiBbXG4gICAge1xuICAgICAgXCJ3aWR0aFwiOiAzMCxcbiAgICAgIFwiaGVpZ2h0XCI6IDMwLFxuICAgICAgXCJlbnRyaWVzXCI6IHtcbiAgICAgICAgXCJzbmFrZXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwic2l6ZVwiOiA1LFxuICAgICAgICAgICAgXCJib2R5Q29sb3JcIjogXCJyZWRcIixcbiAgICAgICAgICAgIFwiaGVhZENvbG9yXCI6IFwiYmx1ZVwiLFxuICAgICAgICAgICAgXCJkaXJlY3Rpb25cIjogXCJsZWZ0XCIsXG4gICAgICAgICAgICBcInBvc2l0aW9uXCI6IHtcbiAgICAgICAgICAgICAgXCJ4XCI6IDExLFxuICAgICAgICAgICAgICBcInlcIjogMTFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInR5cGVcIjogXCJlbmVteVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInNpemVcIjogNSxcbiAgICAgICAgICAgIFwiYm9keUNvbG9yXCI6IFwicmVkXCIsXG4gICAgICAgICAgICBcImhlYWRDb2xvclwiOiBcIndoaXRlXCIsXG4gICAgICAgICAgICBcImRpcmVjdGlvblwiOiBcImRvd25cIixcbiAgICAgICAgICAgIFwicG9zaXRpb25cIjoge1xuICAgICAgICAgICAgICBcInhcIjogMjksXG4gICAgICAgICAgICAgIFwieVwiOiAyNVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImVuZW15XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwic2l6ZVwiOiA1LFxuICAgICAgICAgICAgXCJib2R5Q29sb3JcIjogXCJibHVlXCIsXG4gICAgICAgICAgICBcImhlYWRDb2xvclwiOiBcInJlZFwiLFxuICAgICAgICAgICAgXCJkaXJlY3Rpb25cIjogXCJkb3duXCIsXG4gICAgICAgICAgICBcInBvc2l0aW9uXCI6IHtcbiAgICAgICAgICAgICAgXCJ4XCI6IDE1LFxuICAgICAgICAgICAgICBcInlcIjogMTVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInR5cGVcIjogXCJwbGF5ZXJcIlxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZWF0c1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJ4XCI6IDI5LFxuICAgICAgICAgICAgXCJ5XCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwieFwiOiAyOSxcbiAgICAgICAgICAgIFwieVwiOiAyOVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJ4XCI6IDQsXG4gICAgICAgICAgICBcInlcIjogNFxuICAgICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2FtZURhdGE7IiwiaW1wb3J0IEZpZWxkIGZyb20gXCIuLi9GaWVsZFwiO1xuaW1wb3J0IFBsYXllclNuYWtlRmFjdG9yeSBmcm9tIFwiLi9QbGF5ZXJTbmFrZVNlcmlhbGl6ZXJcIjtcbmltcG9ydCBGb29kIGZyb20gXCIuLi9Gb29kXCI7XG5pbXBvcnQgRW5lbXlTbmFrZUZhY3RvcnkgZnJvbSBcIi4vRW5lbXlTbmFrZVNlcmlhbGl6ZXJcIjtcblxuY2xhc3MgT2JqZWN0RmFjdG9yeSB7XG4gICAgcHJpdmF0ZSBnYW1lRGF0YTtcbiAgICBwcml2YXRlIG9iamVjdHM7XG4gICAgY29uc3RydWN0b3IoZ2FtZURhdGEpIHtcbiAgICAgICAgdGhpcy5nYW1lRGF0YSA9IGdhbWVEYXRhO1xuICAgICAgICB0aGlzLm9iamVjdHMgPSBbXTtcbiAgICB9XG5cbiAgICBjcmVhdGVBbGwoKSB7XG4gICAgICAgIHRoaXMuZ2FtZURhdGEuZmllbGRzLmZvckVhY2goKGZpZWxkSlNPTikgPT4ge1xuICAgICAgICAgICAgbGV0IGZpZWxkID0gbmV3IEZpZWxkKGZpZWxkSlNPTi53aWR0aCwgZmllbGRKU09OLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLm9iamVjdHMucHVzaChmaWVsZCk7XG4gICAgICAgICAgICBsZXQgc25ha2VzID0gZmllbGRKU09OLmVudHJpZXMuc25ha2VzO1xuICAgICAgICAgICAgc25ha2VzLmZvckVhY2goKHNuYWtlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoc25ha2UudHlwZSA9PT0gXCJwbGF5ZXJcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iamVjdHMucHVzaChQbGF5ZXJTbmFrZUZhY3RvcnkuY3JlYXRlKHNuYWtlLCBmaWVsZCkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihzbmFrZS50eXBlID09PSBcImVuZW15XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmplY3RzLnB1c2goRW5lbXlTbmFrZUZhY3RvcnkuY3JlYXRlKHNuYWtlLCBmaWVsZCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGxldCBlYXRzID0gZmllbGRKU09OLmVhdHM7XG4gICAgICAgICAgICBlYXRzLmZvckVhY2goKGVhdCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub2JqZWN0cy5wdXNoKG5ldyBGb29kKGVhdC54LCBlYXQueSwgZmllbGQpKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB0aGlzLm9iamVjdHM7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPYmplY3RGYWN0b3J5OyIsImltcG9ydCBQb2ludCBmcm9tIFwiLi4vUG9pbnRcIjtcbmltcG9ydCBDb2xvckZhY3RvcnkgZnJvbSBcIi4vQ29sb3JTZXJpYWxpemVyXCI7XG5pbXBvcnQgRGlyZWN0aW9uRmFjdG9yeSBmcm9tIFwiLi9EaXJlY3Rpb25TZXJpYWxpemVyXCI7XG5pbXBvcnQgUGxheWVyU25ha2UgZnJvbSBcIi4uL1NuYWtlcy9QbGF5ZXJTbmFrZVwiO1xuXG5jbGFzcyBQbGF5ZXJTbmFrZUZhY3Rvcnkge1xuICAgIHN0YXRpYyBjcmVhdGUoanNvbiwgZmllbGQpIHtcbiAgICAgICAgbGV0IGRpcmVjdGlvbiA9IERpcmVjdGlvbkZhY3Rvcnkuc2VyaWFsaXplKGpzb24uZGlyZWN0aW9uKTtcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gbmV3IFBvaW50KGpzb24ucG9zaXRpb24ueCwganNvbi5wb3NpdGlvbi55KTtcbiAgICAgICAgbGV0IGJvZHlDb2xvciA9IENvbG9yRmFjdG9yeS5zZXJpYWxpemUoanNvbi5ib2R5Q29sb3IpO1xuICAgICAgICBsZXQgaGVhZENvbG9yID0gQ29sb3JGYWN0b3J5LnNlcmlhbGl6ZShqc29uLmhlYWRDb2xvcik7XG4gICAgICAgIGxldCBzaXplID0ganNvbi5zaXplO1xuICAgICAgICByZXR1cm4gbmV3IFBsYXllclNuYWtlKHtcbiAgICAgICAgICAgIGRpcmVjdGlvbixcbiAgICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICAgICAgYm9keUNvbG9yLFxuICAgICAgICAgICAgaGVhZENvbG9yLFxuICAgICAgICAgICAgc2l6ZSxcbiAgICAgICAgICAgIGZpZWxkXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyU25ha2VGYWN0b3J5OyIsImltcG9ydCBTbmFrZSBmcm9tIFwiLi9TbmFrZVwiO1xuaW1wb3J0IGVDb2xvciBmcm9tIFwiLi4vLi4vZW51bXMvZUNvbG9yXCI7XG5cbmNsYXNzIEVuZW15U25ha2UgZXh0ZW5kcyBTbmFrZSB7XG4gICAgcHJpdmF0ZSBERUZBVUxUX0JPRFlfQ09MT1I6IGVDb2xvcjtcbiAgICBwcml2YXRlIERFRkFVTFRfSEVBRF9DT0xPUjogZUNvbG9yO1xuXG4gICAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgICAgIHRoaXMuREVGQVVMVF9CT0RZX0NPTE9SID0gZUNvbG9yLllFTExPVztcbiAgICAgICAgdGhpcy5ERUZBVUxUX0hFQURfQ09MT1IgPSBlQ29sb3IuV0hJVEU7XG5cbiAgICAgICAgdGhpcy5IRUFEX0NPTE9SID0gdGhpcy5IRUFEX0NPTE9SIHx8IHRoaXMuREVGQVVMVF9IRUFEX0NPTE9SO1xuICAgICAgICB0aGlzLkJPRFlfQ09MT1IgPSB0aGlzLkJPRFlfQ09MT1IgfHwgdGhpcy5ERUZBVUxUX0JPRFlfQ09MT1I7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbmVteVNuYWtlOyIsImltcG9ydCBTbmFrZSBmcm9tIFwiLi9TbmFrZVwiO1xuaW1wb3J0IGVDb2xvciBmcm9tIFwiLi4vLi4vZW51bXMvZUNvbG9yXCI7XG5pbXBvcnQgS2V5Ym9hcmRDb250cm9sbGVyIGZyb20gXCIuLi9Db250cm9sbGVycy9LZXlib2FyZENvbnRyb2xsZXJcIjtcblxuXG5jbGFzcyBQbGF5ZXJTbmFrZSBleHRlbmRzIFNuYWtlIHtcbiAgICBwcml2YXRlIERFRkFVTFRfSEVBRF9DT0xPUjogZUNvbG9yO1xuICAgIHByaXZhdGUgREVGQVVMVF9CT0RZX0NPTE9SOiBlQ29sb3I7XG4gICAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgICAgIHRoaXMuREVGQVVMVF9IRUFEX0NPTE9SID0gZUNvbG9yLlJFRDtcbiAgICAgICAgdGhpcy5ERUZBVUxUX0JPRFlfQ09MT1IgPSBlQ29sb3IuQkxVRTtcblxuICAgICAgICB0aGlzLkhFQURfQ09MT1IgPSB0aGlzLkhFQURfQ09MT1IgfHwgdGhpcy5ERUZBVUxUX0hFQURfQ09MT1I7XG4gICAgICAgIHRoaXMuQk9EWV9DT0xPUiA9IHRoaXMuQk9EWV9DT0xPUiB8fCB0aGlzLkRFRkFVTFRfQk9EWV9DT0xPUjtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gbmV3IEtleWJvYXJkQ29udHJvbGxlcigpO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIuYWRkT2JzZXJ2ZXIodGhpcyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJTbmFrZTsiLCJpbXBvcnQgaURyYXdhYmxlIGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2lEcmF3YWJsZVwiO1xuaW1wb3J0IGlPYnNlcnZlciBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9pT2JzZXJ2ZXJcIjtcbmltcG9ydCBlRGlyZWN0aW9uIGZyb20gXCIuLi8uLi9lbnVtcy9lRGlyZWN0aW9uXCI7XG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4uL1BvaW50XCI7XG5pbXBvcnQgQ29udHJvbGxlciBmcm9tIFwiLi4vQ29udHJvbGxlcnMvQ29udHJvbGxlclwiO1xuaW1wb3J0IERpcmVjdGlvbiBmcm9tIFwiLi4vRGlyZWN0aW9uXCI7XG5pbXBvcnQgZUNvbG9yIGZyb20gXCIuLi8uLi9lbnVtcy9lQ29sb3JcIjtcbmltcG9ydCBpVXBkYXRhYmxlIGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2lVcGRhdGFibGVcIjtcbmltcG9ydCBlT2JqZWN0RmxhZ3MgZnJvbSBcIi4uLy4uL2VudW1zL2VPYmplY3RGbGFnc1wiO1xuaW1wb3J0IEZpZWxkIGZyb20gXCIuLi9GaWVsZFwiO1xuXG5jbGFzcyBTbmFrZSBpbXBsZW1lbnRzIGlEcmF3YWJsZSwgaU9ic2VydmVyLCBpVXBkYXRhYmxlIHtcbiAgICBwcm90ZWN0ZWQgYm9keSA6IFBvaW50W10gPSBbXTtcbiAgICBwcm90ZWN0ZWQgcG9zaXRpb24gOiBQb2ludCA9IG51bGw7XG4gICAgcHJvdGVjdGVkIEhFQURfQ09MT1I6IGVDb2xvcjtcbiAgICBwcm90ZWN0ZWQgQk9EWV9DT0xPUjogZUNvbG9yO1xuXG4gICAgcHJvdGVjdGVkIGNvbnRyb2xsZXIgOiBDb250cm9sbGVyID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgZGlyZWN0aW9uIDogRGlyZWN0aW9uID0gbnVsbDtcbiAgICBwdWJsaWMgZmxhZ3M6IGVPYmplY3RGbGFnc1tdO1xuICAgIHB1YmxpYyBmaWVsZDogRmllbGQ7XG5cbiAgICBwcml2YXRlIGlzR3Jvd2luZyA9IGZhbHNlO1xuICAgIHByaXZhdGUgbGFzdEV2ZW50ID0gbnVsbDtcbiAgICBwcml2YXRlIHByZXZTdGVwID0gbnVsbDtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcbiAgICAgICAgdGhpcy5mbGFncyA9IFtlT2JqZWN0RmxhZ3MuU09MSURdO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IHBhcmFtcy5kaXJlY3Rpb247XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwYXJhbXMucG9zaXRpb247XG4gICAgICAgIHRoaXMuSEVBRF9DT0xPUiA9IHBhcmFtcy5oZWFkQ29sb3IgPyBwYXJhbXMuaGVhZENvbG9yIDogbnVsbDtcbiAgICAgICAgdGhpcy5CT0RZX0NPTE9SID0gcGFyYW1zLmJvZHlDb2xvciA/IHBhcmFtcy5ib2R5Q29sb3IgOiBudWxsO1xuICAgICAgICB0aGlzLmZpZWxkID0gcGFyYW1zLmZpZWxkO1xuICAgICAgICB0aGlzLmluaXQocGFyYW1zLnNpemUpO1xuICAgIH1cblxuICAgIGluaXQoc2l6ZSkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuZGlyZWN0aW9uLnZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIGVEaXJlY3Rpb24uTEVGVDpcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHkucHVzaChuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54ICsgaSwgdGhpcy5wb3NpdGlvbi55KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBlRGlyZWN0aW9uLlJJR0hUOlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keS5wdXNoKG5ldyBQb2ludCh0aGlzLnBvc2l0aW9uLnggLSBpLCB0aGlzLnBvc2l0aW9uLnkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGVEaXJlY3Rpb24uVVA6XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5LnB1c2gobmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55ICsgaSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgZURpcmVjdGlvbi5ET1dOOlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keS5wdXNoKG5ldyBQb2ludCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSAtIGkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ9Ce0YjQuNCx0LrQsCDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjQuCDQt9C80LXQudC60LgnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUV2ZW50KGV2ZW50OiBlRGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMubGFzdEV2ZW50ID0gZXZlbnQ7XG4gICAgfVxuXG4gICAgY2hhbmdlRGlyZWN0aW9uKG5ld0RpcmVjdGlvbjogZURpcmVjdGlvbikge1xuXG4gICAgICAgIGlmKHRoaXMuZGlyZWN0aW9uLmlzT3Bwb3NpdGUobmV3RGlyZWN0aW9uKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBzd2l0Y2gobmV3RGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIGVEaXJlY3Rpb24uVVA6XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24udmFsdWUgPSBlRGlyZWN0aW9uLlVQO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBlRGlyZWN0aW9uLkRPV046XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24udmFsdWUgPSBlRGlyZWN0aW9uLkRPV047XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGVEaXJlY3Rpb24uTEVGVDpcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbi52YWx1ZSA9IGVEaXJlY3Rpb24uTEVGVDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgZURpcmVjdGlvbi5SSUdIVDpcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbi52YWx1ZSA9IGVEaXJlY3Rpb24uUklHSFQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIC8vY29uc29sZS53YXJuKCfQndC1INC+0LHRgNCw0LHQvtGC0LDQvdC90L7QtSDRgdC+0LHRi9GC0LjQtSDQsiDQutC70LDRgdGB0LUgU25ha2UnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEhlYWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvZHlbMF0gfHwgbnVsbDtcbiAgICB9XG5cbiAgICBnZXRDb29yZGluYXRlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9keTtcbiAgICB9XG5cbiAgICBncm93KCkge1xuICAgICAgICB0aGlzLmlzR3Jvd2luZyA9IHRydWU7XG4gICAgfVxuXG4gICAgc2F2ZVByZXZTdGVwKCkge1xuICAgICAgICB0aGlzLnByZXZTdGVwID0ge1xuICAgICAgICAgICAgcG9zaXRpb246IG5ldyBQb2ludCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSksXG4gICAgICAgICAgICBib2R5OiBbXVxuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmJvZHkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucHJldlN0ZXAuYm9keS5wdXNoKG5ldyBQb2ludCh0aGlzLmJvZHlbaV0ueCwgdGhpcy5ib2R5W2ldLnkpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICAgIHRoaXMuc2F2ZVByZXZTdGVwKCk7XG4gICAgICAgIHRoaXMucG9zaXRpb24ubW92ZSh0aGlzLmRpcmVjdGlvbi52YWx1ZSk7XG4gICAgICAgIGZvcihsZXQgaSA9IHRoaXMuYm9keS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgICB0aGlzLmJvZHlbaV0uc2V0TmV3UG9zaXRpb24odGhpcy5ib2R5W2kgLSAxXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZXRIZWFkKCkubW92ZSh0aGlzLmRpcmVjdGlvbi52YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV2ZXJ0TW92ZSgpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IG5ldyBQb2ludCh0aGlzLnByZXZTdGVwLnBvc2l0aW9uLngsIHRoaXMucHJldlN0ZXAucG9zaXRpb24ueSk7XG4gICAgICAgIHRoaXMuYm9keSA9IFtdO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5wcmV2U3RlcC5ib2R5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmJvZHkucHVzaChuZXcgUG9pbnQodGhpcy5wcmV2U3RlcC5ib2R5W2ldLngsIHRoaXMucHJldlN0ZXAuYm9keVtpXS55KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKHRoaXMubGFzdEV2ZW50KTtcbiAgICAgICAgaWYodGhpcy5pc0dyb3dpbmcpIHtcbiAgICAgICAgICAgIGxldCBsYXN0RWxlbWVudCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuYm9keVt0aGlzLmJvZHkubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgdGhpcy5ib2R5LnB1c2gobmV3IFBvaW50KGxhc3RFbGVtZW50LngsIGxhc3RFbGVtZW50LnkpKTtcbiAgICAgICAgICAgIHRoaXMuaXNHcm93aW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb3ZlKCk7XG4gICAgfVxuXG4gICAgZ2V0RGlyZWN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb24udmFsdWU7XG4gICAgfVxuXG4gICAgaXNFYXRTZWxmKCkge1xuICAgICAgICBsZXQgaGVhZCA9IHRoaXMuYm9keVswXTtcbiAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8IHRoaXMuYm9keS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYoaGVhZC5pc092ZXJsYXAodGhpcy5ib2R5W2ldKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpc092ZXJsYXAocG9pbnQ6IFBvaW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvZHkuc29tZSgoYm9keVBvaW50KSA9PiB7XG4gICAgICAgICAgICBpZihib2R5UG9pbnQuaXNPdmVybGFwKHBvaW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLkhFQURfQ09MT1I7XG4gICAgICAgIHRoaXMuYm9keS5mb3JFYWNoKChwb2ludCkgPT4ge1xuICAgICAgICAgICAgaWYoIHBvaW50LnggIT0gdGhpcy5wb3NpdGlvbi54IHx8XG4gICAgICAgICAgICAgICAgcG9pbnQueSAhPSB0aGlzLnBvc2l0aW9uLnkgKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLkJPRFlfQ09MT1I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb2ludC5kcmF3KGN0eCk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTbmFrZTsiLCJlbnVtIGVDb2xvciB7XG4gICAgV0hJVEUgPSAnI0ZGRkZGRicsXG4gICAgQkxVRSA9ICcjM0Y1MUI1JyxcbiAgICBSRUQgPSAnI0Y0NDMzNicsXG4gICAgR1JFRU4gPSAnIzAwQkNENCcsXG4gICAgWUVMTE9XID0gJyNGRkMxMDcnXG59XG5cbmV4cG9ydCBkZWZhdWx0IGVDb2xvcjsiLCJlbnVtIGVEaXJlY3Rpb24ge1xuICAgIExFRlQsXG4gICAgVVAsXG4gICAgUklHSFQsXG4gICAgRE9XTixcbiAgICBMQVNUXG59XG5cbmV4cG9ydCBkZWZhdWx0IGVEaXJlY3Rpb247IiwiZW51bSBlR2FtZVN0YXRlIHtcbiAgICBQTEFZLFxuICAgIFBBVVNFLFxuICAgIEdBTUVfT1ZFUlxufVxuXG5leHBvcnQgZGVmYXVsdCBlR2FtZVN0YXRlOyIsImVudW0gZU9iamVjdEZsYWdzIHtcbiAgICBTT0xJRCA9IDEsXG4gICAgUElDS1VQID0gMlxufVxuXG5leHBvcnQgZGVmYXVsdCBlT2JqZWN0RmxhZ3M7IiwiLy8g0JLQvtC30LLRgNCw0YnQsNC10YIg0YHQu9GD0YfQsNC50L3QvtC1INGG0LXQu9C+0LUg0YfQuNGB0LvQviDQvNC10LbQtNGDIG1pbiAo0LLQutC70Y7Rh9C40YLQtdC70YzQvdC+KSDQuCBtYXggKNC90LUg0LLQutC70Y7Rh9Cw0Y8gbWF4KVxuZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGdldFJhbmRvbUludFxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgR2FtZSAgZnJvbSBcIi4vY2xhc3Nlcy9HYW1lXCI7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgbGV0IGdhbWUgPSBuZXcgR2FtZSgpO1xuICAgIGdhbWUuaW5pdCgpO1xufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=