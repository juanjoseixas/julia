var x, r, y;

function setup() {
    createCanvas(800, 600);

    noStroke();
    background('darkblue');
    y = 0;
}

function draw() {

    x = random(width);

    if(random() > 0.7) {
        r = random(6, 10);
    } else {
        r = random(1, 5);
    }

    ellipse(x, y, r, r);
    y = y + 4;

    if(y > 450) {
        y = 0;
    }
}
