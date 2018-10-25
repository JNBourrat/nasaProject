import { Component, OnInit } from '@angular/core';
import { GetApodService } from './get-apod.service';
import {HttpClient} from '@angular/common/http';
import { CustomApod } from './customApod';

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

  obj: CustomApod;

  ngOnInit() {
    this.service.getApod().subscribe(data => {
        this.obj = new CustomApod(data.copyright, data.date, data.explanation, data.title, data.url);
        console.log(this.obj);
      });
  }
}
