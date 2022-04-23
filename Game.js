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
        Constants.leftGameObjects.push(new SquareGameObject(50, 200, 200, 200, 1));
        Constants.leftGameObjects.push(new SquareGameObject(260, 200, 200, 200, 2));
        Constants.leftGameObjects.push(new SquareGameObject(470, 200, 200, 200, 3));

        Constants.leftGameObjects.push(new SquareGameObject(50, 410, 200, 200, 4));
        Constants.leftGameObjects.push(new SquareGameObject(260, 410, 200, 200, 5));
        Constants.leftGameObjects.push(new SquareGameObject(470, 410, 200, 200, 6));

        Constants.leftGameObjects.push(new SquareGameObject(50, 620, 200, 200, 7));
        Constants.leftGameObjects.push(new SquareGameObject(260, 620, 200, 200, 8));
        Constants.leftGameObjects.push(new SquareGameObject(470, 620, 200, 200, 9));

        //right panel
        Constants.rightGameObjects.push(new SquareGameObject(850, 200, 200, 200, -1));
        Constants.rightGameObjects.push(new SquareGameObject(1060, 200, 200, 200, -2));
        Constants.rightGameObjects.push(new SquareGameObject(1270, 200, 200, 200, -3));

        Constants.rightGameObjects.push(new SquareGameObject(850, 410, 200, 200, -4));
        Constants.rightGameObjects.push(new SquareGameObject(1060, 410, 200, 200, -5));
        Constants.rightGameObjects.push(new SquareGameObject(1270, 410, 200, 200, -6));

        Constants.rightGameObjects.push(new SquareGameObject(850, 620, 200, 200, -7));
        Constants.rightGameObjects.push(new SquareGameObject(1060, 620, 200, 200, -8));
        Constants.rightGameObjects.push(new SquareGameObject(1270, 620, 200, 200, -9));

        //Circles
        let startX = 950;
        Constants.circleGameObjects.push(new CircleGameObject(startX, 150, 30, "Circle1"));
        Constants.circleGameObjects.push(new CircleGameObject(startX += 105, 150, 30, "Circle2"));
        Constants.circleGameObjects.push(new CircleGameObject(startX += 105, 150, 30, "Circle3"));
        Constants.circleGameObjects.push(new CircleGameObject(startX += 105, 150, 30, "Circle4"));
        Constants.circleGameObjects.push(new CircleGameObject(startX += 105, 150, 30, "Circle5"));

        //game sequence
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
        let doSomething = async() => {
            for (let s of Game.sequence) {
                for (let gameObject of Constants.leftGameObjects) {
                    if (s == gameObject.number) {
                        await sleep(1000);
                        gameObject.draw(ctx, "blue", "gray");
                        Constants.clickSound.play();
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
        }else {
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