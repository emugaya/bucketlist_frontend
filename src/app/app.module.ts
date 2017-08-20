import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

// Services
import { AuthService} from './services/auth.service';
import { BucketlistsService } from './services/bucketlists.service';

// Components
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

// Import Routing module
import { AppRoutingModule }     from './app-routing/app-routing.module';

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
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  	],
  providers: [AuthService,
              BucketlistsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
