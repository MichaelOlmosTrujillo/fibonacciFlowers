const canvas = document.getElementById("canvas1");
//API 2d of canvas
const ctx = canvas.getContext("2d");
//canvas cover the entire browser window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Size of the circle

let number = 0;
let scale = 10;
let hue = 0;
function drawFlower() {
  let angle = number * 1;
  let radius = scale * Math.sqrt(number);
  let positionX = radius * Math.sin(angle) + canvas.width/2;
  let positionY = radius* Math.cos(angle) + canvas.height/2;

  //Begin the path
  // Fill the inside of the circle with red color
  ctx.fillStyle = 'hsl('+ hue +', 100%, 50%)';
  //It gives blue color to the border of the cirlce
  ctx.strokeStyle = "black";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(positionX, positionY, 20, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  number++;
  hue += 0.5;
}

function animate() {
  // draw each frame
  //Clear the frame in each iteration
  //ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawFlower();
  //¿Permite realizar la animación? Estudiar más esta función
  //setTimeout controls time of reproduction of each animation.
  setTimeout(() => {
    requestAnimationFrame(animate);
  }, 5);
}
animate();
