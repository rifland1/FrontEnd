import { Component, OnInit } from '@angular/core';
import { UserService } from '../app/services/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { EndPoints } from './consts/EndPoints';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {



  ngOnInit() {
  }


  constructor(private userService: UserService, private router: Router, private http: HttpClient) {
  }
}
