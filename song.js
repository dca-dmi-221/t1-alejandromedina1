class Song {
    constructor({
        name,
        artist,
        genre,
        releaseDate,
        length,
        audioFile
    }) {
        this.name = name;
        this.artist = artist;
        this.genre = genre;
        this.releaseDate = releaseDate;
        this.length = length;
        this.audioFile = audioFile;
    }
    resumeSong() {
        if (this.audioFile.isPaused()) {
            this.playSong();
        }
    }
    playSong(){
        this.audioFile.play()
        console.log(this.audioFile);   
    }
    nowPlaying() {
        if (this.audioFile.isPlaying()) {
            textAlign(CENTER, CENTER);
            text('Now Playing',200,50);
            text(this.name,200,100);
            text(this.artist,200,150);
        }
    }
    pauseSong() {
        if (this.audioFile.isPlaying()) {
            this.audioFile.pause();
        }
    }
    stopSong() {
        if (this.audioFile.isPlaying()) {
            this.audioFile.stop();
        }
    }
    showPlayingTime() {
        if (this.audioFile.isPlaying() || this.audioFile.isPaused()) {
            let time = Math.floor(this.audioFile.currentTime());
            text(time, 100, 300);
        }
    }
    showLength() {
        if (this.audioFile.isPlaying() || this.audioFile.isPaused()) {
            let length = Math.floor(this.audioFile.duration());
            text(length, 200, 300);
        }
    }
    volumeValue(value){
        this.audioFile.setVolume(value);
    }
}