// based on guide https://www.gorillasun.de/blog/smooth-curves-with-perlin-noise-and-recreating-the-unknown-pleasures-album-cover-in-p5/
const xOff = innerHeight / 10;
const distance = 40;
const initialX = innerWidth / 10;
let xOffset = 0; // Variable to control the horizontal movement

function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  background("black");
  noFill();
  stroke(155, 246, 255); 
  for (let n = initialX; n < height - xOff; n += distance) { // distribute lines vertically
    beginShape();
    for (let i = xOff; i < width - xOff; i += 25) {
      const height = 70;
      const y = n - noise(i + xOffset) * height; // Add xOffset to the noise input
      curveVertex(i, y);
    }
    endShape();
  }
 // xOffset += 0.01; // Increment xOffset for animation EACH FRAME
}
