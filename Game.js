import Constants from "./Constants.js";
import SquareGameObject from "./SquareGameObject.js";

class Game {
    static level = 1;
    static sequence = [];
    static userInput = [];

    static createGrid() {
        //left panel
        Constants.leftGameObjects.push(new SquareGameObject(10, 10, 200, 200, 1));
        Constants.leftGameObjects.push(new SquareGameObject(220, 10, 200, 200, 2));
        Constants.leftGameObjects.push(new SquareGameObject(430, 10, 200, 200, 3));

        Constants.leftGameObjects.push(new SquareGameObject(10, 220, 200, 200, 4));
        Constants.leftGameObjects.push(new SquareGameObject(220, 220, 200, 200, 5));
        Constants.leftGameObjects.push(new SquareGameObject(430, 220, 200, 200, 6));

        Constants.leftGameObjects.push(new SquareGameObject(10, 430, 200, 200, 7));
        Constants.leftGameObjects.push(new SquareGameObject(220, 430, 200, 200, 8));
        Constants.leftGameObjects.push(new SquareGameObject(430, 430, 200, 200, 9));

        //right panel
        Constants.rightGameObjects.push(new SquareGameObject(810, 10, 200, 200, -1));
        Constants.rightGameObjects.push(new SquareGameObject(1020, 10, 200, 200, -2));
        Constants.rightGameObjects.push(new SquareGameObject(1230, 10, 200, 200, -3));

        Constants.rightGameObjects.push(new SquareGameObject(810, 220, 200, 200, -4));
        Constants.rightGameObjects.push(new SquareGameObject(1020, 220, 200, 200, -5));
        Constants.rightGameObjects.push(new SquareGameObject(1230, 220, 200, 200, -6));

        Constants.rightGameObjects.push(new SquareGameObject(810, 430, 200, 200, -7));
        Constants.rightGameObjects.push(new SquareGameObject(1020, 430, 200, 200, -8));
        Constants.rightGameObjects.push(new SquareGameObject(1230, 430, 200, 200, -9));
    }
    static update(ctx) {
        for (let gameObject of Constants.rightGameObjects) {
            gameObject.draw(ctx, "gray", "black");
        }
        for (let gameObject of Constants.leftGameObjects) {
            gameObject.draw(ctx, "black", "gray");
        }
    }

    static updateRightPanel(ctx) {
        for (let gameObject of Constants.rightGameObjects) {
            gameObject.update(ctx);
        }
    }

    //seqeunce happeneing too fast, doesn't show on screen
    static animateSequence(ctx) {

        for (let s of Game.sequence) {
            for (let gameObject of Constants.leftGameObjects) {
                if (s == gameObject.number) {
                    setTimeout(gameObject.draw(ctx, "blue", "gray"), 1000);
                    setTimeout(gameObject.draw(ctx, "black", "gray"), 4000);
                }
            }
        }
    }

}

export default Game;