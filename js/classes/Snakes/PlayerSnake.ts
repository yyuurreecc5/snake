import Snake from "./Snake";
import eColor from "../../enums/eColor";
import KeyboardController from "../Controllers/KeyboardController";


class PlayerSnake extends Snake {
    private DEFAULT_BODY_COLOR: eColor;
    private DEFAULT_HEAD_COLOR: eColor;
    constructor(params) {
        super(params);
        this.DEFAULT_BODY_COLOR = eColor.BLUE;
        this.DEFAULT_HEAD_COLOR = eColor.RED;

        this.HEAD_COLOR = this.HEAD_COLOR || this.DEFAULT_HEAD_COLOR;
        this.BODY_COLOR = this.BODY_COLOR || this.DEFAULT_BODY_COLOR;
        this.controller = new KeyboardController();
        this.controller.addObserver(this);
    }
}

export default PlayerSnake;