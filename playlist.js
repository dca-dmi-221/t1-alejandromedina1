class Playlist {
    constructor(name) {
        this.name = name;
        this.files = [];
    }
    /*playPlaylist(x, y) {
        for (let i = 0; i < this.files.length; i++) {
            const song = this.files[i];
            song.stop();
            if (dist(x, y, mouseX, mouseY) < 25 && song.audioFile.isPlaying() === false) {
                this.files[0].audioFile.play()
            }
            this.files[i].nowPlaying();
        }
    }*/
    next() {
        for (let i = 0; i < this.files.length; i++) {
            const song = this.files[i];
            if (key === 'n' && song.audioFile.isPlaying()) {
                this.files[i].audioFile.stop();
                i = i+1;
                this.files[i].audioFile.play();
            }
        }
    }
    back() {
        for (let i = 0; i < this.files.length; i++) {
            if (key === 'b' && this.files[i].audioFile.isPlaying()) {
                const song = this.files[i];
                if (i >= 0) {
                    this.files[i].audioFile.stop();
                    i = i-1;
                    this.files[i].audioFile.play();
                }else{
                    song.audioFile.stop();
                    song.audioFile.play();
                }
            }
        }
    }
}