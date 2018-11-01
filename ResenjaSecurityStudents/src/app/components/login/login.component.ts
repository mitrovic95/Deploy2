import { Component, OnInit, ViewEncapsulation } from '@angular/core';


import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from 'src/app/login-service/authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  public logIn = false;

  public user;

  public wrongUsernameOrPass: boolean;

  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
    this.user = {};
    this.wrongUsernameOrPass = false;
   }

  ngOnInit() {
  }

  login(): void {
    this.authenticationService.login(this.user.username, this.user.password).subscribe(
      (loggedIn: boolean) => {
        if (loggedIn) {
          this.router.navigate(['nova']);
        }
      }
    ,
    (err: Error) => {
      if (err.toString() === 'Ilegal login') {
        this.wrongUsernameOrPass = true;
        console.log(err);
      } else {
        Observable.throw(err);
      }
    });
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['home']);
  }

  isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  toggleLogIn(): void {
    this.logIn = !this.logIn;
  }

  isAdmin(): boolean {
    return this.authenticationService.isAdmin();
  }

}
