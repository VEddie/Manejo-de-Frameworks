import { Component, ElementRef, ViewChild } from '@angular/core';
import { getTimer } from '../../utilities/functions';

@Component({
  selector: 'bird',
  imports: [],
  templateUrl: './bird.html',
  styleUrl: './bird.css'
})
export class Bird {
    @ViewChild('birdCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;
    @ViewChild('flyingBird', { static: false}) flyingBird!: ElementRef<HTMLImageElement>;
    @ViewChild('birdNest', { static: false}) birdNest!: ElementRef<HTMLImageElement>;
    @ViewChild('birdInNest', { static: false}) birdInNest!: ElementRef<HTMLImageElement>;
    ctx!: CanvasRenderingContext2D;
    flyInterval!: NodeJS.Timeout; 
    position = 600;
    timer = 20;
    maxTimer = this.timer;

    ngAfterViewInit() {
        this.ctx = this.canvasRef.nativeElement.getContext('2d')!;
        this.flyingBird.nativeElement.addEventListener('load', () => {
            this.ctx.drawImage(this.flyingBird.nativeElement, this.position, 250, 64, 64);
        });

        this.birdNest.nativeElement.addEventListener('load', () => {
            this.ctx.drawImage(this.birdNest.nativeElement, 125, 250, 64, 64);
        });
    }

     fly() {
        this.flyInterval = setInterval(() => {
            this.ctx.clearRect(195, 180, 600, 200);
            this.ctx.drawImage(this.flyingBird.nativeElement, this.position, 250, 64, 64);

            this.ctx.fillStyle = '4d6409'
            this.ctx.font = '24px Verdana';
            this.ctx.clearRect(200, 50, 200, 50);
            this.ctx.fillText(getTimer(this.timer), 240, 85);

            this.position -= 400 / this.maxTimer;
            this.timer--;

            // Bird has to travel 400 pixels.
            if(this.position < 200) {
                clearInterval(this.flyInterval)
                this.ctx.clearRect(125, 180, 600, 200);
                this.ctx.drawImage(this.birdInNest.nativeElement, 125, 250, 64, 64);
            } 
        }, 1000)
    }
}
