import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from '../app/services/user.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ErrorHttpInterceptor } from './interceptors/ErrorHttpInterceptor';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, { provide: HTTP_INTERCEPTORS, useClass: ErrorHttpInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
