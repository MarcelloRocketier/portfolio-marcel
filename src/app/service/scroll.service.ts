import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  scrollToSection(baseId: string, mobileThreshold = 850) {
    const suffix = window.innerWidth <= mobileThreshold ? 'mobile' : 'desktop';
    const targetId = `${baseId}-${suffix}`;
    const el = document.getElementById(targetId);

    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
