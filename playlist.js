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
        console.log(this.currentSong);
        this.currentSong.audioFile.onended(() => this.keepPlaying(this.songs, this.currentSong, this.currentIndex))
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
    pausePlaylist() {
        if (this.currentSong !== undefined) {
            if (dist(951, 1010, mouseX, mouseY) < 30) {
                if (this.currentSong.audioFile.isPlaying()) {
                    this.currentSong.pauseSong();
                } else {
                    this.currentSong.playSong();
                }
            }

        }
    }
    next() {
        this.currentSong.stopSong();
        this.currentIndex += 1;

        this.currentSong = this.songs[this.currentIndex]
        this.currentSong.playSong();
        console.log(this.currentSong);
    }
    keepPlaying(s, cs, i) {
        let songs = s;
        let index = i;
        let currentSong = cs;
        console.log(currentSong)
        this.currentSong.stopSong();
        index += 1;
        this.currentIndex = index;
        this.currentSong = songs[index];
        this.currentSong.playSong();
    }
    previous() {
        if (dist(894, 1002, mouseX, mouseY) < 30) {
            if (this.currentSong.audioFile.isPlaying()) {
                if (this.currentIndex > 0) {
                    this.currentSong.stopSong();
                    this.currentIndex -= 1;
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
        if (this.currentSong.audioFile.isPlaying()) {
            textSize(26)
            fill(255);
            textStyle(BOLD)
            text(this.currentSong.name, 150, 993);
            textSize(22)
            textStyle(ITALIC)
            text(this.currentSong.artist, 150, 1021);
            textStyle(NORMAL)
            fill(214, 30, 208);
            text(this.currentSong.length + ' seconds', 150, 1047);
            rect(944, 991, 5, 17)
            rect(954, 991, 5, 17)
        }
        if (this.currentSong.audioFile.isPlaying() === false || this.currentSong.audioFile.isPaused()) {
            triangle(946, 991, 960, 1000, 946, 1009);
        }
        image(this.album, 39.5, 969.5, 85, 85);
    }
}