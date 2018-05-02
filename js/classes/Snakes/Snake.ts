import iDrawable from "../../interfaces/iDrawable";
import iObserver from "../../interfaces/iObserver";
import eDirection from "../../enums/eDirection";
import Point from "../Point";
import Controller from "../Controllers/Controller";
import Direction from "../Direction";
import eColor from "../../enums/eColor";
import iUpdatable from "../../interfaces/iUpdatable";
import eObjectFlags from "../../enums/eObjectFlags";
import Field from "../Field";

class Snake implements iDrawable, iObserver, iUpdatable {
    protected body : Point[] = [];
    protected position : Point = null;
    protected HEAD_COLOR: eColor;
    protected BODY_COLOR: eColor;

    protected controller : Controller = null;
    protected direction : Direction = null;
    public flags: eObjectFlags[];
    public field: Field;

    private isGrowing = false;
    private lastEvent = null;
    private prevStep = null;
    constructor(params) {
        this.flags = [eObjectFlags.SOLID];
        this.direction = params.direction;
        this.position = params.position;
        this.HEAD_COLOR = params.headColor ? params.headColor : null;
        this.BODY_COLOR = params.bodyColor ? params.bodyColor : null;
        this.field = params.field;
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
        this.lastEvent = event;
    }

    changeDirection(newDirection: eDirection) {

        if(this.direction.isOpposite(newDirection)) {
            return;
        }
        
        switch(newDirection) {
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
                //console.warn('Не обработанное событие в классе Snake');
        }
    }

    getHead() {
        return this.body[0] || null;
    }

    getCoordinates() {
        return this.body;
    }

    grow() {
        this.isGrowing = true;
    }

    savePrevStep() {
        this.prevStep = {
            position: new Point(this.position.x, this.position.y),
            body: []
        }
        for(let i = 0; i < this.body.length; i++) {
            this.prevStep.body.push(new Point(this.body[i].x, this.body[i].y));
        }
    }

    move() {
        this.savePrevStep();
        this.position.move(this.direction.value);
        for(let i = this.body.length - 1; i > 0; i--) {
            this.body[i].setNewPosition(this.body[i - 1]);
        }
        this.getHead().move(this.direction.value);
    }

    revertMove() {
        this.position = new Point(this.prevStep.position.x, this.prevStep.position.y);
        this.body = [];
        for(let i = 0; i < this.prevStep.body.length; i++) {
            this.body.push(new Point(this.prevStep.body[i].x, this.prevStep.body[i].y));
        }
    }

    update() {
        this.changeDirection(this.lastEvent);
        if(this.isGrowing) {
            let lastElement = Object.assign({}, this.body[this.body.length - 1]);
            this.body.push(new Point(lastElement.x, lastElement.y));
            this.isGrowing = false;
        }
        this.move();
    }

    getDirection() {
        return this.direction.value;
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