// based on tutorial https://www.youtube.com/watch?v=Fx4DY4iVgPU&t=187s&ab_channel=DavidBouchard

let ready = false;
let volume = -9;
let synth;

let waveform;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // ui
  showButtons();
  slider = createSlider(-20, 10, -9);
  slider.position(500, 100);
  slider.style('width', '80px');
  slider.input(changeVolume);
}

function changeVolume() {
  volume = slider.value();
  Tone.Master.volume.value = volume;
}

function showButtons() {
  const types = ["sine", "triangle", "sawtooth", "square"];
  for (let i = 0; i < types.length; i++) {
    const type = types[i];
    const button = createButton(type);
    button.position(100 + i * 100, 100);
    button.mousePressed(() => {
      synth.oscillator.type = type;
    });
  }
}

function initAudio() {
  synth = new Tone.Synth();
  synth.toDestination();
  synth.oscillator.type = "sine";
  waveform = new Tone.Waveform();
  Tone.Master.connect(waveform);
  Tone.Master.volume.value = -9;
}

function draw() {
   if (ready) {
    background(0, 20);
    stroke("white");
    noFill();
    let buffer = waveform.getValue(0);
    let start = 0;
    for (let i = 1; i < buffer.length; i++) {
      if (buffer[i-1] < 0 && buffer[i] >= 0) {
        start = i;
        break;
      }
    }
    let end = buffer.length / 2 + start;
    beginShape();
    for (let i = start; i < end; i++) {
      let x = map(i, start, end, 0, width);
      let y = map(buffer[i], -1, 1, 0, height);
      vertex(x, y);
    }
    endShape();
   } else {
    background('black');
    fill('white');
    textAlign(CENTER, CENTER);
    text("click to start", width / 2, height / 2);
   }
}

function changeType() {
  synth.oscillator.type = "sawtooth"
}

function mousePressed() {
  if (!ready) {
    ready = true;
    initAudio();
    return;
  }
synth.triggerAttackRelease(random(220, 440), "8n");
}