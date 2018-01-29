import Screen from './Screen';
import Field from './Field';
import Snake from './Snake';
import FoodCreator from "./FoodCreator";

class Game {
    private screen = null;
    private field = null;
    private snake = null;
    private speed = 100;
    private food = null;
    private foodCreator = null;

    constructor() {
        this.screen = new Screen();
        this.field = new Field(20, 20);
        this.snake = new Snake();
        this.foodCreator = new FoodCreator(this.field);
        this.food = this.foodCreator.create();
    }

    init() {
        this.screen.addObject(this.field);
        this.screen.addObject(this.snake);
        this.screen.addObject(this.food);
    }

    start() {
        setInterval(this.mainLoop.bind(this), this.speed);
    }

    mainLoop() {
        if( this.snake.isEatSelf() ) {
            return;
        }
        if( this.snake.eat(this.food) ) {
            this.food.setNewPosition(this.foodCreator.create());
        } else {
            this.snake.move();
        }
        if( !this.field.isInBoundary(this.snake.body[0]) ) {
            return;
        }
        this.screen.draw();
    }
}

export default Game;

