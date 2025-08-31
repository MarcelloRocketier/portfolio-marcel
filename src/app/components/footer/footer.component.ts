import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  isHovered: boolean = false;
  isHoveredMail: boolean = false;
  isHoveredLinkedin: boolean = false;
  isHoveredGitHub: boolean = false;

  year = new Date().getFullYear();

  constructor(public translate: TranslateService) {}
}
