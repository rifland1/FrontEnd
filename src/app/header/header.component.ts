import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated: boolean;
  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log("header");
    this.isAuthenticated = this.userService.loggedIn;
  }

}
