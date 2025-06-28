import { UserService } from "./../../services/user-service";
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

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
  styleUrl: './register.css'
})

export class Register {
    constructor(private userService: UserService, private router: Router) {}

    validate(formData: NgForm) {
        console.log('Sending data to APIClient...');
        console.log(formData.value);
        this.userService.register(formData.value).subscribe(res => {
            console.log('User is successfully added.', res);
            this.router.navigate(['']);

        })
    }
}
