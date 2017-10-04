import { async, ComponentFixture, TestBed , inject} from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { BucketlistsComponent } from '../bucketlists/bucketlists.component';
import { BucketlistsService } from '../services/bucketlists.service';
import { AuthGuard } from '../services/auth-guard.service';
import { AuthService } from '../services/auth.service';
import { APP_BASE_HREF } from '@angular/common';
import { ItemsComponent } from '../items/items.component';
import { AuthServiceStub2 } from '../testdata/servicemocks/auth.service.stub2';
import { Router } from '@angular/router';

class RouterStub {
  navigate(url: string[]) {
    return url[0];
  }
}
describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

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
        {provide: Router, useClass: RouterStub},
        {provide: AuthService, useClass: AuthServiceStub2},
        {provide: APP_BASE_HREF, useValue : '/'}
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should throw error 400 ', inject([AuthService, Router], (authservice: AuthService, router: Router) =>{
    const regForm = <NgForm>{ value: { username: 'test', password: 'password' } };
    component.onSubmit(regForm);
  }));
});
