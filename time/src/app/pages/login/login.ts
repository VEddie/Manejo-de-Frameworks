import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../../services/user-service';
import { fetchUserData, setUserData, sleep } from '../../utilities/functions';
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
        this.userService.getAll().subscribe(async (users) => {
            let user = fetchUserData(users, formData.value);
          
            if(user) {
                this.toast.success(`Welcome ${user.firstName}.`);
                setUserData(user);
                await sleep(3000);
                this.router.navigate(['/component-list']);
            } 
            
            else this.toast.error('Incorrect email or password.');
        });
    }
}
