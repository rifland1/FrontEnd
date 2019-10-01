import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders,} from '@angular/common/http';
import {EndPoints} from '../consts/EndPoints';

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
    this.url = EndPoints.ROOT_URL;
  }


  login(credentials: any) {
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };


    const data =
      'username=' +
      encodeURIComponent(credentials.username) +
      '&password=' +
      encodeURIComponent(credentials.password) + '&submit=Login';
    this.http.post(EndPoints.LOGIN_URL, data, options)
      .subscribe(
        res => console.log(res)
      );
  }

}

