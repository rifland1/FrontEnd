import {Directive, OnInit } from '@angular/core';
import  { UserService } from '../services/user.service';
import { AuthenticationUser } from '../model/authenticationuser';
import { ViewContainerRef, TemplateRef, Input } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';


@Directive({
  selector: '[hasRole]'
})
export class HasRoleDirective implements OnInit {

  @Input() hasRole: string;
  user: AuthenticationUser;
  roles: Array<string>;

  constructor(private viewContainerRef: ViewContainerRef,
              private templateRef: TemplateRef<any>,
              private userService: UserService) {

                
              }

    ngOnInit() {
      this.user = this.userService.user;
      if(this.user) {
        this.roles = this.user.roles;
        if (!this.roles) {
          this.viewContainerRef.clear();
        }
        else {
          if (this.roles.includes(this.hasRole)) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
          } else {
            this.viewContainerRef.clear();
          }
        }
        }
        else {
          this.viewContainerRef.clear();
        }
    
  }    
}
