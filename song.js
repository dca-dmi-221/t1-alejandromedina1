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
        this.nowPlaying();
    }
    resumeSong() {
        if (this.audioFile.isPaused()) {
            this.audioFile.play()
        }
    }
    nowPlaying() {
        console.log('Now Playing ' + this.name + ' from ' + this.artist);
        console.log(this.audioFile);
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
    volume() {
        if (key === 'a') {
            this.audioFile.setVolume(0.05);
        }
        if (key === 'd') {
            this.audioFile.setVolume(0.4);
        }
    }
}