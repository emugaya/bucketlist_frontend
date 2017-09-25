import { BucketlistsComponent } from './bucketlists/bucketlists.component';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { BucketlistsService } from './services/bucketlists.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bucketlist';
  login: boolean;
  loggedout: boolean;

  // login = localStorage.getItem('login');

  constructor(private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.login = false;
      this.loggedout = true;
    }else {
      this.login = true;
      this.loggedout = false;
    }
  }
  ngDoCheck(){
    if (localStorage.getItem('token')) {
      this.login = false;
      this.loggedout = true;
    }else {
      this.login = true;
      this.loggedout = false;
    }
  }
  // Redirect to Login page
  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  // Redirectto Registration page
  goToRegister(): void {
    this.router.navigate(['/register']);
  }
  logOut(): void {
    localStorage.removeItem('token');
    console.log(localStorage.getItem('token'));
    this.router.navigate(['/home']);
  }
}
