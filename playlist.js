class Playlist {
    constructor({
        name,
        cover,
        x,
        y,
        album
    }) {
        this.name = name;
        this.cover = cover;
        this.x = x;
        this.y = y;
        this.album = album
        this.songs = [];
        this.currentSong;
    }
    playPlaylist() {
        if (dist(211.5, 425.5, mouseX, mouseY) < 30) {
            this.stopPlaylist();
            this.songs[0].playSong();
        }
    }
    nowPlaying() {
        this.songs.forEach(song => {
            if (song.audioFile.isPlaying()) {
                textSize(26)
                fill(255);
                textStyle(BOLD)
                text(song.name, 150, 993);
                textSize(22)
                textStyle(ITALIC)
                text(song.artist, 150, 1021);
                textStyle(NORMAL)
                fill(214, 30, 208);
                text(song.length + ' seconds', 150, 1047);
                rect(944,991, 5, 17)
                rect(954,991, 5, 17)
            }
            if (song.audioFile.isPlaying() === false) {
                triangle(946,991,960,1000,946,1009);
                
            }
        });
    }
    showCover() {
        image(this.album, 172, 483, 377, 377);
    }
    stopPlaylist() {
        for (let j = 0; j < this.songs.length; j++) {
            const song = this.songs[j];
            song.stopSong();
        }
    }
    next() {
        for (let i = 0; i < this.songs.length; i++) {
            const song = this.songs[i];
            if (dist(1006, 1002, mouseX, mouseY) < 30) {
                if (song.audioFile.isPlaying()) {
                    this.songs[i].stopSong();
                    i = i + 1;
                    this.songs[i].playSong();
                }
            }
        }
    }
    previous() {
        for (let i = 0; i < this.songs.length; i++) {
            if (dist(894, 1002, mouseX, mouseY) < 30) {
                if (this.songs[i].audioFile.isPlaying()) {
                    if (i > 0) {
                        this.songs[i].stopSong();
                        i = i - 1;
                        this.songs[i].playSong();
                    } else if (i === 0) {
                        this.songs[i].stopSong();
                        this.songs[i].playSong();
                    }
                }
            }
        }
    }
}