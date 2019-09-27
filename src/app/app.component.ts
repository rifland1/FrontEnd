import { Component } from '@angular/core';
import { UserService } from '../app/services/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Demo';
  greeting = {};
  private url: string;

  constructor(private userService: UserService, private router: Router, private http: HttpClient) {
    this.url = 'http://localhost:8080/';
  }

  logout() {
    this.http.post(this.url + 'logout', {}).pipe(finalize( () => {
        this.userService.authenticated = false;
        this.router.navigateByUrl('/login');
    })).subscribe();
  }
}
