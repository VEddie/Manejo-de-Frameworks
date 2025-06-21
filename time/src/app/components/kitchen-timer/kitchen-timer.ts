import { Component } from '@angular/core';

@Component({
  selector: 'kitchen-timer',
  imports: [],
  templateUrl: './kitchen-timer.html',
  styleUrl: './kitchen-timer.css'
})

export class KitchenTimer {
    name: string = 'Eddie';

    constructor() {

    }

    hello() {
        console.log('Hello')
    }
}
