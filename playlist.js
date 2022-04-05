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
        this.currentIndex;
    }
    playPlaylist() {
        this.stopPlaylist();
        this.currentIndex = 0;
        this.currentSong = this.songs[this.currentIndex];
        this.currentSong.playSong();
        console.log(this.currentSong)
        this.currentSong.audioFile.onended(this.next)
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
        this.currentSong.playSong();
            this.currentIndex +=1;
            
            this.currentSong = this.songs[this.currentIndex]
            this.currentSong.playSong();
            console.log(this.currentSong);
    }
    previous() {
            if (dist(894, 1002, mouseX, mouseY) < 30) {
                if (this.currentSong.audioFile.isPlaying()) {
                    if (this.currentIndex > 0) {
                        this.currentSong.stopSong();
                        this.currentIndex -=1;
                        this.currentSong = this.songs[this.currentIndex]
                        this.currentSong.playSong();
                    } else if (this.currentIndex === 0) {
                        this.currentSong.stopSong();
                        this.currentSong = this.songs[0]
                        this.currentSong.playSong();
                    }
                }
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
                rect(944, 991, 5, 17)
                rect(954, 991, 5, 17)
            }
            if (song.audioFile.isPlaying() === false) {
                triangle(946, 991, 960, 1000, 946, 1009);

            }
        });
    }
}