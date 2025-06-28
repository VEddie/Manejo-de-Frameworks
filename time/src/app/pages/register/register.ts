import { HotToastService } from '@ngneat/hot-toast';
import { UserService } from './../../services/user-service';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { sleep } from '../../utilities/functions';

const testUser = {
    firstName: 'Test',
    lastName: 'User',
    email: 'test@edu.com',
    password: '111111',
};

@Component({
    selector: 'register',
    imports: [FormsModule, RouterModule],
    templateUrl: './register.html',
    styleUrl: './register.css',
})
export class Register {
    constructor(
        private userService: UserService,
        private toast: HotToastService,
        private router: Router
    ) {}

    validate(formData: NgForm) {
        this.userService.getUser(formData.value.email).subscribe((res) => {
            if (res.length) this.toast.error('This email is already registered.');

            else {
                this.userService.register(formData.value).subscribe(async () => {
                    this.toast.success('User has been successfully registered.');
                    this.toast.info('Redirecting...');
                    await sleep(3000);
                    this.router.navigate(['']);
                });
            }
        });
    }
}
