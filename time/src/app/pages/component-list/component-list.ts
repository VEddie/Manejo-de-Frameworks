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
import { Router } from '@angular/router';
import { getUserData } from '../../utilities/functions';

interface LoggedUser {
    firstName: string,
    lastName: string
}

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
    constructor(private router: Router) {}
    selectedComponent = 0;
    currentUser: LoggedUser = getUserData();

    check(event: any) {
        this.selectedComponent = parseInt(event.target.value);
        console.log(`Component ${this.selectedComponent} has been selected.`);
    }
    logout() {
        localStorage.removeItem('user');
        this.router.navigate(['/']);
    }
}
