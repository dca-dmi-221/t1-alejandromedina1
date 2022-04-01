class MediaPlayer {
    constructor() {
        this.blackPanther = loadSound('songs/Black_Panther.m4a');
        this.allTheStars = loadSound('songs/Kendrick_Lamar_SZA_All_The_Stars.ogg');
        this.x = loadSound('songs/Kendrick_Lamar_X.ogg');
        this.theWays = loadSound('songs/The_Ways.ogg');
        this.prayForMe = loadSound('songs/The_Weeknd_Kendrick_Lamar_Pray_For_Me.m4a');
        this.opps = loadSound('songs/Opps.m4a');
        this.iAm = loadSound('songs/I_Am.m4a');
        this.paramedic = loadSound('songs/Paramedic.ogg');
        this.bloodyWaters = loadSound('songs/Bloody_Waters.m4a');
        this.kingsDead = loadSound('songs/Kings_Dead.ogg');
        this.redemption = loadSound('songs/Redemption.m4a');
        this.seasons = loadSound('songs/Seasons.ogg');
        this.bigShot = loadSound('songs/Big_Shot.ogg');
        this.volumeSlider = undefined;
        this.playingSlider = undefined;
        this.listOfPlaylists = [];
        this.createPlaylist();
    }

    createPlaylist() {
        this.listOfPlaylists.push(new Playlist(
            'Black Panther vol.1',
        ));
        this.listOfPlaylists[0].files.push(new Song({
            name: 'Black Panther',
            artist: 'Kendrick Lamar',
            genre: 'rap',
            releaseDate: 2018,
            length: 130,
            audioFile: this.blackPanther
        }));
        this.listOfPlaylists[0].files.push(new Song({
            name: 'All the Stars',
            artist: 'Kendrick Lamar',
            genre: 'rap',
            releaseDate: 2018,
            length: 232,
            audioFile: this.allTheStars
        }));
        this.listOfPlaylists[0].files.push(new Song({
            name: 'X',
            artist: '2 Chainz',
            genre: 'rap',
            releaseDate: 2018,
            length: 267,
            audioFile: this.x
        }));
        this.listOfPlaylists[0].files.push(new Song({
            name: 'The Ways',
            artist: 'Khalid',
            genre: 'R&B',
            releaseDate: 2018,
            length: 239,
            audioFile: this.theWays
        }));
        this.listOfPlaylists[0].files.push(new Song({
            name: 'Pray For Me',
            artist: 'Khalid',
            genre: 'R&B',
            releaseDate: 2018,
            length: 239,
            audioFile: this.prayForMe
        }));

        this.listOfPlaylists.push(new Playlist(
            'Black Panther vol.2',
        ));
        this.listOfPlaylists[1].files.push(new Song({
            name: 'Opps',
            artist: 'Vince Staples',
            genre: 'rap',
            releaseDate: 2018,
            length: 181,
            audioFile: this.opps
        }));
        this.listOfPlaylists[1].files.push(new Song({
            name: 'I Am',
            artist: 'Jorja Smith',
            genre: 'rap',
            releaseDate: 2018,
            length: 209,
            audioFile: this.iAm
        }));
        this.listOfPlaylists[1].files.push(new Song({
            name: 'Paramedic!',
            artist: 'SOB X RBE',
            genre: 'rap',
            releaseDate: 2018,
            length: 219,
            audioFile: this.paramedic
        }));
        this.listOfPlaylists[1].files.push(new Song({
            name: 'Bloody Waters',
            artist: 'Anderson .Paak',
            genre: 'R&B',
            releaseDate: 2018,
            length: 272,
            audioFile: this.bloodyWaters
        }));
        this.listOfPlaylists[1].files.push(new Song({
            name: 'Kings Dead',
            artist: 'Kendrick Lamar',
            genre: 'R&B',
            releaseDate: 2018,
            length: 225,
            audioFile: this.kingsDead
        }));
        this.listOfPlaylists.push(new Playlist(
            'Black Panther vol.3',
        ));
        this.listOfPlaylists[2].files.push(new Song({
            name: 'Redemption',
            artist: 'Babes Wodumo',
            genre: 'rap',
            releaseDate: 2018,
            length: 222,
            audioFile: this.redemption
        }));
        this.listOfPlaylists[2].files.push(new Song({
            name: 'Seasons',
            artist: 'Mozzy',
            genre: 'rap',
            releaseDate: 2018,
            length: 242,
            audioFile: this.seasons
        }));
        this.listOfPlaylists[2].files.push(new Song({
            name: 'Big Shot',
            artist: 'Travis Scott',
            genre: 'rap',
            releaseDate: 2018,
            length: 222,
            audioFile: this.bigShot
        }));
    }
    selectPlaylist() {
        for (let i = 0; i < this.listOfPlaylists.length; i++) {
            const playlist = this.listOfPlaylists[i];
            if (dist(mouseX, mouseY, 100, 200) < 25) {
                if (i !== 0) {
                    this.listOfPlaylists[i].stopPlaylist();
                    
                }
                this.listOfPlaylists[0].playPlaylist();
            } else if (dist(mouseX, mouseY, 200, 200) < 25) {
                this.listOfPlaylists[0].stopPlaylist();
                this.listOfPlaylists[2].stopPlaylist();
                this.listOfPlaylists[1].playPlaylist();
            } else if (dist(mouseX, mouseY, 300, 200) < 25) {
                this.listOfPlaylists[0].stopPlaylist();
                this.listOfPlaylists[1].stopPlaylist();
                this.listOfPlaylists[2].playPlaylist();
            }
        }
    }
    interface() {
        //
    }
    setupFunctions(){
        this.volume()
        this.playing()
    }
    mousePressedFunctions() {
        this.selectPlaylist();
        for (let i = 0; i < this.listOfPlaylists.length; i++) {
            const playlist = this.listOfPlaylists[i];
            if (dist(mouseX, mouseY, 250, 300) < 20) {
                playlist.next();
            }
            if (dist(mouseX, mouseY, 150, 300) < 20) {
                playlist.previous();
            }

        }
    }
    mouseDraggedFunctions() {
        //
    }
    mouseReleasedFunctions() {
        //
    }
    keyPressedFunctions() {
        for (let i = 0; i < this.listOfPlaylists.length; i++) {
            const playlist = this.listOfPlaylists[i];
            for (let j = 0; j < playlist.files.length; j++) {
                const song = playlist.files[j];
                if (key === 'p') {
                    song.pauseSong();
                }
                if (key === 's') {
                    song.stopSong();
                }
                if (key === 'r') {
                    song.resumeSong();
                }
            }
        }
    }
    drawFunctions() {
        ellipse(100, 200, 50, 50);
        ellipse(200, 200, 50, 50);
        ellipse(300, 200, 50, 50);
        ellipse(250, 300, 25, 25);
        ellipse(150, 300, 25, 25);
        this.playingPosition();
        for (let i = 0; i < this.listOfPlaylists.length; i++) {
            const playlist = this.listOfPlaylists[i];
            for (let j = 0; j < playlist.files.length; j++) {
                const song = playlist.files[j];
                song.showPlayingTime();
                song.showLength();
                song.nowPlaying();
                song.volumeValue(this.volumeSlider.value());
            }
        }
    }
    volume() {
        this.volumeSlider = createSlider(0,1,0.5,0.01);
        this.volumeSlider.position(0,370);
    }
    playing(){
        let duration;
        let currentTime;
        for (let i = 0; i < this.listOfPlaylists.length; i++) {
            const playlist = this.listOfPlaylists[i];
            for (let j = 0; j < playlist.files.length; j++) {
                const song = playlist.files[j];
                if (song.audioFile.isPlaying()) {
                    duration = song.audioFile.duration();
                }
            }
        }
        this.playingSlider = createSlider(0,duration,0,1);
        this.playingSlider.position(100,350);
    }
    playingPosition(){
        for (let i = 0; i < this.listOfPlaylists.length; i++) {
            const playlist = this.listOfPlaylists[i];
            for (let j = 0; j < playlist.files.length; j++) {
                const song = playlist.files[j];
                if (song.audioFile.isPlaying()) {
                    this.playingSlider.value(song.audioFile.currentTime());
                }
            }
        }
    }
}