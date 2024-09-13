let x = 5;
let y = 5;
let spacing = 50;
let randomValue = 0.5;
let ellipseRate = 2;
let rectRatio = 10;
let strokeW = 1.5;

function setup() {
  createCanvas(windowWidth, windowHeight);  
  background(128, 204, 194);
}

function draw() {
  concentricCircles();
}

function concentricCircles() {
  noFill();
  strokeWeight(strokeW);
  strokeCap(ROUND);
  stroke(5, 3, 2);

  let centerX = x + spacing / 2;
  let centerY = y + spacing / 2;
  let maxRadius = spacing / 2;

  for (let radius = maxRadius; radius > 0; radius -= spacing / 6) {
    ellipse(centerX, centerY, radius * 2);
  }

  x += spacing;
  if(x > width){
    x = 0;
    y = y + spacing;
  }
}