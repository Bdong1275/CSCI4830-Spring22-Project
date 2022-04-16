import Constants from "./Constants.js";
import GameObject from "./GameObject.js";
import Square from "./Square.js";
import Input from "./Input.js";

class SquareGameObject extends GameObject {
    constructor(x, y, w, h, number) {
        super();
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.number = number;

        this.components.push(new Square(this, x, y, w, h));
    }
    draw(ctx, fillColor, strokeColor) {

        ctx.fillStyle = fillColor;
        ctx.strokeStyle = strokeColor;

        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.fill();
        ctx.stroke();
    }
    update(ctx) {

        if (this.x < Input.mouse.clickX && Input.mouse.clickX < this.x + Constants.size &&
            this.y < Input.mouse.clickY && Input.mouse.clickY < this.y + Constants.size) {
                this.draw(ctx, Constants.btnColor, "black");
        }

    }
}

export default SquareGameObject;