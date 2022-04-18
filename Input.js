class Input {

    static mouse = {
        x: 50,
        y: 50,
        width: 0.1,
        height: 0.1,
        clickX: 0,
        clickY: 0
    }

    static mouseClick() {
        Input.mouse.clickX = Input.mouse.x;
        Input.mouse.clickY = Input.mouse.y;
    }

    static mouseMove(e) {
        Input.mouse.x = e.clientX;
        Input.mouse.y = e.clientY;
        // console.log(e.clientX);
    }

    //mouse - circle
    static inCollisionHover(object, ctx) {
        
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
}

export default Input;