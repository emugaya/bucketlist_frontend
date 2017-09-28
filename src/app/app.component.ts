import { BucketlistsComponent } from './bucketlists/bucketlists.component';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BucketlistsService } from './services/bucketlists.service';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bucketlist';
  login = true;
  loggedout = false;

  // login = localStorage.getItem('login');

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    if (this.authService.token) {
      this.login = false;
      this.loggedout = true;
    }else {
      this.login = true;
      this.loggedout = false;
    }
  }
  ngDoCheck() {
    if (this.authService.token) {
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
    this.authService.token = '';
    this.router.navigate(['/home']);
  }
}
