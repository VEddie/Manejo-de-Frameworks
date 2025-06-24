import { Component, ElementRef, ViewChild } from '@angular/core';

interface Coordinate {
    x: number,
    y: number;
}

@Component({
  selector: 'candelabra',
  imports: [],
  templateUrl: './candelabra.html',
  styleUrl: './candelabra.css'
})
export class Candelabra {
    @ViewChild('candelabraCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;
    @ViewChild('fire', { static: false }) fire!: ElementRef<HTMLImageElement>;
    ctx!: CanvasRenderingContext2D;
    lightInterval!: NodeJS.Timeout;

    coordinates: Coordinate[] = [
        { x: 77,  y: 139 },
        { x: 133, y: 122 },
        { x: 188, y: 100 },
        { x: 238, y: 44 },
        { x: 281, y: 100 },
        { x: 336, y: 122 },
        { x: 392, y: 139 },
    ];

    i = 0;

    ngAfterViewInit() {
        this.ctx = this.canvasRef.nativeElement.getContext('2d')!;
        
    }

    start() {
        console.log('light')
        if(this.i > 6 ) return;
        
        this.ctx.drawImage(this.fire!.nativeElement, this.coordinates[this.i].x, this.coordinates[this.i].y, 32, 48);
        this.i++;
    }

}

/*
this.ctx.drawImage(this.fire!.nativeElement, 77, 139, 32, 48);
this.ctx.drawImage(this.fire!.nativeElement, 133, 122, 32, 48);
this.ctx.drawImage(this.fire!.nativeElement, 188, 100, 32, 48);
this.ctx.drawImage(this.fire!.nativeElement, 238, 44, 32, 48);
this.ctx.drawImage(this.fire!.nativeElement, 281, 100, 32, 48);
this.ctx.drawImage(this.fire!.nativeElement, 336, 122, 32, 48);
this.ctx.drawImage(this.fire!.nativeElement, 392, 139, 32, 48);

*/
