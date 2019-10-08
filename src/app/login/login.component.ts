import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { HttpClient }from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationUser } from '../model/authenticationuser';
import  { Roles } from '../enum/roles.enum';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {username: '', password: ''};
  title: string;

  constructor(private userService: UserService, private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
    this.title = "Bienvenue sur la page du LOGIN !"
  }

  login() {
    this.userService.login(this.credentials).subscribe(res => {
      if (this.userService.authenticated) {
        this.userService.getUser().subscribe(res => {
          let array = res['roles'];
          let roles: Array<string> = [];
          for (let i = 0; i < array.length; i++) {
            roles[i] = array[i]['authority'];
          }
          this.userService.user = new AuthenticationUser(res['id'], res['username'], roles);
          let url = this.userService.urlToNavigayte ? this.userService.urlToNavigayte: '/home';
          this.router.navigate([url]);
        });
      }
    });
  }

  login1() {
    this.userService.login(this.credentials).subscribe(result => {
      console.log(result);
    }, error => console.error(error));
  }
}
