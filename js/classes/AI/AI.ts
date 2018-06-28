import Scene from "../Scene";
import EnemySnake from "../Snakes/EnemySnake";
import eDirection from "../../enums/eDirection";
import Food from "../Food";
import Physic from "../Physic/Phisyc";
import Direction from "../Direction";

class AI {
    private scene: Scene;
    private phisyc: Physic;
    constructor(scene: Scene) {
        this.scene = scene;
        this.phisyc = scene.getPhisyc();
    }

    private getVerticalOffset(snake, food, forbidDirections) {
        let head = snake.getHead();
        if(head.isUnder(food)) {
            if( !forbidDirections.includes(eDirection.UP )) {
                return eDirection.UP;
            }
            return eDirection.DOWN;
        } else {
            if( !forbidDirections.includes(eDirection.DOWN) ) {
                return eDirection.DOWN;
            }
            return eDirection.UP;
        }
    }

    private getHorizontalOffset(snake, food, forbidDirections) {
        let head = snake.getHead();
        if(head.isRightOf(food)) {
            if(!forbidDirections.includes(eDirection.LEFT)) {
                return eDirection.LEFT;
            }
            return eDirection.RIGHT;
        } else {
            if(!forbidDirections.includes(eDirection.RIGHT)) {
                return eDirection.RIGHT;
            }
            return eDirection.LEFT;
        }
    }

    private getDirection(snake, forbidDirections = []) {
        let head = snake.getHead();
        let direction = snake.getDirection();
        let food = this.getNearestFood(snake);

        switch(direction) {
            case eDirection.LEFT:
                if(head.isRightOf(food) && !forbidDirections.includes(direction)) {
                    return direction;
                } else {
                    return this.getVerticalOffset(snake, food, forbidDirections);
                }
            case eDirection.RIGHT:
                if(head.isLeftOf(food) && !forbidDirections.includes(direction)) {
                    return direction;
                } else {
                    return this.getVerticalOffset(snake, food, forbidDirections);
                }
            case eDirection.UP:
                if(head.isUnder(food) && !forbidDirections.includes(direction)) {
                    return direction;
                } else {
                    return this.getHorizontalOffset(snake, food, forbidDirections);
                }
            case eDirection.DOWN:
                if(head.isAbove(food) && !forbidDirections.includes(direction)) {
                    return direction;
                } else {
                    return this.getHorizontalOffset(snake, food, forbidDirections);
                }
        }
    }

    private getNearestFood(snake) {
        let foods = this.scene.getObjects().filter(object => object instanceof Food);
        let head = snake.getHead();
        let sortedFoods = foods.sort((a, b) => {
           let distanceA = Math.abs(head.x - a.x) + Math.abs(head.y - a.y);
           let distanceB = Math.abs(head.x - b.x) + Math.abs(head.y - b.y);
           return distanceA - distanceB;
        });

        return sortedFoods[0];
    }

    proccess() {
        let objects = this.scene.getObjects();
        objects.forEach((object) => {
            if(object instanceof EnemySnake) {
                this.proccessDirection(object);
            }
        })
    }

    proccessDirection(enemySnake: EnemySnake) {
        let directions = Direction.getDirections();
        let checkedDirections = [];
        for(let i = 0; i < directions.length; i++) {
            let direction = this.getDirection(enemySnake, checkedDirections);
            if(this.canMove(enemySnake, direction)) {
                enemySnake.changeDirection(direction);
                break;
            }
            checkedDirections.push(direction);
        }
    }

    canMove(snake, direction) {
        let sourceDirection = snake.getDirection();
        snake.changeDirection(direction);
        snake.move();

        let canMove = true;
        let collisions;
        if(snake.isEatSelf()) {
            canMove = false;
        } else if(this.phisyc.checkBoundaryOverflow()) {
            canMove = false;
        } else if(collisions = this.phisyc.detectCollisions()) {
            if(collisions.find(collision => collision.type !== 'EAT')) {
                canMove = false;
            }
        }
        snake.changeDirection(sourceDirection);
        snake.revertMove();
        return canMove;
    }
}

export default AI;