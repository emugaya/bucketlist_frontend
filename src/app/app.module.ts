import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BucketlistsComponent } from './bucketlists/bucketlists.component';
import { ItemsComponent } from './items/items.component';
import { EditBucketComponent } from './edit-bucket/edit-bucket.component';
import { EditBucketlistComponent } from './edit-bucketlist/edit-bucketlist.component';
import { AddBucketlistComponent } from './add-bucketlist/add-bucketlist.component';
import { AddItemComponent } from './add-item/add-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    BucketlistsComponent,
    ItemsComponent,
    EditBucketComponent,
    EditBucketlistComponent,
    AddBucketlistComponent,
    AddItemComponent,
    EditItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
