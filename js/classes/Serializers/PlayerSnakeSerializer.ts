import Point from "../Point";
import ColorFactory from "./ColorSerializer";
import DirectionFactory from "./DirectionSerializer";
import PlayerSnake from "../Snakes/PlayerSnake";

class PlayerSnakeFactory {
    static create(json, field) {
        let direction = DirectionFactory.serialize(json.direction);
        let position = new Point(json.position.x, json.position.y);
        let bodyColor = ColorFactory.serialize(json.bodyColor);
        let headColor = ColorFactory.serialize(json.headColor);
        let size = json.size;
        return new PlayerSnake({
            direction,
            position,
            bodyColor,
            headColor,
            size,
            field
        });
    }
}

export default PlayerSnakeFactory;