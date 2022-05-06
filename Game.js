import CircleGameObject from "./CircleGameObject.js";
import Constants from "./Constants.js";
import Input from "./Input.js";
import SquareGameObject from "./SquareGameObject.js";

class Game {
    static level = 1;
    static sequence = [];
    static userInput = [];
    static currentSequence = [];
    static gameStatus = "Idle";
    static current = -1;
    static inputCount = 0;

    static createGrid() {
        Game.gameStatus = "Play Sequence";
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
        let startX = 80;
        Constants.circleGameObjects.push(new CircleGameObject(startX, 50, 10, "1"));
        Constants.circleGameObjects.push(new CircleGameObject(startX += 50, 50, 10, "2"));
        Constants.circleGameObjects.push(new CircleGameObject(startX += 50, 50, 10, "3"));
        Constants.circleGameObjects.push(new CircleGameObject(startX += 50, 50, 10, "4"));
        Constants.circleGameObjects.push(new CircleGameObject(startX += 50, 50, 10, "5"));
        Constants.circleGameObjects.push(new CircleGameObject(startX += 50, 50, 10, "6"));
        Constants.circleGameObjects.push(new CircleGameObject(startX += 50, 50, 10, "7"));
        Constants.circleGameObjects.push(new CircleGameObject(startX += 50, 50, 10, "8"));
        Constants.circleGameObjects.push(new CircleGameObject(startX += 50, 50, 10, "9"));
        Constants.circleGameObjects.push(new CircleGameObject(startX += 50, 50, 10, "10"));

        //game sequence
        Game.sequence.push("1");
        Game.sequence.push("2");
        Game.sequence.push("3");
        Game.sequence.push("4");
        Game.sequence.push("5");
        Game.sequence.push("6");
        Game.sequence.push("7");
        Game.sequence.push("8");
        Game.sequence.push("9");
        Game.sequence.push("1");
        Game.sequence.push("6:1");
        Game.sequence.push("9:2");
        Game.sequence.push("3:2");
        Game.sequence.push("3:2");
        Game.sequence.push("5:4");
        Game.sequence.push("4:4");
        Game.sequence.push("2:6");
        Game.sequence.push("4:1");
        Game.sequence.push("8:9");
        Game.sequence.push("1:6");
        Game.sequence.push("5:2:2");
        Game.sequence.push("1:4:3");
        Game.sequence.push("1:6:2");
        Game.sequence.push("6:3:2");
        Game.sequence.push("3:7:9");
        Game.sequence.push("6:8:3");
        Game.sequence.push("4:8:8");
        Game.sequence.push("5:4:1");
        Game.sequence.push("1:1:3");
        Game.sequence.push("2:1:2");
        Game.sequence.push("9:8:3:5");
        Game.sequence.push("3:5:9:5");
        Game.sequence.push("8:2:9:7");
        Game.sequence.push("5:7:3:8");
        Game.sequence.push("8:9:1:7");
        Game.sequence.push("1:5:4:2");
        Game.sequence.push("8:7:3:6");
        Game.sequence.push("2:7:3:1");
        Game.sequence.push("2:2:3:1");
        Game.sequence.push("9:1:5:7");
        Game.sequence.push("7:4:6:4:7");
        Game.sequence.push("9:2:9:3:9");
        Game.sequence.push("9:5:1:2:1");
        Game.sequence.push("2:5:4:6:6");
        Game.sequence.push("5:9:3:8:2");
        Game.sequence.push("4:3:6:2:2");
        Game.sequence.push("5:5:7:2:9");
        Game.sequence.push("1:8:2:5:2");
        Game.sequence.push("9:4:2:8:2");
        Game.sequence.push("2:8:3:6:2");
        Game.sequence.push("3:9:9:2:8:1");
        Game.sequence.push("4:6:2:5:2:9");
        Game.sequence.push("5:7:2:9:3:4");
        Game.sequence.push("3:8:9:1:1:8");
        Game.sequence.push("3:7:1:4:5:2");
        Game.sequence.push("4:4:8:5:7:9");
        Game.sequence.push("8:2:9:1:8:5");
        Game.sequence.push("4:7:8:7:1:6");
        Game.sequence.push("1:9:5:9:2:9");
        Game.sequence.push("3:1:9:5:7:8");
        Game.sequence.push("3:9:1:2:9:4:5");
        Game.sequence.push("6:9:8:3:9:2:1");
        Game.sequence.push("3:1:7:4:1:8:9");
        Game.sequence.push("2:5:3:7:9:2:3");
        Game.sequence.push("6:5:8:5:3:4:1");
        Game.sequence.push("9:8:7:5:9:1:6");
        Game.sequence.push("7:3:5:1:3:4:7");
        Game.sequence.push("4:1:7:7:2:6:9");
        Game.sequence.push("1:4:7:9:3:6:6");
        Game.sequence.push("4:8:5:3:4:7:1");
        Game.sequence.push("2:5:1:2:5:5:5:8");
        Game.sequence.push("1:8:3:7:6:8:7:7");
        Game.sequence.push("4:7:7:5:2:8:3:5");
        Game.sequence.push("2:4:6:9:7:1:4:8");
        Game.sequence.push("2:7:8:6:6:8:5:6");
        Game.sequence.push("1:5:6:5:2:3:5:7");
        Game.sequence.push("4:8:3:6:4:6:3:2");
        Game.sequence.push("4:2:1:1:3:3:1:2");
        Game.sequence.push("2:9:5:1:5:9:5:4");
        Game.sequence.push("2:4:2:5:7:3:8:8");
        Game.sequence.push("7:6:7:8:2:3:2:4:9");
        Game.sequence.push("7:1:2:1:3:9:9:8:3");
        Game.sequence.push("3:7:3:2:4:8:5:2:9");
        Game.sequence.push("6:4:9:6:7:7:7:8:2");
        Game.sequence.push("8:7:1:3:3:5:9:1:8");
        Game.sequence.push("7:8:4:3:4:3:9:4:7");
        Game.sequence.push("7:1:9:5:7:7:9:1:9");
        Game.sequence.push("5:3:1:1:8:9:4:3:5");
        Game.sequence.push("7:6:7:1:4:2:9:2:7");
        Game.sequence.push("2:1:6:1:3:6:7:1:5");
        Game.sequence.push("6:6:7:2:2:9:5:3:9:9");
        Game.sequence.push("1:9:3:2:4:5:8:4:5:9");
        Game.sequence.push("5:6:5:6:6:2:3:9:3:5");
        Game.sequence.push("2:5:8:1:6:6:2:1:4:5");
        Game.sequence.push("2:1:1:9:1:2:8:6:4:1");
        Game.sequence.push("4:8:3:1:1:8:5:7:7:3");
        Game.sequence.push("7:8:3:2:9:1:6:7:9:5");
        Game.sequence.push("8:6:2:1:9:8:1:9:7:9");
        Game.sequence.push("1:7:5:5:3:2:1:5:6:3");
        Game.sequence.push("5:6:8:2:8:5:4:9:5:5");

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

        if (Game.inputCount == 0) {
            for (let i=0; i<Constants.circleGameObjects.length; i++) {
                Constants.circleGameObjects[i].draw(ctx, "white", "black");
            }
        }else {
            for (let i=0; i<Game.inputCount; i++) {
                Constants.circleGameObjects[i].update(ctx);
            }
        }
        
    }

