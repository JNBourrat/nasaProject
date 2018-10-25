import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetApodService {

  constructor(
    private http: HttpClient
  ) { }


  getApod() {
    return this.http.get<any>('https://api.nasa.gov/planetary/apod?api_key=9YvbMNa9ebx2aKdXXIMI0FG6PHtfMewHVHKraU0C');
  }

}
