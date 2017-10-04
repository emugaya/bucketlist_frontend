import { HomeComponent } from './home/home.component';
import { AuthService } from './services/auth.service';
import { RegisterComponent } from './register/register.component';
import { TestBed, async, inject, ComponentFixture } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';
import { BucketlistsService } from './services/bucketlists.service';
import { AuthGuard } from './services/auth-guard.service';
import { BucketlistsComponent } from './bucketlists/bucketlists.component';
import { ItemsComponent } from './items/items.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { Router } from '@angular/router';

class RouterStub {
  navigate(url: string[]) {
    return url[0];
  }
}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
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
        {provide: Router, useClass: RouterStub },
        {provide: APP_BASE_HREF, useValue : '/' }
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create the app', async(() => {
    // const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    // const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('bucketlist');
    expect(component.login).toEqual(true);
    expect(component.loggedout).toEqual(false);
  }));

  it('should render title in a h1 tag', async(() => {
    // const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('bucketlist');
  }));
  it('should have login set to true, and loggedout set to false', async(() => {
    // const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.login).toEqual(true);
    expect(app.loggedout).toEqual(false);
  }));
  it('should route to login', inject([Router], (router: Router) => {
    const spy = spyOn(router, 'navigate');
    component.goToLogin();
    expect(router.navigate).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  }));
  it('should route to register', inject([Router], (router: Router) => {
    const spy = spyOn(router, 'navigate');
    component.goToRegister();
    expect(router.navigate).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/register']);
  }));
  it('should logout and route to login', inject([Router], (router: Router) => {
    const spy = spyOn(router, 'navigate');
    component.logOut();
    expect(router.navigate).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  }));
});
