class MediaPlayer {
    constructor(app) {
        this.app = app;
        this.blackPanther = this.app.loadSound('songs/Black_Panther.m4a');
        this.allTheStars = this.app.loadSound('songs/Kendrick_Lamar_SZA_All_The_Stars.ogg');
        this.x = this.app.loadSound('songs/Kendrick_Lamar_X.ogg');
        this.theWays = this.app.loadSound('songs/The_Ways.ogg');
        this.prayForMe = this.app.loadSound('songs/The_Weeknd_Kendrick_Lamar_Pray_For_Me.m4a');
        this.opps = this.app.loadSound('songs/Opps.m4a');
        this.iAm = this.app.loadSound('songs/I_Am.m4a');
        this.paramedic = this.app.loadSound('songs/Paramedic.ogg');
        this.bloodyWaters = this.app.loadSound('songs/Bloody_Waters.m4a');
        this.kingsDead = this.app.loadSound('songs/Kings_Dead.ogg');
        this.redemption = this.app.loadSound('songs/Redemption.m4a');
        this.seasons = this.app.loadSound('songs/Seasons.ogg');
        this.bigShot = this.app.loadSound('songs/Big_Shot.ogg');
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
            length: 131,
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
    
    playPlaylist() {
        this.stopSong();
        if (dist(100, 200, mouseX, mouseY) < 25) {
            this.listOfPlaylists[0].files[0].audioFile.play();
        } else if (dist(200, 200, mouseX, mouseY) < 25) {
            this.listOfPlaylists[1].files[0].audioFile.play();
        } else if (dist(300, 200, mouseX, mouseY) < 25) {
            this.listOfPlaylists[2].files[0].audioFile.play();
        }
        this.nowPlaying();
    }
    
    resume() {
        for (let i = 0; i < this.listOfPlaylists.length; i++) {
            const playlist = this.listOfPlaylists[i];
            for (let j = 0; j < playlist.files.length; j++) {
                const song = playlist.files[j];
                if (song.audioFile.isPaused()) {
                    song.audioFile.play();
                }
            }
        }
    }
    
    nowPlaying() {
        for (let i = 0; i < this.listOfPlaylists.length; i++) {
            const playlist = this.listOfPlaylists[i];
            for (let j = 0; j < playlist.files.length; j++) {
                const song = playlist.files[j];
                if (song.audioFile.isPlaying()) {
                    console.log('Now Playing ' + song.name + ' from ' + song.artist);
                    console.log(song.audioFile);
                }
            }
        }
    }
    pause() {
        for (let i = 0; i < this.listOfPlaylists.length; i++) {
            const playlist = this.listOfPlaylists[i];
            for (let j = 0; j < playlist.files.length; j++) {
                const song = playlist.files[j];
                song.audioFile.pause();
            }
        }
    }
    stopSong() {
        for (let i = 0; i < this.listOfPlaylists.length; i++) {
            const playlist = this.listOfPlaylists[i];
            for (let j = 0; j < playlist.files.length; j++) {
                const song = playlist.files[j];
                song.audioFile.stop();
            }
        }
    }
    
    interface() {
        //
    }
    
    mousePressedFunctions() {
        /*this.listOfPlaylists[0].playPlaylist(100,200);
        this.listOfPlaylists[1].playPlaylist(200,200);
        this.listOfPlaylists[2].playPlaylist(300,200);*/
        this.playPlaylist();
    }
    mouseDraggedFunctions() {
        //
    }
    mouseReleasedFuncionts() {
        //
    }
    keyPressedFunctions(){
        if (key === 'p') {
            this.pause();
          }
          if (key === 's') {
            this.stopSong();
          }
          if (key === 'r') {
            this.resume();
          }
          for (let i = 0; i < this.listOfPlaylists.length; i++) {
            const playlist = this.listOfPlaylists[i];
            for (let j = 0; j < playlist.files.length; j++) {
                const song = playlist.files[j];
                song.volume();
                playlist.next();
                playlist.back();
            }
        }
    }
    drawFunctions(){
        for (let i = 0; i < this.listOfPlaylists.length; i++) {
            const playlist = this.listOfPlaylists[i];
            for (let j = 0; j < playlist.files.length; j++) {
                const song = playlist.files[j];
                song.showPlayingTime();
                song.showLength();
            }
        }
    }
}