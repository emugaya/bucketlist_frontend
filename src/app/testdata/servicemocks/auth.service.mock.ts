import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ResponseOptions , Response} from '@angular/http';
import { invalid_username_and_password, login_success, register_success, register_failed } from '../mockdata/auth';
import { AppRoutingModule } from '../../app-routing/app-routing.module';
import { Router } from '@angular/router';

export class AuthServiceStub {
    isLoggedIn = false;
    logout(): void {
    this.isLoggedIn = false;
    }
    postLogin(user) {
        const response: Response = new Response(new ResponseOptions({
           body: JSON.stringify(login_success)
         }));
         return Observable.of(response);
    }
    postRegister(user) {
        const response: Response = new Response(new ResponseOptions({
            body: JSON.stringify(register_success)
        }));
        return Observable.of(response);
    }
}
