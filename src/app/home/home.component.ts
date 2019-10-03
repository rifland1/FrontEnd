import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {HttpClient} from '@angular/common/http';
import {EndPoints} from '../consts/EndPoints';
import  { Router, ActivatedRoute,ParamMap, RoutesRecognized  } from '@angular/router';
import { AuthenticationUser } from '../model/authenticationuser'
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: AuthenticationUser;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.user = this.userService.user;
  }

}
