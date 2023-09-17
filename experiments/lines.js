// Perlin Noise inspired by https://codepen.io/pixelkind/pen/wvRMVwy

function setup() {
  createCanvas(250, 250);
  frameRate(60);
}

function bBackground() {
  noiseSeed(100);
  noStroke();
  const divider = 0.01;
  for (let x = 0; x < 400; x++) {
    for (let y = 0; y < 400; y++) {
      const value = noise(x * divider, y * divider, frameCount * 0.05) * 300;

      // I was looking for ways to change color of the project. Chatgpt suggested me to change color by using map function. To understand how map function works i checked the reference page. Line 17 & 18 inspired by https://p5js.org/reference/#/p5/map line & Chatgpt
      const g = map(value, 0, 255, 40, 255);
      const b = map(value, 0, 255, 200, 255);

      fill(0, g, b, 100);
      rect(x, y, 20, 1);
    }
  }
}

function draw() {
  background(255);
  bBackground();
}