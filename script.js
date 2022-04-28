function getCanvas() {
    let canvas = document.querySelector("#canv");
    let ctx = canvas.getContext("2d");
    canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto; border: 2px solid black";
  
    canvas.width = 600;
    canvas.height = 400;
    return { canvas, ctx };
  }

export { getCanvas };