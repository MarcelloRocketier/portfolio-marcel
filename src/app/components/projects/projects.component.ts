import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

interface ResponsiveProject {
  projectTitleKey: string;
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
      projectTitleKey: 'PROJECTS.RESPONSIVE.PROJECTONE',
    },
    {
      projectTitleKey: 'PROJECTS.RESPONSIVE.PROJECTTWO',
    },
    {
      projectTitleKey: 'PROJECTS.RESPONSIVE.PROJECTTHREE',
    },
    {
      projectTitleKey: 'PROJECTS.RESPONSIVE.PROJECTFOUR',
    },
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
      link: 'https://www.placeholder.de/projects/Join/html/login.html',
      repo: 'https://github.com/MarcelloRocketier/Join',
    },
    {
      titleKey: 'PROJECTS.PROJECTTWO.TITLE',
      titleKeyWO: 'PROJECTS.PROJECTTWO.TITLEWO',
      duration: 'PROJECTS.PROJECTTWO.DURATION',
      image: 'assets/img/projects/ElPolloLoco.png',
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
      link: 'https://www.placeholder.de/projects/Sharkie/index.html',
      repo: 'https://github.com/MarcelloRocketier/Sharkie',
    },
    {
      titleKey: 'PROJECTS.PROJECTTHREE.TITLE',
      titleKeyWO: 'PROJECTS.PROJECTTHREE.TITLEWO',
      duration: 'PROJECTS.PROJECTTHREE.DURATION',
      image: 'assets/img/projects/comingsoon.jpg',
      descriptionHeadlineKeys: [
        'PROJECTS.PROJECTTHREE.DESCRIPTIONS.DESCRIPTIONONE.HEADLINE',
        'PROJECTS.PROJECTTHREE.DESCRIPTIONS.DESCRIPTIONTWO.HEADLINE',
        'PROJECTS.PROJECTTHREE.DESCRIPTIONS.DESCRIPTIONTHREE.HEADLINE',
      ],
      descriptionKeys: [
        'PROJECTS.PROJECTTHREE.DESCRIPTIONS.DESCRIPTIONONE.TEXT',
        'PROJECTS.PROJECTTHREE.DESCRIPTIONS.DESCRIPTIONTWO.TEXT',
        'PROJECTS.PROJECTTHREE.DESCRIPTIONS.DESCRIPTIONTHREE.TEXT',
      ],
      usedSkillHeadline: 'PROJECTS.PROJECTTHREE.SKILLHEADLINE',
      usedSkillKeys: [
        'PROJECTS.PROJECTTHREE.SKILLONE',
        'PROJECTS.PROJECTTHREE.SKILLTWO',
        'PROJECTS.PROJECTTHREE.SKILLTHREE',
      ],
      usedSkillNameKeys: [
        'PROJECTS.PROJECTTHREE.SKILLONENAME',
        'PROJECTS.PROJECTTHREE.SKILLTWOENAME',
        'PROJECTS.PROJECTTHREE.SKILLTHREEENAME',
      ],
      link: '',
      repo: '',
    },
    {
      titleKey: 'PROJECTS.PROJECTFOUR.TITLE',
      titleKeyWO: 'PROJECTS.PROJECTFOUR.TITLEWO',
      duration: 'PROJECTS.PROJECTFOUR.DURATION',
      image: 'assets/img/projects/comingsoon.jpg',
      descriptionHeadlineKeys: [
        'PROJECTS.PROJECTFOUR.DESCRIPTIONS.DESCRIPTIONONE.HEADLINE',
        'PROJECTS.PROJECTFOUR.DESCRIPTIONS.DESCRIPTIONTWO.HEADLINE',
        'PROJECTS.PROJECTFOUR.DESCRIPTIONS.DESCRIPTIONTHREE.HEADLINE',
      ],
      descriptionKeys: [
        'PROJECTS.PROJECTFOUR.DESCRIPTIONS.DESCRIPTIONONE.TEXT',
        'PROJECTS.PROJECTFOUR.DESCRIPTIONS.DESCRIPTIONTWO.TEXT',
        'PROJECTS.PROJECTFOUR.DESCRIPTIONS.DESCRIPTIONTHREE.TEXT',
      ],
      usedSkillHeadline: 'PROJECTS.PROJECTFOUR.SKILLHEADLINE',
      usedSkillKeys: [
        'PROJECTS.PROJECTFOUR.SKILLONE',
        'PROJECTS.PROJECTFOUR.SKILLTWO',
        'PROJECTS.PROJECTFOUR.SKILLTHREE',
      ],
      usedSkillNameKeys: [
        'PROJECTS.PROJECTFOUR.SKILLONENAME',
        'PROJECTS.PROJECTFOUR.SKILLTWOENAME',
        'PROJECTS.PROJECTFOUR.SKILLTHREEENAME',
      ],
      link: '',
      repo: '',
    },
  ];

  activeProjectIndex = 0;

  /**
   * Sets the active project index to the given index.
   *
   * @param index - The index of the project to set as active.
   */
  setActiveProject(index: number) {
    this.activeProjectIndex = index;
  }
}
