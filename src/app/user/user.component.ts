import { Component, OnInit } from '@angular/core';
import  { UserPageService } from './user-page.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  helloUser: any;

  constructor(private userPageService: UserPageService) { }

  ngOnInit() {
    this.getUserHello();
  }

  getUserHello() {
    this.userPageService.getUserHello().subscribe(res => this.helloUser = res);
  }

}
