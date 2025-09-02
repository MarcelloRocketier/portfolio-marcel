import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
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

  constructor() {}

  scrollToContact() {
    const isMobile = window.innerWidth <= 850;
    const targetId = `contact-${isMobile ? 'mobile' : 'desktop'}`;
    const contactSection = document.getElementById(targetId);

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
