import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AuthService} from '../services/auth.service';
import {Http, Response } from '@angular/http';
import { Router } from "@angular/router"

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	user ={"username" :"holderu",
			"password" : "passwordu"}
	register_res: any;
	error_message = '';

  constructor(  private authService: AuthService,
				private router: Router) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm): void {
  	this.user.username = f.value.username;
    this.user.password = f.value.password;
    console.log(this.user)
    this.authService.postRegister(this.user)
    	.subscribe((res: Response)=>{
    		this.register_res = res.json();
    		console.log(this.register_res);
    		if (this.register_res.message === "user created succesfully"){
    			localStorage.setItem('reg_success','Registration was successful');
    			this.router.navigate(['/login']);


    		}else{
    			this.error_message = this.register_res.error_message;
    			}
    	});
  }

}
