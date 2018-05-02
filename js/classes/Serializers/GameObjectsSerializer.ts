import Field from "../Field";
import PlayerSnakeFactory from "./PlayerSnakeSerializer";
import Food from "../Food";
import EnemySnakeFactory from "./EnemySnakeSerializer";

class ObjectFactory {
    private gameData;
    private objects;
    constructor(gameData) {
        this.gameData = gameData;
        this.objects = [];
    }

    createAll() {
        this.gameData.fields.forEach((fieldJSON) => {
            let field = new Field(fieldJSON.width, fieldJSON.height);
            this.objects.push(field);
            let snakes = fieldJSON.entries.snakes;
            snakes.forEach((snake) => {
                if(snake.type === "player") {
                    this.objects.push(PlayerSnakeFactory.create(snake, field));
                } else if(snake.type === "enemy") {
                    this.objects.push(EnemySnakeFactory.create(snake, field));
                }
            })

            let eats = fieldJSON.eats;
            eats.forEach((eat) => {
                this.objects.push(new Food(eat.x, eat.y, field));
            })
        })
        return this.objects;
    }
}

export default ObjectFactory;