import eColor from "../../enums/eColor";


class ColorSerializer {
    static serialize(jsonColor) {
        switch(jsonColor) {
            case "blue": return eColor.BLUE;
            case "red": return eColor.RED;
            case "green": return eColor.GREEN;
            case "yellow": return eColor.YELLOW;
            case "white": return eColor.WHITE;
        }
    }
}

export default ColorSerializer;