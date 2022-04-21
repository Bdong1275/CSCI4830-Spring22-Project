import CircleGameObject from "./CircleGameObject.js";
import Constants from "./Constants.js";
import Input from "./Input.js";
import SquareGameObject from "./SquareGameObject.js";

class Game {
    static level = 3;
    static sequence = [];
    static userInput = [];
    static gameStatus = "Idle";
    static current = -1;

    static createGrid() {
        Game.gameStatus = "Playing";
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

        for (let i = 0; i < 1; i++) {
            Game.sequence.push(1);
            Game.sequence.push(2);
            Game.sequence.push(3);

        }
    }
    static draw(ctx) {
        //initial board
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
            gameObject.draw(ctx, "gray", "black");
        }
        if (Game.current != -1) {
            let temp = Constants.rightGameObjects.find(object => object.number == (Game.current * -1));
            temp.update(ctx);

        }

    }

    //just to show that circle update works
    static updateCircle(ctx) {
        for (let gameObject of Constants.circleGameObjects) {
            if (Input.inCollisionHover(gameObject)) {
                gameObject.update(ctx);
            } else {
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

    static addInput() {
        for (let gameObject of Constants.rightGameObjects) {
            if (Input.inCollisionSquare(gameObject)) {
                Game.userInput.push(gameObject.number * -1);
            }
        }
        Game.current = Game.userInput[Game.userInput.length - 1];
        console.log(Game.userInput);
    }

    static checkInput() {
        let count = 0;
        for (let i = 0; i < Game.userInput.length; i++) {
            if (Game.userInput[i] == Game.sequence[i]) {
                count++;
                if (count == Game.level) {
                    Game.gameStatus = "Won";
                }
            } else {
                Game.gameStatus = "Lost";
            }
        }
    }

    static showMessage(ctx) {
        ctx.fillStyle = "green";
        ctx.font = "300px Arial"
        ctx.fillText("You " + Game.gameStatus, 200, 500);
    }

}

export default Game;