let app;

function preload() {
  soundFormats('m4a', 'ogg');
  app = new App();
}

function setup() {
  createCanvas(1920, 1080);
  app.setupFunctions();
}

function draw() {
  background(220);
  app.drawFunctions();
}

function mousePressed(){
  app.mousePressedFunctions();
}

function mouseDragged(){
  app.mouseDraggedFunctions()
}

function mouseReleased(){
  app.mouseReleasedFunctions();
}
