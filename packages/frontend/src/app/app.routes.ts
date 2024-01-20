import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProtectedComponent } from './protected/protected.component';

export const routes: Routes = [
    { path: 'protected', component: ProtectedComponent },
    { path: '', component: HomeComponent }
];
