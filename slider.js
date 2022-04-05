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
    }

    showSlider(currentTime, duration) {
        fill(86, 89, 97);
        noStroke();
        rect(this.rectangle.x, this.rectangle.y, this.rectangle.w, this.rectangle.h);
        const HEADTIME = map(currentTime, 0, duration, 0, this.rectangle.w);
        fill(214, 30, 208);
        rect(this.rectangle.x, this.rectangle.y, HEADTIME, this.rectangle.h);
    }
    dragBonderie(song) {
        const bonderies = {
            x1: this.rectangle.x,
            x2: this.rectangle.x + this.rectangle.w,
            y1: this.rectangle.y - 2,
            y2: this.rectangle.y + this.rectangle.h + 2,
        }
        const isInRange = mouseX > bonderies.x1 && mouseX < bonderies.x2 && mouseY > bonderies.y1 && mouseY < bonderies.y2;
        if (isInRange) {
            const head = map(mouseX, bonderies.x1, bonderies.x2, 0, song.audioFile.duration());
            song.audioFile.jump(head)
        }
    }

    formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time / (minutes + 1));
        const secondsBonitos = seconds < 10 ? "0" + seconds.toString() : seconds
        return (minutes + ":" + secondsBonitos);
    }
}