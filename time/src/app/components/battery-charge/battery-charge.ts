import { Component, ElementRef, ViewChild } from '@angular/core';
import { getTimer, sleep } from '../../utilities/functions';
import { batteryColors } from "./../../utilities/constants";

@Component({
    selector: 'battery-charge',
    imports: [],
    templateUrl: './battery-charge.html',
    styleUrl: './battery-charge.css',
})

export class BatteryCharge {
    @ViewChild('myCanvas', { static: false })
    canvasRef!: ElementRef<HTMLCanvasElement>;
    ctx!: CanvasRenderingContext2D;
    refreshInterval!: NodeJS.Timeout;
    timeRemaining = 35;
    maxTimer = this.timeRemaining;
    chargeMeter = 0;
    chargeStep = 0;

    ngAfterViewInit() {
        this.ctx = this.canvasRef.nativeElement.getContext('2d')!;
        this.drawPhone();
    }

    drawPhone() {
        this.ctx.lineWidth = 3;
        this.ctx.strokeStyle = 'white';
        this.ctx.font = '16px Verdana';
        this.ctx.strokeRect(75, 240, 140, 59);
        this.ctx.fillStyle = 'white';
        this.ctx.lineWidth = 2;
        this.ctx.fillText('Time until full charge', 60, 375);
        this.ctx.strokeText('0%', 130, 220);
        this.ctx.strokeText(`${Math.floor((this.chargeMeter))}%`, 130, 220);
        this.ctx.fillText(getTimer(this.timeRemaining), 110, 415);
        this.update();
    }

    update() {
        this.refreshInterval = setInterval(() => {   
            if (this.chargeMeter < 20) this.ctx.fillStyle = batteryColors.red;

            else if (this.chargeMeter < 50) this.ctx.fillStyle = batteryColors.yellow;

            else this.ctx.fillStyle = batteryColors.green;

            // Bar fills at 136
            this.ctx.fillRect(77, 241, this.chargeStep, 56);    
            this.ctx.clearRect(100, 190, 100, 40);
            this.ctx.strokeText(`${Math.floor((this.chargeMeter))}%`, 130, 220);

            this.ctx.fillStyle = 'white';
            this.ctx.clearRect(100, 390, 100, 40);
            this.ctx.fillText(getTimer(this.timeRemaining), 110, 415);
 
            this.timeRemaining--;
            this.chargeMeter += 100 / this.maxTimer;
            this.chargeStep += 136 / this.maxTimer;

            if(this.timeRemaining < 0) {
                this.ctx.clearRect(50, 340, 300, 90);
                clearInterval(this.refreshInterval);
            }
        }, 1000)
    }


}
