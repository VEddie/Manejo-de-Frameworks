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

    ngAfterViewInit() {
        this.ctx = this.canvasRef.nativeElement.getContext('2d')!;
        this.ctx.setLineDash([4, 18]);    
        this.ctx.strokeStyle = 'white';
        this.planet.nativeElement.addEventListener('load', () => {
            this.ctx.drawImage(this.planet.nativeElement, this.coordinates[this.counter].x, this.coordinates[this.counter].y);
        });
        this.draw();
    }

    start() {
        this.counter++;
        if(this.counter === 8) this.counter = 0;
        console.log('moving');
        this.draw();        
    }
    
    draw() {
        this.ctx.clearRect(0, 0, 500, 500);
        this.ctx.beginPath();
        this.ctx.ellipse(250, 250, 160, 210, Math.PI / 2, 0, 2 * Math.PI);
        this.ctx.stroke();
        this.ctx.drawImage(this.planet.nativeElement, this.coordinates[this.counter].x, this.coordinates[this.counter].y);
    }

}


// Center
        //this.ctx.drawImage(this.planet.nativeElement, 235, 235);

        // radius A: 210
        // radius B: 160

        // // Horizontal
        // this.ctx.drawImage(this.planet!.nativeElement, 235 + 210, 235);
        // this.ctx.drawImage(this.planet!.nativeElement, 235 - 210, 235);

        // // Vertical
        // this.ctx.drawImage(this.planet!.nativeElement, 235, 235 + 160);
        // this.ctx.drawImage(this.planet!.nativeElement, 235, 235 - 160);

        // // Upper corners
        // this.ctx.drawImage(this.planet!.nativeElement, 235 + (235 * 0.6), 235 - (235 * 0.5));
        // this.ctx.drawImage(this.planet!.nativeElement, 235 - (235 * 0.6), 235 - (235 * 0.5));

        // // Lower corners
        // this.ctx.drawImage(this.planet!.nativeElement, 235 + (235 * 0.6), 235 + (235 * 0.5));
        // this.ctx.drawImage(this.planet!.nativeElement, 235 - (235 * 0.6), 235 + (235 * 0.5));

        // Step by step

        // this.ctx.drawImage(this.planet!.nativeElement, 235 + (235 * 0.894), 235);
        // this.ctx.drawImage(this.planet!.nativeElement, 235 + (235 * 0.6), 235 - (235 * 0.5));
        // this.ctx.drawImage(this.planet!.nativeElement, 235, 235 - (235 * 0.68));
        // this.ctx.drawImage(this.planet!.nativeElement, 235 - (235 * 0.6), 235 - (235 * 0.5));
        // this.ctx.drawImage(this.planet!.nativeElement, 235 - (235 * 0.894), 235);
        // this.ctx.drawImage(this.planet!.nativeElement, 235 - (235 * 0.6), 235 + (235 * 0.5));
        // this.ctx.drawImage(this.planet!.nativeElement, 235, 235 + (235 * 0.68));
        // this.ctx.drawImage(this.planet!.nativeElement, 235 + (235 * 0.6), 235 + (235 * 0.5));

        // Step by step
        // this.coordinates.forEach(coord => {
        //     this.ctx.drawImage(this.planet!.nativeElement, coord.x, coord.y);
        // })