    //sequence animation of left grid
    static animateSequence(ctx) {
        //This function makes it go to sleep and it works
        Game.updateSequence();
        let doSomething = async () => {
            for (let s of Game.currentSequence) {
                for (let gameObject of Constants.leftGameObjects) {
                    if (s == gameObject.number) {
                        await Input.stall(1000);
                        gameObject.draw(ctx, "blue", "gray");
                        let play = Constants.clickSound.play();
                        await Input.stall(500);
                        gameObject.draw(ctx, "black", "gray");
                    }
                }
            }
        }
        doSomething();
        Game.gameStatus = "User Input";
    }

    static updateSequence() {

        if (Game.level == 1) {
            let min = Game.level - 1;
            let max = Game.level * 10;
            let random = Math.floor(Math.random() * (max - min) + min);
            console.log(random);
            Game.currentSequence = Game.sequence.at(random);
            return;
        }

        let min = (Game.level - 1) * 10;
        let max = Game.level * 10;
        let random = Math.floor(Math.random() * (max - min) + min);
        console.log(random);
        Game.currentSequence = Game.sequence.at(random).split(":");
        return;
    }

    static addInput() {
        console.log(Input.mouse.x, + ", " + Input.mouse.y)
        for (let gameObject of Constants.rightGameObjects) {
            if (Input.inCollisionSquare(gameObject)) {
                Game.userInput.push(gameObject.number * -1);
                break;
            }
        }
        Game.current = Game.userInput[Game.inputCount];
        if (Game.current == Game.currentSequence[Game.inputCount]) {
            Constants.clickSound.play();
        } else {
            Game.gameStatus = "Lost";
        }
        Game.inputCount++;
        // console.log(Game.userInput);
    }

    //win/lost validation
    static checkInput() {

        let doSomething = async () => {
            await Input.stall(3000);
        }
        if (Game.inputCount == Game.level) {
            let play = Constants.levelPassedSound.play();
            doSomething();
            Game.gameStatus = "Play Sequence";
            Game.userInput = [];
            Game.current = -1;
            Game.inputCount = 0;
            Game.level++;
        }
        
        if (Game.level == 11) {
        Game.gameStatus = "Game Completed";
            return;
        }
    }

    static manageText() {
        if (Constants.username.length > 30) {
            Constants.fontStyle = "20px Arial";
            Constants.textX = 50;
            Constants.textY = 360;
            Constants.textOffsetX = 350;
            Constants.textOffsetY = 30;
        }else if(Constants.username.length > 10) {
            Constants.fontStyle = "30px Arial";
            Constants.textX = 50;
            Constants.textY = 370;
            Constants.textOffsetX = 350;
            Constants.textOffsetY = 20;
        }else {
            Constants.fontStyle = "60px Arial";
            Constants.textX = 50;
            Constants.textY = 380;
            Constants.textOffsetX = 350;
            Constants.textOffsetY = 15;
        }
    }
    static showMessage(ctx) {
        
        ctx.fillStyle = "orange";
        ctx.font = Constants.fontStyle;
        ctx.fillText(Constants.username, Constants.textX, Constants.textY);
        ctx.font = "20px Arial";
        ctx.fillStyle = "white";
        ctx.fillRect(Constants.textX + Constants.textOffsetX, Constants.textY + Constants.textOffsetY - 20, 200, 25);
        ctx.fillStyle = "blue";
        ctx.fillText("Currently on Level: " + Game.level, Constants.textX + Constants.textOffsetX, Constants.textY + Constants.textOffsetY);
    }


}

export default Game;