import Game  from "./classes/Game";

window.onload = () => {
    let game = new Game();
    game.init();
    game.start();
};