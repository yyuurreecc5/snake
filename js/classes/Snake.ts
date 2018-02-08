import Point from "./Point";
import eDirection from "../enums/eDirection";
import eColor from "../enums/eColor";
import Direction from "./Direction";
import Drawable from "../interfaces/iDrawable";
import Food from "./Food";

class Snake implements Drawable {
    private position;
    private direction;
    private body = [];
    private BODY_COLOR = eColor.BLUE;
    private HEAD_COLOR = eColor.RED;

    constructor(
        size: number = 5,
        direction: Direction = new Direction(eDirection.DOWN),
        position: Point = new Point(5, 5)
    ) {
        this.direction = direction;
        this.position = position;
        this.init(size);
    }

    init(size) {
        switch(this.direction.value) {
            case eDirection.LEFT:
                for(let i = 0; i < size; i++) {
                    this.body.push(new Point(this.position.x + i, this.position.y));
                }
                break;
            case eDirection.RIGHT:
                for(let i = 0; i < size; i++) {
                    this.body.push(new Point(this.position.x - i, this.position.y));
                }
                break;
            case eDirection.UP:
                for(let i = 0; i < size; i++) {
                    this.body.push(new Point(this.position.x, this.position.y + i));
                }
                break;
            case eDirection.DOWN:
                for(let i = 0; i < size; i++) {
                    this.body.push(new Point(this.position.x, this.position.y - i));
                }
                break;
            default:
                console.error('Ошибка инициализации змейки');
                break;
        }

        window.addEventListener('keydown', (event) => {
            event.preventDefault();
            switch(event.key) {
                case 'ArrowUp':
                    this.direction.setValue(eDirection.UP);
                    break;
                case 'ArrowDown':
                    this.direction.setValue(eDirection.DOWN);
                    break;
                case 'ArrowLeft':
                    this.direction.setValue(eDirection.LEFT);
                    break;
                case 'ArrowRight':
                    this.direction.setValue(eDirection.RIGHT);
                    break;
            }
        })
    }

    getHead() {
        return this.body[0] || null;
    }

    move() {
        this.position.move(this.direction.value);
        for(let i = this.body.length - 1; i > 0; i--) {
            this.body[i].setNewPosition(this.body[i - 1]);
        }
        this.body[0].move(this.direction.value);
    }

    eat(food: Food) {
        if(this.body[0].isOverlap(food)) {
            let oldPosition = this.body[this.body.length - 1];
            this.move();
            this.body.push(new Point(oldPosition.x, oldPosition.y));
            return true;
        }
        return false;
    }

    isEatSelf() {
        let head = this.body[0];
        for(let i = 1; i < this.body.length; i++) {
            if(head.isOverlap(this.body[i])) {
                return true;
            }
        }
        return false;
    }

    isOverlap(point: Point) {
        return this.body.some((bodyPoint) => {
            if(bodyPoint.isOverlap(point)) {
                return true;
            }
            return false;
        })
    }

    draw(ctx) {
        ctx.fillStyle = this.HEAD_COLOR;
        this.body.forEach((point) => {
            if( point.x != this.position.x ||
                point.y != this.position.y )
            {
                ctx.fillStyle = this.BODY_COLOR;
            }
            point.draw(ctx);
        })
    }
}

export default Snake;