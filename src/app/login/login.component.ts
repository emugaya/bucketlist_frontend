import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AuthService} from '../services/auth.service';
import {Http, Response } from '@angular/http';
import { Router } from "@angular/router"

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	user ={"username" :"holderu",
			"password" : "passwordu"}
	token ='';
	error_message:any ='';
	login_res:any ={};
	data: Object

	constructor(private authService: AuthService,private router: Router) { }

  ngOnInit() {
  }

    onSubmit(f: NgForm): void {
    	console.log(this.user);
    	this.user.username = f.value.username;
    	this.user.password = f.value.password;
    	console.log("firsttoken");
    	console.log(this.user);
    	console.log("firsttoken");
    	console.log(this.token);
    	this.authService.postLogin(this.user).subscribe((res: Response) => {
        	this.login_res = res.json();
        	console.log(this.login_res);
        	this.token = this.login_res.token;
        	console.log("secondtoken");
        	console.log(this.token);
        	this.error_message = this.login_res.message;
        	// console.log(this.error_message);
        	// console.log(this.login_res);
        	if (this.login_res.error_message === "Invalid username or password"){
        		console.log("else section executed");
        		this.router.navigate(['/login']);
        	
        	}
        	else {
        		localStorage.setItem('currentuser', JSON.stringify({user: this.user, token: this.token}));
        		console.log(localStorage.getItem('currentuser'));
        		console.log("before routing");
        		this.router.navigate(['/bucketlists']);
        	}

    	});

    	console.log("new token is:" +this.token);
    	// sessionStorage


	}

}
