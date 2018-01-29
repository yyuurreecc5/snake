import Point from "./Point";
import eColor from "../enums/eColor";

class Food extends Point {
    constructor(x: number, y: number) {
        super(x, y);
    }

    draw(ctx) {
        ctx.fillStyle = eColor.YELLOW;
        super.draw(ctx);
    }
}

export default Food;