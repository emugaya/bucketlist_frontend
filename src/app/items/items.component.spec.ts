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

describe('ItemsComponent', () => {
  let component: ItemsComponent;
  let fixture: ComponentFixture<ItemsComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        HttpModule,
        FormsModule,
        // Response,
        // ResponseOptions
      ],
      declarations: [
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        BucketlistsComponent,
        ItemsComponent
      ],
      providers: [
        BucketlistsService,
        AuthGuard,
        AuthService,
        MockBackend,
        XHRBackend,
        Response,
        ResponseOptions,
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

  // it('should be created', () => {
  //   inject([BucketlistsService, XHRBackend], (service: BucketlistsService, mockBackEnd: MockBackend) => {
  //     mockBackEnd.connections.subscribe((connection: MockConnection) => {
  //       connection.mockRespond(new Response(new ResponseOptions({
  //         body: {
  //           'id': 34,
  //           'name': 'test 1234',
  //           'created_by': 1,
  //           'date_modified': '2017-09-25 12:09:42',
  //           'date_created': '2017-09-25 12:09:42',
  //           'items': [
  //             {
  //               'id': 15,
  //               'name': 'jhgfdsadgfhjkl;kjhgfd',
  //               'done': false,
  //               'date_created': '2017-09-26 14:03:37',
  //               'date_modified': '2017-09-26 14:03:37'
  //             },
  //             {
  //               'id': 16,
  //               'name': 'jhgfdsadgfhjkl;zxfgchvjk',
  //               'done': false,
  //               'date_created': '2017-09-26 14:03:44',
  //               'date_modified': '2017-09-26 14:03:44'
  //             }
  //           ]
  //         }
  //       })));
  //     });
  //   });
  //   expect(component).toBeTruthy();
  // });
});
