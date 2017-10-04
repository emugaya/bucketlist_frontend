import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ResponseOptions, Response } from '@angular/http';
import {
  bucketlists,
  bucket_created_succesfully,
  singlebucketlist,
  bucketlist_update_succesfully,
  bucket_deleted_succesfully,
  item_creation,
  item_update,
  item_delete_success,
  failure
} from "../mockdata/bucketlists";
import 'rxjs/add/observable/throw';

export class BucketlistServiceStub2 {
    getBuckets(page?: string) {
    // console.log('in mock service1');
    const response: Response = new Response(new ResponseOptions({
      body: JSON.stringify(failure),
      status: 401
    }));
    return Observable.throw(response);
  }

  getSingleBucket(bucketlist_id) {
    console.log('in mock service2');
    const response: Response = new Response(new ResponseOptions({
      body: JSON.stringify(failure),
      status: 401
    }));
    console.log(response);
    return Observable.throw(response);
  }

  postBucket(bucket) {
    // console.log('in mock service3');
    const response: Response = new Response(new ResponseOptions({
      body: JSON.stringify(failure),
      status: 401
    }));
    return Observable.throw(response);
  }

  editBucket(id, name) {
    // console.log('in mock service4');
    const response: Response = new Response(new ResponseOptions({
      body: JSON.stringify(failure),
      status: 401
    }));
    return Observable.throw(response);
  }

  deleteBucket(bucket_id) {
    // console.log(bucket_id);
    // console.log('in mock service5');
    const response: Response = new Response(new ResponseOptions({
      body: {},
      status: 401
    }));
    return Observable.throw(response);
  }

  postBucketItem(bucket_id, item) {
    // console.log('in mock service6');
    const response: Response = new Response(new ResponseOptions({
      body: JSON.stringify(failure),
      status: 401
    }));
    return Observable.throw(response);
  }

  editItem(bucket_id, item_id, item) {
    console.log('in mock service7');
    const response: Response = new Response(new ResponseOptions({
      body: JSON.stringify(failure),
      status: 401
    }));
    return Observable.throw(response);
  }

  deleteBucketItem(bucket_id, item_id) {
    console.log('in mock service8');
    const response: Response = new Response(new ResponseOptions({
      body: JSON.stringify(failure),
      status: 401
    }));
    return Observable.throw(response);
  }
}
