import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

interface ResponsiveProject {
  titleKey: string;
}

interface Project {
  titleKey: string;
  titleKeyWO: string;
  duration: string;
  image: string;
  descriptionHeadlineKeys: string[];
  descriptionKeys: string[];
  usedSkillHeadline: string;
  usedSkillKeys: string[];
  usedSkillNameKeys: string[];
  link?: string;
  repo?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  responsiveProject: ResponsiveProject[] = [
    {
      titleKey: 'PROJECTS.RESPONSIVE.PROJECTONE',
    },
    {
      titleKey: 'PROJECTS.RESPONSIVE.PROJECTTWO',
    }
  ];
  projects: Project[] = [
    {
      titleKey: 'PROJECTS.PROJECTONE.TITLE',
      titleKeyWO: 'PROJECTS.PROJECTONE.TITLEWO',
      duration: 'PROJECTS.PROJECTONE.DURATION',
      image: 'assets/img/projects/Join.png',
      descriptionHeadlineKeys: [
        'PROJECTS.PROJECTONE.DESCRIPTIONS.DESCRIPTIONONE.HEADLINE',
        'PROJECTS.PROJECTONE.DESCRIPTIONS.DESCRIPTIONTWO.HEADLINE',
        'PROJECTS.PROJECTONE.DESCRIPTIONS.DESCRIPTIONTHREE.HEADLINE',
      ],
      descriptionKeys: [
        'PROJECTS.PROJECTONE.DESCRIPTIONS.DESCRIPTIONONE.TEXT',
        'PROJECTS.PROJECTONE.DESCRIPTIONS.DESCRIPTIONTWO.TEXT',
        'PROJECTS.PROJECTONE.DESCRIPTIONS.DESCRIPTIONTHREE.TEXT',
      ],
      usedSkillHeadline: 'PROJECTS.PROJECTONE.SKILLHEADLINE',
      usedSkillKeys: [
        'PROJECTS.PROJECTONE.SKILLONE',
        'PROJECTS.PROJECTONE.SKILLTWO',
        'PROJECTS.PROJECTONE.SKILLTHREE',
      ],
      usedSkillNameKeys: [
        'PROJECTS.PROJECTONE.SKILLONENAME',
        'PROJECTS.PROJECTONE.SKILLTWOENAME',
        'PROJECTS.PROJECTONE.SKILLTHREEENAME',
      ],
      link: 'https://join.marcelreyeslangenhorst.de/',
      repo: 'https://github.com/MarcelloRocketier/Join',
    },
    {
      titleKey: 'PROJECTS.PROJECTTWO.TITLE',
      titleKeyWO: 'PROJECTS.PROJECTTWO.TITLEWO',
      duration: 'PROJECTS.PROJECTTWO.DURATION',
      image: 'assets/img/projects/Mesa de trabajo 1.png',
      descriptionHeadlineKeys: [
        'PROJECTS.PROJECTTWO.DESCRIPTIONS.DESCRIPTIONONE.HEADLINE',
        'PROJECTS.PROJECTTWO.DESCRIPTIONS.DESCRIPTIONTWO.HEADLINE',
        'PROJECTS.PROJECTTWO.DESCRIPTIONS.DESCRIPTIONTHREE.HEADLINE',
      ],
      descriptionKeys: [
        'PROJECTS.PROJECTTWO.DESCRIPTIONS.DESCRIPTIONONE.TEXT',
        'PROJECTS.PROJECTTWO.DESCRIPTIONS.DESCRIPTIONTWO.TEXT',
        'PROJECTS.PROJECTTWO.DESCRIPTIONS.DESCRIPTIONTHREE.TEXT',
      ],
      usedSkillHeadline: 'PROJECTS.PROJECTTWO.SKILLHEADLINE',
      usedSkillKeys: [
        'PROJECTS.PROJECTTWO.SKILLONE',
        'PROJECTS.PROJECTTWO.SKILLTWO',
        'PROJECTS.PROJECTTWO.SKILLTHREE',
      ],
      usedSkillNameKeys: [
        'PROJECTS.PROJECTTWO.SKILLONENAME',
        'PROJECTS.PROJECTTWO.SKILLTWOENAME',
        'PROJECTS.PROJECTTWO.SKILLTHREEENAME',
      ],
      link: 'https://sharkie.marcelreyeslangenhorst.de',
      repo: 'https://github.com/MarcelloRocketier/Sharkie',
    },
  ];

  activeProjectIndex = 0;

  @ViewChildren('projectTab') tabs?: QueryList<ElementRef<HTMLElement>>;

  private moveIndex(current: number, delta: number): number {
    const len = this.projects.length;
    return (current + delta + len) % len;
  }

  focusTab(index: number) {
    const el = this.tabs?.get(index)?.nativeElement;
    if (el) el.focus();
  }

  onKeydownTabs(event: KeyboardEvent, index: number) {
    let targetIndex = index;
    switch (event.key) {
      case 'ArrowRight':
        targetIndex = this.moveIndex(index, 1);
        break;
      case 'ArrowLeft':
        targetIndex = this.moveIndex(index, -1);
        break;
      case 'Home':
        targetIndex = 0;
        break;
      case 'End':
        targetIndex = this.projects.length - 1;
        break;
      default:
        return;
    }
    event.preventDefault();
    this.setActiveProject(targetIndex);
    this.focusTab(targetIndex);
  }

  trackByIndex(index: number, _item: unknown): number {
    return index;
  }

  setActiveProject(index: number) {
    this.activeProjectIndex = index;
  }
}
