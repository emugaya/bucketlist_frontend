import { NgForm } from '@angular/forms/src/directives';
import { Injectable } from '@angular/core';
import { browser } from 'protractor/built';
import { ItemsComponent } from '../items/items.component';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { BucketlistsComponent } from './bucketlists.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpModule, Http, Response, ResponseOptions } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { APP_BASE_HREF } from '@angular/common';
import { BucketlistsService } from '../services/bucketlists.service';
import { AuthGuard } from '../services/auth-guard.service';
import { AuthService } from '../services/auth.service';
import { BucketlistServiceStub } from '../testdata/servicemocks/buckelistservice.mock';
// import {MockBucketListService} from './mockdata';
// import { Bucketlist } from '../lib/models';
import { Router } from '@angular/router';
// import { bucketlist } from './model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
class AuthServiceStub {
  // current_user = 'emugaya';
}

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
        {provide: BucketlistsService, useClass: BucketlistServiceStub, deps: [AuthService, Http] },
        // {provide: AuthService, useValue: AuthServiceStub},
        // BucketlistsService,
        AuthGuard,
        AuthService,
        // Router,
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

  it('should be created', inject([BucketlistsService], (bservice: BucketlistsService) => {
    expect(component).toBeTruthy();
  }));

  it('should have deleted bucket', inject([BucketlistsService], (bservice: BucketlistsService) => {
    spyOn(window, 'confirm').and.returnValue(true);
    component.deleteBucket(75);
    expect(component.message).toBe('Bucketlist 75 deleted succesfully.');
  }));
  it('should set variables', () => {
    component.setBucketNameEditVariables(1, 'test');
    expect(component.edit_bucket_name).toBe('test');
    expect(component.bucket_id_to_edit).toBe(1);
  });
  it('it should setpage', inject([BucketlistsService], (bservice: BucketlistsService) => {
    component.setPage(2);
    expect(component.page).toBe(2);
    expect(component.current_page).toBe(2);
  }));
  it('should addbucket', (inject([BucketlistsService], (bservice: BucketlistsService) => {
    const testForm = <NgForm>{ value: { name: 'tests' } };
    component.addBucket(testForm);
  })));
  it('should editbucket', inject([BucketlistsService], (bservice: BucketlistsService) => {
    const testForm = <NgForm>{ value: { name: 'tests' } };
    spyOn(window, 'confirm').and.returnValue(true);
    component.editBucketName(testForm);
  }));
  it('should searchbuckets', inject([BucketlistsService], (bservice: BucketlistsService) => {
    const searchForm = <NgForm>{ value: { name: 'tests'}};
    component.searchBucketLists(searchForm);
  }));
});
