function getCanvas() {
    let canvas = document.querySelector("#canv");
    let ctx = canvas.getContext("2d");
    canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto; border:5px solid black";
  
    canvas.width = 1530;
    canvas.height = 1000;
    return { canvas, ctx };
  }

export { getCanvas };