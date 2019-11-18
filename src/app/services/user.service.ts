import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { catchError, tap, map, distinctUntilChanged } from 'rxjs/operators';
import { EndPoints } from '../consts/EndPoints';
import { AuthenticationUser } from '../model/authenticationuser';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private currentUserSubject = new BehaviorSubject<AuthenticationUser>({} as AuthenticationUser);
    public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());
    isLogged: boolean;

    constructor(private http: HttpClient, private router: Router) {
    }

    login(credentials: any) {

        let options = {
            headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        };
        const data =
            'username=' +
            encodeURIComponent(credentials.username) +
            '&password=' +
            encodeURIComponent(credentials.password) + '&submit=Login';
        return this.http.post(EndPoints.LOGIN_URL, data, options)
            .pipe(
                map((user: AuthenticationUser) => {
                    this.setCurrentUser(user);
                    this.setIsLogged(true);
                    return user;
                })
            );
    }

    currentUserValue(): AuthenticationUser {
        if (this.currentUserSubject.value === null || typeof this.currentUserSubject.value === 'undefined' || Object.keys(this.currentUserSubject.value).length === 0) {
            return null;
        }
        return this.currentUserSubject.value;
    }

    setCurrentUser(user: AuthenticationUser) {
        this.currentUserSubject.next(user);
    }

    getUser() {
        let user = this.currentUserValue();
        return user !== null ? of(user) : this.http.get(EndPoints.USER_URL);
    }

    isLoggedIn(): Observable<boolean> {
        return this.getUser().pipe(map((user: AuthenticationUser) => {
            this.setCurrentUser(user);
            this.setIsLogged(true);
            return true
        }), catchError(error => {
            this.setIsLogged(false);
            return of(false);
        }
        ));
    }


    setIsLogged(isLog: boolean) {
        this.isLogged = isLog;
    }

    logout() {
        this.http.post(EndPoints.LOGOUT_URL, {}).subscribe(() => {
            this.setCurrentUser(null);
            this.setIsLogged(false);
            this.router.navigate(['/login']);
        });
    }
}
