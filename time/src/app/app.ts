import { Component } from '@angular/core';
import { TvCommercials } from './components/tv-commercials/tv-commercials';
import { BatteryCharge } from './components/battery-charge/battery-charge';

@Component({
  selector: 'app-root',
  imports: [BatteryCharge],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'time';
}
