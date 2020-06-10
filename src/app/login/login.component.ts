import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication-service/authentication.service';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  txtUserName: string = '';
  txtPassword: string = '';
  returnUrl: string;
  showLoadingIndecator: boolean = false;
  constructor(private authenticationService: AuthenticationService, private route: Router, private activateRoute: ActivatedRoute) {
    if (this.authenticationService.CurrentUserValue) {
      this.route.navigate(['/employeelist']);
    }
  }

  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe(param => this.returnUrl = param['queryParams'] || '/employeelist');
    document.body.className = "selector";
  }

  ngOnDestroy() {
    document.body.className = "";
  }

  LogIn() {
    this.showLoadingIndecator = true;
    this.authenticationService.UserLogin(this.txtUserName, this.txtPassword)
      .pipe(first())
      .subscribe(
        data => {
          this.route.navigate([this.returnUrl]);
          console.log(data);
        },
        error => {
          this.route.navigate(['login']);
          this.showLoadingIndecator = false;
        }
      )
  }
}
