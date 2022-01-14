import Scene from "./Scene";
import eGameState from "../enums/eGameState";

class Game {
    private gameSpeed: number;
    private scene : Scene;
    private timer;
    public state: eGameState;
    constructor() {
        this.gameSpeed = 100;
        this.scene = new Scene(this);
        this.timer = 0;
    }

    init() {
        this.scene.update();
        this.state = eGameState.PAUSE;
        document.addEventListener('keydown', (e) => {
            if(this.state === eGameState.PAUSE) {
                this.run();
            }
        })
    }

    run() {
        this.state = eGameState.PLAY;
        this.timer = setInterval(this.scene.update.bind(this.scene), this.gameSpeed);
    }

    gameOver() {
        clearInterval(this.timer);
        this.state = eGameState.GAME_OVER;
    }
}

export default Game;

