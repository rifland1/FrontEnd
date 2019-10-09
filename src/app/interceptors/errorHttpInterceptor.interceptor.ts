import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';

import { Router } from '@angular/router';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { UserService } from '../services/user.service';


@Injectable()
export class ErrorHttpInterceptor implements HttpInterceptor {

  constructor(private userService: UserService, private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        this.userService.logout();
        this.router.navigate(['/login']);
      }
      if(err.status === 404) {
        this.router.navigate(['/not-found']);
      }
      if(err.status === 403) {
        this.router.navigate(['/access-denied']);
      }
      return throwError(err);
    }))
  }
}

