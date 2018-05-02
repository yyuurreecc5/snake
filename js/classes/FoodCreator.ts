import Food from "./Food";
import Field from "./Field";
import Snake from "./Snakes/Snake";
import mathHelper from "../helpers/math-helper";

class FoodCreator {
    private maxWidth: number;
    private maxHeight: number;
    private field: Field;

    constructor(field: Field) {
        this.maxWidth = field.width;
        this.maxHeight = field.height;
        this.field = field;
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
            mathHelper.getRandomInt(0, this.maxHeight - 1),
            this.field
        );

        return newFood;
    }
}

export default FoodCreator;