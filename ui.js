class UI {
    constructor() {
        this.screens = [];
        this.screens[0] = loadImage('./screens/home.png');
        this.screens[1] = loadImage('./screens/playlist_1.png');
        this.screens[2] = loadImage('./screens/playlist_2.png');
        this.screens[3] = loadImage('./screens/playlist_3.png');
        this.interface = 0;
    }
    showScreen() {
        switch (this.interface) {
            case 0:
                image(this.screens[0], 0, 0);
                break;
            case 1:
                image(this.screens[1], 0, 0);
                break;
            case 2:
                image(this.screens[2], 0, 0);
                break;
            case 3:
                image(this.screens[3], 0, 0);
                break;
        }
    }
    homeScreen() {
        if (this.interface !== 0) {
            if (dist(52.5, 64.5, mouseX, mouseY) < 30) {
                this.interface = 0;
            }
        }
    }
    pickPlaylistCover() {
        const PICK = Math.floor(Math.random() * 3);
        return PICK;
    }
    showSongs(playlist) {
        if (this.interface !== 0) {
            let xi = 585;
            let yi = 808;
            const STEP = -114
            playlist.songs.forEach((song, i) => {
                song.x = xi
                song.y = yi + (STEP * i)
                const TEXTX = song.x + 100;
                const TEXTY = song.y + 30
                noStroke();
                fill(255, 46)
                rect(song.x, song.y, 714, 100, 16);
                fill(255, 200);
                textStyle(BOLD);
                textSize(23);
                textFont('Montserrat');
                text(song.name, TEXTX, TEXTY);
                textSize(22);
                textStyle(ITALIC);
                text(song.artist, TEXTX, TEXTY + 30);
                fill(214, 30, 208);
                textStyle(NORMAL);
                text(song.length + ' seconds', TEXTX, TEXTY + 60);
            });
        }
    }
}