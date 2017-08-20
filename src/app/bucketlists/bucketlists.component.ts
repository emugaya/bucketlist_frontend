import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { AuthService} from '../services/auth.service';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { BucketlistsService } from '../services/bucketlists.service'


@Component({
  selector: 'app-bucketlists',
  templateUrl: './bucketlists.component.html',
  styleUrls: ['./bucketlists.component.css']
})
export class BucketlistsComponent implements OnInit {

  constructor(private authService: AuthService,
			  private router: Router,
			  private bucketlistsService: BucketlistsService
			  ) { 
  		
  }

  ngOnInit() {
  	
  }

}
