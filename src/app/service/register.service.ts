import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'http://127.0.0.1:8000/reg/register/'; // Change to your API endpoint

  constructor(private http: HttpClient) {}

  registerUser(Register: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, Register, { observe: 'response' });
  }
}
