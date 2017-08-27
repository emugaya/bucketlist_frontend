import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, Response  } from '@angular/http';

// Import Authentication service
import { AuthService } from './auth.service';

// Import server
import { SERVER } from '../server';

@Injectable()
export class BucketlistsService {

  constructor(private authService: AuthService, private http: Http) {
    console.log('in bucket listservice constructor');
    console.log(localStorage.getItem('token'));
  }

// Method to retrieve all buckets
  getBuckets() {
    console.log('in bucket list service');
    return this.http.get(SERVER + 'bucketlists/', this.authService.getHeaders());

  }

// Method to retrieve single bucket with all items
  getSingleBucket(bucketlist_id) {
    return this.http.get(SERVER + 'bucketlists/' + bucketlist_id, this.authService.getHeaders());

  }

// Method to create buckets
  postBucket(bucket) {
    return this.http.post(SERVER + 'bucketlists/', bucket, this.authService.postHeaders());

  }

// Method to edit bucket
  editBucket(id, name) {
    return this.http.put(SERVER + 'bucketlists/' + id, name, this.authService.postHeaders());

  }

// Method to delete single bucket
  deleteBucket(bucket_id) {
    return this.http.delete(SERVER + 'bucketlists/' + bucket_id, this.authService.getHeaders());

  }

// Method to create items in bucketlist
  postBucketItem(bucket_id, item) {
    return this.http.post(SERVER + 'bucketlists/' + bucket_id + '/items/', item, this.authService.postHeaders());

  }

// Method to edit bucket list items
  editItem(bucket_id, item_id, item) {
    return this.http.put(SERVER + 'bucketlists/' + bucket_id + 'items/' + item_id, item, this.authService.postHeaders());
  }

// Method to delete bucket list item
  deleteBucketItem(bucket_id, item_id) {
    return this.http.delete(SERVER + 'bucketlists/' + bucket_id + '/items/' + item_id, this.authService.getHeaders());

  }

}
