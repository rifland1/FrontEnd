import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EndPoints } from '../consts/EndPoints';
import { AuthenticationUser } from '../model/authenticationuser';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  listUsers: Array<AuthenticationUser> = [];

  constructor(private http: HttpClient) {
  }

  getAdminHello() {
    return this.http.get(EndPoints.ADMIN_URL);
  }

  getAllUsers() {
    return  this.listUsers.length < 1 ? this.http.get(EndPoints.ALL_USERS_URL) : of(this.listUsers);
  }
}
