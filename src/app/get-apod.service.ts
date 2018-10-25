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

    let obj: Object;

    this.http.get('https://api.nasa.gov/planetary/apod?api_key=9YvbMNa9ebx2aKdXXIMI0FG6PHtfMewHVHKraU0C')
      .subscribe(data => {
        console.log(data);
        
        obj = data;
      });

      console.log(obj);

      return obj;
  }

}
