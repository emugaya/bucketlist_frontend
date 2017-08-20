import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

// Import Authentication service
import { AuthService }from './auth.service';

// Import server
import { SERVER } from '../server';

@Injectable()
export class BucketlistsService {

  constructor(private authService: AuthService,
  			  private http: Http) { }

// Method to retrieve all buckets
  getBuckets(){
  	return this.http.get(SERVER+'bucketlists/',this.authService.getHeaders)

  }

// Method to retrieve single bucket with all items
  getSingleBucket(){

  }

// Method to create buckets
  postBucket(){

  }

// Method to edit bucket 
  editBucket(){

  }

// Methid to delete single bucket
  deleteBucket(){

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
