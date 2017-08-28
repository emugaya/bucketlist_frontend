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

  placeholder:string = 'E.g Travel';
  bucket_res: any;
  currentuser: string;
  buckets: any;
  total_buckets: 0;
  page: 0;
  pages: 0;
  per_page: 0;
  add_bucket_res: any;
  bucket ={'name': 'Bucket Name'}
  edit_bucket_name: any;
  bucket_id_to_edit: any;
  constructor(private authService: AuthService,
			  private router: Router,
			  private bucketlistsService: BucketlistsService
			  ) {

  }

  ngOnInit() {
    this.currentuser = localStorage.getItem('currentuser');
  	this.getBucketlists();

  }

  getBucketlists(){
    console.log('before request');
    this.bucketlistsService.getBuckets().subscribe((res: Response)=>{
      this.bucket_res = res.json();
      this.buckets = this.bucket_res.items;
      this.page = this.bucket_res.page;
      this.total_buckets = this.bucket_res.total;
      this.pages = this.bucket_res.pages;
      console.log('In the request response');
      console.log(this.bucket_res)
      console.log('After request response');
    })
    console.log(this.currentuser);
    console.log(this.page);
    console.log(this.pages);
    console.log(this.total_buckets);
    console.log(this.bucket_res);
  }

  addBucket(f: NgForm): void {
    this.bucket.name =f.value.name
    console.log(f.value.name)
    console.log('add bucket starts');
    this.bucketlistsService.postBucket(this.bucket).subscribe((res: Response)=>{
        this.add_bucket_res = res.json();
        console.log('In add bucket')
        console.log(this.add_bucket_res)
        console.log(this.add_bucket_res);
        this.getBucketlists();
    })

  }

  deleteBucket(id) {
    let verify: boolean = confirm(`Are you sure you want to delete this bucket?`);
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
    let verify: boolean = confirm(`Are you sure you want to edit this bucket?`);
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

  viewBucket(bucketlist_id, bucketlist_name){
    console.log('redirecting to bucketlists items');
    localStorage.setItem('bucketlist_id', bucketlist_id);
    localStorage.setItem('bucketlist_name',bucketlist_name);
    console.log(localStorage.getItem('bucketlist_id'));
    this.router.navigate(['/items']);
  }
}
