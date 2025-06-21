import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'battery-charge',
    imports: [],
    templateUrl: './battery-charge.html',
    styleUrl: './battery-charge.css',
})
export class BatteryCharge {
    @ViewChild('myCanvas', { static: false })
    private canvasRef!: ElementRef<HTMLCanvasElement>;
    private ctx!: CanvasRenderingContext2D;
    public isBrowser: boolean;

    constructor(@Inject(PLATFORM_ID) platformId: Object) {
        this.isBrowser = isPlatformBrowser(platformId);
    }

    ngAfterViewInit(): void {
        // grab the 2d drawing context
        this.ctx = this.canvasRef.nativeElement.getContext('2d')!;
        this.drawSample();
    }

    private drawSample(): void {
        this.ctx.fillStyle = '#e05c4c';
        // Min 10 width, Max 140 width
        this.ctx.fillRect(76, 240, 10, 59);
    }
}
