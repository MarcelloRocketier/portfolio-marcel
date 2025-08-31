import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    LanguageSwitcherComponent,
    FooterComponent,
    NavbarComponent,
  ],
  template: `
    <div class="privacyScrollWrapper">
        <nav class="navbar">
          <section>
            <ul class="nav-links">
              <div class="logoMain">
                <a
                  href="https://marcel-reyes-langen.developerakademie.net/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="logo"
                >
                  <img
                    src="./assets/img/logo/LogoIconBlack.svg"
                    alt="Marcel Reyes Logo"
                  />
                </a>
                <p class="nameSmall">M. Reyes</p>
                <p class="jobTitleSmall">developer</p>
              </div>
              <li>
                <a
                  href="javascript:void(0)"
                  [ngClass]="{ active: activeLink === 'privacy-policy' }"
                  (click)="scrollToSection('privacy-policy')"
                >
                  {{ 'PRIVACY.TITLE' | translate }}
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  [ngClass]="{ active: activeLink === 'impressum' }"
                  (click)="scrollToSection('impressum')"
                >
                  {{ 'LEGAL.TITLE' | translate }}
                </a>
              </li>
              <app-language-switcher></app-language-switcher>
            </ul>
          </section>
        </nav>
        <span id="privacy-policy" class="anchor-spacer"></span>
      <section class="privacy-policy privacy-mode">
        <h1>{{ 'PRIVACY.TITLE' | translate }}</h1>
        <div class="back-button-wrapper"></div>
        <p>
          <strong>{{ 'PRIVACY.LAST_UPDATED' | translate }}</strong>
        </p>

        <h2>{{ 'PRIVACY.SECTIONS.RESPONSIBLE' | translate }}</h2>
        <p>
          Marcel Reyes<br />
          E-Mail:
          <a href="mailto:marcelreyeslangenhorst@gmail.com.contact">marcelreyeslangenhorst&#64;gmail.com</a>
        </p>
        <h2>{{ 'PRIVACY.SECTIONS.DATA_COLLECTION' | translate }}</h2>
        <p>{{ 'PRIVACY.DATA_COLLECTION_TEXT_1' | translate }}</p>

        <h2>{{ 'PRIVACY.SECTIONS.CONTACT_FORM' | translate }}</h2>
        <p>{{ 'PRIVACY.CONTACT_FORM_TEXT_1' | translate }}</p>
        <p>{{ 'PRIVACY.CONTACT_FORM_TEXT_2' | translate }}</p>
        <p>{{ 'PRIVACY.CONTACT_FORM_TEXT_3' | translate }}</p>

        <h2>{{ 'PRIVACY.SECTIONS.LOG_FILES' | translate }}</h2>
        <p>{{ 'PRIVACY.LOG_FILES_TEXT_1' | translate }}</p>
        <ul>
          <p>{{ 'PRIVACY.LOG_FILES_IP' | translate }}</p>
          <p>{{ 'PRIVACY.LOG_FILES_DATE' | translate }}</p>
          <p>{{ 'PRIVACY.LOG_FILES_BROWSER' | translate }}</p>
          <p>{{ 'PRIVACY.LOG_FILES_OS' | translate }}</p>
        </ul>
        <p>{{ 'PRIVACY.LOG_FILES_TEXT_2' | translate }}</p>

        <h2>{{ 'PRIVACY.SECTIONS.RIGHTS' | translate }}</h2>
        <p>{{ 'PRIVACY.RIGHTS_INTRO' | translate }}</p>
        <ul>
          <p>{{ 'PRIVACY.RIGHTS_ACCESS' | translate }}</p>
          <p>{{ 'PRIVACY.RIGHTS_CORRECTION' | translate }}</p>
          <p>{{ 'PRIVACY.RIGHTS_DELETION' | translate }}</p>
          <p>{{ 'PRIVACY.RIGHTS_LIMITATION' | translate }}</p>
          <p>{{ 'PRIVACY.RIGHTS_OBJECTION' | translate }}</p>
          <p>{{ 'PRIVACY.RIGHTS_TRANSFER' | translate }}</p>
        </ul>
        <p>
          {{ 'PRIVACY.RIGHTS_CONTACT' | translate }}
          <a href="mailto:marcelreyeslangenhorst@gmail.com">marcelreyeslangenhorst&#64;gmail.com.contact</a>
        </p>

        <h2>{{ 'PRIVACY.SECTIONS.REVOCATION' | translate }}</h2>
        <p>
          {{ 'PRIVACY.REVOCATION_TEXT' | translate }}
          <a href="mailto:marcelreyeslangenhorst@gmail.com.contact">marcelreyeslangenhorst&#64;gmail.com.contact</a>
        </p>

        <h2>{{ 'PRIVACY.SECTIONS.SECURITY' | translate }}</h2>
        <p>{{ 'PRIVACY.SECURITY_TEXT' | translate }}</p>

        <h2>{{ 'PRIVACY.SECTIONS.HOSTING' | translate }}</h2>
        <p>{{ 'PRIVACY.HOSTING_TEXT' | translate }}</p>
        <hr />
        <span id="impressum" class="anchor-spacer"></span>
        <h1>{{ 'LEGAL.TITLE' | translate }}</h1>

        <h2>{{ 'LEGAL.OWNER' | translate }}</h2>
        <p>
          Marcel Reyes Langenhorst<br />
          Parallelweg 67<br />
          59269 Beckum<br />
          E-Mail:
          <a href="mailto:marcelreyeslangenhorst@gmail.com.contact">marcelreyeslangenhorst&#64;gmail.com.contact</a><br />
        </p>

        <h2>{{ 'LEGAL.DISCLAIMER_TITLE' | translate }}</h2>
        <p>{{ 'LEGAL.DISCLAIMER_TEXT' | translate }}</p>

        <h2>{{ 'LEGAL.LINKS_TITLE' | translate }}</h2>
        <p>{{ 'LEGAL.LINKS_TEXT' | translate }}</p>

        <h2>{{ 'LEGAL.COPYRIGHT_TITLE' | translate }}</h2>
        <p>{{ 'LEGAL.COPYRIGHT_TEXT' | translate }}</p>
      </section>
    </div>
    <app-footer></app-footer>
  `,
  styleUrls: ['./privacypolicy.component.scss'],
})
export class PrivacyPolicyComponent {
  ngOnInit(): void {
    document.body.classList.add('privacy-mode');
  }
  ngOnDestroy(): void {
    document.body.classList.remove('privacy-mode');
  }
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['https://marcel-reyes-langen.developerakademie.net/index.html']);
  }

  activeLink: String = '';

  /**
   * Sets the active link to the provided link.
   *
   * @param link - The link string to set as active.
   */
  setActive(link: string) {
    this.activeLink = link;
  }
  scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      this.setActive(id); // falls du aktiven Link markieren willst
    }
  }
}
