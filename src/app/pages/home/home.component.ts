import { Component } from '@angular/core';
import { SkillsComponent } from '../../components/skills/skills.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { IntroComponent } from '../../components/intro/intro.component';
import { LanguageSwitcherComponent } from '../../components/language-switcher/language-switcher.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { PrivacyPolicyComponent} from '../../components/privacypolicy/privacypolicy.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AboutmeComponent } from '../../components/aboutme/aboutme.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    IntroComponent,
    LanguageSwitcherComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    PrivacyPolicyComponent,
    FooterComponent,
    NavbarComponent,
    AboutmeComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
