import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user = {
    name: '',
    username: '',
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  // onLogin() {
  //   this.authService.login(this.user).subscribe(
  //     (response) => {
  //       console.log("login",response);
        
  //       alert('Login Successful! 🎉');
  //       this.router.navigate(['/shop']); // Redirect to shop
  //     },
  //     (error) => {
  //       alert('Login Failed. Please check your credentials.');
  //       console.error(error);
  //     }
  //   );
  // }

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
  // onLogin() {
  //   this.authService.login(this.user).subscribe(
  //     (response) => {
  //       // ✅ Store token in localStorage
  //       localStorage.setItem('userToken', response.token);
  //       // Optionally, update your AuthService here (if necessary)
        
  //       // ✅ Navigate to the home page or wherever you want after login
  //       this.router.navigate(['/']); // Redirect to home page after successful login
  //     },
  //     (error) => {
  //       console.error('Login failed', error);
  //       // Show error message to user
  //     }
  //   );
  // }
  
}
