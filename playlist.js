class Playlist {
    constructor(name) {
        this.name = name;
        this.files = [];
    }
    playPlaylist() {
        this.stopPlaylist();
        this.files[0].playSong();
        this.onEnded(this.files[0]);
    }
    keepPlaying(next) {
                this.files[next].playSong();
                console.log('Ya no canto');
    }
    stopPlaylist() {
        for (let j = 0; j < this.files.length; j++) {
            const song = this.files[j];
            song.stopSong();
        }
    }
    next() {
        for (let i = 0; i < this.files.length; i++) {
            const song = this.files[i];
            if (song.audioFile.isPlaying()) {
                this.files[i].stopSong();
                i = i + 1;
                this.files[i].playSong();
                this.onEnded(this.files[i]);

            }
        }
    }
    onEnded(song) {
        if(song.hasEnded()) this.next();
    }
    previous() {
        for (let i = 0; i < this.files.length; i++) {
            const song = this.files[i];
            if (this.files[i].audioFile.isPlaying()) {
                if (i > 0) {
                    this.files[i].stopSong();
                    i = i - 1;
                    this.files[i].playSong();
                } else if (i === 0) {
                    this.files[i].stopSong();
                    this.files[i].playSong();
                }
            }
        }
    }
}