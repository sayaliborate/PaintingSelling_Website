import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FrrdbackService {
  private apiUrl = 'http://127.0.0.1:8000/feedback/submit/';

  constructor(private http: HttpClient) { }

  submitFeedback(feedbackData: any): Observable<any> {
    return this.http.post(this.apiUrl, feedbackData);
  }
}
