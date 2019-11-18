import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { HomeComponent } from '../app/home/home.component';
import { LoginComponent } from '../app/login/login.component';
import { AdminComponent } from '../app/admin/admin.component';
import { UserComponent } from '../app/user/user.component';
import { AccessDeniedComponent } from '../app/access-denied/access-denied.component';
import { NotFoundComponent } from '../app/not-found/not-found.component';
import { AdminGuard } from './guards/admin.guard';
import { HomeGuard } from './guards/home.guard';
import { UserResolverService } from './services/user.resolver.service';
import { BaseComponent } from './base/base.component';
import { UserGuard } from './guards/user.guard';


const routes: Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: '',
        component: BaseComponent,
        resolve: {
            user: UserResolverService
        },
        children: [
            {
                path: 'home', component: HomeComponent,
            },
            {
                path: 'admin', component: AdminComponent,
                canActivate: [AdminGuard]
            },
            {
                path: 'user', component: UserComponent,
                canActivate: [UserGuard]
            },
            {
                path: 'access-denied', component: AccessDeniedComponent
            }
        ]
    },
    {
        path: 'login', component: LoginComponent
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
