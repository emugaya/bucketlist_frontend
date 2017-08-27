import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { NgIf } from '@angular/common';
import { AuthService} from '../services/auth.service';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { BucketlistsService } from '../services/bucketlists.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  bucketlist_id: any;
  bucketlist_name: any;
  bucketlist_items: any;
  currentuser: any;
  show_welcome: boolean = true;
  delete_item_res :any ;
  add_bucketlist_item = {'name': 'Item Name', 'done':false}
  add_bucketlist_item_res : any;
  edit_item_detail: any ={'name':'new Item Name', 'done': true}
  edit_item_id: any;
  edit_item_res: any;


  constructor(private bucketlistsService: BucketlistsService,
              private router: Router) {
              }

  ngOnInit() {
    console.log("iniside items component")
    this.bucketlist_id = localStorage.getItem('bucketlist_id');
    this.bucketlist_name = localStorage.getItem('bucketlist_name');
    console.log(this.bucketlist_id);
    this.currentuser = localStorage.getItem("currentuser");
    this.getBucketListItems();
  }
  // Method to retrieve buckets in a bucketlist
  getBucketListItems(){
    console.log("before");
    console.log(this.bucketlist_id);
    this.bucketlistsService.getSingleBucket(this.bucketlist_id).subscribe((res: Response)=>{
      console.log("Inside getBucketListItems");
      let returned_data = res.json();
      console.log(returned_data)
      console.log(returned_data.items)
      if (returned_data.items > 0){
        this.bucketlist_items = returned_data.items;
        console.log("in undefined");
      }else{
        this.bucketlist_id = 0;
        console.log("in else")
      }
      this.bucketlist_items = returned_data.items;
      console.log("returned bucket list items below");
      console.log(this.bucketlist_items);
    })

  }

  // Method to create items in a particular bucketlist
  addBucketListItem(f: NgForm){
    console.log("start add bucket item");
    this.add_bucketlist_item.name = f.value.name;
    console.log(f.value.name);
    this.add_bucketlist_item.done = f.value.done;
    this.bucketlist_id = localStorage.getItem('bucketlist_id');
    console.log("starting add item");
    console.log(this.add_bucketlist_item)

    this.bucketlistsService.postBucketItem(this.bucketlist_id,this.add_bucketlist_item)
      .subscribe((res: Response)=>{
        this.add_bucketlist_item_res = res.json();
        console.log("inside add item to bucket");
        // console.log(this.add_bucketlist_item_res);
        console.log("done adding items");
        this.getBucketListItems();

          })

  }
  // Method to Set Variables for editing an item in the bucket list
  setVariablesForEditBucketItem(id, name, done){
    console.log("setting variables");
    this.edit_item_id = id;
    console.log(this.edit_item_id)
    this.edit_item_detail.name = name;
    this.edit_item_detail.done = done;
    console.log(this.edit_item_detail)
    console.log("done setting variables")
  }
  // Method to Edit buckelist item
  editBucketlistItem(editform: NgForm){
    console.log("start edit bucket list");
    this.edit_item_detail.name = editform.value.name;
    this.edit_item_detail.done = editform.value.done;
    this.bucketlistsService.editItem(this.bucketlist_id,this.edit_item_id,this.edit_item_detail)
      .subscribe((res: Response)=>{
        this.edit_item_res = res.json();
        console.log("after item edit");
        console.log(this.edit_item_res)
      })


  }
  deleteBucketItem(item_id){
    console.log("before delete")
    this.bucketlist_id = localStorage.getItem('bucketlist_id')
    this.bucketlistsService.deleteBucketItem(this.bucketlist_id,item_id)
      .subscribe((res: Response)=>{
        console.log("inside delete")
        this.delete_item_res = res.json();
        console.log(this.delete_item_res)
        this.getBucketListItems()


      })

  }
}
