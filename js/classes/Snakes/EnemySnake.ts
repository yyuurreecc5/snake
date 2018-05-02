import Snake from "./Snake";
import eColor from "../../enums/eColor";

class EnemySnake extends Snake {
    private DEFAULT_BODY_COLOR: eColor;
    private DEFAULT_HEAD_COLOR: eColor;

    constructor(params) {
        super(params);
        this.DEFAULT_BODY_COLOR = eColor.YELLOW;
        this.DEFAULT_HEAD_COLOR = eColor.WHITE;

        this.HEAD_COLOR = this.HEAD_COLOR || this.DEFAULT_HEAD_COLOR;
        this.BODY_COLOR = this.BODY_COLOR || this.DEFAULT_BODY_COLOR;
    }
}

export default EnemySnake;