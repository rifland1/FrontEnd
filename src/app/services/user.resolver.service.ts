import { Injectable }from '@angular/core';
import { Router, Resolve,RouterStateSnapshot,ActivatedRouteSnapshot} from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { switchMap, take, first } from 'rxjs/operators';
import { AuthenticationUser } from '../model/authenticationuser';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root',
})
export class UserResolverService implements Resolve<Observable<AuthenticationUser>> {


    constructor(private us: UserService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.us.getUser();
    }
}