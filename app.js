class App {
    constructor() {
        this.ui = new UI();
        this.mediaPlayer = new MediaPlayer();
    }
    homeScreenFunctions() {
        this.mediaPlayer.drawPlaylists(this.ui);
    }
    playlistScreensFunctions() {
        //
    }
    setupFunctions() {
        this.mediaPlayer.createPlaylists();
    }
    drawFunctions() {
        this.ui.showScreen();
        this.homeScreenFunctions();
        this.ui.showSongs(this.mediaPlayer.selectedPlaylist);
        this.mediaPlayer.songPlaying(this.ui);
    }
    mousePressedFunctions() {
        this.mediaPlayer.selectPlaylist(this.ui);
        this.ui.homeScreen();
        this.mediaPlayer.createNewPlaylist(this.ui.pickPlaylistCover());
        this.mediaPlayer.reproducePlaylist(this.ui);
        this.mediaPlayer.nextSong(this.ui);
        this.mediaPlayer.previousSong(this.ui);
        this.mediaPlayer.pauseSong(this.ui);
        //this.mediaPlayer.resumeSong(this.ui)
    }
    mouseDraggedFunctions() {
        this.mediaPlayer.sliderDrag(this.ui);
    }
    mouseReleasedFunctions() {
        //
    }
}