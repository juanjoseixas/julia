function setup() {
  createCanvas(1280, 1080);
  background('darkblue');
  noStroke();
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  triangle(mouseX, mouseY, 30, 75, 58, 20, 86, 75);
}
