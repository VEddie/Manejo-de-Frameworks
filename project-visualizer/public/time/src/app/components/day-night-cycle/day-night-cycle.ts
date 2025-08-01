import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { convertToSeconds } from '../../utilities/functions';

@Component({
    selector: 'day-night-cycle',
    imports: [],
    templateUrl: './day-night-cycle.html',
    styleUrl: './day-night-cycle.css',
})
export class DayNightCycle {
    @ViewChild('landscape', { static: false }) scene!: ElementRef<HTMLImageElement>;
    cycleInterval!: NodeJS.Timeout;
    sceneNumber: number = 1;
    @Input({ required: false }) hours: number = 0;
    @Input({ required: false }) minutes: number = 0;
    @Input({ required: true }) seconds: number = 0;
    timer!: number;

    ngOnInit() {
        this.timer = convertToSeconds(this.hours, this.minutes, this.seconds);
    }

    ngAfterViewInit() {
        console.log('Change');
        this.scene.nativeElement.src = '/img/day-night-cycle/scene1.jpg';
    }

    ngOnDestroy() {
        clearInterval(this.cycleInterval);
    }

    start() {
        let cycleLength = (this.timer / 4) * 1000;
        this.cycleInterval = setInterval(() => {
            this.sceneNumber++;
            console.log('new cycle');

            if (this.sceneNumber > 4) {
                clearInterval(this.cycleInterval);
                return;
            }

            this.scene.nativeElement.src = `/img/day-night-cycle/scene${this.sceneNumber}.jpg`;
        }, cycleLength);
    }
}
