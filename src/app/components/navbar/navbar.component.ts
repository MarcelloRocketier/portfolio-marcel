import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    LanguageSwitcherComponent,
    RouterModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  activeLink: String = '';

  /**
   * Sets the active link to the provided link.
   *
   * @param link - The link string to set as active.
   */
  setActive(link: string) {
    this.activeLink = link;
  }

  constructor(private router: Router) {}

  navigateHome(): void {
    this.router.navigateByUrl('/');
  }

  onLogoClick(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.router.navigateByUrl('/');
  }
}
