import Snake from "../Snake";

class SnakesCollisionDetector {
    private snake: Snake;
    private snakes: Snake[];

    constructor(snake: Snake, snakes: Snake[]) {
        this.snake = snake;
        this.snakes = snakes;
    }

    check() {
        if( !this.snakes.length ) {
            return false;
        }
        return this.snakes.some((snake) => {
            return snake.isOverlap(this.snake.getHead());
        });
    }
}

export default SnakesCollisionDetector;