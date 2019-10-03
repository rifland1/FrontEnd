import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { EndPoints } from '../consts/EndPoints';
import  { AuthenticationUser } from '../model/authenticationuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  authenticated = false;
  user: AuthenticationUser;

  constructor(private http: HttpClient, private router: Router) {

  }

  login(credentials: any) {

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    const data =
      'username=' +
      encodeURIComponent(credentials.username) +
      '&password=' +
      encodeURIComponent(credentials.password) + '&submit=Login';
    return this.http.post<Observable<boolean>>(EndPoints.LOGIN_URL, data, options)
      .pipe(
      tap(() => this.authenticated = true)
    );
  }

  getUser() {
    return this.http.get(EndPoints.USER_URL);
  }


  logout() {
    this.authenticated = false;
    this.router.navigateByUrl('/login');
    location.reload(true);
  }
}
