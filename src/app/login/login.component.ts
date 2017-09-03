import { errorObject } from 'rxjs/util/errorObject';
import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { AuthService} from '../services/auth.service';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import 'rxjs/add/operator/map';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = { username: 'holderu', password: 'passwordu' };
  token = '';
  message: any = '';
  login_res: any = {};
  data: Object;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onSubmit(f: NgForm): void {
    this.user.username = f.value.username;
    this.user.password = f.value.password;
    console.log('heheheheh');
    this.authService.postLogin(this.user).subscribe((res: Response) => {
      this.login_res = res.json();
      console.log(this.login_res);
      this.token = this.login_res.token;
        this.message = this.login_res.message;
        console.log('heheheheh');
        localStorage.setItem('currentuser', this.user.username);
        localStorage.setItem('token', this.token);
        console.log('going to bucketlists');
        this.router.navigate(['/bucketlists']);
    }, (error) => {
      console.log('in catch');
      if (error.status === 400 ) {
        this.message = 'Invalid username or password';
        console.log(this.message);
        }
    });
  }
}
