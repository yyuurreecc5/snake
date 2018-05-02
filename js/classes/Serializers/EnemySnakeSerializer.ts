import Point from "../Point";
import EnemySnake from "../Snakes/EnemySnake";
import ColorSerializer from "./ColorSerializer";
import DirectionSerializer from "./DirectionSerializer";

class EnemySnakeFactory {
    static create(json, field) {
        let direction = DirectionSerializer.serialize(json.direction);
        let position = new Point(json.position.x, json.position.y);
        let bodyColor = ColorSerializer.serialize(json.bodyColor);
        let headColor = ColorSerializer.serialize(json.headColor);
        let size = json.size;
        return new EnemySnake({
            direction,
            position,
            bodyColor,
            headColor,
            size,
            field
        });
    }
}

export default EnemySnakeFactory;