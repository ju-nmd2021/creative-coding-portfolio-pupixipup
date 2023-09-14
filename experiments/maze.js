// based on https://www.youtube.com/watch?v=4SqVTk3BIhE&list=PLLx7jIm38p9kGa3BFpPuz9FrOG8LlwcxL&index=1&ab_channel=DavidBouchard

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
  stroke('white');
  let r = random();
  strokeWeight(gridSize * 0.1);
  stroke(r * 255, r * 255, r * 255);
  let selectedPattern = random(patterns);

  selectedPattern();
}

function pattern1() {
  line(0, 0, gridSize, gridSize);
}

function pattern2() {
  line(0, gridSize, gridSize, 0);
}