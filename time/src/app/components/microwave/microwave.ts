import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'microwave',
  imports: [],
  templateUrl: './microwave.html',
  styleUrl: './microwave.css'
})
export class Microwave {
    @ViewChild('microwaveCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;
    ctx!: CanvasRenderingContext2D;
    timer = 10800;
    refreshInterval!: NodeJS.Timeout; 

    ngOnInit() {
        let f = new FontFace('Digital', "url('fonts/digital-7.ttf')");
        f.load().then(() => {
            this.ctx.font = "24px Digital";
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
        this.ctx.fillText(this.getTimer(), 655, 98);
        this.timer--;
        this.refresh();
    }

    refresh() {
        this.refreshInterval = setInterval(() => {
            this.ctx.clearRect(646, 66, 90, 40)
            this.ctx.fillText(this.getTimer(), 655, 98);
    
            if(this.timer === 0) {
                clearInterval(this.refreshInterval);
                this.canvasRef.nativeElement.style.backgroundImage = "url('img/microwave/microwave_off.jpg')"
            }

            this.timer--;
        }, 250);
    }

    getTimer() {
        let hours = Math.trunc(this.timer / 3600)
        let minutes = Math.trunc((this.timer - (3600 * hours)) / 60);
        let seconds = this.timer - (hours * 3600) - (minutes * 60);
        return `${this.getFormat(hours)}:${this.getFormat(minutes)}:${this.getFormat(seconds)}`;
    }

    getFormat(digit: number) {
        return digit <= 9 ? `0${digit}` : `${digit}`;
    }
}
