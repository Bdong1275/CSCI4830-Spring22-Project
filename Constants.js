class Constants {

    static username = "name";

    static cpLeft;
    static cpTop;
    
    static leftGameObjects = [];
    static rightGameObjects = [];
    static circleGameObjects = [];
    static size = 200;
    static btnColor = "gold";

    static fontStyle;
    static textX;
    static textY;
    static textOffsetX;
    static textOffsetY;
    
    static clickSound = new Audio("/CSCI4830-Spring22-Project/audio/tapsound.ogg"); //light up of buttons
    static gamePassedSound = new Audio("/CSCI4830-Spring22-Project/audio/win.mp3"); //when a user passes a level
    static wrongSound = new Audio("/CSCI4830-Spring22-Project/audio/wrong.ogg"); //when a user clicks wrong button
    static levelPassedSound = new Audio("/CSCI4830-Spring22-Project/audio/completed.mp3")//for now - when a user finishes
}

export default Constants;