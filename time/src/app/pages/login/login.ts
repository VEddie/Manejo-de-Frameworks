import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../../services/user-service';
import { fetchUserData } from '../../utilities/functions';
import { Router, RouterModule } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
    selector: 'login',
    imports: [FormsModule, RouterModule],
    templateUrl: './login.html',
    styleUrl: './login.css',
})
export class Login {
    toastRef: any;

    constructor(
        private userService: UserService,
        private toast: HotToastService,
        private router: Router
    ) {}

    @Output() userEvent = new EventEmitter();

    onSubmit(formData: NgForm) {
        this.userService.getAll().subscribe((users) => {
            let user = fetchUserData(users, formData.value);
            // Switch to a toaster
            if (user) {
                this.toast.success('Welcome');
                // const toasty = new Toasty();
                // toasty.success('You did the thing');
            }
            //this.router.navigate(['/component-list']);
            else this.toast.error('Invalid user.');
        });
    }
}
