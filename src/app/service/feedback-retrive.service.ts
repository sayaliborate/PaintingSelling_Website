import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackRetriveService {
  private apiUrl = 'http://127.0.0.1:8000/feedback/list/';  // Adjust this URL to your Django backend

  constructor(private http: HttpClient) {}

  getFeedbacks(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
