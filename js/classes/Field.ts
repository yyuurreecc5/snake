import Point from './Point';
import eColor from "../enums/eColor";
import iDrawable from "../interfaces/iDrawable";
import iUpdatable from "../interfaces/iUpdatable";

class Field implements iDrawable, iUpdatable {

    public width = 0;
    public height = 0;
    public fields = [];

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.init();
    }

    private init() {
        for(let row_i = 0; row_i < this.width; row_i++) {
            this.fields[row_i] = [];
            for(let col_i = 0; col_i < this.height; col_i ++) {
                this.fields[row_i][col_i] = new Point(row_i, col_i);
            }
        }
    }

    isInBoundary(point: Point) {

        return point.x < this.width &&
            point.y < this.height &&
            point.x >= 0 &&
            point.y >= 0;

    }

    draw(ctx) {
        this.fields.forEach((row) => {
            row.forEach((field) => {
                ctx.strokeStyle = eColor.WHITE;
                field.draw(ctx, 'stroke');
                ctx.fillStyle = eColor.GREEN;
                field.draw(ctx);
            })
        })
    }

    update() {

    }
}

export default Field;