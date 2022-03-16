let app = new MediaPlayer();
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  app.listOfPlaylists[0].soundFile.play();
}
