import { Component } from '@angular/core';
import { TvCommercials } from './components/tv-commercials/tv-commercials';

@Component({
  selector: 'app-root',
  imports: [TvCommercials],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'time';
}
