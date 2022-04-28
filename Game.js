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
    static inputCount = 0;

    static createGrid() {
        Game.gameStatus = "Playing";
        //left panel
        Constants.leftGameObjects.push(new SquareGameObject(50, 80, 70, 70, 1));
        Constants.leftGameObjects.push(new SquareGameObject(130, 80, 70, 70, 2));
        Constants.leftGameObjects.push(new SquareGameObject(210, 80, 70, 70, 3));

        Constants.leftGameObjects.push(new SquareGameObject(50, 160, 70, 70, 4));
        Constants.leftGameObjects.push(new SquareGameObject(130, 160, 70, 70, 5));
        Constants.leftGameObjects.push(new SquareGameObject(210, 160, 70, 70, 6));

        Constants.leftGameObjects.push(new SquareGameObject(50, 240, 70, 70, 7));
        Constants.leftGameObjects.push(new SquareGameObject(130, 240, 70, 70, 8));
        Constants.leftGameObjects.push(new SquareGameObject(210, 240, 70, 70, 9));

        //right panel
        Constants.rightGameObjects.push(new SquareGameObject(320, 80, 70, 70, -1));
        Constants.rightGameObjects.push(new SquareGameObject(400, 80, 70, 70, -2));
        Constants.rightGameObjects.push(new SquareGameObject(480, 80, 70, 70, -3));

        Constants.rightGameObjects.push(new SquareGameObject(320, 160, 70, 70, -4));
        Constants.rightGameObjects.push(new SquareGameObject(400, 160, 70, 70, -5));
        Constants.rightGameObjects.push(new SquareGameObject(480, 160, 70, 70, -6));

        Constants.rightGameObjects.push(new SquareGameObject(320, 240, 70, 70, -7));
        Constants.rightGameObjects.push(new SquareGameObject(400, 240, 70, 70, -8));
        Constants.rightGameObjects.push(new SquareGameObject(480, 240, 70, 70, -9));

        //Circles
        let startX = 355;
        Constants.circleGameObjects.push(new CircleGameObject(startX, 50, 10, "Circle1"));
        Constants.circleGameObjects.push(new CircleGameObject(startX += 40, 50, 10, "Circle2"));
        Constants.circleGameObjects.push(new CircleGameObject(startX += 40, 50, 10, "Circle3"));
        Constants.circleGameObjects.push(new CircleGameObject(startX += 40, 50, 10, "Circle4"));
        Constants.circleGameObjects.push(new CircleGameObject(startX += 40, 50, 10, "Circle5"));

        //game sequence
        for (let i = 0; i < 1; i++) {
            Game.sequence.push(1);
            Game.sequence.push(1);
            Game.sequence.push(1);

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

    //show light up of buttons on right grid
    static updateRightPanel(ctx) {
        for (let gameObject of Constants.rightGameObjects) {
            gameObject.draw(ctx, "gray", "black");
        }
        if (Game.current != -1) {//the most recent user input
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

    //sequence animation of left grid
    static animateSequence(ctx) {
        //This function makes it go to sleep and it works
        let sleep = (milliseconds) => {
            return new Promise(resolve => setTimeout(resolve, milliseconds))
        }
        let doSomething = async () => {
            for (let s of Game.sequence) {
                for (let gameObject of Constants.leftGameObjects) {
                    if (s == gameObject.number) {
                        await sleep(1000);
                        gameObject.draw(ctx, "blue", "gray");
                        let play = Constants.clickSound.play();
                        await sleep(500);
                        gameObject.draw(ctx, "black", "gray");
                    }
                }
            }
        }
        doSomething();
    }

    static addInput() {
        for (let gameObject of Constants.rightGameObjects) {
            if (Input.inCollisionSquare(gameObject)) {
                Game.userInput.push(gameObject.number * -1);
            }
        }
        Game.current = Game.userInput[Game.inputCount];
        if (Game.current == Game.sequence[Game.inputCount]) {
            Constants.clickSound.play();
        } else {
            Constants.wrongSound.play();
            Game.gameStatus = "Lost";
        }
        Game.inputCount++;
        // console.log(Game.userInput);
    }

    //win/lost validation
    static checkInput() {
        let count = 0;
        for (let i = 0; i < Game.userInput.length; i++) {
            if (Game.userInput[i] == Game.sequence[i]) {
                count++;
                if (count == Game.level) {
                    Game.gameStatus = "Won";
                    Constants.levelPassedSound.play();
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