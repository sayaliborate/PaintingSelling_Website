import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
// import { Router } from 'express';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
user = {
    name: '',
    username: '',
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

 

  onLogin() {
    console.log('Attempting login...', this.user); // ✅ Debug user data
  
    this.authService.login(this.user).subscribe(
      (response) => {
        console.log('Login successful:', response);
        localStorage.setItem('userToken','etybuujjlklkkljkjk');
        localStorage.setItem("artist", JSON.stringify(true));
        localStorage.setItem("admin", JSON.stringify(true));
        
        alert('Login Successful! 🎉');
        this.router.navigate(['/shop']);
      },
       (error) => {
        console.error('Login error:', error);
        alert('Login Failed. Please check your credentials.');
      }
    );
  }
  
  
}
