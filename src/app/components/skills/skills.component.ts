import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skills = [
    { name: 'HTML', image: 'assets/img/skills/html.svg' },
    { name: 'CSS', image: 'assets/img/skills/Css.svg' },
    { name: 'JavaScript', image: 'assets/img/skills/Javascript.svg' },
    { name: 'Angular', image: 'assets/img/skills/Angular.svg' },
    { name: 'API', image: 'assets/img/skills/API.svg' },
    { name: 'Git', image: 'assets/img/skills/git.svg' },
    { name: 'Firebase', image: 'assets/img/skills/Firebase.svg' },
    { name: 'Scrum', image: 'assets/img/skills/scrum.svg' },
    { name: 'Typescript', image: 'assets/img/skills/TypeScript.svg' },
    { name: 'Material Design', image: 'assets/img/skills/material-design.svg' },
  ];

  learningSkills = [
    { name: 'React', image: 'assets/img/skills/React.svg' },
    { name: 'Vue.js', image: 'assets/img/skills/VueJs.svg' },
  ];

  frontendSkills: string[] = [];
  backendSkills: string[] = [];
  tools: string[] = [];

  /**
   * Initializes the SkillsComponent by subscribing to translation keys for frontend,
   * backend, and tools skills, and assigns the translated values to their respective arrays.
   *
   * @param translate - Service for handling translation and localization.
   */
  constructor(private translate: TranslateService) {
    this.translate
      .get('SKILLS.FRONTEND')
      .subscribe((data) => (this.frontendSkills = data));
    this.translate
      .get('SKILLS.BACKEND')
      .subscribe((data) => (this.backendSkills = data));
    this.translate.get('SKILLS.TOOLS').subscribe((data) => (this.tools = data));
  }

  scrollToContact() {
    const isMobile = window.innerWidth <= 850;
    const targetId = `contact-${isMobile ? 'mobile' : 'desktop'}`;
    const contactSection = document.getElementById(targetId);

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
