import Screen from './Screen';
import Field from './Field';
import FoodCreator from "./FoodCreator";
import eDirection from "../enums/eDirection";
import Direction from "./Direction";
import Point from "./Point";
import SnakesCollisionDetector from "./CollisionDetectors/SnakesCollisionDetector";
import PlayerSnake from "./Snakes/PlayerSnake";
import EnemySnake from "./Snakes/EnemySnake";

class Game {
    private screen = null;
    private field = null;
    private playerSnake = null;
    private enemySnake = null;
    private speed = 100;
    private food = null;
    private foodCreator = null;
    private snakesCollisionDetector = null;

    constructor() {
        this.screen = new Screen();
        this.field = new Field(30, 30);
        let playerSnakeParams = {
            direction: null,
            position: null,
            size: null
        };
        playerSnakeParams.direction = new Direction(eDirection.RIGHT);
        playerSnakeParams.position = new Point(5, 5);
        playerSnakeParams.size = 5;
        this.playerSnake = new PlayerSnake(playerSnakeParams);

        this.foodCreator = new FoodCreator(this.field, this.playerSnake);
        this.food = this.foodCreator.create();

        let enemySnakeParams = {
          direction: null,
          position: null,
          size: null
        };

        enemySnakeParams.direction = new Direction(eDirection.LEFT);
        enemySnakeParams.position = new Point(10, 10);
        enemySnakeParams.size = 5;
        this.enemySnake = new EnemySnake(enemySnakeParams, this.food);


        this.snakesCollisionDetector = new SnakesCollisionDetector(this.playerSnake, [this.enemySnake]);
    }

    init() {
        this.screen.addObject(this.field);
        this.screen.addObject(this.playerSnake);
        this.screen.addObject(this.enemySnake);
        this.screen.addObject(this.food);
    }

    start() {
        setInterval(this.mainLoop.bind(this), this.speed);
    }

    mainLoop() {
        if( this.playerSnake.isEatSelf() ) {
            return;
        }

        if(this.snakesCollisionDetector.check()) {
            return;
        }

        if( this.playerSnake.eat(this.food) || this.enemySnake.eat(this.food)) {
            this.food.setNewPosition(this.foodCreator.create());
        } else {
            this.playerSnake.move();
            this.enemySnake.move();
        }
        if( !this.field.isInBoundary(this.playerSnake.getHead()) ) {
            return;
        }
        this.screen.draw();
    }
}

export default Game;

