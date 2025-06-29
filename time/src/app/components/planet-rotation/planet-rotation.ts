import { Component, ElementRef, ViewChild } from '@angular/core';

interface Coordinate {
    x: number,
    y: number
}

@Component({
    selector: 'planet-rotation',
    imports: [],
    templateUrl: './planet-rotation.html',
    styleUrl: './planet-rotation.css',
})

export class PlanetRotation {
    @ViewChild('rotationCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;
    @ViewChild('earth', { static: false }) planet!: ElementRef<HTMLImageElement>;
    ctx!: CanvasRenderingContext2D;
    pos: number = 235;
    coordinates: Coordinate[] = [
        {x: 445, y: 235},
        {x: 375, y: 118},
        {x: 235, y: 75},
        {x: 94,  y: 118},

        {x: 25,  y: 235},
        {x: 94,  y: 353},
        {x: 235,  y: 395},
        {x: 375,  y: 353},
    ]

    counter = 0;
    rotationInterval!: NodeJS.Timeout;
    timer = 5;

    ngAfterViewInit() {
        this.ctx = this.canvasRef.nativeElement.getContext('2d')!;
        this.ctx.setLineDash([4, 18]);    
        this.ctx.strokeStyle = 'white';
        this.planet.nativeElement.addEventListener('load', () => {
            this.ctx.drawImage(this.planet.nativeElement, this.coordinates[this.counter].x, this.coordinates[this.counter].y);
        });
        this.draw();
    }

    ngOnDestroy() {
        clearInterval(this.rotationInterval)
    }

    start() {
        let rotationDelay = (this.timer / 7) * 1000;

        this.rotationInterval = setInterval(() => {
            this.counter++;
            
            if(this.counter === 8) {
                this.counter = 0;
                this.draw();
                clearInterval(this.rotationInterval)
                return;
            }

            this.draw();
        }, rotationDelay)
              
    }
    
    draw() {
        this.ctx.clearRect(0, 0, 500, 500);
        this.ctx.beginPath();
        this.ctx.ellipse(250, 250, 160, 210, Math.PI / 2, 0, 2 * Math.PI);
        this.ctx.stroke();
        this.ctx.drawImage(this.planet.nativeElement, this.coordinates[this.counter].x, this.coordinates[this.counter].y);
    }

}