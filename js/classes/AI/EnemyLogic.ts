import eDirection from "../../enums/eDirection";
import Food from "../Food";
import Snake from "../Snakes/Snake";

class EnemyLogic {
    private level: number;
    private directions: eDirection[];
    private lastActionIndex = 0;
    private food: Food = null;
    private snake: Snake = null;

    constructor(level: number, food: Food, snake: Snake) {
        this.level = level;
        this.food = food;
        console.log(this.food);
        this.snake = snake;
        this.directions = [eDirection.LEFT, eDirection.UP, eDirection.RIGHT, eDirection.DOWN];
    }

    private getVerticalOffset() {
        let head = this.snake.getHead();
        if(head.isUnder(this.food)) {
            console.log('head is under');
            console.log(head);
            console.log(this.food);
            return eDirection.UP;
        } else {
            return eDirection.DOWN;
        }
    }

    private getHorizontalOffset() {
        let head = this.snake.getHead();
        if(head.isRightOf(this.food)) {
            console.log('head right of food go left');
            console.log(head);
            console.log(this.food);
            return eDirection.LEFT;
        } else  {
            return eDirection.RIGHT;
        }
    }

    getNextAction() {
        // this.lastActionIndex = (++this.lastActionIndex) % this.directions.length;
        let head = this.snake.getHead();
        let direction = this.snake.getDirection();

        switch(direction) {
            case eDirection.LEFT:
                if(head.isRightOf(this.food)) {
                    return direction;
                } else {
                    return this.getVerticalOffset();
                }
            case eDirection.RIGHT:
                if(head.isLeftOf(this.food)) {
                    return direction;
                } else {
                    return this.getVerticalOffset();
                }
            case eDirection.UP:
                if(head.isUnder(this.food)) {
                    return direction;
                } else {
                    return this.getHorizontalOffset();
                }
            case eDirection.DOWN:
                if(head.isAbove(this.food)) {
                    return direction;
                } else {
                    this.getHorizontalOffset();
                }
        }

        return this.directions[this.lastActionIndex];
    }
}

export default EnemyLogic;