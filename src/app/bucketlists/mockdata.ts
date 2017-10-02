import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';

export class MockBucketListService {
  constructor(private http: Http) {
  }

  // getBuckets(page?, per_page?, search?): Observable<Response> {
  //   // console.log(bucketlist);
  //   const responseOptions: ResponseOptions = new ResponseOptions({
  //     body: {name: 'Jeff'}
  //   });

  //   const response: Response = new Response(responseOptions.merge({
  //     status: 200
  //   }));
  //   console.log(response.json());
  //   return Observable.of(response);
  // }
  getBuckets(page?, per_page?, search?) {
    // console.log(this.http.get('app/bucketlists/data.json'));
    return this.http.get('data.josn');
  }
}
