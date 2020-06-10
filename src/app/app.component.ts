import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication-service/authentication.service';
import { User } from './model/User';
import { Event, Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  currentUser: User;
  showLoadingIndecator: boolean = true;
  constructor(private router: Router, private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    
  }

  title = 'AngularDemoProject';

  logout() {
    this.authenticationService.LogOut();
    this.router.navigate(['/login']);
  }

  CreateEmployee() {
    alert('Yet to be implemented.');
  }
}
