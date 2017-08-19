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

  constructor() { }

  ngOnInit() {
  }

}
