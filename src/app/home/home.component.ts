import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationUser } from '../model/authenticationuser';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    user: AuthenticationUser;
    username: string;

    constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
        this.user = this.userService.currentUserValue();
        this.username = this.user ? this.user.username : '';
    }

    ngOnInit() {
    }

    login() {
        this.router.navigate(['/login']);
    }

    logout() {
        this.userService.logout();
        this.user = null;
    }

    goToAdmin() {
        this.router.navigate(['/admin']);
    }

    goToUser() {
        this.router.navigate(['/user']);
    }

}

