let x = 5;
let y = 5;
let spacing = 80;
let strokeW = 2;
let colorIndex = 0; 
let radiusIndex = 0; 
let colors = [
  [150, 184, 208], 
  [148, 151, 93],  
  [119, 152, 168]  
];
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(225, 226, 234); 
}
function draw() {
  drawNextCircle();
}
function drawNextCircle() {
  noFill();
  strokeWeight(strokeW);
  strokeCap(ROUND);
  let centerX = x + spacing / 2;
  let centerY = y + spacing / 2;
  let maxRadius = spacing / 2;
  let currentRadius = maxRadius - (radiusIndex * spacing / 5);
  if (currentRadius > 0) {
    let currentColor = colors[colorIndex % colors.length];
    stroke(currentColor[0], currentColor[1], currentColor[2]); 
    ellipse(centerX, centerY, currentRadius * 4); 
    radiusIndex++; 
  } else {
    radiusIndex = 0;
    colorIndex++; 
    x += spacing;
    if (x > width) {
      x = 0;
      y += spacing;
    }
    if (y > height) {
      noLoop(); 
    }
  }
}