import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { AuthenticationUser } from '../model/authenticationuser';
import { Role } from '../model/role';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  user: AuthenticationUser;
  roles: Array<Role>;

  constructor(private userService: UserService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.userService.isLoggedIn().pipe(map(isLogged => {
      if (!isLogged) {
        this.router.navigate(['/login']);
        return false;
      }
      else {
        this.roles = this.userService.currentUserValue().roles;
        if (this.roles.length > 0) {
          let role = this.roles.filter(r => r.authority === 'ADMIN');
          let isAdmin = role.length > 0;
          if (!isAdmin) {
            this.router.navigate(['/access-denied']);
          }
          return isAdmin;
        }
        return false;
      }
    }));
  }
}
