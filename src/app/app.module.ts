import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from '../app/services/user.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatCardModule, MatListModule, MatDialogModule } from  '@angular/material';
import { ErrorHttpInterceptor } from '../app/interceptors/errorHttpInterceptor.interceptor';
import { UserComponent } from './user/user.component';
import { AdminComponent, DialogDataUserDialog } from './admin/admin.component';
import { HasRoleDirective } from '../app/directives/has-role.directive';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { LogoutComponent } from './logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { HomeLayoutComponent } from '../app/layouts/home-layout.component';
import { LoginLayoutComponent } from '../app/layouts/login-layout.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserComponent,
    AdminComponent,
    DialogDataUserDialog,
    HasRoleDirective,
    AccessDeniedComponent,
    LogoutComponent,
    NotFoundComponent,
    HeaderComponent,
    HomeLayoutComponent,
    LoginLayoutComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatDialogModule
  ],
  providers: [UserService, { provide: HTTP_INTERCEPTORS, useClass: ErrorHttpInterceptor, multi: true },],
  bootstrap: [AppComponent],
  entryComponents: [DialogDataUserDialog]
})
export class AppModule { }
