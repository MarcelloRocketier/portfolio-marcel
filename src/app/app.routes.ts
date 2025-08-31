import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'privacy-policy',
    loadComponent: () =>
      import('./components/privacypolicy/privacypolicy.component').then(
        (m) => m.PrivacyPolicyComponent
      ),
  },
  { path: '**', redirectTo: '' },
];
