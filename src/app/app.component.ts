import { Component, OnInit } from '@angular/core';
import { GetApodService } from './get-apod.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my nasa personal project';

  constructor(
    private service: GetApodService,
    private http: HttpClient
  ) {}

  obj: Object;

  ngOnInit() {
    // this.obj = this.service.getApod();
    this.http.get('https://api.nasa.gov/planetary/apod?api_key=9YvbMNa9ebx2aKdXXIMI0FG6PHtfMewHVHKraU0C')
      .subscribe(data => {
        this.obj = data;
      });
  }
}
