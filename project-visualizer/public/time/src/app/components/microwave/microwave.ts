import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { convertToSeconds, getTimer } from '../../utilities/functions';

@Component({
  selector: 'microwave',
  imports: [],
  templateUrl: './microwave.html',
  styleUrl: './microwave.css'
})

export class Microwave {
    @ViewChild('microwaveCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;
    ctx!: CanvasRenderingContext2D;
    timer!: number;
    refreshInterval!: NodeJS.Timeout;
    @Input({ required: false}) hours: number = 0;
    @Input({ required: false}) minutes: number = 0;
    @Input({ required: true}) seconds: number = 0; 

    ngOnInit() {
        let f = new FontFace('Digital', "url('fonts/digital-7.ttf')");
        f.load().then(() => {
            this.ctx.font = "24px Digital";
            this.ctx.fillStyle = 'yellow'
        });
        this.timer = convertToSeconds(this.hours, this.minutes, this.seconds);
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
        this.ctx.fillText(getTimer(this.timer), 655, 98);
        this.timer--;
        this.refresh();
    }

    refresh() {
        this.refreshInterval = setInterval(() => {
            this.ctx.clearRect(646, 66, 90, 40)
            this.ctx.fillText(getTimer(this.timer), 655, 98);
    
            if(this.timer === 0) {
                clearInterval(this.refreshInterval);
                this.canvasRef.nativeElement.style.backgroundImage = "url('img/microwave/microwave_off.jpg')"
            }

            this.timer--;
        }, 1000);
    }
}
