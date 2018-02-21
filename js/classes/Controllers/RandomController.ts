import mathHelper from "../../helpers/math-helper";
import Controller from "./Controller";

class RandomController extends Controller {
    private events = ["LEFT", "UP", "RIGHT", "DOWN"];
    constructor() {
        super();
        setInterval(this.generateEvent.bind(this), 500);
    }

    private generateEvent() {
        let event = this.events[mathHelper.getRandomInt(0, this.events.length -1)];
        this.notifyObservers(event);
    }
}

export default RandomController;