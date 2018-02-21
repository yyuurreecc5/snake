import eDirection from "../enums/eDirection";
import Drawable from "../interfaces/iDrawable";

class Point implements Drawable {
    public x = 0;
    public y = 0;

    public static SIZE = 20; // Размер в пикселях минимальной точки в игре

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    move(direction: eDirection, offset: number = 1) {
        switch(direction) {
            case eDirection.RIGHT:
                this.x += offset;
                break;
            case eDirection.LEFT:
                this.x -= offset;
                break;
            case eDirection.UP:
                this.y -= offset;
                break;
            case eDirection.DOWN:
                this.y += offset;
                break;
        }
    }

    setNewPosition(newPosition: Point) {
        this.x = newPosition.x;
        this.y = newPosition.y;
    }

    isOverlap(point: Point) {
        if( this.x == point.x &&
            this.y == point.y )
        {
            return true;
        }
        return false;
    }

    isRightOf(point: Point) {
        if(this.x > point.x) {
            return true;
        }
        return false;
    }

    isSameHorizontal(point: Point) {
        if(this.x === point.x) {
            return true;
        }
        return false;
    }

    isSameVertical(point: Point) {
        if(this.y === point.y) {
            return true;
        }
        return false;
    }

    isLeftOf(point: Point) {
        if(this.x < point.x) {
            return true;
        }
        return false;
    }

    isUnder(point: Point) {
        if(this.y > point.y) {
            return true;
        }
        return false;
    }

    isAbove(point: Point) {
        if(this.y < point.y) {
            return true;
        }
        return false;
    }

    draw(ctx, type = 'fill') {
        if(type == 'fill') {
            ctx.fillRect(this.x * Point.SIZE, this.y * Point.SIZE, Point.SIZE, Point.SIZE);
        } else {
            ctx.strokeRect(this.x * Point.SIZE, this.y * Point.SIZE, Point.SIZE, Point.SIZE);
        }
    }
}

export default Point;