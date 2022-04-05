class Slider {
    constructor() {
        const X = 568;
        const Y = 1046
        const HEIGHT = 7;
        const WIDTH = 754;
        this.pointerX = 961;
        this.pointerY = 415 + (WIDTH / 2) + 25
        this.rectangle = {
            x: X,
            y: Y,
            w: WIDTH,
            h: HEIGHT
        }
        this.bonderies = {
            x: X,
            y: Y - 2,
            r: 15
        }
    }

    showSlider() {
        fill(86, 89, 97);
        noStroke();
        rect(this.rectangle.x, this.rectangle.y, this.rectangle.w, this.rectangle.h);
        if (this.song !== undefined) {
            const HEADTIME = map(song.audioFile.currentTime(), 0, song.audioFile.duration(), 0, this.rectangle.w);
            fill(214, 30, 208);
            rect(this.rectangle.x, this.rectangle.y, HEADTIME, this.rectangle.h)
        }
    }
    dragBonderie() {
        if (song !== undefined) {
            const isInRange = mouseX > this.bonderies.x1 && mouseX < this.bonderies.x2 && mouseY > this.bonderies.y1 && mouseY < this.bonderies.y2;
            if (isInRange) {
                    const head = map(mouseX, this.bonderies.x1, this.bonderies.x2, 0, song.audioFile.duration());
                    song.jump(head)
            }
        }
    }

    formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time / (minutes + 1));
        const secondsBonitos = seconds < 10 ? "0" + seconds.toString() : seconds
        return (minutes + ":" + secondsBonitos);
    }
}