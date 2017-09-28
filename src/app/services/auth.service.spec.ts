import { TestBed, inject } from '@angular/core/testing';

import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { HomeComponent } from '../home/home.component';
import { BucketlistsComponent } from '../bucketlists/bucketlists.component';
import { ItemsComponent } from '../items/items.component';
import { BucketlistsService } from './bucketlists.service';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        HttpModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        BucketlistsComponent,
        ItemsComponent,
        // FormsModule
      ],
      providers: [
        BucketlistsService,
        AuthGuard,
        AuthService,
      {provide: APP_BASE_HREF, useValue : '/'}
      ],
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
