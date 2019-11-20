import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService, public translate: TranslateService) {
  }

  ngOnInit() {
  }


  logout() {
    this.userService.logout();
  }



}
