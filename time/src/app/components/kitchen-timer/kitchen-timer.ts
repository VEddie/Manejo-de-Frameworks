import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'kitchen-timer',
    imports: [],
    templateUrl: './kitchen-timer.html',
    styleUrl: './kitchen-timer.css',
})
export class KitchenTimer {
    @ViewChild('kitchenTimerCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;
    ctx!: CanvasRenderingContext2D;
    radius: number = 0;
    second: number = 60;
    isTicking: boolean = false;
    timerInterval!: NodeJS.Timeout;

    ngAfterViewInit() {
        this.ctx = this.canvasRef.nativeElement.getContext('2d')!;
        this.radius = (this.canvasRef.nativeElement.height) / 2
        this.ctx.translate(this.radius, this.radius);
        this.radius = this.radius * 0.75;
        this.drawClock();
    }

    startClock() {
        if(!this.isTicking) {
            this.timerInterval! = setInterval(() => {
                this.drawClock();
            }, 50)

            this.isTicking = !this.isTicking;
            console.log('Starting...')
        }
    }

    drawClock() {
        if(this.second === -1) {
            clearInterval(this.timerInterval!);
            return;
        }

        this.drawFace();
        this.drawTime();
        this.second--;
    }

    drawFace() {
        this.ctx.beginPath();
        this.ctx.arc(0, 0, this.radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = 'white';
        this.ctx.fill();
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = this.radius * 0.05;
        this.ctx.stroke();
        this.ctx.strokeStyle = 'red';
    }

    drawTime() {
        let nextSecond = (this.second * Math.PI) / 30;
        this.drawHand(nextSecond, this.radius * 0.9, this.radius * 0.02);
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
