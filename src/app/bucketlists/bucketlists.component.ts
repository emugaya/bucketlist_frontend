import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { NgClass } from '@angular/common';
import { AuthService} from '../services/auth.service';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';
import { BucketlistsService } from '../services/bucketlists.service';
import * as _ from 'underscore';


@Component({
  selector: 'app-bucketlists',
  templateUrl: './bucketlists.component.html',
  styleUrls: ['./bucketlists.component.css']
})
export class BucketlistsComponent implements OnInit {

  placeholder = 'E.g Travel';
  bucket_res: any;
  currentuser: string;
  buckets: any;
  total_buckets: 0;
  current_page = 1;
  page = 1;
  pages = [];
  per_page = 20;
  total = 0;
  search = '';
  start_page = 1;
  end_page = 0;
  total_pages = 0;

  add_bucket_res: any;
  bucket = {'name': 'Bucket Name'};
  edit_bucket_name: any;
  bucket_id_to_edit: any;
  constructor(private authService: AuthService, private router: Router, private bucketlistsService: BucketlistsService) {
  }

  ngOnInit() {
    this.currentuser = localStorage.getItem('currentuser');
    console.log(this.page);
    console.log(this.search);
    this.getBucketlists(this.page, this.per_page, this.search);
  }

  getBucketlists(page?, per_page?, search?) {
    console.log('before request');
    this.bucketlistsService.getBuckets(this.page, this.per_page, this.search).subscribe((res: Response) => {
      this.bucket_res = res.json();
      this.buckets = this.bucket_res.items;
      this.total_pages = this.bucket_res.pages;
      this.total_buckets = this.bucket_res.total;
      this.end_page = this.bucket_res.pages;
      this.pages = _.range(1, this.bucket_res.pages + 1);
      console.log(this.pages);
      console.log('In the request response');
      console.log(this.bucket_res);
      console.log('After request response');
    });
    console.log(this.currentuser);
    console.log(this.page);
    console.log(this.pages);
    console.log(this.total_buckets);
    console.log(this.bucket_res);
  }

  searchBucketLists(sform: NgForm): void {
    const search = sform.value.name;
    this.search = sform.value.name;
    console.log(search);
    console.log(this.page);
    console.log(this.per_page);
    console.log('Before search request ...........................................');
    this.getBucketlists(this.page, this.per_page, this.search);
    // this.search = '';

  }


  addBucket(f: NgForm): void {
    this.bucket.name = f.value.name;
    console.log(f.value.name);
    console.log('add bucket starts');
    this.bucketlistsService.postBucket(this.bucket).subscribe((res: Response) => {
        this.add_bucket_res = res.json();
        console.log('In add bucket');
        console.log(this.add_bucket_res);
        console.log(this.add_bucket_res);
        this.getBucketlists();
    });

  }

  deleteBucket(id) {
    const verify: boolean = confirm(`Are you sure you want to delete this bucket?`);
    if (verify === true) {
      this.bucketlistsService.deleteBucket(id).subscribe((res: Response) => {
        console.log('succesfly deleted item');
        this.getBucketlists();
   });
    }
  }
  setBucketNameEditVariables(id, name) {
    console.log('start setting variables');
    this.edit_bucket_name = name;
    console.log(this.edit_bucket_name);
    this.bucket_id_to_edit = id;
    console.log(this.bucket_id_to_edit);
    console.log('end setting variables');
  }
  editBucketName(editform: NgForm): void {
    const verify: boolean = confirm(`Are you sure you want to edit this bucket?`);
    if (verify === true) {
      console.log(this.edit_bucket_name);
      this.edit_bucket_name = editform.value.name;
      const name = { 'name': this.edit_bucket_name};
      console.log(this.edit_bucket_name);
      this.bucketlistsService.editBucket(this.bucket_id_to_edit, name).subscribe((res: Response) => {
        console.log('Bucket edited succesfully');
        this.getBucketlists();
      });
    }
  }

  viewBucket(bucketlist_id, bucketlist_name) {
    console.log('redirecting to bucketlists items');
    localStorage.setItem('bucketlist_id', bucketlist_id);
    localStorage.setItem('bucketlist_name', bucketlist_name);
    console.log(localStorage.getItem('bucketlist_id'));
    this.router.navigate(['/items']);
  }
  // Pagination
  setPage(page: number) {
    console.log(page);
    this.page = page;
    console.log(this.pages);
    this.current_page = page;
    this.getBucketlists(this.page, this.per_page, this.search);
  }
}
