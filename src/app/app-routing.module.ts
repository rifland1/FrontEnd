import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { HomeComponent } from '../app/home/home.component';
import { LoginComponent } from '../app/login/login.component';
import { AdminComponent } from '../app/admin/admin.component';
import { UserComponent } from '../app/user/user.component';
import { AccessDeniedComponent } from '../app/access-denied/access-denied.component';
import { LogoutComponent } from '../app/logout/logout.component';
import { NotFoundComponent } from '../app/not-found/not-found.component';
import { AdminGuard } from './guards/admin.guard';
import { HomeGuard } from './guards/home.guard';
import { HomeLayoutComponent } from './layouts/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout.component';


const routes: Routes = [

  
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AdminGuard]
      }
    ]
  },
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: 'user',
        component: UserComponent
      }
    ]
  },
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: 'access-denied',
        component: AccessDeniedComponent
      }
    ]
  },
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: 'logout',
        component: LogoutComponent
      }
    ]
  },
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: 'not-found',
        component: NotFoundComponent
      }
    ]
  },
  {
    path: '',
    component: HomeLayoutComponent,
    canActivate: [HomeGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent
      }
    ]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  {
    path: '**', component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
