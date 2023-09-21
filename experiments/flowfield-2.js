// Algorithm is based on guide https://youtu.be/1-QXuR-XX_s?si=u04KRhPWuCmBuMS9
const points = [];
const multiplier = 0.005;
function setup() {
  createCanvas(innerWidth, innerHeight);
  background(50);

  const density = 20;
  const space = width / density;

}

function draw() {
  noStroke();

  points.push(createVector(mouseX, mouseY));
  
  points.forEach(point => {
    const r = map(point.x, 0, innerWidth, 100, 150);
    const g = map(point.y, 0, innerHeight, 30, 90);
    const b = map(point.x, 0, innerWidth, 200, 250);
    fill(r,g,b);
    const position = noise(point.x * multiplier, point.y * multiplier);
    const angle = map(position, 0, 1, 0, 720);
    const vector = createVector(sin(angle), cos(angle));
    point.add(vector); 
    ellipse(point.x, point.y, 2);
  });

}