class Song {
    constructor({
        name,
        artist,
        genre,
        releaseDate,
        audioFile,
        length
    }) {
        this.name = name;
        this.artist = artist;
        this.genre = genre;
        this.length = length;
        this.releaseDate = releaseDate;
        this.audioFile = audioFile;
        this.x = undefined;
        this.y = undefined;
    }
    resumeSong() {
        if (this.audioFile.isPaused()) {
            this.playSong();
        }
    }
    playSong(){
        if (this.audioFile.isPlaying()) {
            this.audioFile.stop();
        }else{
            this.audioFile.play()
        }
        
    }
    pauseSong() {
        if (this.audioFile.isPlaying()) {
            this.audioFile.pause();
        }
    }
    stopSong() {
            this.audioFile.stop();
    }
    songDuration() {
        this.audioFile.duration();
    }
    songCurrentTime() {
        if (this.audioFile.isPlaying()) {
            this.duration.currentTime()
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