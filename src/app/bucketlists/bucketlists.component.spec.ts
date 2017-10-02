import { browser } from 'protractor/built';
import { ItemsComponent } from '../items/items.component';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BucketlistsComponent } from './bucketlists.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpModule, Http, Response } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { APP_BASE_HREF } from '@angular/common';
import { BucketlistsService } from '../services/bucketlists.service';
import { AuthGuard } from '../services/auth-guard.service';
import { AuthService } from '../services/auth.service';
import {MockBucketListService} from './mockdata'; 


describe('BucketlistsComponent', () => {
  let component: BucketlistsComponent;
  let fixture: ComponentFixture<BucketlistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        HttpModule,
        FormsModule
      ],
      declarations: [
        BucketlistsComponent,
        LoginComponent,
        RegisterComponent,
        ItemsComponent,
        HomeComponent,
      ],
      providers: [
        {provide: BucketlistsService, useClass: MockBucketListService, deps: [Http] },
        // BucketlistsService,
        AuthGuard,
        AuthService,
      {provide: APP_BASE_HREF, useValue : '/' }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketlistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    // browser.pause();
    expect(component).toBeTruthy();
  });
  it('should get bucketlist', () => {
    component.getBucketlists();
    console.log(component.bucket_res);
  });

});
