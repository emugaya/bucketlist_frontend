import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = {
    username: 'holderu',
    password: 'passwordu'
  };
  register_res: any;
  message = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onSubmit(f: NgForm): void {
    this.user.username = f.value.username;
    this.user.password = f.value.password;
    this.authService.postRegister(this.user).subscribe((res: Response) => {
      this.register_res = res.json();
      if (this.register_res.message === 'user created succesfully') {
        localStorage.setItem('reg_success', 'Registration was successful');
        this.authService.postLogin(this.user)
        .subscribe((resp: Response) => {
          const response = resp.json();
          localStorage.setItem('token', response.token );
          this.router.navigate(['/bucketlists']);
        });
      }
    }, (error) => {
      if (error.status === 400 ) {
        const error_message: any = JSON.parse(error._body);
        this.message = error_message.message;
        }
    });
  }
}
