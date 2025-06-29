import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { convertToSeconds } from '../../utilities/functions';

interface Coordinate {
    x: number;
    y: number;
}

@Component({
    selector: 'candelabra',
    imports: [],
    templateUrl: './candelabra.html',
    styleUrl: './candelabra.css',
})
export class Candelabra {
    ctx!: CanvasRenderingContext2D;
    lightInterval!: NodeJS.Timeout;
    @ViewChild('candelabraCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;
    @ViewChild('fire', { static: false }) fire!: ElementRef<HTMLImageElement>;
    @Input({ required: false }) hours: number = 0;
    @Input({ required: false }) minutes: number = 0;
    @Input({ required: true }) seconds: number = 0;
    timer!: number;
    maxTimer!: number;
    isBeingLit = false;

    coordinates: Coordinate[] = [
        { x: 77, y: 139 },
        { x: 133, y: 122 },
        { x: 188, y: 100 },
        { x: 238, y: 44 },
        { x: 281, y: 100 },
        { x: 336, y: 122 },
        { x: 392, y: 139 },
    ];

    i = 0;

    ngOnInit() {
        this.timer = convertToSeconds(this.hours, this.minutes, this.seconds);
        this.maxTimer = this.timer;
    }

    ngAfterViewInit() {
        this.ctx = this.canvasRef.nativeElement.getContext('2d')!;
    }

    ngOnDestroy() {
        clearInterval(this.lightInterval);
    }

    start() {
        let lightDelay = (this.maxTimer / 7) * 1000;
        this.isBeingLit = !this.isBeingLit;

        this.lightInterval = setInterval(() => {
            this.ctx.drawImage(
                this.fire!.nativeElement,
                this.coordinates[this.i].x,
                this.coordinates[this.i].y,
                32,
                48
            );
            this.i++;
            if (this.i > 6) clearInterval(this.lightInterval);
        }, lightDelay);
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
