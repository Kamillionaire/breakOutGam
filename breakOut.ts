var myGameCanvas = <HTMLCanvasElement>document.getElementById("myGameCanvas");
var ctx = myGameCanvas.getContext("2d");
ctx.beginPath();
ctx.rect(0, 0, 500, 500);
ctx.fillStyle = "purple";
ctx.fill();
ctx.closePath();

var x = myGameCanvas.width/2;
var y = myGameCanvas.height-30;

function draw(){
  ctx.beginPath();
  ctx.rect(0, 0, 500, 500);
  ctx.fillStyle = "purple";
  ctx.fill();
  ctx.closePath();
  x+=2;
  y-=2;
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI*2, false);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
  console.log(x, y)
}

setInterval(draw,10);
