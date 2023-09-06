function setup() {
  createCanvas(innerWidth, innerHeight);
}
var customHeight = innerHeight + 300;
var customWidth = innerWidth + 300;

function draw() {
  background(0);
  noFill();
  noStroke();
  for (let i = 0; i < 200; i++) {
    beginShape(); 
    vertex(0, customWidth); 
    for (let x = 0; x < customWidth; x++) {
      let nx = map(x, 0, customWidth, 0, 1);
      let y = customHeight * noise(nx) / 2;
      const range = y + i * 40 * noise(i);
	vertex(x, range);
  }

 
  vertex(height, width);
        
  fill(255  - noise(i) * 255,255  - noise(i) * 255 ,255 - noise(i) * 255);
  endShape();
}
}
 