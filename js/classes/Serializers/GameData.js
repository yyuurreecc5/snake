"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gameData = {
    "fields": [
        {
            "width": 30,
            "height": 30,
            "entries": {
                "snakes": [
                    {
                        "size": 5,
                        "bodyColor": "red",
                        "headColor": "blue",
                        "direction": "left",
                        "position": {
                            "x": 11,
                            "y": 11
                        },
                        "type": "enemy"
                    },
                    {
                        "size": 5,
                        "bodyColor": "red",
                        "headColor": "white",
                        "direction": "down",
                        "position": {
                            "x": 29,
                            "y": 25
                        },
                        "type": "enemy"
                    },
                    {
                        "size": 5,
                        "bodyColor": "blue",
                        "headColor": "red",
                        "direction": "down",
                        "position": {
                            "x": 15,
                            "y": 15
                        },
                        "type": "player"
                    }
                ]
            },
            "eats": [
                {
                    "x": 29,
                    "y": 0
                },
                {
                    "x": 29,
                    "y": 29
                },
                {
                    "x": 4,
                    "y": 4
                }
            ]
        }
    ]
};
exports.default = gameData;
