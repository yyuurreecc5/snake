import iDrawable from "../interfaces/iDrawable";

class Screen implements iDrawable{

    private canvas = null;
    private ctx = null;
    private toDrawObjects = [];

    constructor(objects) {
        this.canvas = document.getElementById('canvas');
        this.canvas.width = 1000;
        this.canvas.height = 1000;
        this.ctx = this.canvas.getContext('2d');
        this.toDrawObjects = objects;
    }

    draw() {
        this.toDrawObjects.forEach((object) => {
            object.draw(this.ctx);
        })
    }
}

export default Screen;
