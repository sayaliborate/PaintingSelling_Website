import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  validateUsername(username: string) {
    throw new Error('Method not implemented.');
  }
  register(formData: any) {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'http://127.0.0.1:8000/reg/login/'; // Change to your backend API URL

  constructor(private http: HttpClient) {}

  login(userData: any): Observable<any> {
    return this.http.post(this.apiUrl, userData).pipe(
      catchError((error) => {
        console.error('Login error:', error);
        return throwError(() => new Error('Login failed. Please try again.'));
      })
    );
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('userToken');
    console.log('Token in Storage:', token); // ✅ Debugging
    return !!token;
  }
  
  logout(): void {
    localStorage.removeItem('userToken'); // ✅ Remove token from storage
  }
  
}
