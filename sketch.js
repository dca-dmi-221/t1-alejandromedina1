let app;

function preload() {
  soundFormats('m4a', 'ogg');
  app = new MediaPlayer(this);
}

function setup() {
  createCanvas(1920, 1080);
  app.setupFunctions();
}

function draw() {
  background(220);
  app.drawFunctions();
}

function keyPressed() {
  app.keyPressedFunctions();
}
function mousePressed(){
  app.mousePressedFunctions();
}
function mouseReleased(){
  app.mouseReleasedFunctions();
}
