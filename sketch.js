let app;

function preload() {
  soundFormats('m4a', 'ogg');
  app = new MediaPlayer(this);
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(100, 200, 50, 50);
  ellipse(200, 200, 50, 50);
  ellipse(300, 200, 50, 50);
  app.drawFunctions();
}

function keyPressed() {
  app.keyPressedFunctions();
}
function mousePressed(){
  app.mousePressedFunctions();
}
