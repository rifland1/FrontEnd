import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Demo';
  user = {};
  private url: string;

  constructor(private userService: UserService, private http: HttpClient) {
    this.url = 'http://localhost:8080/';
    http.get(this.url + 'resource').subscribe(data => this.user = data);
  }

  ngOnInit(){}

  authenticated() { return this.userService.authenticated; }

}
