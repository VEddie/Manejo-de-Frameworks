import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { convertToSeconds, getTimer } from '../../utilities/functions';

@Component({
    selector: 'gas-meter',
    imports: [],
    templateUrl: './gas-meter.html',
    styleUrl: './gas-meter.css',
})
export class GasMeter {
    @ViewChild('gasCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;
    @ViewChild('gasMeter', { static: false }) gasMeter!: ElementRef<HTMLCanvasElement>;

    ctx!: CanvasRenderingContext2D;
    radius: number = 0;
    angle: number = 50;
    isTicking: boolean = false;
    timerInterval!: NodeJS.Timeout;

    @Input({ required: false }) hours: number = 0;
    @Input({ required: false }) minutes: number = 0;
    @Input({ required: true }) seconds: number = 0;
    timer!: number;
    maxTimer!: number

    // Start at 50, end at 70

    ngOnInit() {
        this.timer = convertToSeconds(this.hours, this.minutes, this.seconds);
        this.maxTimer = this.timer;
    }

    ngAfterViewInit() {
        this.ctx = this.canvasRef.nativeElement.getContext('2d')!;
        this.radius = this.canvasRef.nativeElement.height - 20;
        this.ctx.translate(this.radius + 33, this.radius - 20);
        this.radius = this.radius * 0.75;
        this.ctx.strokeStyle = 'red';
        this.ctx.fillStyle = 'red';
        this.ctx.font = '20px Verdana';

        // Timer
        this.ctx.clearRect(-10, -255, 200, 50);
        this.ctx.fillText('Tank filled in:', -150, -220);
        this.ctx.fillText(getTimer(this.timer), -5, -220);

        this.drawMeter();
    }

    ngOnDestroy() {
        clearInterval(this.timerInterval);
    }

    start() {
        // Disable button
        this.isTicking = !this.isTicking;

        this.timerInterval = setInterval(() => {
            this.drawMeter();

            if (this.timer < 0) {
                clearInterval(this.timerInterval);
                return;
            }
        }, 1000);
    }

    drawMeter() {
        // Redraw hand
        this.ctx.clearRect(-200, -200, 400, 500);
        let nextAngle = (this.angle * Math.PI) / 30;
        this.updateMeter(nextAngle, this.radius * 0.9, this.radius * 0.04);
        
    }

    updateMeter(position: number, length: number, width: number) {
        this.ctx.beginPath();
        this.ctx.lineWidth = width;
        this.ctx.moveTo(0, 0);
        this.ctx.rotate(position);
        this.ctx.lineTo(0, -length);
        this.ctx.stroke();
        this.ctx.rotate(-position);

        this.ctx.clearRect(-10, -255, 200, 50);
        this.ctx.fillText(getTimer(this.timer), -5, -220);

        this.angle += 20 / this.maxTimer;
        this.timer--;
    }
}
