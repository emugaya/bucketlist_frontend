import { Component, OnInit } from '@angular/core';
import { AppRoutingModule }     from '../app-routing/app-routing.module';
import { Router } from "@angular/router"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
