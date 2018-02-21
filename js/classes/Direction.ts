import eDirection from "../enums/eDirection";

class Direction {
    public value;

    constructor(value: eDirection) {
        this.value = value;
    }

    private isOpposite(direction: eDirection) {
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