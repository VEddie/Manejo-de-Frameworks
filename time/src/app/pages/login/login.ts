import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { fetchUserData, sleep } from '../../utilities/functions';
import { UserService } from '../../services/user-service';
import { HotToastService } from '@ngneat/hot-toast';
import { StorageService } from '../../services/storage-service';

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
        private storage: StorageService,
        private router: Router
    ) {}

    @Output() userEvent = new EventEmitter();

    ngOnInit() {
        // Redirect if there's localStorage data.
        if(this.storage.getItem('user')) this.router.navigate(['/component-list'])
    }

    onSubmit(formData: NgForm) {
        this.userService.getAll().subscribe(async (users) => {
            let user = fetchUserData(users, formData.value);
          
            if(user) {
                this.toast.success(`Welcome ${user.firstName}.`);
                this.storage.setItem('user', `${user.firstName} ${user.lastName}`)
                await sleep(3000);
                this.router.navigate(['/component-list']);
            } 
            
            else this.toast.error('Incorrect email or password.');
        });
    }
}
