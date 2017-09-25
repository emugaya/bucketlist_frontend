import { BucketlistsComponent } from './bucketlists/bucketlists.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BucketlistsService } from './services/bucketlists.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bucketlist';

  constructor(private router: Router) { }

  ngOnInit() {
  }
  // Redirect to Login page
  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  // Redirectto Registration page
  goToRegister(): void {
    this.router.navigate(['/register']);
  }
}
