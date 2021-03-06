import { NgForm } from '@angular/forms/src/directives';
import { RequestOptions } from 'https';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { ItemsComponent } from './items.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { BucketlistsComponent } from '../bucketlists/bucketlists.component';
import { BucketlistsService } from '../services/bucketlists.service';
import { AuthGuard } from '../services/auth-guard.service';
import { AuthService } from '../services/auth.service';
import { APP_BASE_HREF } from '@angular/common';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { XHRBackend, ResponseOptions, Response } from '@angular/http';
import { BucketlistServiceStub } from '../testdata/servicemocks/buckelistservice.mock';
import { AuthServiceStub } from '../testdata/servicemocks/auth.service.mock';
import { Router } from '@angular/router';

// class RouterStub {
//   navigate(url: string[]) {
//     return url[0];
//   }
// }

describe('ItemsComponent', () => {
  let component: ItemsComponent;
  let fixture: ComponentFixture<ItemsComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        HttpModule,
        FormsModule,
      ],
      declarations: [
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        BucketlistsComponent,
        ItemsComponent
      ],
      providers: [
        { provide: BucketlistsService, useClass: BucketlistServiceStub},
        // { provide: Router, useClass: RouterStub },
        AuthGuard,
        AuthService,
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
it('should be created', inject([BucketlistsService], (bservice: BucketlistsService) =>{
  expect(component).toBeTruthy();
}));
it('should get bucketlist items', inject([BucketlistsService], (bservice: BucketlistsService) => {
  component.getBucketListItems(2);
}));
it('should add item to bucket', inject([BucketlistsService], (bservice: BucketlistsService) => {
  const addItem = <NgForm> { value: { name: 'test'} };
  component.addBucketListItem(addItem);
}));
it('should set variables for Editing Item', () =>
  component.setVariablesForEditBucketItem(1, 'name', true)
);
it('should edit bucketItem', inject([BucketlistsService], (bservice: BucketlistsService) => {
  const editForm = <NgForm> { value: { name: 'test', done: 'true'}};
  spyOn(window, 'confirm').and.returnValue(true);
  component.editBucketlistItem(editForm);
}));
it('should delete item from bucketlist', inject([BucketlistsService], (bservice: BucketlistsService) => {
  spyOn(window, 'confirm').and.returnValue(true);
  component.deleteBucketItem(3);
}));
// it('should allow user to navigate back to backetlists', inject([Router], (router: Router) => {
//   const spy = spyOn(router, 'navigate');
//   component.backToBuckets();
//   expect(router.navigate).toHaveBeenCalled();
//   expect(router.navigate).toHaveBeenCalledWith(['/bucketlists']);
// }));
});
