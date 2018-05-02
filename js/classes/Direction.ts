import eDirection from "../enums/eDirection";
import MathHelper from "../helpers/math-helper";

class Direction {
    public value;

    constructor(value: eDirection) {
        this.value = value;
    }

    public static getRandom() {
        return MathHelper.getRandomInt(0, 4);
    }

    public static getDirections() {
        let directions = [];
        for(let i = 0; i !== eDirection.LAST; i++) {
            directions.push(i);
        }
        return directions;
    }

    public isOpposite(direction: eDirection) {
        if(Math.abs(this.value - direction ) == 2) {
            return true;
        }

        return false;
    }

    setValue(newDirection: eDirection) {
        if( this.value == newDirection ) {
            return false;
        }
        if( this.isOpposite(newDirection) ) {
            return false;
        }
        this.value = newDirection;
        return true;
    }
}

export default Direction;