import { Component } from '@angular/core';
import { BatteryCharge } from '../../components/battery-charge/battery-charge';
import { Bird } from '../../components/bird/bird';
import { Candelabra } from '../../components/candelabra/candelabra';
import { DayNightCycle } from '../../components/day-night-cycle/day-night-cycle';
import { GasMeter } from '../../components/gas-meter/gas-meter';
import { KitchenTimer } from '../../components/kitchen-timer/kitchen-timer';
import { Microwave } from '../../components/microwave/microwave';
import { PlanetRotation } from '../../components/planet-rotation/planet-rotation';
import { TreeGrowth } from '../../components/tree-growth/tree-growth';
import { TvCommercials } from '../../components/tv-commercials/tv-commercials';

@Component({
    selector: 'app-component-list',
    imports: [
        BatteryCharge,
        Bird,
        Candelabra,
        DayNightCycle,
        GasMeter,
        KitchenTimer,
        Microwave,
        PlanetRotation,
        TreeGrowth,
        TvCommercials,
    ],
    templateUrl: './component-list.html',
    styleUrl: './component-list.css',
})
export class ComponentList {
    

    selectedComponent = 0;

    //lookup event type
    check(event: any) {
        this.selectedComponent = parseInt(event.target.value);
        console.log(`Component ${this.selectedComponent} has been selected.`);
    }
    logout() {
        console.log('logout');
    }
}
