import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    NgOptimizedImage,
    LanguageSwitcherComponent,
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
}
