import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
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


// Import Routing module
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AuthGuard } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    BucketlistsComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  	],
  providers: [AuthService,
              BucketlistsService,
              AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
