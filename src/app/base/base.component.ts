import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import  { Router, ActivatedRoute  } from '@angular/router';
import { AuthenticationUser } from '../model/authenticationuser';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
    this.route.data
        .subscribe((data: { user: AuthenticationUser }) => {
            this.userService.setCurrentUser(data.user);
        });
}

  ngOnInit() {
  }

}
