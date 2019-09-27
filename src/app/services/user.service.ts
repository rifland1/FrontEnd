import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, } from '@angular/common/http';
import { User } from '../model/user';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError, tap } from 'rxjs/operators';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  authenticated = false;
  isLoggedIn = false;
  private url: string;
  public username: String;
  public password: String;
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/';
  }


  login (credentials: any) {
    
    let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization': 'Basic ' + btoa(credentials.username + ':' + credentials.password),});
    
    let options = {
      headers: headers
    }
    
    this.http.post("http://localhost:8080/login", credentials, options)
    .subscribe(
      res => console.log(res)
    );
  }
}

