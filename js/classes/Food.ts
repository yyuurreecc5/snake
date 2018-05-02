import Point from "./Point";
import eColor from "../enums/eColor";
import iUpdatable from "../interfaces/iUpdatable";
import eObjectFlags from "../enums/eObjectFlags";
import Field from "./Field";

class Food extends Point implements iUpdatable {
    public flags: eObjectFlags[];
    public field: Field;
    constructor(x: number, y: number, field: Field) {
        super(x, y);
        this.field = field;
        this.flags = [eObjectFlags.PICKUP];
    }

    draw(ctx) {
        ctx.fillStyle = eColor.YELLOW;
        super.draw(ctx);
    }

    getCoordinates() {
        return [this];
    }

    update() {
        //console.log("food update");
    }
}

export default Food;