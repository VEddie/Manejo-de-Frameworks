import { Component } from '@angular/core';
import { TvCommercials } from './components/tv-commercials/tv-commercials';
import { BatteryCharge } from './components/battery-charge/battery-charge';
import { KitchenTimer } from './components/kitchen-timer/kitchen-timer';
import { TreeGrowth } from './components/tree-growth/tree-growth';
import { PlanetRotation } from './components/planet-rotation/planet-rotation';
import { Candelabra } from './components/candelabra/candelabra';
import { DayNightCycle } from './components/day-night-cycle/day-night-cycle';
import { Bird } from './components/bird/bird';
import { GasMeter } from './components/gas-meter/gas-meter';

@Component({
  selector: 'app-root',
  imports: [GasMeter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'time';
}
