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
    chargeValue = 10;

    // Should fix the "Is not yet implemented" error but gets a TypeError instead
    constructor(@Inject(PLATFORM_ID) platformId: Object) {
        this.isBrowser = isPlatformBrowser(platformId);
    }

    ngAfterViewInit(): void {
        // grab the 2d drawing context
        this.ctx = this.canvasRef.nativeElement.getContext('2d')!;
        this.drawSample();
    }

    sleep(delay: number) {
        return new Promise((resolve) => setTimeout(resolve, delay));
    }

    private async drawSample(): Promise<void> {
        // Min 10 width, Max 140 width
        // Yellow: #FADF63 @ 50% progress
        // Green: #57C75C @ 75% progress
        this.ctx.lineWidth = 3;
        this.ctx.strokeStyle = 'white';
        this.ctx.strokeRect(75, 240, 140, 59);

        while (this.chargeValue <= 136) {
            if (this.chargeValue < 70) this.ctx.fillStyle = '#E05C4C';
            else if (this.chargeValue < 100) this.ctx.fillStyle = '#FADF63';
            else this.ctx.fillStyle = '#57C75C';

            this.ctx.fillRect(77, 241, this.chargeValue, 56);

            await this.sleep(25);
            this.chargeValue += 9;
        }
    }
}
