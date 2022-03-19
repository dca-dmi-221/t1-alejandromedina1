let app;
function preload(){
  soundFormats('m4a','ogg');
  app = new MediaPlayer(this);
}
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(220);
}
function keyPressed(){
  if (key === 'm') {
    app.playFiles();
  }
  if (key === 'l') {
    app.pause();
  }
  if (key === 's') {
    app.stop();
  }
}
