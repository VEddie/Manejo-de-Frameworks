import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../../services/user-service';
import { fetchUserData } from '../../utilities/functions';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'login',
  imports: [FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
    constructor(private userService: UserService, private router: Router) {}

    @Output() userEvent = new EventEmitter();

    onSubmit(formData: NgForm) {
        this.userService.getAll().subscribe(users => {
            let user = fetchUserData(users, formData.value)
            // Switch to a toaster
            if(user)
                this.router.navigate(['/component-list']);
            else
                console.log('Invalid user.');
        })
    }
}
