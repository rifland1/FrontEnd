import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import  { Router, ActivatedRoute  } from '@angular/router';
import { AuthenticationUser } from '../model/authenticationuser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html'
})
export class BaseComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute, public translate: TranslateService) {
    this.route.data
        .subscribe((data: { user: AuthenticationUser }) => {
            this.userService.setCurrentUser(data.user);
        });
}

  ngOnInit() {
  }

}
