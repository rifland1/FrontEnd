import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EndPoints } from '../consts/EndPoints';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {

  }

  getAdminHello() {
    return this.http.get(EndPoints.ADMIN_URL);
  }

  getAllUsers() {
    return this.http.get(EndPoints.ALL_USERS_URL);
  }
}
