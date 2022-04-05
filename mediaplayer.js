class MediaPlayer {
    constructor() {
        this.playlists = [];
        this.songs = [];
        this.songs[0] = loadSound('songs/Suspense Short .m4a');
        this.songs[1] = loadSound('songs/Kendrick_Lamar_SZA_All_The_Stars.ogg');
        this.songs[2] = loadSound('songs/Kendrick_Lamar_X.ogg');
        this.songs[3] = loadSound('songs/The_Ways.ogg');
        this.songs[4] = loadSound('songs/The_Weeknd_Kendrick_Lamar_Pray_For_Me.m4a');
        this.songs[5] = loadSound('songs/Opps.m4a');
        this.songs[6] = loadSound('songs/I_Am.m4a');
        this.songs[7] = loadSound('songs/Paramedic.ogg');
        this.songs[8] = loadSound('songs/Bloody_Waters.m4a');
        this.songs[9] = loadSound('songs/Kings_Dead.ogg');
        this.songs[10] = loadSound('songs/Redemption.m4a');
        this.songs[11] = loadSound('songs/Seasons.ogg');
        this.songs[12] = loadSound('songs/Big_Shot.ogg');
        this.covers = [];
        this.covers[0] = loadImage('./resources/cover1.png');
        this.covers[1] = loadImage('./resources/cover2.png');
        this.covers[2] = loadImage('./resources/cover3.png');
        this.albums = []
        this.albums[0] = loadImage('./resources/album1.png');
        this.albums[1] = loadImage('./resources/album2.png');
        this.albums[2] = loadImage('./resources/album3.png');
        this.selectedPlaylist = undefined
        this.volumeSlider = undefined;
        this.playingSlider = new Slider();
        this.soundInput = undefined;
        this.isPlaying = false;
    }
    createSoundInput() {
        this.soundInput = createFileInput((file) => {
            console.log(file);
            this.handleSong(file);
        });
        this.soundInput.position(1400, 857);
        this.soundInput.style('background-color', '#474747');
    }
    createVolumeInput() {
        this.volumeSlider = createSlider(0, 1, 0.5, 0.01);
        this.volumeSlider.style('color', '#d61ed0');
        this.volumeSlider.position(1680, 1003);
    }
    volume() {
        this.playlists.forEach(playlist => {
            playlist.songs.forEach(song => {
                song.volumeValue(this.volumeSlider.value());
            });
        });
    }
    createPlaylists() {
        this.playlists.push(new Playlist({
            name: 'Black Panther Vol.1 ',
            cover: this.covers[0],
            x: undefined,
            y: undefined,
            album: this.albums[0]
        }));
        this.playlists.push(new Playlist({
            name: 'Black Panther Vol.2 ',
            cover: this.covers[1],
            x: undefined,
            y: undefined,
            album: this.albums[1]
        }));
        this.playlists.push(new Playlist({
            name: 'Black Panther Vol.3 ',
            cover: this.covers[2],
            x: undefined,
            y: undefined,
            album: this.albums[2]
        }));
        this.createSongsForPlaylist();
    }
    drawPlaylists(ui) {
        if (ui.interface === 0) {
            let xi = 893
            let yi = 130
            const step = 330
            this.playlists.forEach((playlist, i) => {
                const mod = i % 3;
                if (mod === 0) yi += 300;
                playlist.x = xi + (step * mod);
                playlist.y = yi;
                image(playlist.cover, playlist.x, playlist.y);
                if (this.volumeSlider !== undefined && this.soundInput !== undefined) {
                    this.volumeSlider.style('display', 'none');
                    this.soundInput.style('display', 'none');
                }
            });
        }
        if (ui.interface !== 0) {
            let xi = 1579
            let yi = 176
            const step = 100
            this.playlists.forEach((playlist, i) => {
                playlist.x = xi;
                playlist.y = yi + (step * i);
                fill(255);
                textStyle(BOLD);
                textSize(24);
                text(playlist.name, playlist.x, playlist.y);
                textStyle(NORMAL);
                textSize(18);
                fill(214, 30, 208);
                text(playlist.songs.length + ' songs', playlist.x, playlist.y + 20);
                this.volume();
                this.selectedPlaylist.showCover();
                this.playingSlider.showSlider();
            });
        }
    }
    selectPlaylist(ui) {
        if (ui.interface === 0) {
            this.playlists.forEach(playlist => {
                const width = playlist.x + 305;
                const height = playlist.y + 270;
                if (playlist.x < mouseX && mouseX < width && playlist.y < mouseY && mouseY < height) {
                    ui.interface = 1;
                    this.createSoundInput();
                    this.createVolumeInput();
                    if (this.selectedPlaylist !== playlist && this.selectedPlaylist !== undefined) {
                        console.log(this.selectedPlaylist.currentSong)
                        this.selectedPlaylist.currentSong.pauseSong();
                    }
                    this.selectedPlaylist = playlist;
                }
            });
        }
    }
    createSongsForPlaylist() {
        this.playlists[0].songs.push(new Song({
            name: 'Black Panther',
            artist: 'Kendrick Lamar',
            genre: 'rap',
            releaseDate: 2018,
            audioFile: this.songs[0],
            length: Math.floor(this.songs[0].duration())
        }))
        this.playlists[0].songs.push(new Song({
            name: 'All the Stars',
            artist: 'Kendrick Lamar',
            genre: 'rap',
            releaseDate: 2018,
            audioFile: this.songs[1],
            length: Math.floor(this.songs[1].duration())
        }))
        this.playlists[0].songs.push(new Song({
            name: 'X',
            artist: '2 Chainz',
            genre: 'rap',
            releaseDate: 2018,
            audioFile: this.songs[2],
            length: Math.floor(this.songs[2].duration())
        }))
        this.playlists[0].songs.push(new Song({
            name: 'The Ways',
            artist: 'Khalid',
            genre: 'R&B',
            releaseDate: 2018,
            audioFile: this.songs[3],
            length: Math.floor(this.songs[3].duration())
        }))
        this.playlists[0].songs.push(new Song({
            name: 'Pray For Me',
            artist: 'Khalid',
            genre: 'R&B',
            releaseDate: 2018,
            audioFile: this.songs[4],
            length: Math.floor(this.songs[4].duration())
        }))
        this.playlists[1].songs.push(new Song({
            name: 'Opps',
            artist: 'Vince Staples',
            genre: 'rap',
            releaseDate: 2018,
            audioFile: this.songs[5],
            length: Math.floor(this.songs[5].duration())
        }))
        this.playlists[1].songs.push(new Song({
            name: 'I Am',
            artist: 'Jorja Smith',
            genre: 'rap',
            releaseDate: 2018,
            audioFile: this.songs[6],
            length: Math.floor(this.songs[6].duration())
        }))
        this.playlists[1].songs.push(new Song({
            name: 'Paramedic!',
            artist: 'SOB X RBE',
            genre: 'rap',
            releaseDate: 2018,
            audioFile: this.songs[7],
            length: Math.floor(this.songs[7].duration())
        }))
        this.playlists[1].songs.push(new Song({
            name: 'Bloody Waters',
            artist: 'Anderson .Paak',
            genre: 'R&B',
            releaseDate: 2018,
            audioFile: this.songs[8],
            length: Math.floor(this.songs[8].duration())
        }))
        this.playlists[1].songs.push(new Song({
            name: 'Kings Dead',
            artist: 'Kendrick Lamar',
            genre: 'R&B',
            releaseDate: 2018,
            audioFile: this.songs[9],
            length: Math.floor(this.songs[9].duration())
        }))
        this.playlists[2].songs.push(new Song({
            name: 'Redemption',
            artist: 'Babes Wodumo',
            genre: 'rap',
            releaseDate: 2018,
            audioFile: this.songs[10],
            length: Math.floor(this.songs[10].duration())
        }))
        this.playlists[2].songs.push(new Song({
            name: 'Seasons',
            artist: 'Mozzy',
            genre: 'rap',
            releaseDate: 2018,
            audioFile: this.songs[11],
            length: Math.floor(this.songs[11].duration())
        }))
        this.playlists[2].songs.push(new Song({
            name: 'Big Shot',
            artist: 'Travis Scott',
            genre: 'rap',
            releaseDate: 2018,
            audioFile: this.songs[12],
            length: Math.floor(this.songs[12].duration())
        }))
    }
    handleSong(song) {
        let songFile = new p5.SoundFile(song);
        const name = window.prompt('Name of the song: ');
        const artist = window.prompt('Artist of the song: ');
        const genre = window.prompt('Genre of the song: ')
        const releaseDate = window.prompt('Release Date: ')
        const playlist = window.prompt('In which playlist would you like to add the song?');
        const numberOfPlaylist = parseInt(playlist) - 1;
        this.playlists[numberOfPlaylist].songs.push(new Song({
            name: name,
            artist: artist,
            genre: genre,
            releaseDate: releaseDate,
            audioFile: songFile,
            length: Math.floor(songFile.duration())
        }))
    }
    createNewPlaylist(pick) {
        if (dist(928, 353, mouseX, mouseY) < 30) {
            const name = window.prompt('Name your Playlist');
            this.playlists.push(new Playlist({
                name: name,
                cover: this.covers[pick],
                x: 893,
                y: 700
            }));
        }
    }
    reproducePlaylist(ui) {
        if (ui.interface !== 0) {
            if (dist(211.5, 425.5, mouseX, mouseY) < 30) {

                this.selectedPlaylist.playPlaylist();
            }
        }
    }
    nextSong(ui) {
        if (ui.interface !== 0) {
            if (dist(1006, 1002, mouseX, mouseY) < 30) {
                this.selectedPlaylist.next()
            }
        }
    }
    previousSong(ui) {
        if (ui.interface !== 0) {
            this.selectedPlaylist.previous();
        }
    }
    songPlaying(ui) {
        if (ui.interface !== 0 && this.selectedPlaylist.currentSong !== undefined) {
            this.selectedPlaylist.nowPlaying();
        }
    }
    sliderDrag(){
        this.playingSlider.dragBonderie();
    }
}