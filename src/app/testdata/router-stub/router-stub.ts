import {Routes} from "@angular/router";
import { HomeComponent } from '../../home/home.component';
import { RegisterComponent } from '../../register/register.component';
import { LoginComponent } from '../../login/login.component';
import { BucketlistsComponent } from '../../bucketlists/bucketlists.component';
import { AuthGuard } from '../../services/auth-guard.service';
import { ItemsComponent } from '../../items/items.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', pathMatch: 'full', component: HomeComponent},
    { path: 'login',  component: LoginComponent},
    { path: 'register',  component: RegisterComponent},
    { path: 'bucketlists', component: BucketlistsComponent},
    { path: 'bucketlist/:id', component: ItemsComponent},
];
