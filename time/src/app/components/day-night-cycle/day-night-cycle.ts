import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'day-night-cycle',
  imports: [],
  templateUrl: './day-night-cycle.html',
  styleUrl: './day-night-cycle.css'
})
export class DayNightCycle {
    @ViewChild('landscape', { static: false }) scene!: ElementRef<HTMLImageElement>;
    cycleInterval!: NodeJS.Timeout;
    sceneNumber: number = 1;

    ngAfterViewInit() {
        console.log('Change')
        this.scene.nativeElement.src = '/img/day-night-cycle/scene1.jpg';
    }

    start() {
        this.cycleInterval = setInterval(() => {
            this.sceneNumber++;

            if(this.sceneNumber > 4) {
                clearInterval(this.cycleInterval);
                return;
            }

            this.scene.nativeElement.src = `/img/day-night-cycle/scene${this.sceneNumber}.jpg`;
        }, 1000)
    }
}
