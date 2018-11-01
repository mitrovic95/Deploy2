import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/login-service/authentication-service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PozoristePromena';

  public logIn = false;

  public user;

  public wrongUsernameOrPass: boolean;

  //html
  public bigNavigation = false;
  

  constructor(private authenticationService: AuthenticationService,
    private router: Router) {
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

  //html
  public showHideBigNav(){
    this.bigNavigation = !this.bigNavigation;
  }

}
