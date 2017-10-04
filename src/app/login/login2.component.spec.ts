import { AuthService } from '../services/auth.service';
import { AuthGuard } from '../services/auth-guard.service';
import { BucketlistsComponent } from '../bucketlists/bucketlists.component';
import { RegisterComponent } from '../register/register.component';
import { AppComponent } from '../app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import {
  async,
  ComponentFixture,
  TestBed,
  inject
} from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { HomeComponent } from '../home/home.component';
import { BucketlistsService } from '../services/bucketlists.service';
import { ItemsComponent } from '../items/items.component';
import { APP_BASE_HREF } from '@angular/common';
import { AuthServiceStub2 } from '../testdata/servicemocks/auth.service.stub2';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AppRoutingModule, HttpModule, FormsModule],
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
          { provide: AuthService, useClass: AuthServiceStub2 },
          { provide: APP_BASE_HREF, useValue: '/' }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should login throw a 400 error', inject([AuthService],
    (authService: AuthService) => {
      const loginForm = <NgForm>{
        value: { username: 'test', password: 'password' }
      };
      component.onSubmit(loginForm);
    }));
});
