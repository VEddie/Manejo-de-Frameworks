import { Component, Input } from '@angular/core';

@Component({
  selector: 'tree-growth',
  imports: [],
  templateUrl: './tree-growth.html',
  styleUrl: './tree-growth.css'
})
export class TreeGrowth {
    protected tree_src: string = 'img/tree-growth/dragonfruit';
    protected growthCycle: number = 0;
    private growthInterval!: NodeJS.Timeout;
    @Input({ required: true}) sec: number = 0;

    growth() {
        console.log(`Timer is: ${this.sec} seconds.`)
        this.growthInterval! = setInterval(() => {
            this.growthCycle < 6 ? this.growthCycle++ : this.stop()
        }, this.getCycleTime())
    }

    stop() {
        clearInterval(this.growthInterval!);
        console.log('Timer complete!');
    }

    getCycleTime() { 
        return parseFloat(((this.sec * 1000)/6).toFixed(3));
    }
}
