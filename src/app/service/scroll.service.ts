// src/app/service/scroll.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  /** sanft nach oben scrollen */
  scrollToTop(options: ScrollToOptions = { top: 0, behavior: 'smooth' }) {
    try {
      window.scrollTo(options);
    } catch {
      /* no-op: z.B. bei SSR */
    }
  }

  /** zu einem Element per CSS-Selector scrollen */
  scrollToSelector(selector: string, behavior: ScrollBehavior = 'smooth') {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior, block: 'start' });
    }
  }

  /** zu einem Element per ID scrollen */
  scrollToId(id: string, behavior: ScrollBehavior = 'smooth') {
    this.scrollToSelector(`#${id}`, behavior);
  }
}