import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Register } from '../../model/register';
import { RegisterService } from '../../service/register.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  Register: Register = {
    name: '',
    email: '',
    password: '',
    phone: '',
    username: '',
  };

  constructor(private registerService: RegisterService) {}

  onSubmit() {
    this.registerService.registerUser(this.Register).subscribe(
      (response) => {
        console.log('Full Response:', response);
        alert('Registration successful!');
        // if (response.body) {
        //   alert('Registration successful!');
        // } else {
        //   alert('Empty response received.');
        // }
      },
      (error) => {
        console.error('Error:', error);
        alert('Something went wrong!');
      }
    );
}
}
