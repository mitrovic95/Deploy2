import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {routing} from './app.routing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from 'src/app/login-service/token-interceptor.service';
import { AuthenticationService } from 'src/app/login-service/authentication-service.service';
import { CanActivateAuthGuard } from 'src/app/login-service/can-activate-auth.guard';
import { JwtUtilsService } from 'src/app/login-service/jwt-utils.service';
 
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  },
  AuthenticationService,
  CanActivateAuthGuard,
  JwtUtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
