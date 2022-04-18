import CircleGameObject from "./CircleGameObject.js";
import Constants from "./Constants.js";
import Input from "./Input.js";
import SquareGameObject from "./SquareGameObject.js";

class Game {
    static level = 1;
    static sequence = [];
    static userInput = [];

    static createGrid() {
        //left panel
        Constants.leftGameObjects.push(new SquareGameObject(10, 100, 200, 200, 1));
        Constants.leftGameObjects.push(new SquareGameObject(220, 100, 200, 200, 2));
        Constants.leftGameObjects.push(new SquareGameObject(430, 100, 200, 200, 3));

        Constants.leftGameObjects.push(new SquareGameObject(10, 310, 200, 200, 4));
        Constants.leftGameObjects.push(new SquareGameObject(220, 310, 200, 200, 5));
        Constants.leftGameObjects.push(new SquareGameObject(430, 310, 200, 200, 6));

        Constants.leftGameObjects.push(new SquareGameObject(10, 520, 200, 200, 7));
        Constants.leftGameObjects.push(new SquareGameObject(220, 520, 200, 200, 8));
        Constants.leftGameObjects.push(new SquareGameObject(430, 520, 200, 200, 9));

        //right panel
        Constants.rightGameObjects.push(new SquareGameObject(810, 100, 200, 200, -1));
        Constants.rightGameObjects.push(new SquareGameObject(1020, 100, 200, 200, -2));
        Constants.rightGameObjects.push(new SquareGameObject(1230, 100, 200, 200, -3));

        Constants.rightGameObjects.push(new SquareGameObject(810, 310, 200, 200, -4));
        Constants.rightGameObjects.push(new SquareGameObject(1020, 310, 200, 200, -5));
        Constants.rightGameObjects.push(new SquareGameObject(1230, 310, 200, 200, -6));

        Constants.rightGameObjects.push(new SquareGameObject(810, 520, 200, 200, -7));
        Constants.rightGameObjects.push(new SquareGameObject(1020, 520, 200, 200, -8));
        Constants.rightGameObjects.push(new SquareGameObject(1230, 520, 200, 200, -9));

        //Circles
        let startX = 910;
        Constants.circleGameObjects.push(new CircleGameObject(startX, 50, 30, "Circle1"));
        Constants.circleGameObjects.push(new CircleGameObject(startX += 100, 50, 30, "Circle2"));
        Constants.circleGameObjects.push(new CircleGameObject(startX += 100, 50, 30, "Circle3"));
        Constants.circleGameObjects.push(new CircleGameObject(startX += 100, 50, 30, "Circle4"));
        Constants.circleGameObjects.push(new CircleGameObject(startX += 100, 50, 30, "Circle5"));
    }
    static draw(ctx) {
        for (let gameObject of Constants.rightGameObjects) {
            gameObject.draw(ctx, "gray", "black");
        }
        for (let gameObject of Constants.leftGameObjects) {
            gameObject.draw(ctx, "black", "gray");
        }
        for (let gameObject of Constants.circleGameObjects) {
            gameObject.draw(ctx, "white", "black");
        }

    }

    static updateRightPanel(ctx) {
        for (let gameObject of Constants.rightGameObjects) {
            gameObject.update(ctx);
        }
    }

    //just to show that circle update works
    static updateCircle(ctx) {
        for (let gameObject of Constants.circleGameObjects) {
            if (Input.inCollisionHover(gameObject, ctx)) {
                gameObject.update(ctx);
            }else {
                gameObject.draw(ctx, "white", "black");
            }
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