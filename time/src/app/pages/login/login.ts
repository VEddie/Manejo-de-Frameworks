import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../../services/user-service';
import { fetchUserData } from '../../utilities/functions';

@Component({
  selector: 'login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
    constructor(private userService: UserService) {}

    submit(formData: NgForm) {
        this.userService.getAll().subscribe(res => {
            if(fetchUserData(res, formData.value)) 
                console.log("This user exists.")
            else
                console.log("This user doesn't exist.")
        })
    }
}
