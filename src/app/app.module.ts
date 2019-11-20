import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from '../app/services/user.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatCardModule, MatListModule, MatDialogModule } from '@angular/material';
import { ErrorHttpInterceptor } from '../app/interceptors/errorHttpInterceptor.interceptor';
import { UserComponent } from './user/user.component';
import { AdminComponent, DialogDataUserDialog } from './admin/admin.component';
import { HasRoleDirective } from '../app/directives/has-role.directive';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { BaseComponent } from './base/base.component';
import { FooterComponent } from './footer/footer.component';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    NotFoundComponent,
    HeaderComponent,
    BaseComponent,
    FooterComponent


  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
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
  providers: [UserService, { provide: HTTP_INTERCEPTORS, useClass: ErrorHttpInterceptor, multi: true }],
  bootstrap: [AppComponent],
  entryComponents: [DialogDataUserDialog]
})
export class AppModule { }
