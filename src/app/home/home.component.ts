import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import  { Router  } from '@angular/router';
import { AuthenticationUser } from '../model/authenticationuser';
import { HasRoleDirective } from '../directives/has-role.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: AuthenticationUser;
  role: Array<string>;
  title: string;
  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.user = this.userService.user;
    if(this.user) {
      this.user = this.userService.user;
      this.role = this.user.roles;
      this.title = this.user ? "Bienvenue " + this.user.username: "Bienvenue !";
    }else {
      this.title = "Bienvenue !";
    }
  }

  login() {
    this.userService.urlToNavigayte = "/home";
    this.router.navigate(['/login']);
  }

  goToAdmin() {
    this.router.navigate(['/admin']);
  }

  goToUuser() {
    this.router.navigate(['/user']);
  }

}
