import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import  { Router  } from '@angular/router';
import { AuthenticationUser } from '../model/authenticationuser';
import { HasRoleDirective } from '../directives/has-role.directive';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: AuthenticationUser;
  title: string;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.user = this.userService.user;
    if (this.user) {
      this.title = "Bienvenue " + this.user.username;
    }
    else {
      this.title = "Bienvenue !";
    }
  }

  login() {
    this.userService.urlToNavigayte = "/home";
    this.router.navigate(['/login']);
  }

  logout() {
    this.router.navigate(['/logout']);
  }

  goToAdmin() {
    this.router.navigate(['/admin']);
  }

  goToUser() {
    this.router.navigate(['/user']);
  }

}
