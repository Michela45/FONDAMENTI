let x = 0;
let y = 0;
let spacing = 18;
let randomValue = 0.5; 
let shapeRate = 0.5; 
let strokeW = 3; 
let customColors;

function setup() {
  createCanvas(windowWidth, windowHeight);  
  background(255);
  customColors = [
    color(30, 30, 30),    
    color(80, 80, 80),     
    color(150, 150, 150), 
    color(220, 220, 220)   
  ];
}

function draw() {
  pattern();
}

function pattern() {
  strokeWeight(strokeW);
  strokeCap(SQUARE);

  let randomIndex = floor(random(customColors.length));
  stroke(customColors[randomIndex]);
  fill(customColors[randomIndex]);
  
  let randomShape = random(1);
  let size = spacing * random(0.5, 1.5); 

  if (randomShape < randomValue) {
    if (random(1) < shapeRate) {
      ellipse(x, y, size, size); 
    } else {
      rect(x, y, size, size);    
    }
  } else {
    if (random(1) < shapeRate) {
      line(x, y, x + size, y + size); 
    } else {
      line(x + size, y, x, y + size); 
    }
  }
  
  x += spacing;
  if (x > width) {
    x = 0;
    y += spacing;
  }
}