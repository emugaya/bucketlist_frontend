import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bucketlists',
  templateUrl: './bucketlists.component.html',
  styleUrls: ['./bucketlists.component.css']
})
export class BucketlistsComponent implements OnInit {

  constructor() { 
  		console.log(localStorage.getItem('currentuser'))
  }

  ngOnInit() {
  	console.log(localStorage.getItem('currentuser'));
  }

}
