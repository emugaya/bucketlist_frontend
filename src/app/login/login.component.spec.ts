import { AuthService } from '../services/auth.service';
import { AuthGuard } from '../services/auth-guard.service';
import { BucketlistsComponent } from '../bucketlists/bucketlists.component';
import { RegisterComponent } from '../register/register.component';
import { AppComponent } from '../app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HomeComponent } from '../home/home.component';
import { BucketlistsService } from '../services/bucketlists.service';
import { ItemsComponent } from '../items/items.component';
import { APP_BASE_HREF } from '@angular/common';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        HttpModule,
        FormsModule
      ],
      declarations: [
        LoginComponent,
        AppComponent,
        RegisterComponent,
        HomeComponent,
        BucketlistsComponent,
        ItemsComponent
      ],
      providers: [
        BucketlistsService,
        AuthGuard,
        AuthService,
        {provide: APP_BASE_HREF, useValue : '/'}
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });


});
