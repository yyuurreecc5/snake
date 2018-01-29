import Food from "./Food";
import Field from "./Field";

class FoodCreator {
    private maxWidth;
    private maxHeight;

    constructor(field: Field) {
        this.maxWidth = field.width;
        this.maxHeight = field.height;
        console.log('field size');
        console.log(this.maxWidth);
    }

    private rand(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    public create() {
        return new Food(this.rand(0, this.maxWidth - 1), this.rand(0, this.maxHeight - 1));
    }
}

export default FoodCreator;