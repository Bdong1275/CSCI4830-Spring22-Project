import Circle from "./Circle.js";
import GameObject from "./GameObject.js";

class CircleGameObject extends GameObject {
    constructor(x,y,r,name) {
        super();
        this.x = x;
        this.y = y;
        this.r = r;
        this.name = name;

        this.components.push(new Circle(this, x, y, r, name));
    }
    draw(ctx, fillColor, strokeColor) {

        ctx.fillStyle = fillColor;
        ctx.strokeStyle = strokeColor;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill()
        ctx.stroke()
    }
    update(ctx) {

        this.draw(ctx, "yellow", "black");
    }
}

export default CircleGameObject;