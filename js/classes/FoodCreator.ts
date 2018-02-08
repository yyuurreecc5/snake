import Food from "./Food";
import Field from "./Field";
import Snake from "./Snake";
import mathHelper from "../helpers/math-helper";

class FoodCreator {
    private maxWidth: number;
    private maxHeight: number;
    private snake: Snake;


    constructor(field: Field, snake: Snake) {
        this.maxWidth = field.width;
        this.maxHeight = field.height;
        this.snake = snake;
    }

    public create() {
        let newFood = null;
        while(!newFood) {
            newFood = this.tryCreate();
        }
        return newFood;
    }

    private tryCreate() {
        let newFood = new Food(
            mathHelper.getRandomInt(0, this.maxWidth - 1),
            mathHelper.getRandomInt(0, this.maxHeight - 1)
        );

        if(this.snake.isOverlap(newFood)) {
            return null;
        }
        return newFood;
    }
}

export default FoodCreator;