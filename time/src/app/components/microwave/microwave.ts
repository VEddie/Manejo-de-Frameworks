import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'microwave',
  imports: [],
  templateUrl: './microwave.html',
  styleUrl: './microwave.css'
})
export class Microwave {
    // new FontFace('Digital', "url('/img/microwave/microwave_off.jpg')")

    @ViewChild('microwaveCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;
    ctx!: CanvasRenderingContext2D;

    ngOnInit() {
        let f = new FontFace('Digital', "url('fonts/digital-7.ttf')");
        f.load().then(() => {
            this.ctx.font = "32px Digital";
            this.ctx.fillStyle = 'yellow'
        })
    }

    ngAfterViewInit() {
        this.ctx = this.canvasRef.nativeElement.getContext('2d')!;
    }

    start() {
        console.log('Starting...');
        this.canvasRef.nativeElement.style.backgroundImage = "url('img/microwave/microwave_on.jpg')"
        this.ctx.lineWidth = 3;
        this.ctx.strokeStyle = 'yellow';
        this.ctx.clearRect(646, 66, 90, 40)
        this.ctx.fillText(this.getTimer(), 658, 98);
    }

    getTimer() {
        const timer = 599;
        let minutes = Math.trunc(timer/60);
        let seconds = timer - (minutes * 60);

        return `${this.getFormat(minutes)}:${this.getFormat(seconds)}`;
    }

    getFormat(digit: number) {
        return digit <= 9 ? `0${digit}` : `${digit}`;
    }
}
