import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule,
    NgOptimizedImage,
    LanguageSwitcherComponent,
  ],
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent {
  activeLink: String = '';

  /**
   * Sets the active link to the provided link.
   *
   * @param link - The link string to set as active.
   */
  setActive(link: string) {
    this.activeLink = link;
  }

  isHovered: boolean = false;
  isHoveredMail: boolean = false;
  isHoveredLinkedin: boolean = false;
  isHoveredGitHub: boolean = false;
  isMenuOpen: boolean = false;

  constructor() {}

  /**
   * Handles the click event for the navigation links. Prevents the default event
   * from propagating, sets the active link, and closes the mobile menu. Then it
   * scrolls to the corresponding element with the id of "{baseId}-{mobile|desktop}"
   * with a smooth animation. The "{mobile|desktop}" part is determined by the
   * current window width. The scrolling is delayed by 50ms to allow the menu to
   * close before the scrolling happens.
   *
   * @param baseId - The base id of the element to scroll to.
   * @param event - The click event.
   */
 handleNavClick(baseId: string, event: Event) {
  event.preventDefault();
  this.setActive(baseId);
  this.isMenuOpen = false;

  const isMobile = window.innerWidth <= 850;
  const targetId = `${baseId}-${isMobile ? 'mobile' : 'desktop'}`;

  setTimeout(() => {
    document
      .querySelector(`#${targetId}`)
      ?.scrollIntoView({ behavior: 'smooth' });
  }, 50);
}
}
