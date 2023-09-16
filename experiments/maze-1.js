// Variation of maze.js
let gridSize = 20;
const patterns = [pattern1, pattern2];
function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  background("black");
  for (let x = 0; x < innerWidth; x += gridSize) {
      for (let y = 0; y < innerHeight; y += gridSize) {
        push();
        translate(x, y);
        drawPattern();
        pop();
      }
  }
  noLoop();
}

function drawPattern() {
  let r = random();
  strokeWeight(gridSize * 0.1);
  noFill();
  stroke(r * 255, r * 255, r * 255);
  let selectedPattern = random(patterns);
  selectedPattern();
}

function pattern1() {
  arc(0,0, gridSize, gridSize, 0, PI);
}

function pattern2() {
  arc(gridSize,0, gridSize, gridSize, PI, 0);
}