import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrivacyPolicyComponent } from './components/privacypolicy/privacypolicy.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rechtliche-hinweise', component: PrivacyPolicyComponent },
  { path: 'impressum', component: PrivacyPolicyComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload',
    scrollOffset: [0, 104],
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}