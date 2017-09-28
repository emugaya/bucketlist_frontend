import { Router, Routes } from '@angular/router';
import { BrowserModule, By } from '@angular/platform-browser';
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
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';

class MockRouter {
  navigateByUrl(url: string) { return url; }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        HttpModule,
        FormsModule,
        BrowserModule,
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
        { provide: Router, useClass: MockRouter },
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  it('it should contain image and text', () => {
    expect(el.textContent).toContain('Bucketlists service makes it easy for you to Plan, and Track things you would like to do...');
  });
});
