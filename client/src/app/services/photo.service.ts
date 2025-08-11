import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private apiUrl = 'http://localhost:3000/api/photos';

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addPhoto(photoData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, photoData);
  }

  updatePhoto(id: string, photoData: FormData): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, photoData);
  }

  deletePhoto(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
}
