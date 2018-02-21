import Controller from "./Controller";
import EnemyLogic from "../AI/EnemyLogic";

class EnemyController extends Controller {
    private logic: EnemyLogic;
    constructor(logic: EnemyLogic) {
        super();
        this.logic = logic;
        setInterval(() => {
            this.notifyObservers(this.logic.getNextAction());
        }, 100);
    }
}

export default EnemyController;