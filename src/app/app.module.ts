import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from '../app/services/user.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import  {ErrorHttpInterceptor } from '../app/interceptors/errorHttpInterceptor.interceptor';




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
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  //providers: [UserService, { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }],
  providers: [UserService, { provide: HTTP_INTERCEPTORS, useClass: ErrorHttpInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
