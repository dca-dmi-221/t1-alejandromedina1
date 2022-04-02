class Playlist {
    constructor(name) {
        this.name = name;
        this.files = [];
        this.currentSong;
    }
    playPlaylist() {
        this.stopPlaylist();
        this.currentSong = this.files[0];
        this.currentSong.playSong();
        console.log(this.currentSong)
                    this.currentSong.audioFile.onended(() =>{
                        this.currentSong = this.files[this.files.indexOf(this.currentSong) + 1]
                        console.log(this.currentSong)
                        this.currentSong.playSong();
                    })
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
                    this.files[i].playSong();
                } else if (i === 0) {
                    this.files[i].stopSong();
                    this.files[i].playSong();
                }
            }
        }
    }


}