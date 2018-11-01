import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {routing} from './login.routing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from 'src/app/login-service/token-interceptor.service';
import { AuthenticationService } from 'src/app/login-service/authentication-service.service';
import { CanActivateAuthGuard } from 'src/app/login-service/can-activate-auth.guard';
import { JwtUtilsService } from 'src/app/login-service/jwt-utils.service';
import { LoginComponent } from 'src/app/components/login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
  ],
  declarations: [LoginComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  },
  AuthenticationService,
  CanActivateAuthGuard,
  JwtUtilsService]
})
export class LoginModule { }
