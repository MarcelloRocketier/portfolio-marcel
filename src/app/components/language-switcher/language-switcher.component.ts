import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss',
})
export class LanguageSwitcherComponent {
  currentLang: string;

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('lang') || 'de';
    this.currentLang = savedLang;
    this.translate.use(this.currentLang);
  }

  get toggleClass(): string {
    return this.currentLang === 'de'
      ? 'language-toggle de'
      : 'language-toggle en';
  }

  toggleLanguage() {
    this.currentLang = this.currentLang === 'de' ? 'en' : 'de';
    this.translate.use(this.currentLang);
    localStorage.setItem('lang', this.currentLang);
  }
}
