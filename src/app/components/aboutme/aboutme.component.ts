import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
interface TextSegment {
  textKey: string;
  color: string;
  translated?: string;
}

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [TranslateModule, CommonModule, NgOptimizedImage],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss',
})
export class AboutmeComponent {
  currentIndex = 0;
  deleting = false;
  typingTimer: any;
  visibleLengths: number[] = [];

  animationItems = [
    {
      icon: 'assets/img/otherSpecs/iconLocation.svg',
      segments: [
        {
          textKey: 'ABOUTME.FIRSTANIMATION.FIRSTPART',
          color: 'rgb(137, 188, 255)',
        },
        {
          textKey: 'ABOUTME.FIRSTANIMATION.SECONDPART',
          color: 'rgb(248, 245, 236)',
        },
        {
          textKey: 'ABOUTME.FIRSTANIMATION.THIRDPART',
          color: 'rgb(248, 245, 236)',
        },
      ] as TextSegment[],
      flatText: '',
    },
    {
      icon: 'assets/img/otherSpecs/iconRemote.svg',
      segments: [
        {
          textKey: 'ABOUTME.SECONDANIMATION.FIRSTPART',
          color: 'rgb(137, 188, 255)',
        },
        {
          textKey: 'ABOUTME.SECONDANIMATION.SECONDPART',
          color: 'rgb(248, 245, 236)',
        },
        {
          textKey: 'ABOUTME.SECONDANIMATION.THIRDPART',
          color: 'rgb(248, 245, 236)',
        },
      ] as TextSegment[],
      flatText: '',
    },
    {
      icon: 'assets/img/otherSpecs/iconTravel.svg',
      segments: [
        {
          textKey: 'ABOUTME.THIRDANIMATION.FIRSTPART',
          color: 'rgb(137, 188, 255)',
        },
        {
          textKey: 'ABOUTME.THIRDANIMATION.SECONDPART',
          color: 'rgb(248, 245, 236)',
        },
        {
          textKey: 'ABOUTME.THIRDANIMATION.THIRDPART',
          color: 'rgb(248, 245, 236)',
        },
      ] as TextSegment[],
      flatText: '',
    },
  ];

  /**
   * Returns the icon of the current animation item.
   *
   * If the current index is out of bounds, an empty string is returned.
   */
  get currentIcon() {
    return this.animationItems[this.currentIndex]?.icon || '';
  }

  /**
   * Returns the segments of the current animation item.
   *
   * If the current index is out of bounds, an empty array is returned.
   * Each segment contains a text key, color, and optionally a translated text.
   */
  get currentSegments() {
    return this.animationItems[this.currentIndex]?.segments || [];
  }

  /**
   * Returns the visible length of the given segment.
   *
   * This method is used in the template to display the visible part of the
   * segment. The visible length is determined by the index of the segment
   * in the current animation item. If the segment is not found in the
   * current animation item, 0 is returned.
   * @param segment The segment for which the visible length is returned.
   * @returns The visible length of the segment, or 0 if the segment is not found.
   */
  getVisibleSegmentLength(segment: any): number {
    const index = this.currentSegments.indexOf(segment);
    return this.visibleLengths[index] || 0;
  }

  constructor(private translate: TranslateService) {}

  /**
   * Initializes the component.
   *
   * Loads the texts for the animation items, and subscribes to the language change event.
   * When the language changes, the texts are reloaded and the animation is reset.
   */
  ngOnInit() {
    this.loadTexts();
    this.translate.onLangChange.subscribe(() => {
      this.loadTexts();
      this.deleting = false;
      this.currentIndex = 0;
    });
  }

  /**
   * Loads and translates the text segments for the current animation items.
   *
   * This method retrieves translations for each text segment using the
   * translation service and updates the `flatText` and `translated` fields
   * of each animation item. Once all translations are loaded, it clears
   * the typing timer and resets the `visibleLengths` array. Finally, it
   * initiates the typing animation.
   *
   * @returns A promise that resolves once all text segments are translated.
   */
  async loadTexts() {
    const translationPromises = this.animationItems.map(async (item) => {
      const texts = await Promise.all(
        item.segments.map((seg) => this.translate.get(seg.textKey).toPromise())
      );

      item.flatText = texts.join('');
      item.segments.forEach((seg, i) => (seg.translated = texts[i]));
    });

    await Promise.all(translationPromises);
    this.visibleLengths = [];
    clearTimeout(this.typingTimer);
    this.startTyping();
  }

  /**
   * Manages the typing animation for the text segments.
   *
   * This method animates the text segments by incrementally revealing and
   * hiding characters. It operates in two phases: typing and deleting. In
   * the typing phase, it iteratively reveals characters of each text
   * segment until all segments are fully visible. Once typing is complete,
   * it switches to the deleting phase, where it hides characters until all
   * segments are empty. After deleting, it advances to the next animation
   * item and repeats the process.
   *
   * The typing speed is controlled by a timer, with different intervals for
   * typing and deleting. It also resets the animation when the language changes.
   */
  startTyping() {
    const segments = this.currentSegments;

    if (!this.visibleLengths.length) {
      this.visibleLengths = segments.map(() => 0);
    }

    if (!this.deleting) {
      for (let i = 0; i < segments.length; i++) {
        if (this.visibleLengths[i] < (segments[i]?.translated?.length || 0)) {
          this.visibleLengths[i]++;
          break;
        }
      }

      const isDone = segments.every(
        (s, i) => this.visibleLengths[i] === (s.translated?.length || 0)
      );

      if (isDone) {
        this.deleting = true;
        setTimeout(() => this.startTyping(), 750);
        return;
      }
    } else {
      for (let i = segments.length - 1; i >= 0; i--) {
        if (this.visibleLengths[i] > 0) {
          this.visibleLengths[i]--;
          break;
        }
      }

      const isDone = this.visibleLengths.every((len) => len === 0);
      if (isDone) {
        this.deleting = false;
        this.currentIndex =
          (this.currentIndex + 1) % this.animationItems.length;
        this.visibleLengths = [];
      }
    }

    this.typingTimer = setTimeout(
      () => this.startTyping(),
      this.deleting ? 40 : 80
    );
  }

  /**
   * Scrolls the page to the contact section.
   *
   * Determines the target section based on the current window width,
   * selecting the mobile or desktop version of the contact section.
   * If the target section is found, the page scrolls smoothly to it.
   */
  scrollToContact() {
    const isMobile = window.innerWidth <= 850;
    const targetId = `contact-${isMobile ? 'mobile' : 'desktop'}`;
    const contactSection = document.getElementById(targetId);

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
