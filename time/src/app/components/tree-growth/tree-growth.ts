import { Component, Input } from '@angular/core';
import { convertToSeconds } from '../../utilities/functions';

@Component({
  selector: 'tree-growth',
  imports: [],
  templateUrl: './tree-growth.html',
  styleUrl: './tree-growth.css'
})
export class TreeGrowth {
    tree_src: string = 'img/tree-growth/dragonfruit';
    growthCycle: number = 0;
    growthInterval!: NodeJS.Timeout;
    @Input({ required: false}) hours: number = 0;
    @Input({ required: false}) minutes: number = 0;
    @Input({ required: true}) seconds: number = 0;

    timer!: number;

    ngOnInit() {
        this.timer = convertToSeconds(this.hours, this.minutes, this.seconds);
    }

    growth() {
        console.log(`Timer is: ${this.timer} seconds.`)
        this.growthInterval! = setInterval(() => {
            this.growthCycle < 6 ? this.growthCycle++ : this.stop()
        }, this.getCycleTime())
    }

    stop() {
        clearInterval(this.growthInterval!);
        console.log('Timer complete!');
    }

    getCycleTime() { 
        return parseFloat(((this.timer * 1000)/6).toFixed(3));
    }
}
