class Playlist {
    constructor(name) {
        this.name = name;
        this.files = [];
    }
    playPlaylist() {
        this.stopPlaylist();
        this.files[0].audioFile.play();
        this.keepPlaying();
    }
    stopPlaylist() {
        for (let j = 0; j < this.files.length; j++) {
            const song = this.files[j];
            song.stopSong();
        }
    }
    keepPlaying() {
        for (let i = 0; i < this.files.length; i++) {
            if (this.files[i].audioFile.isPlaying() && this.files[i].audioFile.currentTime() === this.files[i].audioFile.duration()-2) {
                console.log('ola');
                i = i + 1;
                this.files[i].audioFile.play();
            }
        }
    }
    next() {
        for (let i = 0; i < this.files.length; i++) {
            const song = this.files[i];
            if (song.audioFile.isPlaying()) {
                this.files[i].stopSong();
                i = i + 1;
                console.log(this.files[i].audioFile);
                this.files[i].audioFile.play();
            }
        }
    }
    previous() {
        for (let i = 0; i < this.files.length; i++) {
            const song = this.files[i];
            if (this.files[i].audioFile.isPlaying()) {
                if (i > 0) {
                    this.files[i].stopSong();
                    i = i - 1;
                    this.files[i].audioFile.play();
                } else if (i === 0) {
                    this.files[i].stopSong();
                    this.files[i].audioFile.play();

                }
            }
        }
    }
}