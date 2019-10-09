import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { AuthenticationUser } from '../model/authenticationuser';
import { Roles } from '../enum/roles.enum';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  user: AuthenticationUser;
  roles: Array<string>;

  constructor(private userService: UserService, private router: Router) {
  }


  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isAuthorized = false;
    this.user = this.userService.user;
    console.log(this.user);
    if (!this.user) {
      isAuthorized = false;
      this.router.navigate(['/login']);
    }
    else {
        this.roles = this.user.roles;
        if (this.roles && this.roles.includes(Roles.Admin)) {
          isAuthorized = true;
        }
        if (!isAuthorized) {
          this.router.navigate(['/access-denied']);
        }
        return isAuthorized;
      }
    }
}
