import Controller from "./Controller";
import eDirection from "../../enums/eDirection";

class KeyboardController extends Controller {
    constructor() {
        super();
        window.addEventListener('keydown', (event) => {
            event.preventDefault();
            switch(event.key) {
                case 'ArrowUp':
                    this.notifyObservers(eDirection.UP);
                    break;
                case 'ArrowDown':
                    this.notifyObservers(eDirection.DOWN);
                    break;
                case 'ArrowLeft':
                    this.notifyObservers(eDirection.LEFT);
                    break;
                case 'ArrowRight':
                    this.notifyObservers(eDirection.RIGHT);
                    break;
            }
        })
    }
}

export default KeyboardController;