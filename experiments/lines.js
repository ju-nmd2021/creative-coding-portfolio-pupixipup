// Was initially based on https://generativeartistry.com/tutorials/tiled-lines/
function setup() {
  createCanvas(innerWidth, innerHeight);
  background(34, 39, 46);
  frameRate(30);
}

const step = 50;
const lineLength = 0.5; // Fraction of step size for line length
const lineOffset = -100;
const screenOffset = Math.abs(lineOffset);

let patterns = [];
let multiplier = 1;

function draw() {
  background(34, 39, 46);
  let progress = frameCount / 30;
  if (progress % 1 === 0) {
    frameCount = 0;
  }
  let direction = 0;
  if (progress % 1 === 0) {
    if (multiplier === 1) {
      multiplier = -1;
    } else {
      multiplier = 1;
    }
  }

  direction = progress * multiplier;
  for (let x = 0; x < innerWidth + screenOffset; x += step) {
    for (let y = 0; y < innerHeight + screenOffset; y += step) {
      drawLine(x, y, step, step,  direction);
    }
  }
}


function drawLine(x, y, toX, toY, progress) {
  const startX = x;
  const startY = lerp(y, y + toY, progress);
  const endX = lerp(x, x + toX, progress + lineLength);
  const endY = lerp(y, y + toY, progress + lineLength);

  line(startX + lineOffset, startY + lineOffset, endX + lineOffset - 10, endY + lineOffset);
  stroke(x, y, 255);
}