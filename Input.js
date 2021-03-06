import Constants from "./Constants.js";

class Input {

    static mouse = {
        x: 50,
        y: 50,
        width: 0.1,
        height: 0.1,
    }

    static mouseMove(e) {
        //offset - canv positioning
        Input.mouse.x = e.clientX - Constants.cpLeft;
        Input.mouse.y = e.clientY - Constants.cpTop;
    }

    //mouse - circle
    static inCollisionHover(object) {
        
        let x1 = object.x;
        let y1 = object.y;

        let x = Input.mouse.y - y1;
        let y = Input.mouse.x - x1;

        x *= x;
        y *= y;

        if (Math.sqrt(x + y) <= object.r) {
            return true;
        }
    }

    //mouse - square
    static inCollisionSquare(square) {

        if (square.x < Input.mouse.x && Input.mouse.x < square.x + square.w &&
            square.y < Input.mouse.y && Input.mouse.y < square.y + square.h) {
                return true;
        }else {
            return false;
        }
    }

    static stall(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

}

export default Input;