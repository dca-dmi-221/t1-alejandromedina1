class MediaPlayer {
    constructor() {
        this.listOfPlaylists = [];
        this.createPlaylist();
    }
    createPlaylist() {
        this.listOfPlaylists.push(new Playlist({
            name: 'Black Panther'
        }));
        this.listOfPlaylists[0].push(new Song({
            name: 'Black Panther',
            artist: 'Kendrick Lamar',
            genre: 'rap',
            releaseDate: 2018,
            length: 131,
            audioFile: loadSound('canciones/Black Panther.m4a')
        }));
        this.listOfPlaylists[0].push(new Song({
            name: 'All the Stars',
            artist: 'Kendrick Lamar',
            genre: 'rap',
            releaseDate: 2018,
            length: 232,
            audioFile: loadSound('canciones/Kendrick Lamar, SZA - All The Stars.ogg')
        }));
        this.listOfPlaylists[0].push(new Song({
            name: 'X',
            artist: '2 Chainz',
            genre: 'rap',
            releaseDate: 2018,
            length: 267,
            audioFile: loadSound('canciones/Kendrick Lamar - X.ogg')
        }));
        this.listOfPlaylists[0].push(new Song({
            name: 'The Ways',
            artist: 'Khalid',
            genre: 'R&B',
            releaseDate: 2018,
            length: 239,
            audioFile: loadSound('canciones/The Ways.ogg')
        }));
        this.listOfPlaylists[0].push(new Song({
            name: 'Pray For Me',
            artist: 'Khalid',
            genre: 'R&B',
            releaseDate: 2018,
            length: 239,
            audioFile: loadSound('canciones/The Weeknd, Kendrick Lamar - Pray For Me.ogg')
        }));
    }
    interface() {
        //
    }
    nowPlaying() {
        //
    }
    pause() {
        //
    }
    stop() {
        //
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