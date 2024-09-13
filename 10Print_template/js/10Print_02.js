function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noLoop();
  strokeWeight(15);
}

function draw() {
  let colors = [color(45, 79, 104), color(224, 120, 20), color(228, 175, 127), color(103, 128, 133)];
  drawPattern(0, 0, width, height, colors);
}

function drawPattern(x, y, w, h, colors) {
  if (w < 60 || h < 60) {
    fill(random(colors));
    rect(x, y, w, h);
    return;
  }
  
  stroke(0); 
  
  let verticalSplit = random(1) < 0.5;
  let split = verticalSplit ? random(0.3, 0.7) * w : random(0.3, 0.7) * h;

  if (verticalSplit) {
    line(x + split, y, x + split, y + h);
    drawPattern(x, y, split, h, colors);
    drawPattern(x + split, y, w - split, h, colors);
  } else {
    line(x, y + split, x + w, y + split);
    drawPattern(x, y, w, split, colors);
    drawPattern(x, y + split, w, h - split, colors);
  }
}