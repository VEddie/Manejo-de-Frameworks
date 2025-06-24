import { Component } from '@angular/core';
import { TvCommercials } from './components/tv-commercials/tv-commercials';
import { BatteryCharge } from './components/battery-charge/battery-charge';
import { KitchenTimer } from './components/kitchen-timer/kitchen-timer';
import { TreeGrowth } from './components/tree-growth/tree-growth';
import { PlanetRotation } from './components/planet-rotation/planet-rotation';
import { Candelabra } from './components/candelabra/candelabra';
import { DayNightCycle } from './components/day-night-cycle/day-night-cycle';

@Component({
  selector: 'app-root',
  imports: [DayNightCycle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'time';
}
