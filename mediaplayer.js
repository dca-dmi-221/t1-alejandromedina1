class MediaPlayer {
    constructor(app) {
        this.app = app;
        this.blackPanther = this.app.loadSound('canciones/Black_Panther.m4a');
        this.allTheStars = this.app.loadSound('canciones/Kendrick_Lamar_SZA_All_The_Stars.ogg');
        this.x = this.app.loadSound('canciones/Kendrick_Lamar_X.ogg');
        this.theWays = this.app.loadSound('canciones/The_Ways.ogg');
        this.prayForMe = this.app.loadSound('canciones/The_Weeknd_Kendrick_Lamar_Pray_For_Me.m4a');
        this.listOfPlaylists = [];
        this.createPlaylist();
    }


    createPlaylist() {
        this.listOfPlaylists.push(new Playlist(
            'Black Panther',
            [new Song({
                    name: 'Black Panther',
                    artist: 'Kendrick Lamar',
                    genre: 'rap',
                    releaseDate: 2018,
                    length: 131,
                    audioFile: this.blackPanther
                }),
                new Song({
                    name: 'All the Stars',
                    artist: 'Kendrick Lamar',
                    genre: 'rap',
                    releaseDate: 2018,
                    length: 232,
                    audioFile: this.allTheStars
                }),
                new Song({
                    name: 'X',
                    artist: '2 Chainz',
                    genre: 'rap',
                    releaseDate: 2018,
                    length: 267,
                    audioFile: this.x
                }),
                new Song({
                    name: 'The Ways',
                    artist: 'Khalid',
                    genre: 'R&B',
                    releaseDate: 2018,
                    length: 239,
                    audioFile: this.theWays
                }),
                new Song({
                    name: 'Pray For Me',
                    artist: 'Khalid',
                    genre: 'R&B',
                    releaseDate: 2018,
                    length: 239,
                    audioFile: this.prayForMe
                })
            ]
        ));

    }

    playFiles() {
        this.listOfPlaylists[0].audioFile.play();
    }
    interface() {
        //
    }
    nowPlaying() {
        //
    }
    pause() {
        this.allTheStars.pause();
    }
    stop() {
        this.allTheStars.stop();
    }
    next() {
        //
    }
    back() {
        //
    }
    volume() {
        //
    }
    setPlayingPosition() {
        //
    }
    showPlayingTime() {
        //
    }
    mousePressedFunctions() {
        //
    }
    mouseDraggedFunctions() {
        //
    }
    mouseReleasedFuncionts() {
        //
    }
}