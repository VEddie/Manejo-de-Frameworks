import { Component, ElementRef, ViewChild } from '@angular/core';
import { User } from './services/user-service';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],

    templateUrl: './app.html',
    styleUrl: './app.css',
})
export class App {
    @ViewChild('componentList') list!: ElementRef<HTMLSelectElement>;
    isLoggedIn = false;
    user!: User;

    onSubmit(user: any) {
        if (user) {
            this.isLoggedIn = !this.isLoggedIn;
            this.user = user;
            console.log('User has logged in.');
        }
    }

    logout() {
        this.isLoggedIn = !this.isLoggedIn;
    }
}
