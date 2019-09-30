import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';
import { API_CONST} from '../constants/app.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Demo';
  user = {};

  constructor(private userService: UserService, private http: HttpClient) {
    http.get(API_CONST + 'resource').subscribe(data => this.user = data);
  }

  ngOnInit(){}

  authenticated() { return this.userService.authenticated; }

}
