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
}

export default Input;