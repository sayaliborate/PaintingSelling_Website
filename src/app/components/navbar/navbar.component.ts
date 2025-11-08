import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
//   isLoggedIn: boolean = false;
//   isAdminLoggedIn: boolean = false;
//   userRole: string = 'customer'; 
//   menuOpen: boolean = false; 

//   constructor(private router: Router) {}

//   ngOnInit() {
//     this.isLoggedIn = localStorage.getItem("artist") == "true";
//     this.isAdminLoggedIn = localStorage.getItem("admin") == "true";
   

//     console.log(" this.isLoggedIn ", this.isLoggedIn );
//     console.log(" isAdminLoggedIn ", this.isAdminLoggedIn );
//     this.checkLoginStatus();
//   }
//   checkLoginStatus() {
//     this.isLoggedIn = localStorage.getItem("artist") === "true";
//     this.isAdminLoggedIn = localStorage.getItem("admin") === "true";
//   }
  

//   checkAuthStatus() {
//     this.isLoggedIn = !!localStorage.getItem('userToken'); 
//     this.userRole = localStorage.getItem('userRole') || 'customer'; 
//     this.isAdminLoggedIn = this.userRole === 'admin'; 
//     this.isLoggedIn = this.userRole == 'artist'; 
//   }

//   toggleMenu() {
//     this.menuOpen = !this.menuOpen; 
//   }

//   logout() {
//     localStorage.removeItem("artist");
//   localStorage.removeItem("admin");
//   this.isLoggedIn = false;
//   this.isAdminLoggedIn = false;
//   this.router.navigate(["/login"]); 
// }
isLoggedIn: boolean = false;
  isAdminLoggedIn: boolean = false;
  menuOpen: boolean = false;
  showAdminLogin: boolean = false; // Controls admin login form visibility
  submenuOpen: boolean = false;

  // Admin Login Inputs
  adminUsername: string = '';
  adminPassword: string = '';

  // Hardcoded Admin Credentials
  private adminCredentials = {
    username: 'admin',
    password: 'admin123'
  };

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkLoginStatus();
  }

  checkLoginStatus() {
    this.isLoggedIn = localStorage.getItem('artist') === 'true';
    this.isAdminLoggedIn = localStorage.getItem('admin') === 'true';
  }

  // ✅ Artist Login Function
  loginAsArtist() {
    localStorage.setItem('artist', 'true');
    this.isLoggedIn = true;
    this.isAdminLoggedIn = false; // Ensure admin is not active
    this.router.navigate(['/dashboard']);
  }

  // ✅ Admin Login Function
  adminLogin() {
    if (this.adminUsername === this.adminCredentials.username && this.adminPassword === this.adminCredentials.password) {
      localStorage.setItem('admin', 'true');
      this.isAdminLoggedIn = true;
      this.isLoggedIn = false; // Ensure artist login is not active
      this.router.navigate(['/admin-dashboard']);
    } else {
      alert('Invalid Admin Credentials!');
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen; // Toggle menu visibility
  }

  // ✅ Logout Function
  logout() {
    localStorage.removeItem('artist');
    localStorage.removeItem('admin');
    this.isLoggedIn = false;
    this.isAdminLoggedIn = false;
    this.showAdminLogin = false;
    this.router.navigate(['/login']); // Redirect to login page after logout
  }

  toggleDropdown() {
    this.submenuOpen = !this.submenuOpen;
  }
}