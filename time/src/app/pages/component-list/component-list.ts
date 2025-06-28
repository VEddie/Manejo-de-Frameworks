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
import { HotToastService } from '@ngneat/hot-toast';
import { StorageService } from '../../services/storage-service';

interface LoggedUser {
    firstName: string;
    lastName: string;
}

@Component({
    selector: 'component-list',
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
    constructor(
        private toast: HotToastService,
        private storage: StorageService,
        private router: Router
    ) {}

    selectedComponent = 0;
    authenticatedUser: string = '';

    ngOnInit() {
        const authenticatedUser = this.storage.getItem('user');
        if (!authenticatedUser) this.router.navigate(['']);

        else this.authenticatedUser = authenticatedUser;
    }

    check(event: any) {
        this.selectedComponent = parseInt(event.target.value);
        console.log(`Component ${this.selectedComponent} has been selected.`);
    }
    logout() {
        this.storage.clear();
        this.router.navigate(['/']);
    }
}
