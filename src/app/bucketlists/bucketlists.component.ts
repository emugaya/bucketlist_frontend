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

  placeholder:string = "E.g Travel";
  bucket_res: any;
  currentuser: string;
  buckets: any;
  total_buckets: 0;
  page: 0;
  pages: 0;
  per_page: 0;
  add_bucket_res: any;
  bucket ={"name": "Bucket Name"}
  constructor(private authService: AuthService,
			  private router: Router,
			  private bucketlistsService: BucketlistsService
			  ) { 
    		
  }

  ngOnInit() {
    this.currentuser = localStorage.getItem("currentuser");
  	this.getBucketlists();

  }

  getBucketlists(){
    console.log("before request");
    this.bucketlistsService.getBuckets().subscribe((res: Response)=>{
      this.bucket_res = res.json();
      this.buckets = this.bucket_res.items;
      this.page = this.bucket_res.page;
      this.total_buckets = this.bucket_res.total;
      this.pages = this.bucket_res.pages;
      console.log("In the request response");
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
    this.bucketlistsService.postBucket(this.bucket).subscribe((res: Response)=>{
        this.add_bucket_res = res.json();
        console.log(this.add_bucket_res);
        this.getBucketlists();
    })

  }

  deleteBucket(id){
      this.bucketlistsService.deleteBucket(id).subscribe((res:Response)=>{
      console.log("succesfully deleted item");
      this.getBucketlists();

    });
  }
  editBucketName(id, name){
    this.bucketlistsService.editBucket(id,name).subscribe((res:Response)=>{
      console.log("Bucket edited succesfully");
      this.getBucketlists();
    })
  }
}
