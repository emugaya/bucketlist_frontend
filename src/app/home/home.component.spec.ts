import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard } from '../services/auth-guard.service';
import { BucketlistsComponent } from '../bucketlists/bucketlists.component';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { RegisterComponent} from '../register/register.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from '../login/login.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ItemsComponent } from '../items/items.component';
import { BucketlistsService } from '../services/bucketlists.service';
import { AuthService } from '../services/auth.service';
import { APP_BASE_HREF } from '@angular/common';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        HttpModule,
        FormsModule,
        BrowserModule
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
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
