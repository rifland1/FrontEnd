import { Directive, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthenticationUser } from '../model/authenticationuser';
import { ViewContainerRef, TemplateRef, Input } from '@angular/core';
import { Role } from '../model/role';
import { map, take } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';


@Directive({
  selector: '[hasRole]'
})
export class HasRoleDirective implements OnInit {

  @Input() hasRole: string;
  user: AuthenticationUser;
  roles: Array<Role>;

  constructor(private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private userService: UserService) {


  }

  ngOnInit() {
    this.user = this.userService.currentUserValue();
    if (this.user) {
      this.roles = this.user.roles;
      if (!this.roles || this.roles.length < 1) {
        this.viewContainerRef.clear();
      }
      else {
        let role = this.roles.filter(r => r.authority === this.hasRole);
        role.length > 0 ? this.viewContainerRef.createEmbeddedView(this.templateRef) : this.viewContainerRef.clear();
      }
    }
    else {
      this.viewContainerRef.clear();
    }

  }
}
