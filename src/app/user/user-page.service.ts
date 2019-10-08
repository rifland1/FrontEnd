import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EndPoints } from '../consts/EndPoints';

@Injectable({
  providedIn: 'root'
})
export class UserPageService {

  constructor(private http: HttpClient) {

  }

  getUserHello() {
    return this.http.get(EndPoints.USER_PAGE_URL);
  }
}
