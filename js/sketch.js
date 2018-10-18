var x, r, y;



function setup() {
  var canvas = createCanvas(windowWidth /1.6, 300);
  canvas.parent('sketch-holder');
  background('darkblue');
  noStroke();
  y = 0;
}

function windowResized() {
  resizeCanvas(windowWidth /1.6 , 300);
}

function draw() {

    x = random(width);

    if(random() > 0.7) {
        r = random(6, 20);
    } else {
        r = random(1, 5);
    }

    ellipse(x, y, r, r);
    y = y + 4;

    if(y > 450) {
        y = 0;
    }
}
