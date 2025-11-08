import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface Painting {
  id: number;
  title: string;
  price: number;
  image: string; // URL of the image
}
@Injectable({
  providedIn: 'root'
})
export class ArtistLoginService {
 private baseUrl = 'http://localhost:8000/paintings/upload/'; // your backend endpoint

  constructor(private http: HttpClient) {}

  uploadPainting(formData: FormData): Observable<any> {
    return this.http.post(this.baseUrl, formData);
  }


   private apiUrl = ' http://localhost:8000/paintings/list/';


  getPaintings(): Observable<Painting[]> {
    return this.http.get<Painting[]>(`${this.apiUrl}`);
  }
  
}
