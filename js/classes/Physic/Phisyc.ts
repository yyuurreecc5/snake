import iUpdatable from "../../interfaces/iUpdatable";
import eObjectFlags from "../../enums/eObjectFlags";
import iObservable from "../../interfaces/iObservable";
import iObserver from "../../interfaces/iObserver";
import Point from "../Point";
import Snake from "../Snakes/Snake";

class Physic implements iObservable {
    private objects;
    private observers: iObserver[];
    constructor(objects: iUpdatable[]) {
        this.objects = objects;
        this.observers = [];
    }

    public addObserver(observer: iObserver) {
        this.observers.push(observer);
    }

    public removeObserver(observer: iObserver) {
        console.warn('Здесь удаляем наблюдателя, не реализовал тк не было надобности');
    }

    public notifyObservers(event) {
        this.observers.forEach((observer) => {
            observer.handleEvent(event);
        })
    }

    proccess() {
        let collisions = this.detectCollisions();
        if(collisions) {
            collisions.forEach((collision) => {
                this.notifyObservers(collision);
            })
        }

        let overflowed = this.checkBoundaryOverflow();
        if(overflowed) {
            this.notifyObservers({type: "BOUNDARY_OVERFLOW", data: overflowed})
        }
    }

    checkBoundaryOverflow() {
        return this.objects.find((object) => {
            if( object instanceof Snake) {
                return this.isOverflow(object)
            }
        })
    }

    isOverflow(object: Snake) {
        let head = object.getHead();
        if( head.x > object.field.width - 1 ||
            head.x < 0 ||
            head.y > object.field.height - 1 ||
            head.y < 0) {
            return true;
        }
        return false;
    }

    detectCollisions() {
        let collisions = [];
        this.objects.forEach((src, srcIndex) => {
            if(typeof src.getCoordinates !== "undefined") {
                this.objects.forEach((dest, destIndex) => {
                    if(srcIndex !== destIndex) {
                        if(typeof dest.getCoordinates !== "undefined") {
                            let srcCoordinates = src.getCoordinates();
                            let destCoordinates = dest.getCoordinates();
                            if (this.detectCollision(srcCoordinates, destCoordinates)) {
                                if( src.flags.includes(eObjectFlags.SOLID) &&
                                    dest.flags.includes(eObjectFlags.PICKUP) ) {
                                    collisions.push({type: "EAT", data: {src, dest} })
                                } else if( src.flags.includes(eObjectFlags.SOLID ) &&
                                    dest.flags.includes(eObjectFlags.SOLID ) ) {
                                    collisions.push({type: "SNAKE_COLLISION", data: {src, dest} })
                                }
                            }
                        }
                    } else {
                        if(src instanceof Snake) {
                            if(src.isEatSelf()) {
                                collisions.push({type: "SNAKE_COLLISION", data: {src, dest} });
                            }
                        }
                    }
                })
            }
        });

        if(collisions.length > 0) {
            return collisions;
        }
        return false;
    }

    detectCollision(src: Point[], dest: Point[]) {
        return src.some((srcPoint) => {
            return dest.some((destPoint) => {
                if(srcPoint.x === destPoint.x && srcPoint.y === destPoint.y) {
                    return true;
                }
                return false;
            })
        });
    }
}

export default Physic;