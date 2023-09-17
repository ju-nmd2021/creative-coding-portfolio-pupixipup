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

const patterns = [pattern1, pattern2];

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

function pattern1() {
  const offset = tileSize / 2;
  noStroke();
  fill(...random(colors));
  rect(0, 0, tileSize, tileSize);
  fill(...random(colors));
  noStroke();
  circle(0 + offset,0 + offset, tileSize);
}

function pattern2() {
  noStroke();
  fill(...random(colors));
  rect(0, 0, tileSize, tileSize);
}