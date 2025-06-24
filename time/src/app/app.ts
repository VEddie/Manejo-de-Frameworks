import { Component } from '@angular/core';
import { TvCommercials } from './components/tv-commercials/tv-commercials';
import { BatteryCharge } from './components/battery-charge/battery-charge';
import { KitchenTimer } from './components/kitchen-timer/kitchen-timer';
import { TreeGrowth } from './components/tree-growth/tree-growth';

@Component({
  selector: 'app-root',
  imports: [KitchenTimer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'time';
}
