import { Component, ElementRef, ViewChild } from '@angular/core';

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
    position = 600;
    flyInterval!: NodeJS.Timeout; 

    ngAfterViewInit() {
        this.ctx = this.canvasRef.nativeElement.getContext('2d')!;
        this.ctx.drawImage(this.flyingBird.nativeElement, this.position, 250, 64, 64);
        this.ctx.drawImage(this.birdNest.nativeElement, 125, 250, 64, 64);
    }

     fly() {
        this.flyInterval = setInterval(() => {
            this.ctx.clearRect(195, 180, 600, 200);
            this.ctx.drawImage(this.flyingBird.nativeElement, this.position, 250, 64, 64);
            this.position--;

            if(this.position < 200) {
                clearInterval(this.flyInterval)
                this.ctx.clearRect(125, 180, 600, 200);
                this.ctx.drawImage(this.birdInNest.nativeElement, 125, 250, 64, 64);
                return;
            } 
        }, 10)
    }
}
