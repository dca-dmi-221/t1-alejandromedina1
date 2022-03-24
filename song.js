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
            this.audioFile.play()
        }
    }
    nowPlaying() {
        if (this.audioFile.isPlaying()) {
            console.log('Now Playing ' + this.name + ' from ' + this.artist);
            console.log(this.audioFile);
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
    setPlayingPosition() {
        //
    }
    showPlayingTime() {
        if (this.audioFile.isPlaying()) {
            let time = Math.floor(this.audioFile.currentTime());
            text(time,100,300);
        }
    }
    showLength(){
        if (this.audioFile.isPlaying()) {
            let length = Math.floor(this.audioFile.duration());
            text(length,200,300);
        }   
    }
    volume() {
        if (key === 'a') {
            this.audioFile.setVolume(0.05);
        }
        if (key === 'd') {
            this.audioFile.setVolume(0.4);   
        }
    }
}