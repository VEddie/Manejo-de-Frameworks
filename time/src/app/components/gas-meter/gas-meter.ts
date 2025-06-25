import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gas-meter',
  imports: [],
  templateUrl: './gas-meter.html',
  styleUrl: './gas-meter.css'
})
export class GasMeter {
    @ViewChild('gasCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;
    @ViewChild('gasMeter', { static: false }) gasMeter!: ElementRef<HTMLCanvasElement>;
    ctx!: CanvasRenderingContext2D;
    radius: number = 0;
    second: number = 50;
    isTicking: boolean = false;
    timerInterval!: NodeJS.Timeout;

    // Start at 50, end at 10

    ngAfterViewInit() {
        this.ctx = this.canvasRef.nativeElement.getContext('2d')!;
        this.radius = (this.canvasRef.nativeElement.height -20)
        this.ctx.translate(this.radius + 33, this.radius - 20);
        this.radius = this.radius * 0.75;
        this.ctx.strokeStyle = 'red';
        this.drawClock();
    }

    start() {
        if(!this.isTicking) {
            this.timerInterval! = setInterval(() => {
                this.drawClock();
            }, 50)

            this.isTicking = !this.isTicking;
            console.log('Starting...')
        }
    }

    drawClock() {
        if(this.second > 70) {
            clearInterval(this.timerInterval!);
            return;
        }
        this.ctx.clearRect(-200, -200, 400, 500);

        this.drawTime();
        this.second++;
    }

    drawTime() {
        let nextSecond = (this.second * Math.PI) / 30;
        this.drawHand(nextSecond, this.radius * 0.90, this.radius * 0.04);
    }

    drawHand(position: number, length: number, width: number) {
        this.ctx.beginPath();
        this.ctx.lineWidth = width;
        this.ctx.moveTo(0, 0);
        this.ctx.rotate(position);
        this.ctx.lineTo(0, -length);
        this.ctx.stroke();
        this.ctx.rotate(-position);
    }
}
