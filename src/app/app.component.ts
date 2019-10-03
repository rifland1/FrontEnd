import { Component } from '@angular/core';
import { UserService } from '../app/services/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import {EndPoints} from './consts/EndPoints';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Angular + Spring Sécurité';

  constructor(private userService: UserService, private router: Router, private http: HttpClient) {
  }

  logout() {
    this.http.post(EndPoints.LOGOUT_URL, {}).pipe(finalize( () => {
        this.userService.authenticated = false;
        this.router.navigateByUrl('/login');
    })).subscribe();
  }
}
