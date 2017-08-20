import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, Response  } from '@angular/http';

// Import Authentication service
import { AuthService }from './auth.service';

// Import server
import { SERVER } from '../server';

@Injectable()
export class BucketlistsService {

  constructor(private authService: AuthService,
  			  private http: Http) { 
  	console.log("in bucket listservice constructor")
  	console.log(localStorage.getItem('token'))
  }

// Method to retrieve all buckets
  getBuckets(){
  	
  	console.log("in bucket list service");
  	return this.http.get(SERVER+'bucketlists/', this.authService.getHeaders());

  }

// Method to retrieve single bucket with all items
  getSingleBucket(){

  }

// Method to create buckets
  postBucket(bucket){
  	return this.http.post(SERVER+'bucketlists/',bucket, this.authService.postHeaders());

  }

// Method to edit bucket 
  editBucket(){

  }

// Method to delete single bucket
  deleteBucket(id){
  	return this.http.delete(SERVER+'bucketlists/'+id, this.authService.getHeaders());

  }

// Method to create items in bucketlist 
  postItem(){

  }

// Method to edit bucket list items
  editItem(){

  }

// Method to delete bucket list item
  deleteItem(){

  }

}
