import ObjectFactory from "./Serializers/GameObjectsSerializer";
import gameData from "./Serializers/GameData";
import Screen from "./Screen";
import Physic from "./Physic/Phisyc";
import iObserver from "../interfaces/iObserver";
import FoodCreator from "./FoodCreator";
import AI from "./AI/AI";
import Game from "./Game";
import eGameState from '../enums/eGameState';

class Scene implements iObserver{
    private objectFactory : ObjectFactory;
    private objects;
    private screen: Screen;
    private physic: Physic;
    private ai: AI;
    private game: Game;
    private lastPhisycEvent;
    constructor(game: Game) {
        this.objectFactory = new ObjectFactory(gameData);
        this.objects = this.objectFactory.createAll();
        this.screen = new Screen(this.objects);
        this.physic = new Physic(this.objects);
        this.physic.addObserver(this);
        this.ai = new AI(this);
        this.game = game;
    }

    getObjects() {
        return this.objects;
    }

    getPhisyc() {
        return this.physic;
    }

    getAI() {
        return this.ai;
    }

    update() {
        this.objects.forEach((object) => {
            object.update();
        })
        this.ai.proccess();
        this.physic.proccess();
        if(this.lastPhisycEvent) {
            this.respondPhisycEvent(this.lastPhisycEvent);
        }
        if(this.game.state !== eGameState.GAME_OVER) {
            this.screen.draw();
        }
    }

    addObject(object) {
        this.objects.push(object);
    }

    handleEvent(event) {
        this.lastPhisycEvent = event;
    }

    respondPhisycEvent(event) {
        switch(event.type) {
            case "SNAKE_COLLISION":
                this.game.gameOver();
                break;
            case "EAT":
                this.removeObject(event.data.dest);
                let foodCreator = new FoodCreator(event.data.dest.field);
                this.addObject(foodCreator.create());
                event.data.src.grow();
                break;
            case "EAT_SELF":
                this.game.gameOver();
                break;
            case "BOUNDARY_OVERFLOW":
                this.game.gameOver();
                break;
            default: console.log("unhandle event: ", event);
        }
        this.lastPhisycEvent = null;
    }

    removeObject(removableObject) {
        this.objects.some((object, index) => {
            if(object === removableObject) {
                this.objects.splice(index, 1);
            }
        })
    }
}

export default Scene;