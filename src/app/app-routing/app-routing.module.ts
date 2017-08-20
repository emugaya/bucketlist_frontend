import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { BucketlistsComponent } from '../bucketlists/bucketlists.component';
import { ItemsComponent } from '../items/items.component';
import { EditBucketlistComponent } from '../edit-bucketlist/edit-bucketlist.component';
import { AddBucketlistComponent } from '../add-bucketlist/add-bucketlist.component';
import { AddItemComponent } from '../add-item/add-item.component';
import { EditItemComponent } from '../edit-item/edit-item.component';

const routes: Routes =[
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', pathMatch: 'full', component: HomeComponent},
	{ path: 'login',  component: LoginComponent},
	{ path: 'register',  component: RegisterComponent},
	{ path: 'bucketlists',  component: BucketlistsComponent},
	{ path: 'items',  component: ItemsComponent},
	{ path: 'bucketlists/edit',  component: EditBucketlistComponent},
	{ path: 'add-bucketlist',  component: AddBucketlistComponent},
	{ path: 'items/add',  component: AddItemComponent},
	{ path: 'items/edit',  component: EditItemComponent}
];

@NgModule({
  imports: [
  	RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: [],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
