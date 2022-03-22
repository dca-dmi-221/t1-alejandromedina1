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
}

function keyPressed() {
  if (key === 'm') {
    app.playFiles();
  }
  if (key === 'l') {
    app.pause();
  }
  if (key === 's') {
    app.stopSong();
  }
  if (key === 'r') {
    app.resume();
  }
}
function mousePressed(){
  app.playPlaylist();
}
