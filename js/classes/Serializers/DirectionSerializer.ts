import Direction from "../Direction";
import eDirection from "../../enums/eDirection";

class DirectionSerializer {
    static serialize(jsonDirection) {
        switch(jsonDirection) {
            case "left": return new Direction(eDirection.LEFT);
            case "right": return new Direction(eDirection.RIGHT);
            case "up": return new Direction(eDirection.UP);
            case "down": return new Direction(eDirection.DOWN);
            default: console.warn("incorrect direction value from json file"); break;
        }
    }
}

export default DirectionSerializer;