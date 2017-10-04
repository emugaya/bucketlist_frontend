import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ResponseOptions, Response } from '@angular/http';
import {
  invalid_username_and_password,
  login_success,
  register_success,
  register_failed
} from '../mockdata/auth';
import { AppRoutingModule } from '../../app-routing/app-routing.module';
import { Router } from '@angular/router';
import 'rxjs/add/observable/throw';

class RouterStub {
  navigate(url: string[]) {
    return url[0];
  }
}
export class AuthServiceStub2 {
//   constructor(private router: RouterStub) {}
  token: any = '';
  current_user: string;
  isLoggedIn = false;
  logout(): void {
    this.isLoggedIn = false;
  }
  checkTimeOut() {
    // this.router.navigate(['/login']);
  }
  postLogin(user) {
    const response: Response = new Response(new ResponseOptions({
      body: JSON.stringify(login_success),
      status: 400
    }));
         return Observable.throw(response);
    }
  postRegister(user) {
    const response: Response = new Response(new ResponseOptions({
      body: JSON.stringify(register_success),
      status: 400
    }));
        return Observable.throw(response);
    }
}
