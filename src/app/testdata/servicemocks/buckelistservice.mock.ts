import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ResponseOptions, Response } from '@angular/http';
import { bucketlists, bucket_created_succesfully,
  singlebucketlist,
  bucketlist_update_succesfully,
  bucket_deleted_succesfully,
  item_creation, item_update,
  item_delete_success

} from '../mockdata/bucketlists';


// @Injectable()
export class BucketlistServiceStub {
  getBuckets(page?: string) {
    const response: Response = new Response(new ResponseOptions({
      body: JSON.stringify(bucketlists)
    }));
    return Observable.of(response);
  }

  getSingleBucket(bucketlist_id) {
    const response: Response = new Response(new ResponseOptions({
      body: JSON.stringify(singlebucketlist)
    }));
    return Observable.of(response);
  }

  postBucket(bucket) {
    const response: Response = new Response(new ResponseOptions({
      body: JSON.stringify(bucket_created_succesfully)
    }));
    return Observable.of(response);
  }

  editBucket(id, name) {
    const response: Response = new Response(new ResponseOptions({
      body: JSON.stringify(bucketlist_update_succesfully)
    }));
    return Observable.of(response);
  }

  deleteBucket(bucket_id) {
    const response: Response = new Response(new ResponseOptions({
      body: JSON.stringify(bucket_deleted_succesfully)
    }));
    return Observable.of(response);
  }

  postBucketItem(bucket_id, item) {
    const response: Response = new Response(new ResponseOptions({
      body: JSON.stringify(item_creation)
    }));
    return Observable.of(response);
  }

  editItem(bucket_id, item_id, item) {
    const response: Response = new Response(new ResponseOptions({
      body: JSON.stringify(item_update)
    }));
    return Observable.of(response);
  }

  deleteBucketItem(bucket_id, item_id) {
    const response: Response = new Response(new ResponseOptions({
      body: JSON.stringify(item_delete_success)
    }));
    return Observable.of(response);
  }
}
