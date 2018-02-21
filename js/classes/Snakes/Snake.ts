import iDrawable from "../../interfaces/iDrawable";
import iObserver from "../../interfaces/iObserver";
import eDirection from "../../enums/eDirection";
import Point from "../Point";
import Controller from "../Controllers/Controller";
import Direction from "../Direction";
import Food from "../Food";
import eColor from "../../enums/eColor";

class Snake implements iDrawable, iObserver {
    protected body : Point[] = [];
    protected position : Point = null;
    protected HEAD_COLOR: eColor;
    protected BODY_COLOR: eColor;

    protected controller : Controller = null;
    protected direction : Direction = null;

    constructor(params) {
        this.direction = params.direction;
        this.position = params.position;
        this.HEAD_COLOR = params.headColor ? params.headColor : null;
        this.BODY_COLOR = params.bodyColor ? params.bodyColor : null;
        this.init(params.size);
    }

    init(size) {
        switch (this.direction.value) {
            case eDirection.LEFT:
                for (let i = 0; i < size; i++) {
                    this.body.push(new Point(this.position.x + i, this.position.y));
                }
                break;
            case eDirection.RIGHT:
                for (let i = 0; i < size; i++) {
                    this.body.push(new Point(this.position.x - i, this.position.y));
                }
                break;
            case eDirection.UP:
                for (let i = 0; i < size; i++) {
                    this.body.push(new Point(this.position.x, this.position.y + i));
                }
                break;
            case eDirection.DOWN:
                for (let i = 0; i < size; i++) {
                    this.body.push(new Point(this.position.x, this.position.y - i));
                }
                break;
            default:
                console.error('Ошибка инициализации змейки');
                break;
        }
    }

    handleEvent(event: eDirection) {
        switch(event) {
            case eDirection.UP:
                this.direction.value = eDirection.UP;
                break;
            case eDirection.DOWN:
                this.direction.value = eDirection.DOWN;
                break;
            case eDirection.LEFT:
                this.direction.value = eDirection.LEFT;
                break;
            case eDirection.RIGHT:
                this.direction.value = eDirection.RIGHT;
                break;
            default:
                console.warn('Не обработанное событие в классе Snake');
        }
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

    getDirection() {
        return this.direction.value;
    }

    eat(food: Food) {
        if(this.getHead().isOverlap(food)) {
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