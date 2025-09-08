import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrivacyPolicyComponent } from './components/privacypolicy/privacypolicy.component';
import { LegalComponent } from './components/legal/legal.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rechtliche-hinweise', component: PrivacyPolicyComponent },
  { path: 'impressum', component: LegalComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}