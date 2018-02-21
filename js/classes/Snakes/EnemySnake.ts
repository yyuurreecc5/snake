import Snake from "./Snake";
import EnemyController from "../Controllers/EnemyController";
import EnemyLogic from "../AI/EnemyLogic";
import eColor from "../../enums/eColor";

class EnemySnake extends Snake {
    private DEFAULT_BODY_COLOR: eColor;
    private DEFAULT_HEAD_COLOR: eColor;

    constructor(params, food) {
        super(params);
        this.DEFAULT_BODY_COLOR = eColor.YELLOW;
        this.DEFAULT_HEAD_COLOR = eColor.WHITE;

        this.HEAD_COLOR = this.HEAD_COLOR || this.DEFAULT_HEAD_COLOR;
        this.BODY_COLOR = this.BODY_COLOR || this.DEFAULT_BODY_COLOR;
        console.log(food);
        this.controller = new EnemyController(new EnemyLogic(2, food, this));
        this.controller.addObserver(this);
    }
}

export default EnemySnake;