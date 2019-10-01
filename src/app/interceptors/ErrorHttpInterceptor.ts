import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable()

export class ErrorHttpInterceptor implements HttpInterceptor {

    constructor(private router: Router, private userService: UserService) {

    }

    intercept(request: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>>{

        return next.handle(request).pipe(catchError( error  => {
            if(error.status === 401) {
                console.log("Non Authentifié");
                this.userService.logout();
            }
            return throwError(error);

        }));

    }
}