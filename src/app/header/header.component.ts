import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { TranslateService } from '@ngx-translate/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  username: string;

  constructor(private userService: UserService, public translate: TranslateService) {
    this.username = this.userService.currentUserValue().username;
  }

  ngOnInit() {
  }


  logout() {
    this.userService.logout();
  }



}
