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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
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
    eDirection[eDirection["LAST"] = 4] = "LAST";
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
var eObjectFlags_1 = __webpack_require__(4);
var Snake = /** @class */ (function () {
    function Snake(params) {
        this.body = [];
        this.position = null;
        this.controller = null;
        this.direction = null;
        this.isGrowing = false;
        this.lastEvent = null;
        this.prevStep = null;
        this.flags = [eObjectFlags_1.default.SOLID];
        this.direction = params.direction;
        this.position = params.position;
        this.HEAD_COLOR = params.headColor ? params.headColor : null;
        this.BODY_COLOR = params.bodyColor ? params.bodyColor : null;
        this.field = params.field;
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
        this.lastEvent = event;
    };
    Snake.prototype.changeDirection = function (newDirection) {
        if (this.direction.isOpposite(newDirection)) {
            return;
        }
        switch (newDirection) {
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
            position: new Point_1.default(this.position.x, this.position.y),
            body: []
        };
        for (var i = 0; i < this.body.length; i++) {
            this.prevStep.body.push(new Point_1.default(this.body[i].x, this.body[i].y));
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
        this.position = new Point_1.default(this.prevStep.position.x, this.prevStep.position.y);
        this.body = [];
        for (var i = 0; i < this.prevStep.body.length; i++) {
            this.body.push(new Point_1.default(this.prevStep.body[i].x, this.prevStep.body[i].y));
        }
    };
    Snake.prototype.update = function () {
        this.changeDirection(this.lastEvent);
        if (this.isGrowing) {
            var lastElement = Object.assign({}, this.body[this.body.length - 1]);
            this.body.push(new Point_1.default(lastElement.x, lastElement.y));
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
exports.default = Snake;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var eObjectFlags;
(function (eObjectFlags) {
    eObjectFlags[eObjectFlags["SOLID"] = 1] = "SOLID";
    eObjectFlags[eObjectFlags["PICKUP"] = 2] = "PICKUP";
})(eObjectFlags || (eObjectFlags = {}));
exports.default = eObjectFlags;


/***/ }),
/* 5 */
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
var eObjectFlags_1 = __webpack_require__(4);
var Food = /** @class */ (function (_super) {
    __extends(Food, _super);
    function Food(x, y, field) {
        var _this = _super.call(this, x, y) || this;
        _this.field = field;
        _this.flags = [eObjectFlags_1.default.PICKUP];
        return _this;
    }
    Food.prototype.draw = function (ctx) {
        ctx.fillStyle = eColor_1.default.YELLOW;
        _super.prototype.draw.call(this, ctx);
    };
    Food.prototype.getCoordinates = function () {
        return [this];
    };
    Food.prototype.update = function () {
        //console.log("food update");
    };
    return Food;
}(Point_1.default));
exports.default = Food;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var eColor_1 = __webpack_require__(2);
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


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Direction_1 = __webpack_require__(8);
var eDirection_1 = __webpack_require__(0);
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


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var eDirection_1 = __webpack_require__(0);
var math_helper_1 = __webpack_require__(9);
var Direction = /** @class */ (function () {
    function Direction(value) {
        this.value = value;
    }
    Direction.getRandom = function () {
        return math_helper_1.default.getRandomInt(0, 4);
    };
    Direction.getDirections = function () {
        var directions = [];
        for (var i = 0; i !== eDirection_1.default.LAST; i++) {
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
exports.default = Direction;


/***/ }),
/* 9 */
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
var Snake_1 = __webpack_require__(3);
var eColor_1 = __webpack_require__(2);
var EnemySnake = /** @class */ (function (_super) {
    __extends(EnemySnake, _super);
    function EnemySnake(params) {
        var _this = _super.call(this, params) || this;
        _this.DEFAULT_BODY_COLOR = eColor_1.default.YELLOW;
        _this.DEFAULT_HEAD_COLOR = eColor_1.default.WHITE;
        _this.HEAD_COLOR = _this.HEAD_COLOR || _this.DEFAULT_HEAD_COLOR;
        _this.BODY_COLOR = _this.BODY_COLOR || _this.DEFAULT_BODY_COLOR;
        return _this;
    }
    return EnemySnake;
}(Snake_1.default));
exports.default = EnemySnake;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var eGameState;
(function (eGameState) {
    eGameState[eGameState["PLAY"] = 0] = "PLAY";
    eGameState[eGameState["PAUSE"] = 1] = "PAUSE";
    eGameState[eGameState["GAME_OVER"] = 2] = "GAME_OVER";
})(eGameState || (eGameState = {}));
exports.default = eGameState;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = __webpack_require__(13);
window.onload = function () {
    var game = new Game_1.default();
    game.init();
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Scene_1 = __webpack_require__(14);
var eGameState_1 = __webpack_require__(11);
var Game = /** @class */ (function () {
    function Game() {
        this.gameSpeed = 100;
        this.scene = new Scene_1.default(this);
        this.timer = 0;
    }
    Game.prototype.init = function () {
        var _this = this;
        this.scene.update();
        this.state = eGameState_1.default.PAUSE;
        document.addEventListener('keydown', function (e) {
            if (_this.state === eGameState_1.default.PAUSE) {
                _this.run();
            }
        });
    };
    Game.prototype.run = function () {
        this.state = eGameState_1.default.PLAY;
        this.timer = setInterval(this.scene.update.bind(this.scene), this.gameSpeed);
    };
    Game.prototype.gameOver = function () {
        clearInterval(this.timer);
        this.state = eGameState_1.default.GAME_OVER;
    };
    return Game;
}());
exports.default = Game;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GameObjectsSerializer_1 = __webpack_require__(15);
var GameData_1 = __webpack_require__(22);
var Screen_1 = __webpack_require__(23);
var Phisyc_1 = __webpack_require__(24);
var FoodCreator_1 = __webpack_require__(25);
var AI_1 = __webpack_require__(26);
var eGameState_1 = __webpack_require__(11);
var Scene = /** @class */ (function () {
    function Scene(game) {
        this.objectFactory = new GameObjectsSerializer_1.default(GameData_1.default);
        this.objects = this.objectFactory.createAll();
        this.screen = new Screen_1.default(this.objects);
        this.physic = new Phisyc_1.default(this.objects);
        this.physic.addObserver(this);
        this.ai = new AI_1.default(this);
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
        if (this.game.state !== eGameState_1.default.GAME_OVER) {
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
                var foodCreator = new FoodCreator_1.default(event.data.dest.field);
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
exports.default = Scene;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Field_1 = __webpack_require__(16);
var PlayerSnakeSerializer_1 = __webpack_require__(17);
var Food_1 = __webpack_require__(5);
var EnemySnakeSerializer_1 = __webpack_require__(21);
var ObjectFactory = /** @class */ (function () {
    function ObjectFactory(gameData) {
        this.gameData = gameData;
        this.objects = [];
    }
    ObjectFactory.prototype.createAll = function () {
        var _this = this;
        this.gameData.fields.forEach(function (fieldJSON) {
            var field = new Field_1.default(fieldJSON.width, fieldJSON.height);
            _this.objects.push(field);
            var snakes = fieldJSON.entries.snakes;
            snakes.forEach(function (snake) {
                if (snake.type === "player") {
                    _this.objects.push(PlayerSnakeSerializer_1.default.create(snake, field));
                }
                else if (snake.type === "enemy") {
                    _this.objects.push(EnemySnakeSerializer_1.default.create(snake, field));
                }
            });
            var eats = fieldJSON.eats;
            eats.forEach(function (eat) {
                _this.objects.push(new Food_1.default(eat.x, eat.y, field));
            });
        });
        return this.objects;
    };
    return ObjectFactory;
}());
exports.default = ObjectFactory;


/***/ }),
/* 16 */
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
    Field.prototype.update = function () {
    };
    return Field;
}());
exports.default = Field;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Point_1 = __webpack_require__(1);
var ColorSerializer_1 = __webpack_require__(6);
var DirectionSerializer_1 = __webpack_require__(7);
var PlayerSnake_1 = __webpack_require__(18);
var PlayerSnakeFactory = /** @class */ (function () {
    function PlayerSnakeFactory() {
    }
    PlayerSnakeFactory.create = function (json, field) {
        var direction = DirectionSerializer_1.default.serialize(json.direction);
        var position = new Point_1.default(json.position.x, json.position.y);
        var bodyColor = ColorSerializer_1.default.serialize(json.bodyColor);
        var headColor = ColorSerializer_1.default.serialize(json.headColor);
        var size = json.size;
        return new PlayerSnake_1.default({
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
exports.default = PlayerSnakeFactory;


/***/ }),
/* 18 */
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
var KeyboardController_1 = __webpack_require__(19);
var PlayerSnake = /** @class */ (function (_super) {
    __extends(PlayerSnake, _super);
    function PlayerSnake(params) {
        var _this = _super.call(this, params) || this;
        _this.DEFAULT_HEAD_COLOR = eColor_1.default.RED;
        _this.DEFAULT_BODY_COLOR = eColor_1.default.BLUE;
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
/* 19 */
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
var Controller_1 = __webpack_require__(20);
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
/* 20 */
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Point_1 = __webpack_require__(1);
var EnemySnake_1 = __webpack_require__(10);
var ColorSerializer_1 = __webpack_require__(6);
var DirectionSerializer_1 = __webpack_require__(7);
var EnemySnakeFactory = /** @class */ (function () {
    function EnemySnakeFactory() {
    }
    EnemySnakeFactory.create = function (json, field) {
        var direction = DirectionSerializer_1.default.serialize(json.direction);
        var position = new Point_1.default(json.position.x, json.position.y);
        var bodyColor = ColorSerializer_1.default.serialize(json.bodyColor);
        var headColor = ColorSerializer_1.default.serialize(json.headColor);
        var size = json.size;
        return new EnemySnake_1.default({
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
exports.default = EnemySnakeFactory;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = gameData;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = Screen;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var eObjectFlags_1 = __webpack_require__(4);
var Snake_1 = __webpack_require__(3);
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
            if (object instanceof Snake_1.default) {
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
                                if (src.flags.includes(eObjectFlags_1.default.SOLID) &&
                                    dest.flags.includes(eObjectFlags_1.default.PICKUP)) {
                                    collisions.push({ type: "EAT", data: { src: src, dest: dest } });
                                }
                                else if (src.flags.includes(eObjectFlags_1.default.SOLID) &&
                                    dest.flags.includes(eObjectFlags_1.default.SOLID)) {
                                    collisions.push({ type: "SNAKE_COLLISION", data: { src: src, dest: dest } });
                                }
                            }
                        }
                    }
                    else {
                        if (src instanceof Snake_1.default) {
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
exports.default = Physic;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Food_1 = __webpack_require__(5);
var math_helper_1 = __webpack_require__(9);
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
        var newFood = new Food_1.default(math_helper_1.default.getRandomInt(0, this.maxWidth - 1), math_helper_1.default.getRandomInt(0, this.maxHeight - 1), this.field);
        return newFood;
    };
    return FoodCreator;
}());
exports.default = FoodCreator;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EnemySnake_1 = __webpack_require__(10);
var eDirection_1 = __webpack_require__(0);
var Food_1 = __webpack_require__(5);
var Direction_1 = __webpack_require__(8);
var AI = /** @class */ (function () {
    function AI(scene) {
        this.scene = scene;
        this.phisyc = scene.getPhisyc();
    }
    AI.prototype.getVerticalOffset = function (snake, food, forbidDirections) {
        var head = snake.getHead();
        if (head.isUnder(food)) {
            if (!forbidDirections.includes(eDirection_1.default.UP)) {
                return eDirection_1.default.UP;
            }
            return eDirection_1.default.DOWN;
        }
        else {
            if (!forbidDirections.includes(eDirection_1.default.DOWN)) {
                return eDirection_1.default.DOWN;
            }
            return eDirection_1.default.UP;
        }
    };
    AI.prototype.getHorizontalOffset = function (snake, food, forbidDirections) {
        var head = snake.getHead();
        if (head.isRightOf(food)) {
            if (!forbidDirections.includes(eDirection_1.default.LEFT)) {
                return eDirection_1.default.LEFT;
            }
            return eDirection_1.default.RIGHT;
        }
        else {
            if (!forbidDirections.includes(eDirection_1.default.RIGHT)) {
                return eDirection_1.default.RIGHT;
            }
            return eDirection_1.default.LEFT;
        }
    };
    AI.prototype.getDirection = function (snake, forbidDirections) {
        if (forbidDirections === void 0) { forbidDirections = []; }
        var head = snake.getHead();
        var direction = snake.getDirection();
        var food = this.getNearestFood(snake);
        switch (direction) {
            case eDirection_1.default.LEFT:
                if (head.isRightOf(food) && !forbidDirections.includes(direction)) {
                    return direction;
                }
                else {
                    return this.getVerticalOffset(snake, food, forbidDirections);
                }
            case eDirection_1.default.RIGHT:
                if (head.isLeftOf(food) && !forbidDirections.includes(direction)) {
                    return direction;
                }
                else {
                    return this.getVerticalOffset(snake, food, forbidDirections);
                }
            case eDirection_1.default.UP:
                if (head.isUnder(food) && !forbidDirections.includes(direction)) {
                    return direction;
                }
                else {
                    return this.getHorizontalOffset(snake, food, forbidDirections);
                }
            case eDirection_1.default.DOWN:
                if (head.isAbove(food) && !forbidDirections.includes(direction)) {
                    return direction;
                }
                else {
                    return this.getHorizontalOffset(snake, food, forbidDirections);
                }
        }
    };
    AI.prototype.getNearestFood = function (snake) {
        var foods = this.scene.getObjects().filter(function (object) { return object instanceof Food_1.default; });
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
            if (object instanceof EnemySnake_1.default) {
                _this.proccessDirection(object);
            }
        });
    };
    AI.prototype.proccessDirection = function (enemySnake) {
        var directions = Direction_1.default.getDirections();
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
        var collisions = [];
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
exports.default = AI;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzExNTU3MDY0MzhmZDNjN2M1YmYiLCJ3ZWJwYWNrOi8vLy4vanMvZW51bXMvZURpcmVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jbGFzc2VzL1BvaW50LmpzIiwid2VicGFjazovLy8uL2pzL2VudW1zL2VDb2xvci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jbGFzc2VzL1NuYWtlcy9TbmFrZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9lbnVtcy9lT2JqZWN0RmxhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9Gb29kLmpzIiwid2VicGFjazovLy8uL2pzL2NsYXNzZXMvU2VyaWFsaXplcnMvQ29sb3JTZXJpYWxpemVyLmpzIiwid2VicGFjazovLy8uL2pzL2NsYXNzZXMvU2VyaWFsaXplcnMvRGlyZWN0aW9uU2VyaWFsaXplci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jbGFzc2VzL0RpcmVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9oZWxwZXJzL21hdGgtaGVscGVyLmpzIiwid2VicGFjazovLy8uL2pzL2NsYXNzZXMvU25ha2VzL0VuZW15U25ha2UuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZW51bXMvZUdhbWVTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jbGFzc2VzL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9TY2VuZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jbGFzc2VzL1NlcmlhbGl6ZXJzL0dhbWVPYmplY3RzU2VyaWFsaXplci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jbGFzc2VzL0ZpZWxkLmpzIiwid2VicGFjazovLy8uL2pzL2NsYXNzZXMvU2VyaWFsaXplcnMvUGxheWVyU25ha2VTZXJpYWxpemVyLmpzIiwid2VicGFjazovLy8uL2pzL2NsYXNzZXMvU25ha2VzL1BsYXllclNuYWtlLmpzIiwid2VicGFjazovLy8uL2pzL2NsYXNzZXMvQ29udHJvbGxlcnMvS2V5Ym9hcmRDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2pzL2NsYXNzZXMvQ29udHJvbGxlcnMvQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jbGFzc2VzL1NlcmlhbGl6ZXJzL0VuZW15U25ha2VTZXJpYWxpemVyLmpzIiwid2VicGFjazovLy8uL2pzL2NsYXNzZXMvU2VyaWFsaXplcnMvR2FtZURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9TY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9QaHlzaWMvUGhpc3ljLmpzIiwid2VicGFjazovLy8uL2pzL2NsYXNzZXMvRm9vZENyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9BSS9BSS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDN0RBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdDQUFnQztBQUNqQzs7Ozs7Ozs7QUNWQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxZQUFZO0FBQzVDO0FBQ0E7QUFDQTtB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QUFDQSwwQ0FBMEMsdUJBQXVCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0UseUNBQXlDLEVBQUU7QUFDakg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsdUJBQXVCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxpQ0FBaUMsRUFBRTtBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzMTE1NTcwNjQzOGZkM2M3YzViZiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGVEaXJlY3Rpb247XG4oZnVuY3Rpb24gKGVEaXJlY3Rpb24pIHtcbiAgICBlRGlyZWN0aW9uW2VEaXJlY3Rpb25bXCJMRUZUXCJdID0gMF0gPSBcIkxFRlRcIjtcbiAgICBlRGlyZWN0aW9uW2VEaXJlY3Rpb25bXCJVUFwiXSA9IDFdID0gXCJVUFwiO1xuICAgIGVEaXJlY3Rpb25bZURpcmVjdGlvbltcIlJJR0hUXCJdID0gMl0gPSBcIlJJR0hUXCI7XG4gICAgZURpcmVjdGlvbltlRGlyZWN0aW9uW1wiRE9XTlwiXSA9IDNdID0gXCJET1dOXCI7XG4gICAgZURpcmVjdGlvbltlRGlyZWN0aW9uW1wiTEFTVFwiXSA9IDRdID0gXCJMQVNUXCI7XG59KShlRGlyZWN0aW9uIHx8IChlRGlyZWN0aW9uID0ge30pKTtcbmV4cG9ydHMuZGVmYXVsdCA9IGVEaXJlY3Rpb247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2VudW1zL2VEaXJlY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZURpcmVjdGlvbl8xID0gcmVxdWlyZShcIi4uL2VudW1zL2VEaXJlY3Rpb25cIik7XG52YXIgUG9pbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUG9pbnQoeCwgeSkge1xuICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cbiAgICBQb2ludC5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uIChkaXJlY3Rpb24sIG9mZnNldCkge1xuICAgICAgICBpZiAob2Zmc2V0ID09PSB2b2lkIDApIHsgb2Zmc2V0ID0gMTsgfVxuICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSBlRGlyZWN0aW9uXzEuZGVmYXVsdC5SSUdIVDpcbiAgICAgICAgICAgICAgICB0aGlzLnggKz0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBlRGlyZWN0aW9uXzEuZGVmYXVsdC5MRUZUOlxuICAgICAgICAgICAgICAgIHRoaXMueCAtPSBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGVEaXJlY3Rpb25fMS5kZWZhdWx0LlVQOlxuICAgICAgICAgICAgICAgIHRoaXMueSAtPSBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGVEaXJlY3Rpb25fMS5kZWZhdWx0LkRPV046XG4gICAgICAgICAgICAgICAgdGhpcy55ICs9IG9mZnNldDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgUG9pbnQucHJvdG90eXBlLnNldE5ld1Bvc2l0aW9uID0gZnVuY3Rpb24gKG5ld1Bvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMueCA9IG5ld1Bvc2l0aW9uLng7XG4gICAgICAgIHRoaXMueSA9IG5ld1Bvc2l0aW9uLnk7XG4gICAgfTtcbiAgICBQb2ludC5wcm90b3R5cGUuaXNPdmVybGFwID0gZnVuY3Rpb24gKHBvaW50KSB7XG4gICAgICAgIGlmICh0aGlzLnggPT0gcG9pbnQueCAmJlxuICAgICAgICAgICAgdGhpcy55ID09IHBvaW50LnkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIFBvaW50LnByb3RvdHlwZS5pc1NhbWVIb3Jpem9udGFsID0gZnVuY3Rpb24gKHBvaW50KSB7XG4gICAgICAgIGlmICh0aGlzLnggPT09IHBvaW50LngpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIFBvaW50LnByb3RvdHlwZS5pc1NhbWVWZXJ0aWNhbCA9IGZ1bmN0aW9uIChwb2ludCkge1xuICAgICAgICBpZiAodGhpcy55ID09PSBwb2ludC55KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBQb2ludC5wcm90b3R5cGUuaXNSaWdodE9mID0gZnVuY3Rpb24gKHBvaW50KSB7XG4gICAgICAgIGlmICh0aGlzLnggPiBwb2ludC54KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBQb2ludC5wcm90b3R5cGUuaXNMZWZ0T2YgPSBmdW5jdGlvbiAocG9pbnQpIHtcbiAgICAgICAgaWYgKHRoaXMueCA8IHBvaW50LngpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIFBvaW50LnByb3RvdHlwZS5pc1VuZGVyID0gZnVuY3Rpb24gKHBvaW50KSB7XG4gICAgICAgIGlmICh0aGlzLnkgPiBwb2ludC55KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBQb2ludC5wcm90b3R5cGUuaXNBYm92ZSA9IGZ1bmN0aW9uIChwb2ludCkge1xuICAgICAgICBpZiAodGhpcy55IDwgcG9pbnQueSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgUG9pbnQucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoY3R4LCB0eXBlKSB7XG4gICAgICAgIGlmICh0eXBlID09PSB2b2lkIDApIHsgdHlwZSA9ICdmaWxsJzsgfVxuICAgICAgICBpZiAodHlwZSA9PSAnZmlsbCcpIHtcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnggKiBQb2ludC5TSVpFLCB0aGlzLnkgKiBQb2ludC5TSVpFLCBQb2ludC5TSVpFLCBQb2ludC5TSVpFKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGN0eC5zdHJva2VSZWN0KHRoaXMueCAqIFBvaW50LlNJWkUsIHRoaXMueSAqIFBvaW50LlNJWkUsIFBvaW50LlNJWkUsIFBvaW50LlNJWkUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBQb2ludC5TSVpFID0gMTU7IC8vINCg0LDQt9C80LXRgCDQsiDQv9C40LrRgdC10LvRj9GFINC80LjQvdC40LzQsNC70YzQvdC+0Lkg0YLQvtGH0LrQuCDQsiDQuNCz0YDQtVxuICAgIHJldHVybiBQb2ludDtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBQb2ludDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvY2xhc3Nlcy9Qb2ludC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBlQ29sb3I7XG4oZnVuY3Rpb24gKGVDb2xvcikge1xuICAgIGVDb2xvcltcIldISVRFXCJdID0gXCIjRkZGRkZGXCI7XG4gICAgZUNvbG9yW1wiQkxVRVwiXSA9IFwiIzNGNTFCNVwiO1xuICAgIGVDb2xvcltcIlJFRFwiXSA9IFwiI0Y0NDMzNlwiO1xuICAgIGVDb2xvcltcIkdSRUVOXCJdID0gXCIjMDBCQ0Q0XCI7XG4gICAgZUNvbG9yW1wiWUVMTE9XXCJdID0gXCIjRkZDMTA3XCI7XG59KShlQ29sb3IgfHwgKGVDb2xvciA9IHt9KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBlQ29sb3I7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2VudW1zL2VDb2xvci5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBlRGlyZWN0aW9uXzEgPSByZXF1aXJlKFwiLi4vLi4vZW51bXMvZURpcmVjdGlvblwiKTtcbnZhciBQb2ludF8xID0gcmVxdWlyZShcIi4uL1BvaW50XCIpO1xudmFyIGVPYmplY3RGbGFnc18xID0gcmVxdWlyZShcIi4uLy4uL2VudW1zL2VPYmplY3RGbGFnc1wiKTtcbnZhciBTbmFrZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTbmFrZShwYXJhbXMpIHtcbiAgICAgICAgdGhpcy5ib2R5ID0gW107XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMuaXNHcm93aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGFzdEV2ZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5wcmV2U3RlcCA9IG51bGw7XG4gICAgICAgIHRoaXMuZmxhZ3MgPSBbZU9iamVjdEZsYWdzXzEuZGVmYXVsdC5TT0xJRF07XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gcGFyYW1zLmRpcmVjdGlvbjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBhcmFtcy5wb3NpdGlvbjtcbiAgICAgICAgdGhpcy5IRUFEX0NPTE9SID0gcGFyYW1zLmhlYWRDb2xvciA/IHBhcmFtcy5oZWFkQ29sb3IgOiBudWxsO1xuICAgICAgICB0aGlzLkJPRFlfQ09MT1IgPSBwYXJhbXMuYm9keUNvbG9yID8gcGFyYW1zLmJvZHlDb2xvciA6IG51bGw7XG4gICAgICAgIHRoaXMuZmllbGQgPSBwYXJhbXMuZmllbGQ7XG4gICAgICAgIHRoaXMuaW5pdChwYXJhbXMuc2l6ZSk7XG4gICAgfVxuICAgIFNuYWtlLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLmRpcmVjdGlvbi52YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSBlRGlyZWN0aW9uXzEuZGVmYXVsdC5MRUZUOlxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keS5wdXNoKG5ldyBQb2ludF8xLmRlZmF1bHQodGhpcy5wb3NpdGlvbi54ICsgaSwgdGhpcy5wb3NpdGlvbi55KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBlRGlyZWN0aW9uXzEuZGVmYXVsdC5SSUdIVDpcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHkucHVzaChuZXcgUG9pbnRfMS5kZWZhdWx0KHRoaXMucG9zaXRpb24ueCAtIGksIHRoaXMucG9zaXRpb24ueSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgZURpcmVjdGlvbl8xLmRlZmF1bHQuVVA6XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5LnB1c2gobmV3IFBvaW50XzEuZGVmYXVsdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSArIGkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGVEaXJlY3Rpb25fMS5kZWZhdWx0LkRPV046XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5LnB1c2gobmV3IFBvaW50XzEuZGVmYXVsdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSAtIGkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ9Ce0YjQuNCx0LrQsCDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjQuCDQt9C80LXQudC60LgnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgU25ha2UucHJvdG90eXBlLmhhbmRsZUV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHRoaXMubGFzdEV2ZW50ID0gZXZlbnQ7XG4gICAgfTtcbiAgICBTbmFrZS5wcm90b3R5cGUuY2hhbmdlRGlyZWN0aW9uID0gZnVuY3Rpb24gKG5ld0RpcmVjdGlvbikge1xuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24uaXNPcHBvc2l0ZShuZXdEaXJlY3Rpb24pKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChuZXdEaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgZURpcmVjdGlvbl8xLmRlZmF1bHQuVVA6XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24udmFsdWUgPSBlRGlyZWN0aW9uXzEuZGVmYXVsdC5VUDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgZURpcmVjdGlvbl8xLmRlZmF1bHQuRE9XTjpcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbi52YWx1ZSA9IGVEaXJlY3Rpb25fMS5kZWZhdWx0LkRPV047XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGVEaXJlY3Rpb25fMS5kZWZhdWx0LkxFRlQ6XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24udmFsdWUgPSBlRGlyZWN0aW9uXzEuZGVmYXVsdC5MRUZUO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBlRGlyZWN0aW9uXzEuZGVmYXVsdC5SSUdIVDpcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbi52YWx1ZSA9IGVEaXJlY3Rpb25fMS5kZWZhdWx0LlJJR0hUO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgfVxuICAgIH07XG4gICAgU25ha2UucHJvdG90eXBlLmdldEhlYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvZHlbMF0gfHwgbnVsbDtcbiAgICB9O1xuICAgIFNuYWtlLnByb3RvdHlwZS5nZXRDb29yZGluYXRlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9keTtcbiAgICB9O1xuICAgIFNuYWtlLnByb3RvdHlwZS5ncm93ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzR3Jvd2luZyA9IHRydWU7XG4gICAgfTtcbiAgICBTbmFrZS5wcm90b3R5cGUuc2F2ZVByZXZTdGVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnByZXZTdGVwID0ge1xuICAgICAgICAgICAgcG9zaXRpb246IG5ldyBQb2ludF8xLmRlZmF1bHQodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkpLFxuICAgICAgICAgICAgYm9keTogW11cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmJvZHkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucHJldlN0ZXAuYm9keS5wdXNoKG5ldyBQb2ludF8xLmRlZmF1bHQodGhpcy5ib2R5W2ldLngsIHRoaXMuYm9keVtpXS55KSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNuYWtlLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNhdmVQcmV2U3RlcCgpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLm1vdmUodGhpcy5kaXJlY3Rpb24udmFsdWUpO1xuICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5ib2R5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICAgIHRoaXMuYm9keVtpXS5zZXROZXdQb3NpdGlvbih0aGlzLmJvZHlbaSAtIDFdKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdldEhlYWQoKS5tb3ZlKHRoaXMuZGlyZWN0aW9uLnZhbHVlKTtcbiAgICB9O1xuICAgIFNuYWtlLnByb3RvdHlwZS5yZXZlcnRNb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gbmV3IFBvaW50XzEuZGVmYXVsdCh0aGlzLnByZXZTdGVwLnBvc2l0aW9uLngsIHRoaXMucHJldlN0ZXAucG9zaXRpb24ueSk7XG4gICAgICAgIHRoaXMuYm9keSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJldlN0ZXAuYm9keS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5ib2R5LnB1c2gobmV3IFBvaW50XzEuZGVmYXVsdCh0aGlzLnByZXZTdGVwLmJvZHlbaV0ueCwgdGhpcy5wcmV2U3RlcC5ib2R5W2ldLnkpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU25ha2UucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VEaXJlY3Rpb24odGhpcy5sYXN0RXZlbnQpO1xuICAgICAgICBpZiAodGhpcy5pc0dyb3dpbmcpIHtcbiAgICAgICAgICAgIHZhciBsYXN0RWxlbWVudCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuYm9keVt0aGlzLmJvZHkubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgdGhpcy5ib2R5LnB1c2gobmV3IFBvaW50XzEuZGVmYXVsdChsYXN0RWxlbWVudC54LCBsYXN0RWxlbWVudC55KSk7XG4gICAgICAgICAgICB0aGlzLmlzR3Jvd2luZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW92ZSgpO1xuICAgIH07XG4gICAgU25ha2UucHJvdG90eXBlLmdldERpcmVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uLnZhbHVlO1xuICAgIH07XG4gICAgU25ha2UucHJvdG90eXBlLmlzRWF0U2VsZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGhlYWQgPSB0aGlzLmJvZHlbMF07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgdGhpcy5ib2R5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaGVhZC5pc092ZXJsYXAodGhpcy5ib2R5W2ldKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIFNuYWtlLnByb3RvdHlwZS5pc092ZXJsYXAgPSBmdW5jdGlvbiAocG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9keS5zb21lKGZ1bmN0aW9uIChib2R5UG9pbnQpIHtcbiAgICAgICAgICAgIGlmIChib2R5UG9pbnQuaXNPdmVybGFwKHBvaW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFNuYWtlLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKGN0eCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5IRUFEX0NPTE9SO1xuICAgICAgICB0aGlzLmJvZHkuZm9yRWFjaChmdW5jdGlvbiAocG9pbnQpIHtcbiAgICAgICAgICAgIGlmIChwb2ludC54ICE9IF90aGlzLnBvc2l0aW9uLnggfHxcbiAgICAgICAgICAgICAgICBwb2ludC55ICE9IF90aGlzLnBvc2l0aW9uLnkpIHtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gX3RoaXMuQk9EWV9DT0xPUjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvaW50LmRyYXcoY3R4KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gU25ha2U7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gU25ha2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2NsYXNzZXMvU25ha2VzL1NuYWtlLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGVPYmplY3RGbGFncztcbihmdW5jdGlvbiAoZU9iamVjdEZsYWdzKSB7XG4gICAgZU9iamVjdEZsYWdzW2VPYmplY3RGbGFnc1tcIlNPTElEXCJdID0gMV0gPSBcIlNPTElEXCI7XG4gICAgZU9iamVjdEZsYWdzW2VPYmplY3RGbGFnc1tcIlBJQ0tVUFwiXSA9IDJdID0gXCJQSUNLVVBcIjtcbn0pKGVPYmplY3RGbGFncyB8fCAoZU9iamVjdEZsYWdzID0ge30pKTtcbmV4cG9ydHMuZGVmYXVsdCA9IGVPYmplY3RGbGFncztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvZW51bXMvZU9iamVjdEZsYWdzLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUG9pbnRfMSA9IHJlcXVpcmUoXCIuL1BvaW50XCIpO1xudmFyIGVDb2xvcl8xID0gcmVxdWlyZShcIi4uL2VudW1zL2VDb2xvclwiKTtcbnZhciBlT2JqZWN0RmxhZ3NfMSA9IHJlcXVpcmUoXCIuLi9lbnVtcy9lT2JqZWN0RmxhZ3NcIik7XG52YXIgRm9vZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRm9vZCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBGb29kKHgsIHksIGZpZWxkKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHgsIHkpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmZpZWxkID0gZmllbGQ7XG4gICAgICAgIF90aGlzLmZsYWdzID0gW2VPYmplY3RGbGFnc18xLmRlZmF1bHQuUElDS1VQXTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBGb29kLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKGN0eCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZUNvbG9yXzEuZGVmYXVsdC5ZRUxMT1c7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuZHJhdy5jYWxsKHRoaXMsIGN0eCk7XG4gICAgfTtcbiAgICBGb29kLnByb3RvdHlwZS5nZXRDb29yZGluYXRlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFt0aGlzXTtcbiAgICB9O1xuICAgIEZvb2QucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImZvb2QgdXBkYXRlXCIpO1xuICAgIH07XG4gICAgcmV0dXJuIEZvb2Q7XG59KFBvaW50XzEuZGVmYXVsdCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gRm9vZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvY2xhc3Nlcy9Gb29kLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGVDb2xvcl8xID0gcmVxdWlyZShcIi4uLy4uL2VudW1zL2VDb2xvclwiKTtcbnZhciBDb2xvclNlcmlhbGl6ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29sb3JTZXJpYWxpemVyKCkge1xuICAgIH1cbiAgICBDb2xvclNlcmlhbGl6ZXIuc2VyaWFsaXplID0gZnVuY3Rpb24gKGpzb25Db2xvcikge1xuICAgICAgICBzd2l0Y2ggKGpzb25Db2xvcikge1xuICAgICAgICAgICAgY2FzZSBcImJsdWVcIjogcmV0dXJuIGVDb2xvcl8xLmRlZmF1bHQuQkxVRTtcbiAgICAgICAgICAgIGNhc2UgXCJyZWRcIjogcmV0dXJuIGVDb2xvcl8xLmRlZmF1bHQuUkVEO1xuICAgICAgICAgICAgY2FzZSBcImdyZWVuXCI6IHJldHVybiBlQ29sb3JfMS5kZWZhdWx0LkdSRUVOO1xuICAgICAgICAgICAgY2FzZSBcInllbGxvd1wiOiByZXR1cm4gZUNvbG9yXzEuZGVmYXVsdC5ZRUxMT1c7XG4gICAgICAgICAgICBjYXNlIFwid2hpdGVcIjogcmV0dXJuIGVDb2xvcl8xLmRlZmF1bHQuV0hJVEU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBDb2xvclNlcmlhbGl6ZXI7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gQ29sb3JTZXJpYWxpemVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9jbGFzc2VzL1NlcmlhbGl6ZXJzL0NvbG9yU2VyaWFsaXplci5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBEaXJlY3Rpb25fMSA9IHJlcXVpcmUoXCIuLi9EaXJlY3Rpb25cIik7XG52YXIgZURpcmVjdGlvbl8xID0gcmVxdWlyZShcIi4uLy4uL2VudW1zL2VEaXJlY3Rpb25cIik7XG52YXIgRGlyZWN0aW9uU2VyaWFsaXplciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEaXJlY3Rpb25TZXJpYWxpemVyKCkge1xuICAgIH1cbiAgICBEaXJlY3Rpb25TZXJpYWxpemVyLnNlcmlhbGl6ZSA9IGZ1bmN0aW9uIChqc29uRGlyZWN0aW9uKSB7XG4gICAgICAgIHN3aXRjaCAoanNvbkRpcmVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSBcImxlZnRcIjogcmV0dXJuIG5ldyBEaXJlY3Rpb25fMS5kZWZhdWx0KGVEaXJlY3Rpb25fMS5kZWZhdWx0LkxFRlQpO1xuICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6IHJldHVybiBuZXcgRGlyZWN0aW9uXzEuZGVmYXVsdChlRGlyZWN0aW9uXzEuZGVmYXVsdC5SSUdIVCk7XG4gICAgICAgICAgICBjYXNlIFwidXBcIjogcmV0dXJuIG5ldyBEaXJlY3Rpb25fMS5kZWZhdWx0KGVEaXJlY3Rpb25fMS5kZWZhdWx0LlVQKTtcbiAgICAgICAgICAgIGNhc2UgXCJkb3duXCI6IHJldHVybiBuZXcgRGlyZWN0aW9uXzEuZGVmYXVsdChlRGlyZWN0aW9uXzEuZGVmYXVsdC5ET1dOKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiaW5jb3JyZWN0IGRpcmVjdGlvbiB2YWx1ZSBmcm9tIGpzb24gZmlsZVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIERpcmVjdGlvblNlcmlhbGl6ZXI7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gRGlyZWN0aW9uU2VyaWFsaXplcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvY2xhc3Nlcy9TZXJpYWxpemVycy9EaXJlY3Rpb25TZXJpYWxpemVyLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGVEaXJlY3Rpb25fMSA9IHJlcXVpcmUoXCIuLi9lbnVtcy9lRGlyZWN0aW9uXCIpO1xudmFyIG1hdGhfaGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9tYXRoLWhlbHBlclwiKTtcbnZhciBEaXJlY3Rpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRGlyZWN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgRGlyZWN0aW9uLmdldFJhbmRvbSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG1hdGhfaGVscGVyXzEuZGVmYXVsdC5nZXRSYW5kb21JbnQoMCwgNCk7XG4gICAgfTtcbiAgICBEaXJlY3Rpb24uZ2V0RGlyZWN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRpcmVjdGlvbnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgIT09IGVEaXJlY3Rpb25fMS5kZWZhdWx0LkxBU1Q7IGkrKykge1xuICAgICAgICAgICAgZGlyZWN0aW9ucy5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkaXJlY3Rpb25zO1xuICAgIH07XG4gICAgRGlyZWN0aW9uLnByb3RvdHlwZS5pc09wcG9zaXRlID0gZnVuY3Rpb24gKGRpcmVjdGlvbikge1xuICAgICAgICBpZiAoTWF0aC5hYnModGhpcy52YWx1ZSAtIGRpcmVjdGlvbikgPT0gMikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgRGlyZWN0aW9uLnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uIChuZXdEaXJlY3Rpb24pIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT0gbmV3RGlyZWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNPcHBvc2l0ZShuZXdEaXJlY3Rpb24pKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52YWx1ZSA9IG5ld0RpcmVjdGlvbjtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICByZXR1cm4gRGlyZWN0aW9uO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IERpcmVjdGlvbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvY2xhc3Nlcy9EaXJlY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyDQktC+0LfQstGA0LDRidCw0LXRgiDRgdC70YPRh9Cw0LnQvdC+0LUg0YbQtdC70L7QtSDRh9C40YHQu9C+INC80LXQttC00YMgbWluICjQstC60LvRjtGH0LjRgtC10LvRjNC90L4pINC4IG1heCAo0L3QtSDQstC60LvRjtGH0LDRjyBtYXgpXG5mdW5jdGlvbiBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGdldFJhbmRvbUludDogZ2V0UmFuZG9tSW50XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9oZWxwZXJzL21hdGgtaGVscGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU25ha2VfMSA9IHJlcXVpcmUoXCIuL1NuYWtlXCIpO1xudmFyIGVDb2xvcl8xID0gcmVxdWlyZShcIi4uLy4uL2VudW1zL2VDb2xvclwiKTtcbnZhciBFbmVteVNuYWtlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhFbmVteVNuYWtlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEVuZW15U25ha2UocGFyYW1zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHBhcmFtcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuREVGQVVMVF9CT0RZX0NPTE9SID0gZUNvbG9yXzEuZGVmYXVsdC5ZRUxMT1c7XG4gICAgICAgIF90aGlzLkRFRkFVTFRfSEVBRF9DT0xPUiA9IGVDb2xvcl8xLmRlZmF1bHQuV0hJVEU7XG4gICAgICAgIF90aGlzLkhFQURfQ09MT1IgPSBfdGhpcy5IRUFEX0NPTE9SIHx8IF90aGlzLkRFRkFVTFRfSEVBRF9DT0xPUjtcbiAgICAgICAgX3RoaXMuQk9EWV9DT0xPUiA9IF90aGlzLkJPRFlfQ09MT1IgfHwgX3RoaXMuREVGQVVMVF9CT0RZX0NPTE9SO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBFbmVteVNuYWtlO1xufShTbmFrZV8xLmRlZmF1bHQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEVuZW15U25ha2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2NsYXNzZXMvU25ha2VzL0VuZW15U25ha2UuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGVHYW1lU3RhdGU7XG4oZnVuY3Rpb24gKGVHYW1lU3RhdGUpIHtcbiAgICBlR2FtZVN0YXRlW2VHYW1lU3RhdGVbXCJQTEFZXCJdID0gMF0gPSBcIlBMQVlcIjtcbiAgICBlR2FtZVN0YXRlW2VHYW1lU3RhdGVbXCJQQVVTRVwiXSA9IDFdID0gXCJQQVVTRVwiO1xuICAgIGVHYW1lU3RhdGVbZUdhbWVTdGF0ZVtcIkdBTUVfT1ZFUlwiXSA9IDJdID0gXCJHQU1FX09WRVJcIjtcbn0pKGVHYW1lU3RhdGUgfHwgKGVHYW1lU3RhdGUgPSB7fSkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gZUdhbWVTdGF0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvZW51bXMvZUdhbWVTdGF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgR2FtZV8xID0gcmVxdWlyZShcIi4vY2xhc3Nlcy9HYW1lXCIpO1xud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZ2FtZSA9IG5ldyBHYW1lXzEuZGVmYXVsdCgpO1xuICAgIGdhbWUuaW5pdCgpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFNjZW5lXzEgPSByZXF1aXJlKFwiLi9TY2VuZVwiKTtcbnZhciBlR2FtZVN0YXRlXzEgPSByZXF1aXJlKFwiLi4vZW51bXMvZUdhbWVTdGF0ZVwiKTtcbnZhciBHYW1lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEdhbWUoKSB7XG4gICAgICAgIHRoaXMuZ2FtZVNwZWVkID0gMTAwO1xuICAgICAgICB0aGlzLnNjZW5lID0gbmV3IFNjZW5lXzEuZGVmYXVsdCh0aGlzKTtcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgfVxuICAgIEdhbWUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuc2NlbmUudXBkYXRlKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBlR2FtZVN0YXRlXzEuZGVmYXVsdC5QQVVTRTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuc3RhdGUgPT09IGVHYW1lU3RhdGVfMS5kZWZhdWx0LlBBVVNFKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgR2FtZS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gZUdhbWVTdGF0ZV8xLmRlZmF1bHQuUExBWTtcbiAgICAgICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKHRoaXMuc2NlbmUudXBkYXRlLmJpbmQodGhpcy5zY2VuZSksIHRoaXMuZ2FtZVNwZWVkKTtcbiAgICB9O1xuICAgIEdhbWUucHJvdG90eXBlLmdhbWVPdmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICAgICAgICB0aGlzLnN0YXRlID0gZUdhbWVTdGF0ZV8xLmRlZmF1bHQuR0FNRV9PVkVSO1xuICAgIH07XG4gICAgcmV0dXJuIEdhbWU7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gR2FtZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvY2xhc3Nlcy9HYW1lLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBHYW1lT2JqZWN0c1NlcmlhbGl6ZXJfMSA9IHJlcXVpcmUoXCIuL1NlcmlhbGl6ZXJzL0dhbWVPYmplY3RzU2VyaWFsaXplclwiKTtcbnZhciBHYW1lRGF0YV8xID0gcmVxdWlyZShcIi4vU2VyaWFsaXplcnMvR2FtZURhdGFcIik7XG52YXIgU2NyZWVuXzEgPSByZXF1aXJlKFwiLi9TY3JlZW5cIik7XG52YXIgUGhpc3ljXzEgPSByZXF1aXJlKFwiLi9QaHlzaWMvUGhpc3ljXCIpO1xudmFyIEZvb2RDcmVhdG9yXzEgPSByZXF1aXJlKFwiLi9Gb29kQ3JlYXRvclwiKTtcbnZhciBBSV8xID0gcmVxdWlyZShcIi4vQUkvQUlcIik7XG52YXIgZUdhbWVTdGF0ZV8xID0gcmVxdWlyZShcIi4uL2VudW1zL2VHYW1lU3RhdGVcIik7XG52YXIgU2NlbmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2NlbmUoZ2FtZSkge1xuICAgICAgICB0aGlzLm9iamVjdEZhY3RvcnkgPSBuZXcgR2FtZU9iamVjdHNTZXJpYWxpemVyXzEuZGVmYXVsdChHYW1lRGF0YV8xLmRlZmF1bHQpO1xuICAgICAgICB0aGlzLm9iamVjdHMgPSB0aGlzLm9iamVjdEZhY3RvcnkuY3JlYXRlQWxsKCk7XG4gICAgICAgIHRoaXMuc2NyZWVuID0gbmV3IFNjcmVlbl8xLmRlZmF1bHQodGhpcy5vYmplY3RzKTtcbiAgICAgICAgdGhpcy5waHlzaWMgPSBuZXcgUGhpc3ljXzEuZGVmYXVsdCh0aGlzLm9iamVjdHMpO1xuICAgICAgICB0aGlzLnBoeXNpYy5hZGRPYnNlcnZlcih0aGlzKTtcbiAgICAgICAgdGhpcy5haSA9IG5ldyBBSV8xLmRlZmF1bHQodGhpcyk7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgfVxuICAgIFNjZW5lLnByb3RvdHlwZS5nZXRPYmplY3RzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vYmplY3RzO1xuICAgIH07XG4gICAgU2NlbmUucHJvdG90eXBlLmdldFBoaXN5YyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGh5c2ljO1xuICAgIH07XG4gICAgU2NlbmUucHJvdG90eXBlLmdldEFJID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5haTtcbiAgICB9O1xuICAgIFNjZW5lLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMub2JqZWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgICAgICAgIG9iamVjdC51cGRhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWkucHJvY2Nlc3MoKTtcbiAgICAgICAgdGhpcy5waHlzaWMucHJvY2Nlc3MoKTtcbiAgICAgICAgaWYgKHRoaXMubGFzdFBoaXN5Y0V2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLnJlc3BvbmRQaGlzeWNFdmVudCh0aGlzLmxhc3RQaGlzeWNFdmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5zdGF0ZSAhPT0gZUdhbWVTdGF0ZV8xLmRlZmF1bHQuR0FNRV9PVkVSKSB7XG4gICAgICAgICAgICB0aGlzLnNjcmVlbi5kcmF3KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNjZW5lLnByb3RvdHlwZS5hZGRPYmplY3QgPSBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgICAgIHRoaXMub2JqZWN0cy5wdXNoKG9iamVjdCk7XG4gICAgfTtcbiAgICBTY2VuZS5wcm90b3R5cGUuaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5sYXN0UGhpc3ljRXZlbnQgPSBldmVudDtcbiAgICB9O1xuICAgIFNjZW5lLnByb3RvdHlwZS5yZXNwb25kUGhpc3ljRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwiU05BS0VfQ09MTElTSU9OXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLmdhbWVPdmVyKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiRUFUXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVPYmplY3QoZXZlbnQuZGF0YS5kZXN0KTtcbiAgICAgICAgICAgICAgICB2YXIgZm9vZENyZWF0b3IgPSBuZXcgRm9vZENyZWF0b3JfMS5kZWZhdWx0KGV2ZW50LmRhdGEuZGVzdC5maWVsZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRPYmplY3QoZm9vZENyZWF0b3IuY3JlYXRlKCkpO1xuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuc3JjLmdyb3coKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJFQVRfU0VMRlwiOlxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5nYW1lT3ZlcigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkJPVU5EQVJZX09WRVJGTE9XXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLmdhbWVPdmVyKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OiBjb25zb2xlLmxvZyhcInVuaGFuZGxlIGV2ZW50OiBcIiwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGFzdFBoaXN5Y0V2ZW50ID0gbnVsbDtcbiAgICB9O1xuICAgIFNjZW5lLnByb3RvdHlwZS5yZW1vdmVPYmplY3QgPSBmdW5jdGlvbiAocmVtb3ZhYmxlT2JqZWN0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMub2JqZWN0cy5zb21lKGZ1bmN0aW9uIChvYmplY3QsIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAob2JqZWN0ID09PSByZW1vdmFibGVPYmplY3QpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5vYmplY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFNjZW5lO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFNjZW5lO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9jbGFzc2VzL1NjZW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBGaWVsZF8xID0gcmVxdWlyZShcIi4uL0ZpZWxkXCIpO1xudmFyIFBsYXllclNuYWtlU2VyaWFsaXplcl8xID0gcmVxdWlyZShcIi4vUGxheWVyU25ha2VTZXJpYWxpemVyXCIpO1xudmFyIEZvb2RfMSA9IHJlcXVpcmUoXCIuLi9Gb29kXCIpO1xudmFyIEVuZW15U25ha2VTZXJpYWxpemVyXzEgPSByZXF1aXJlKFwiLi9FbmVteVNuYWtlU2VyaWFsaXplclwiKTtcbnZhciBPYmplY3RGYWN0b3J5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE9iamVjdEZhY3RvcnkoZ2FtZURhdGEpIHtcbiAgICAgICAgdGhpcy5nYW1lRGF0YSA9IGdhbWVEYXRhO1xuICAgICAgICB0aGlzLm9iamVjdHMgPSBbXTtcbiAgICB9XG4gICAgT2JqZWN0RmFjdG9yeS5wcm90b3R5cGUuY3JlYXRlQWxsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmdhbWVEYXRhLmZpZWxkcy5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZEpTT04pIHtcbiAgICAgICAgICAgIHZhciBmaWVsZCA9IG5ldyBGaWVsZF8xLmRlZmF1bHQoZmllbGRKU09OLndpZHRoLCBmaWVsZEpTT04uaGVpZ2h0KTtcbiAgICAgICAgICAgIF90aGlzLm9iamVjdHMucHVzaChmaWVsZCk7XG4gICAgICAgICAgICB2YXIgc25ha2VzID0gZmllbGRKU09OLmVudHJpZXMuc25ha2VzO1xuICAgICAgICAgICAgc25ha2VzLmZvckVhY2goZnVuY3Rpb24gKHNuYWtlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNuYWtlLnR5cGUgPT09IFwicGxheWVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMub2JqZWN0cy5wdXNoKFBsYXllclNuYWtlU2VyaWFsaXplcl8xLmRlZmF1bHQuY3JlYXRlKHNuYWtlLCBmaWVsZCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzbmFrZS50eXBlID09PSBcImVuZW15XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMub2JqZWN0cy5wdXNoKEVuZW15U25ha2VTZXJpYWxpemVyXzEuZGVmYXVsdC5jcmVhdGUoc25ha2UsIGZpZWxkKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgZWF0cyA9IGZpZWxkSlNPTi5lYXRzO1xuICAgICAgICAgICAgZWF0cy5mb3JFYWNoKGZ1bmN0aW9uIChlYXQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5vYmplY3RzLnB1c2gobmV3IEZvb2RfMS5kZWZhdWx0KGVhdC54LCBlYXQueSwgZmllbGQpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMub2JqZWN0cztcbiAgICB9O1xuICAgIHJldHVybiBPYmplY3RGYWN0b3J5O1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IE9iamVjdEZhY3Rvcnk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2NsYXNzZXMvU2VyaWFsaXplcnMvR2FtZU9iamVjdHNTZXJpYWxpemVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBQb2ludF8xID0gcmVxdWlyZShcIi4vUG9pbnRcIik7XG52YXIgZUNvbG9yXzEgPSByZXF1aXJlKFwiLi4vZW51bXMvZUNvbG9yXCIpO1xudmFyIEZpZWxkID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZpZWxkKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IDA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMDtcbiAgICAgICAgdGhpcy5maWVsZHMgPSBbXTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuICAgIEZpZWxkLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciByb3dfaSA9IDA7IHJvd19pIDwgdGhpcy53aWR0aDsgcm93X2krKykge1xuICAgICAgICAgICAgdGhpcy5maWVsZHNbcm93X2ldID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBjb2xfaSA9IDA7IGNvbF9pIDwgdGhpcy5oZWlnaHQ7IGNvbF9pKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkc1tyb3dfaV1bY29sX2ldID0gbmV3IFBvaW50XzEuZGVmYXVsdChyb3dfaSwgY29sX2kpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBGaWVsZC5wcm90b3R5cGUuaXNJbkJvdW5kYXJ5ID0gZnVuY3Rpb24gKHBvaW50KSB7XG4gICAgICAgIHJldHVybiBwb2ludC54IDwgdGhpcy53aWR0aCAmJlxuICAgICAgICAgICAgcG9pbnQueSA8IHRoaXMuaGVpZ2h0ICYmXG4gICAgICAgICAgICBwb2ludC54ID49IDAgJiZcbiAgICAgICAgICAgIHBvaW50LnkgPj0gMDtcbiAgICB9O1xuICAgIEZpZWxkLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKGN0eCkge1xuICAgICAgICB0aGlzLmZpZWxkcy5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGVDb2xvcl8xLmRlZmF1bHQuV0hJVEU7XG4gICAgICAgICAgICAgICAgZmllbGQuZHJhdyhjdHgsICdzdHJva2UnKTtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gZUNvbG9yXzEuZGVmYXVsdC5HUkVFTjtcbiAgICAgICAgICAgICAgICBmaWVsZC5kcmF3KGN0eCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBGaWVsZC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIH07XG4gICAgcmV0dXJuIEZpZWxkO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEZpZWxkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9jbGFzc2VzL0ZpZWxkLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBQb2ludF8xID0gcmVxdWlyZShcIi4uL1BvaW50XCIpO1xudmFyIENvbG9yU2VyaWFsaXplcl8xID0gcmVxdWlyZShcIi4vQ29sb3JTZXJpYWxpemVyXCIpO1xudmFyIERpcmVjdGlvblNlcmlhbGl6ZXJfMSA9IHJlcXVpcmUoXCIuL0RpcmVjdGlvblNlcmlhbGl6ZXJcIik7XG52YXIgUGxheWVyU25ha2VfMSA9IHJlcXVpcmUoXCIuLi9TbmFrZXMvUGxheWVyU25ha2VcIik7XG52YXIgUGxheWVyU25ha2VGYWN0b3J5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFBsYXllclNuYWtlRmFjdG9yeSgpIHtcbiAgICB9XG4gICAgUGxheWVyU25ha2VGYWN0b3J5LmNyZWF0ZSA9IGZ1bmN0aW9uIChqc29uLCBmaWVsZCkge1xuICAgICAgICB2YXIgZGlyZWN0aW9uID0gRGlyZWN0aW9uU2VyaWFsaXplcl8xLmRlZmF1bHQuc2VyaWFsaXplKGpzb24uZGlyZWN0aW9uKTtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gbmV3IFBvaW50XzEuZGVmYXVsdChqc29uLnBvc2l0aW9uLngsIGpzb24ucG9zaXRpb24ueSk7XG4gICAgICAgIHZhciBib2R5Q29sb3IgPSBDb2xvclNlcmlhbGl6ZXJfMS5kZWZhdWx0LnNlcmlhbGl6ZShqc29uLmJvZHlDb2xvcik7XG4gICAgICAgIHZhciBoZWFkQ29sb3IgPSBDb2xvclNlcmlhbGl6ZXJfMS5kZWZhdWx0LnNlcmlhbGl6ZShqc29uLmhlYWRDb2xvcik7XG4gICAgICAgIHZhciBzaXplID0ganNvbi5zaXplO1xuICAgICAgICByZXR1cm4gbmV3IFBsYXllclNuYWtlXzEuZGVmYXVsdCh7XG4gICAgICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvbixcbiAgICAgICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgICAgICAgIGJvZHlDb2xvcjogYm9keUNvbG9yLFxuICAgICAgICAgICAgaGVhZENvbG9yOiBoZWFkQ29sb3IsXG4gICAgICAgICAgICBzaXplOiBzaXplLFxuICAgICAgICAgICAgZmllbGQ6IGZpZWxkXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFBsYXllclNuYWtlRmFjdG9yeTtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBQbGF5ZXJTbmFrZUZhY3Rvcnk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2NsYXNzZXMvU2VyaWFsaXplcnMvUGxheWVyU25ha2VTZXJpYWxpemVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFNuYWtlXzEgPSByZXF1aXJlKFwiLi9TbmFrZVwiKTtcbnZhciBlQ29sb3JfMSA9IHJlcXVpcmUoXCIuLi8uLi9lbnVtcy9lQ29sb3JcIik7XG52YXIgS2V5Ym9hcmRDb250cm9sbGVyXzEgPSByZXF1aXJlKFwiLi4vQ29udHJvbGxlcnMvS2V5Ym9hcmRDb250cm9sbGVyXCIpO1xudmFyIFBsYXllclNuYWtlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhQbGF5ZXJTbmFrZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBQbGF5ZXJTbmFrZShwYXJhbXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcGFyYW1zKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5ERUZBVUxUX0hFQURfQ09MT1IgPSBlQ29sb3JfMS5kZWZhdWx0LlJFRDtcbiAgICAgICAgX3RoaXMuREVGQVVMVF9CT0RZX0NPTE9SID0gZUNvbG9yXzEuZGVmYXVsdC5CTFVFO1xuICAgICAgICBfdGhpcy5IRUFEX0NPTE9SID0gX3RoaXMuSEVBRF9DT0xPUiB8fCBfdGhpcy5ERUZBVUxUX0hFQURfQ09MT1I7XG4gICAgICAgIF90aGlzLkJPRFlfQ09MT1IgPSBfdGhpcy5CT0RZX0NPTE9SIHx8IF90aGlzLkRFRkFVTFRfQk9EWV9DT0xPUjtcbiAgICAgICAgX3RoaXMuY29udHJvbGxlciA9IG5ldyBLZXlib2FyZENvbnRyb2xsZXJfMS5kZWZhdWx0KCk7XG4gICAgICAgIF90aGlzLmNvbnRyb2xsZXIuYWRkT2JzZXJ2ZXIoX3RoaXMpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBQbGF5ZXJTbmFrZTtcbn0oU25ha2VfMS5kZWZhdWx0KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBQbGF5ZXJTbmFrZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvY2xhc3Nlcy9TbmFrZXMvUGxheWVyU25ha2UuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQ29udHJvbGxlcl8xID0gcmVxdWlyZShcIi4vQ29udHJvbGxlclwiKTtcbnZhciBlRGlyZWN0aW9uXzEgPSByZXF1aXJlKFwiLi4vLi4vZW51bXMvZURpcmVjdGlvblwiKTtcbnZhciBLZXlib2FyZENvbnRyb2xsZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEtleWJvYXJkQ29udHJvbGxlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBLZXlib2FyZENvbnRyb2xsZXIoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubm90aWZ5T2JzZXJ2ZXJzKGVEaXJlY3Rpb25fMS5kZWZhdWx0LlVQKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubm90aWZ5T2JzZXJ2ZXJzKGVEaXJlY3Rpb25fMS5kZWZhdWx0LkRPV04pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5ub3RpZnlPYnNlcnZlcnMoZURpcmVjdGlvbl8xLmRlZmF1bHQuTEVGVCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5ub3RpZnlPYnNlcnZlcnMoZURpcmVjdGlvbl8xLmRlZmF1bHQuUklHSFQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIEtleWJvYXJkQ29udHJvbGxlcjtcbn0oQ29udHJvbGxlcl8xLmRlZmF1bHQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEtleWJvYXJkQ29udHJvbGxlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvY2xhc3Nlcy9Db250cm9sbGVycy9LZXlib2FyZENvbnRyb2xsZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIENvbnRyb2xsZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29udHJvbGxlcigpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXTtcbiAgICB9XG4gICAgQ29udHJvbGxlci5wcm90b3R5cGUuYWRkT2JzZXJ2ZXIgPSBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChvYnNlcnZlcik7XG4gICAgfTtcbiAgICBDb250cm9sbGVyLnByb3RvdHlwZS5yZW1vdmVPYnNlcnZlciA9IGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICBjb25zb2xlLndhcm4oJ9CX0LTQtdGB0Ywg0YPQtNCw0LvRj9C10Lwg0L3QsNCx0LvRjtC00LDRgtC10LvRjywg0L3QtSDRgNC10LDQu9C40LfQvtCy0LDQuyDRgtC6INC90LUg0LHRi9C70L4g0L3QsNC00L7QsdC90L7QstGB0YLQuCcpO1xuICAgIH07XG4gICAgQ29udHJvbGxlci5wcm90b3R5cGUubm90aWZ5T2JzZXJ2ZXJzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5oYW5kbGVFdmVudChldmVudCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIENvbnRyb2xsZXI7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gQ29udHJvbGxlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvY2xhc3Nlcy9Db250cm9sbGVycy9Db250cm9sbGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBQb2ludF8xID0gcmVxdWlyZShcIi4uL1BvaW50XCIpO1xudmFyIEVuZW15U25ha2VfMSA9IHJlcXVpcmUoXCIuLi9TbmFrZXMvRW5lbXlTbmFrZVwiKTtcbnZhciBDb2xvclNlcmlhbGl6ZXJfMSA9IHJlcXVpcmUoXCIuL0NvbG9yU2VyaWFsaXplclwiKTtcbnZhciBEaXJlY3Rpb25TZXJpYWxpemVyXzEgPSByZXF1aXJlKFwiLi9EaXJlY3Rpb25TZXJpYWxpemVyXCIpO1xudmFyIEVuZW15U25ha2VGYWN0b3J5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEVuZW15U25ha2VGYWN0b3J5KCkge1xuICAgIH1cbiAgICBFbmVteVNuYWtlRmFjdG9yeS5jcmVhdGUgPSBmdW5jdGlvbiAoanNvbiwgZmllbGQpIHtcbiAgICAgICAgdmFyIGRpcmVjdGlvbiA9IERpcmVjdGlvblNlcmlhbGl6ZXJfMS5kZWZhdWx0LnNlcmlhbGl6ZShqc29uLmRpcmVjdGlvbik7XG4gICAgICAgIHZhciBwb3NpdGlvbiA9IG5ldyBQb2ludF8xLmRlZmF1bHQoanNvbi5wb3NpdGlvbi54LCBqc29uLnBvc2l0aW9uLnkpO1xuICAgICAgICB2YXIgYm9keUNvbG9yID0gQ29sb3JTZXJpYWxpemVyXzEuZGVmYXVsdC5zZXJpYWxpemUoanNvbi5ib2R5Q29sb3IpO1xuICAgICAgICB2YXIgaGVhZENvbG9yID0gQ29sb3JTZXJpYWxpemVyXzEuZGVmYXVsdC5zZXJpYWxpemUoanNvbi5oZWFkQ29sb3IpO1xuICAgICAgICB2YXIgc2l6ZSA9IGpzb24uc2l6ZTtcbiAgICAgICAgcmV0dXJuIG5ldyBFbmVteVNuYWtlXzEuZGVmYXVsdCh7XG4gICAgICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvbixcbiAgICAgICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgICAgICAgIGJvZHlDb2xvcjogYm9keUNvbG9yLFxuICAgICAgICAgICAgaGVhZENvbG9yOiBoZWFkQ29sb3IsXG4gICAgICAgICAgICBzaXplOiBzaXplLFxuICAgICAgICAgICAgZmllbGQ6IGZpZWxkXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEVuZW15U25ha2VGYWN0b3J5O1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEVuZW15U25ha2VGYWN0b3J5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9jbGFzc2VzL1NlcmlhbGl6ZXJzL0VuZW15U25ha2VTZXJpYWxpemVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBnYW1lRGF0YSA9IHtcbiAgICBcImZpZWxkc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwid2lkdGhcIjogMzAsXG4gICAgICAgICAgICBcImhlaWdodFwiOiAzMCxcbiAgICAgICAgICAgIFwiZW50cmllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJzbmFrZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9keUNvbG9yXCI6IFwicmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlYWRDb2xvclwiOiBcImJsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlyZWN0aW9uXCI6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwb3NpdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IDExLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieVwiOiAxMVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVuZW15XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvZHlDb2xvclwiOiBcInJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWFkQ29sb3JcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXJlY3Rpb25cIjogXCJkb3duXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBvc2l0aW9uXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInhcIjogMjksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IDI1XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZW5lbXlcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9keUNvbG9yXCI6IFwiYmx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWFkQ29sb3JcIjogXCJyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlyZWN0aW9uXCI6IFwiZG93blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwb3NpdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IDE1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieVwiOiAxNVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBsYXllclwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJlYXRzXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwieFwiOiAyOSxcbiAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IDI5LFxuICAgICAgICAgICAgICAgICAgICBcInlcIjogMjlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IDQsXG4gICAgICAgICAgICAgICAgICAgIFwieVwiOiA0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgXVxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGdhbWVEYXRhO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9jbGFzc2VzL1NlcmlhbGl6ZXJzL0dhbWVEYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTY3JlZW4gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2NyZWVuKG9iamVjdHMpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBudWxsO1xuICAgICAgICB0aGlzLmN0eCA9IG51bGw7XG4gICAgICAgIHRoaXMudG9EcmF3T2JqZWN0cyA9IFtdO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSAxMDAwO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSAxMDAwO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRoaXMudG9EcmF3T2JqZWN0cyA9IG9iamVjdHM7XG4gICAgfVxuICAgIFNjcmVlbi5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy50b0RyYXdPYmplY3RzLmZvckVhY2goZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgICAgICAgb2JqZWN0LmRyYXcoX3RoaXMuY3R4KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gU2NyZWVuO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFNjcmVlbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvY2xhc3Nlcy9TY3JlZW4uanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGVPYmplY3RGbGFnc18xID0gcmVxdWlyZShcIi4uLy4uL2VudW1zL2VPYmplY3RGbGFnc1wiKTtcbnZhciBTbmFrZV8xID0gcmVxdWlyZShcIi4uL1NuYWtlcy9TbmFrZVwiKTtcbnZhciBQaHlzaWMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUGh5c2ljKG9iamVjdHMpIHtcbiAgICAgICAgdGhpcy5vYmplY3RzID0gb2JqZWN0cztcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXTtcbiAgICB9XG4gICAgUGh5c2ljLnByb3RvdHlwZS5hZGRPYnNlcnZlciA9IGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKG9ic2VydmVyKTtcbiAgICB9O1xuICAgIFBoeXNpYy5wcm90b3R5cGUucmVtb3ZlT2JzZXJ2ZXIgPSBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCfQl9C00LXRgdGMINGD0LTQsNC70Y/QtdC8INC90LDQsdC70Y7QtNCw0YLQtdC70Y8sINC90LUg0YDQtdCw0LvQuNC30L7QstCw0Lsg0YLQuiDQvdC1INCx0YvQu9C+INC90LDQtNC+0LHQvdC+0YHRgtC4Jyk7XG4gICAgfTtcbiAgICBQaHlzaWMucHJvdG90eXBlLm5vdGlmeU9ic2VydmVycyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuaGFuZGxlRXZlbnQoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFBoeXNpYy5wcm90b3R5cGUucHJvY2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBjb2xsaXNpb25zID0gdGhpcy5kZXRlY3RDb2xsaXNpb25zKCk7XG4gICAgICAgIGlmIChjb2xsaXNpb25zKSB7XG4gICAgICAgICAgICBjb2xsaXNpb25zLmZvckVhY2goZnVuY3Rpb24gKGNvbGxpc2lvbikge1xuICAgICAgICAgICAgICAgIF90aGlzLm5vdGlmeU9ic2VydmVycyhjb2xsaXNpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG92ZXJmbG93ZWQgPSB0aGlzLmNoZWNrQm91bmRhcnlPdmVyZmxvdygpO1xuICAgICAgICBpZiAob3ZlcmZsb3dlZCkge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlPYnNlcnZlcnMoeyB0eXBlOiBcIkJPVU5EQVJZX09WRVJGTE9XXCIsIGRhdGE6IG92ZXJmbG93ZWQgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFBoeXNpYy5wcm90b3R5cGUuY2hlY2tCb3VuZGFyeU92ZXJmbG93ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gdGhpcy5vYmplY3RzLmZpbmQoZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgICAgICAgaWYgKG9iamVjdCBpbnN0YW5jZW9mIFNuYWtlXzEuZGVmYXVsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5pc092ZXJmbG93KG9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgUGh5c2ljLnByb3RvdHlwZS5pc092ZXJmbG93ID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgICB2YXIgaGVhZCA9IG9iamVjdC5nZXRIZWFkKCk7XG4gICAgICAgIGlmIChoZWFkLnggPiBvYmplY3QuZmllbGQud2lkdGggLSAxIHx8XG4gICAgICAgICAgICBoZWFkLnggPCAwIHx8XG4gICAgICAgICAgICBoZWFkLnkgPiBvYmplY3QuZmllbGQuaGVpZ2h0IC0gMSB8fFxuICAgICAgICAgICAgaGVhZC55IDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgUGh5c2ljLnByb3RvdHlwZS5kZXRlY3RDb2xsaXNpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgY29sbGlzaW9ucyA9IFtdO1xuICAgICAgICB0aGlzLm9iamVjdHMuZm9yRWFjaChmdW5jdGlvbiAoc3JjLCBzcmNJbmRleCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzcmMuZ2V0Q29vcmRpbmF0ZXMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5vYmplY3RzLmZvckVhY2goZnVuY3Rpb24gKGRlc3QsIGRlc3RJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3JjSW5kZXggIT09IGRlc3RJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkZXN0LmdldENvb3JkaW5hdGVzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNyY0Nvb3JkaW5hdGVzID0gc3JjLmdldENvb3JkaW5hdGVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlc3RDb29yZGluYXRlcyA9IGRlc3QuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuZGV0ZWN0Q29sbGlzaW9uKHNyY0Nvb3JkaW5hdGVzLCBkZXN0Q29vcmRpbmF0ZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcmMuZmxhZ3MuaW5jbHVkZXMoZU9iamVjdEZsYWdzXzEuZGVmYXVsdC5TT0xJRCkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc3QuZmxhZ3MuaW5jbHVkZXMoZU9iamVjdEZsYWdzXzEuZGVmYXVsdC5QSUNLVVApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb25zLnB1c2goeyB0eXBlOiBcIkVBVFwiLCBkYXRhOiB7IHNyYzogc3JjLCBkZXN0OiBkZXN0IH0gfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoc3JjLmZsYWdzLmluY2x1ZGVzKGVPYmplY3RGbGFnc18xLmRlZmF1bHQuU09MSUQpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXN0LmZsYWdzLmluY2x1ZGVzKGVPYmplY3RGbGFnc18xLmRlZmF1bHQuU09MSUQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb25zLnB1c2goeyB0eXBlOiBcIlNOQUtFX0NPTExJU0lPTlwiLCBkYXRhOiB7IHNyYzogc3JjLCBkZXN0OiBkZXN0IH0gfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3JjIGluc3RhbmNlb2YgU25ha2VfMS5kZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNyYy5pc0VhdFNlbGYoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb25zLnB1c2goeyB0eXBlOiBcIlNOQUtFX0NPTExJU0lPTlwiLCBkYXRhOiB7IHNyYzogc3JjLCBkZXN0OiBkZXN0IH0gfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY29sbGlzaW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gY29sbGlzaW9ucztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBQaHlzaWMucHJvdG90eXBlLmRldGVjdENvbGxpc2lvbiA9IGZ1bmN0aW9uIChzcmMsIGRlc3QpIHtcbiAgICAgICAgcmV0dXJuIHNyYy5zb21lKGZ1bmN0aW9uIChzcmNQb2ludCkge1xuICAgICAgICAgICAgcmV0dXJuIGRlc3Quc29tZShmdW5jdGlvbiAoZGVzdFBvaW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHNyY1BvaW50LnggPT09IGRlc3RQb2ludC54ICYmIHNyY1BvaW50LnkgPT09IGRlc3RQb2ludC55KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gUGh5c2ljO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFBoeXNpYztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvY2xhc3Nlcy9QaHlzaWMvUGhpc3ljLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBGb29kXzEgPSByZXF1aXJlKFwiLi9Gb29kXCIpO1xudmFyIG1hdGhfaGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9tYXRoLWhlbHBlclwiKTtcbnZhciBGb29kQ3JlYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBGb29kQ3JlYXRvcihmaWVsZCkge1xuICAgICAgICB0aGlzLm1heFdpZHRoID0gZmllbGQud2lkdGg7XG4gICAgICAgIHRoaXMubWF4SGVpZ2h0ID0gZmllbGQuaGVpZ2h0O1xuICAgICAgICB0aGlzLmZpZWxkID0gZmllbGQ7XG4gICAgfVxuICAgIEZvb2RDcmVhdG9yLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBuZXdGb29kID0gbnVsbDtcbiAgICAgICAgd2hpbGUgKCFuZXdGb29kKSB7XG4gICAgICAgICAgICBuZXdGb29kID0gdGhpcy50cnlDcmVhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3Rm9vZDtcbiAgICB9O1xuICAgIEZvb2RDcmVhdG9yLnByb3RvdHlwZS50cnlDcmVhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBuZXdGb29kID0gbmV3IEZvb2RfMS5kZWZhdWx0KG1hdGhfaGVscGVyXzEuZGVmYXVsdC5nZXRSYW5kb21JbnQoMCwgdGhpcy5tYXhXaWR0aCAtIDEpLCBtYXRoX2hlbHBlcl8xLmRlZmF1bHQuZ2V0UmFuZG9tSW50KDAsIHRoaXMubWF4SGVpZ2h0IC0gMSksIHRoaXMuZmllbGQpO1xuICAgICAgICByZXR1cm4gbmV3Rm9vZDtcbiAgICB9O1xuICAgIHJldHVybiBGb29kQ3JlYXRvcjtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBGb29kQ3JlYXRvcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvY2xhc3Nlcy9Gb29kQ3JlYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgRW5lbXlTbmFrZV8xID0gcmVxdWlyZShcIi4uL1NuYWtlcy9FbmVteVNuYWtlXCIpO1xudmFyIGVEaXJlY3Rpb25fMSA9IHJlcXVpcmUoXCIuLi8uLi9lbnVtcy9lRGlyZWN0aW9uXCIpO1xudmFyIEZvb2RfMSA9IHJlcXVpcmUoXCIuLi9Gb29kXCIpO1xudmFyIERpcmVjdGlvbl8xID0gcmVxdWlyZShcIi4uL0RpcmVjdGlvblwiKTtcbnZhciBBSSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBSShzY2VuZSkge1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgICAgIHRoaXMucGhpc3ljID0gc2NlbmUuZ2V0UGhpc3ljKCk7XG4gICAgfVxuICAgIEFJLnByb3RvdHlwZS5nZXRWZXJ0aWNhbE9mZnNldCA9IGZ1bmN0aW9uIChzbmFrZSwgZm9vZCwgZm9yYmlkRGlyZWN0aW9ucykge1xuICAgICAgICB2YXIgaGVhZCA9IHNuYWtlLmdldEhlYWQoKTtcbiAgICAgICAgaWYgKGhlYWQuaXNVbmRlcihmb29kKSkge1xuICAgICAgICAgICAgaWYgKCFmb3JiaWREaXJlY3Rpb25zLmluY2x1ZGVzKGVEaXJlY3Rpb25fMS5kZWZhdWx0LlVQKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlRGlyZWN0aW9uXzEuZGVmYXVsdC5VUDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlRGlyZWN0aW9uXzEuZGVmYXVsdC5ET1dOO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFmb3JiaWREaXJlY3Rpb25zLmluY2x1ZGVzKGVEaXJlY3Rpb25fMS5kZWZhdWx0LkRPV04pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVEaXJlY3Rpb25fMS5kZWZhdWx0LkRPV047XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZURpcmVjdGlvbl8xLmRlZmF1bHQuVVA7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFJLnByb3RvdHlwZS5nZXRIb3Jpem9udGFsT2Zmc2V0ID0gZnVuY3Rpb24gKHNuYWtlLCBmb29kLCBmb3JiaWREaXJlY3Rpb25zKSB7XG4gICAgICAgIHZhciBoZWFkID0gc25ha2UuZ2V0SGVhZCgpO1xuICAgICAgICBpZiAoaGVhZC5pc1JpZ2h0T2YoZm9vZCkpIHtcbiAgICAgICAgICAgIGlmICghZm9yYmlkRGlyZWN0aW9ucy5pbmNsdWRlcyhlRGlyZWN0aW9uXzEuZGVmYXVsdC5MRUZUKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlRGlyZWN0aW9uXzEuZGVmYXVsdC5MRUZUO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGVEaXJlY3Rpb25fMS5kZWZhdWx0LlJJR0hUO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFmb3JiaWREaXJlY3Rpb25zLmluY2x1ZGVzKGVEaXJlY3Rpb25fMS5kZWZhdWx0LlJJR0hUKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlRGlyZWN0aW9uXzEuZGVmYXVsdC5SSUdIVDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlRGlyZWN0aW9uXzEuZGVmYXVsdC5MRUZUO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBSS5wcm90b3R5cGUuZ2V0RGlyZWN0aW9uID0gZnVuY3Rpb24gKHNuYWtlLCBmb3JiaWREaXJlY3Rpb25zKSB7XG4gICAgICAgIGlmIChmb3JiaWREaXJlY3Rpb25zID09PSB2b2lkIDApIHsgZm9yYmlkRGlyZWN0aW9ucyA9IFtdOyB9XG4gICAgICAgIHZhciBoZWFkID0gc25ha2UuZ2V0SGVhZCgpO1xuICAgICAgICB2YXIgZGlyZWN0aW9uID0gc25ha2UuZ2V0RGlyZWN0aW9uKCk7XG4gICAgICAgIHZhciBmb29kID0gdGhpcy5nZXROZWFyZXN0Rm9vZChzbmFrZSk7XG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIGVEaXJlY3Rpb25fMS5kZWZhdWx0LkxFRlQ6XG4gICAgICAgICAgICAgICAgaWYgKGhlYWQuaXNSaWdodE9mKGZvb2QpICYmICFmb3JiaWREaXJlY3Rpb25zLmluY2x1ZGVzKGRpcmVjdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFZlcnRpY2FsT2Zmc2V0KHNuYWtlLCBmb29kLCBmb3JiaWREaXJlY3Rpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIGVEaXJlY3Rpb25fMS5kZWZhdWx0LlJJR0hUOlxuICAgICAgICAgICAgICAgIGlmIChoZWFkLmlzTGVmdE9mKGZvb2QpICYmICFmb3JiaWREaXJlY3Rpb25zLmluY2x1ZGVzKGRpcmVjdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFZlcnRpY2FsT2Zmc2V0KHNuYWtlLCBmb29kLCBmb3JiaWREaXJlY3Rpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIGVEaXJlY3Rpb25fMS5kZWZhdWx0LlVQOlxuICAgICAgICAgICAgICAgIGlmIChoZWFkLmlzVW5kZXIoZm9vZCkgJiYgIWZvcmJpZERpcmVjdGlvbnMuaW5jbHVkZXMoZGlyZWN0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SG9yaXpvbnRhbE9mZnNldChzbmFrZSwgZm9vZCwgZm9yYmlkRGlyZWN0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBlRGlyZWN0aW9uXzEuZGVmYXVsdC5ET1dOOlxuICAgICAgICAgICAgICAgIGlmIChoZWFkLmlzQWJvdmUoZm9vZCkgJiYgIWZvcmJpZERpcmVjdGlvbnMuaW5jbHVkZXMoZGlyZWN0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SG9yaXpvbnRhbE9mZnNldChzbmFrZSwgZm9vZCwgZm9yYmlkRGlyZWN0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBBSS5wcm90b3R5cGUuZ2V0TmVhcmVzdEZvb2QgPSBmdW5jdGlvbiAoc25ha2UpIHtcbiAgICAgICAgdmFyIGZvb2RzID0gdGhpcy5zY2VuZS5nZXRPYmplY3RzKCkuZmlsdGVyKGZ1bmN0aW9uIChvYmplY3QpIHsgcmV0dXJuIG9iamVjdCBpbnN0YW5jZW9mIEZvb2RfMS5kZWZhdWx0OyB9KTtcbiAgICAgICAgdmFyIGhlYWQgPSBzbmFrZS5nZXRIZWFkKCk7XG4gICAgICAgIHZhciBzb3J0ZWRGb29kcyA9IGZvb2RzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHZhciBkaXN0YW5jZUEgPSBNYXRoLmFicyhoZWFkLnggLSBhLngpICsgTWF0aC5hYnMoaGVhZC55IC0gYS55KTtcbiAgICAgICAgICAgIHZhciBkaXN0YW5jZUIgPSBNYXRoLmFicyhoZWFkLnggLSBiLngpICsgTWF0aC5hYnMoaGVhZC55IC0gYi55KTtcbiAgICAgICAgICAgIHJldHVybiBkaXN0YW5jZUEgLSBkaXN0YW5jZUI7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc29ydGVkRm9vZHNbMF07XG4gICAgfTtcbiAgICBBSS5wcm90b3R5cGUucHJvY2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBvYmplY3RzID0gdGhpcy5zY2VuZS5nZXRPYmplY3RzKCk7XG4gICAgICAgIG9iamVjdHMuZm9yRWFjaChmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAob2JqZWN0IGluc3RhbmNlb2YgRW5lbXlTbmFrZV8xLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5wcm9jY2Vzc0RpcmVjdGlvbihvYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEFJLnByb3RvdHlwZS5wcm9jY2Vzc0RpcmVjdGlvbiA9IGZ1bmN0aW9uIChlbmVteVNuYWtlKSB7XG4gICAgICAgIHZhciBkaXJlY3Rpb25zID0gRGlyZWN0aW9uXzEuZGVmYXVsdC5nZXREaXJlY3Rpb25zKCk7XG4gICAgICAgIHZhciBjaGVja2VkRGlyZWN0aW9ucyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpcmVjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBkaXJlY3Rpb24gPSB0aGlzLmdldERpcmVjdGlvbihlbmVteVNuYWtlLCBjaGVja2VkRGlyZWN0aW9ucyk7XG4gICAgICAgICAgICBpZiAodGhpcy5jYW5Nb3ZlKGVuZW15U25ha2UsIGRpcmVjdGlvbikpIHtcbiAgICAgICAgICAgICAgICBlbmVteVNuYWtlLmNoYW5nZURpcmVjdGlvbihkaXJlY3Rpb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hlY2tlZERpcmVjdGlvbnMucHVzaChkaXJlY3Rpb24pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBSS5wcm90b3R5cGUuY2FuTW92ZSA9IGZ1bmN0aW9uIChzbmFrZSwgZGlyZWN0aW9uKSB7XG4gICAgICAgIHZhciBzb3VyY2VEaXJlY3Rpb24gPSBzbmFrZS5nZXREaXJlY3Rpb24oKTtcbiAgICAgICAgc25ha2UuY2hhbmdlRGlyZWN0aW9uKGRpcmVjdGlvbik7XG4gICAgICAgIHNuYWtlLm1vdmUoKTtcbiAgICAgICAgdmFyIGNhbk1vdmUgPSB0cnVlO1xuICAgICAgICB2YXIgY29sbGlzaW9ucyA9IFtdO1xuICAgICAgICBpZiAoc25ha2UuaXNFYXRTZWxmKCkpIHtcbiAgICAgICAgICAgIGNhbk1vdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnBoaXN5Yy5jaGVja0JvdW5kYXJ5T3ZlcmZsb3coKSkge1xuICAgICAgICAgICAgY2FuTW92ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbGxpc2lvbnMgPSB0aGlzLnBoaXN5Yy5kZXRlY3RDb2xsaXNpb25zKCkpIHtcbiAgICAgICAgICAgIGlmIChjb2xsaXNpb25zLmZpbmQoZnVuY3Rpb24gKGNvbGxpc2lvbikgeyByZXR1cm4gY29sbGlzaW9uLnR5cGUgIT09ICdFQVQnOyB9KSkge1xuICAgICAgICAgICAgICAgIGNhbk1vdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzbmFrZS5jaGFuZ2VEaXJlY3Rpb24oc291cmNlRGlyZWN0aW9uKTtcbiAgICAgICAgc25ha2UucmV2ZXJ0TW92ZSgpO1xuICAgICAgICByZXR1cm4gY2FuTW92ZTtcbiAgICB9O1xuICAgIHJldHVybiBBSTtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBBSTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvY2xhc3Nlcy9BSS9BSS5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==