// Algorithm is based on guide https://youtu.be/1-QXuR-XX_s?si=u04KRhPWuCmBuMS9
const points = [];
const multiplier = 0.005;
function setup() {
  createCanvas(innerWidth, innerHeight);
  background(50);

  const density = 20;
  const space = width / density;

  for (let x = 0; x < innerWidth; x+= space) {
    for (let y= 0; y < innerHeight; y += space) {
      const p = createVector(x, y);
      points.push(p);
    }
  }
}

function draw() {
  noStroke();
  
  points.forEach(point => {
    const r = map(point.x, 0, innerWidth, 0, 255);
    const g = map(point.y, 0, innerHeight, 0, 255);
    const b = map(point.x, 0, innerWidth, 255, 0);
    fill(r,g,b);
    const position = noise(point.x * multiplier, point.y * multiplier);
    const angle = map(position, 0, 1, 0, 720);
    const vector = createVector(sin(angle), cos(angle));
    point.add(vector); 
    ellipse(point.x, point.y, 4);
  });

}