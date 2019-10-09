import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthenticationUser } from '../model/authenticationuser';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {

  
  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.userService.loggedIn) {
        this.router.navigate(['/login']);
        return false;
      }
      return true;
  }
  
}
