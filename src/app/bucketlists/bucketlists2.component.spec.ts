import { NgForm } from '@angular/forms/src/directives';
import { Injectable } from '@angular/core';
import { browser } from 'protractor/built';
import { ItemsComponent } from '../items/items.component';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import {
  async,
  ComponentFixture,
  TestBed,
  inject
} from '@angular/core/testing';
import { BucketlistsComponent } from './bucketlists.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpModule, Http, Response, ResponseOptions } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { APP_BASE_HREF } from '@angular/common';
import { BucketlistsService } from '../services/bucketlists.service';
import { AuthGuard } from '../services/auth-guard.service';
import { AuthService } from '../services/auth.service';
// import { BucketlistServiceStub } from '../testdata/servicemocks/buckelistservice.mock';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
// import { AuthServiceStub } from '../testdata/servicemocks/auth.service.mock';
import 'rxjs/add/observable/of';
import { BucketlistServiceStub2 } from '../testdata/servicemocks/buckelist.service.mock2';
import { AuthServiceStub2 } from '../testdata/servicemocks/auth.service.stub2';

class RouterStub {
  navigate(url: string[]) {
    return url[0];
  }
}

describe('BucketlistsComponent', () => {
  let component: BucketlistsComponent;
  let fixture: ComponentFixture<BucketlistsComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AppRoutingModule, HttpModule, FormsModule],
        declarations: [
          BucketlistsComponent,
          LoginComponent,
          RegisterComponent,
          ItemsComponent,
          HomeComponent
        ],
        providers: [
          {
            provide: BucketlistsService,
            useClass: BucketlistServiceStub2,
            deps: [AuthService, Http]
          },
          AuthGuard,
          {provide: AuthService, useClass: AuthServiceStub2},
        //   {provide: Router, useClass: RouterStub},
          { provide: APP_BASE_HREF, useValue: '/' }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketlistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should have deleted bucket',
    inject([BucketlistsService, AuthService, Router],
        (bservice: BucketlistsService, authservice: AuthService, router: Router) => {
            spyOn(window, 'confirm').and.returnValue(true);
            component.deleteBucket(75);
    })
  );
  it('should addbucket',
    inject([BucketlistsService, AuthService, Router],
        (bservice: BucketlistsService, authservice: AuthService) => {
      const testForm = <NgForm>{ value: { name: 'tests' } };
      component.addBucket(testForm);
    }));
  it('should editbucket',
    inject([BucketlistsService, AuthService, Router],
        (bservice: BucketlistsService, authservice: AuthService) => {
      const testForm = <NgForm>{ value: { name: 'tests' } };
      spyOn(window, 'confirm').and.returnValue(true);
      component.editBucketName(testForm);
    }));
it('should addbucket', (inject([BucketlistsService], (bservice: BucketlistsService) => {
    const testForm = <NgForm>{ value: { name: 'tests' } };
    component.addBucket(testForm);
  })));
});
