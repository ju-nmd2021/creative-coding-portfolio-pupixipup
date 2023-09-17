function setup() {
  createCanvas(innerWidth, innerHeight);
}
const colors = [
  [
      112,
      143,
      163
  ],
  [
      72,
      111,
      136
  ],
  [
      41,
      82,
      109
  ],
  [
      18,
      56,
      82
  ],
  [
      3,
      34,
      54
  ],
  [
      255,
      192,
      170
  ],
  [
      212,
      133,
      106
  ],
  [
      170,
      86,
      57
  ],
  [
      128,
      48,
      21
  ],
  [
      85,
      22,
      0
  ],
  [
      255,
      233,
      170
  ],
  [
      212,
      185,
      106
  ],
  [
      170,
      140,
      57
  ],
  [
      128,
      100,
      21
  ],
  [
      85,
      63,
      0
  ]
];

const tileSize = 50;

const patterns = [pattern1, pattern2, pattern3, pattern4, pattern5, pattern6];

function draw() {
  for (let i = 0; i <innerWidth; i+= tileSize) {
    for (let j = 0; j < innerHeight; j+= tileSize) {
      push();
      translate(i, j);
      random(patterns)();
      pop();
    }
  }
  noLoop();
}

const offset = tileSize / 2;

function pattern1() {
  noStroke();
  fill(...random(colors));
  rect(0, 0, tileSize, tileSize);
  fill(...random(colors));
  noStroke();
  circle(0 + offset,0 + offset, tileSize);
}

function pattern2() {
    const rectOffset = offset / 2;
    noStroke();
    fill(...random(colors));
    rect(0, 0, tileSize, tileSize);
    fill(...random(colors));
    rect(0 + rectOffset, 0 + rectOffset, tileSize / 2, tileSize / 2);
}

function pattern3() {
    const rectOffset = offset / 2;
    noStroke();
    fill(...random(colors));
    rect(0, 0, tileSize, tileSize);
    fill(...random(colors));
    rect(0 + rectOffset, 0 + rectOffset, tileSize / 2, tileSize / 2);
    fill(...random(colors));
    circle(offset, offset, 3);
}


function pattern4() {
    const rectOffset = offset / 2;
    noStroke();
    fill(...random(colors));
    fill(...random(colors), 0.4);
    const color = random(colors);
    rect(0, 0, tileSize, tileSize);
    stroke(color);
    rect(0 + rectOffset + 5, 0 + rectOffset + 5, tileSize / 2, tileSize / 2);
    fill(color);
    rect(0 + rectOffset, 0 + rectOffset, tileSize / 2, tileSize / 2);
}

function pattern5() {
    fill(...random(colors));
    noStroke();
    triangle(0, 0, tileSize, 0, tileSize, tileSize);
}

function pattern6() {
    fill(...random(colors));
    noStroke();
    triangle(tileSize, tileSize, 0, tileSize, 0, 0);
}