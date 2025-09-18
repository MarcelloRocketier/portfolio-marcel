import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-privacypolicy',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    LanguageSwitcherComponent,
    FooterComponent,
    RouterModule,
  ],
  template: `
    <div class="logoMain">
      <a class="logo" [routerLink]="'/'">
        <img src="assets/logo.svg" alt="Logo" />
      </a>
    </div>
    <!-- rest of the template -->
  `,
  styleUrls: ['./privacypolicy.component.scss'],
})
export class PrivacypolicyComponent {
  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigateByUrl('/');
  }
}
