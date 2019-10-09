import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import  { Router  } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationUser } from '../model/authenticationuser';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  user$: Observable<AuthenticationUser>;
  
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.user$ = null;
    this.userService.loggedIn = false;
    this.router.navigate(['/home']);
  }

}
