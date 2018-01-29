import Drawable from "../interfaces/iDrawable";

class Screen {

    private canvas = null;
    private ctx = null;
    private toDrawObjects = [];

    constructor() {
        this.canvas = document.getElementById('canvas');
        this.canvas.width = 1000;
        this.canvas.height = 1000;
        this.ctx = this.canvas.getContext('2d');
    }

    addObject(drawable: Drawable) {
        this.toDrawObjects.push(drawable);
        console.log(this.toDrawObjects);
    }

    draw() {
        this.toDrawObjects.forEach((object) => {
            object.draw(this.ctx);
        })
    }
}

export default Screen;
