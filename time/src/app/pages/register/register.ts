import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
    validate(formData: NgForm) {
        console.log('Sending data to Firebase...');
        console.log(formData.value);
    }
}
