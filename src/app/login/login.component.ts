import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { HttpClient }from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';
import { AuthenticationUser } from '../model/authenticationuser';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {username: '', password: ''};

  constructor(private userService: UserService, private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.credentials).subscribe(res => {
      if (this.userService.authenticated) {
        this.userService.getUser().subscribe(res => {
          this.userService.user = new AuthenticationUser(res['id'], res['username']);
          this.router.navigate(['/home']);
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
