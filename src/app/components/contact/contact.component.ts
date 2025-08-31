import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  privacyAccepted: boolean = false;

  showOverlay: boolean = false;
  overlayMessage: string = '';

  constructor(private http: HttpClient, private translate: TranslateService) {}

  onSubmit(form: NgForm) {
    if (!this.privacyAccepted) {
      this.triggerOverlay(this.translate.instant('CONTACT.ERROR_PRIVACY'));
      return;
    }

    const payload = {
      name: this.name,
      email: this.email,
      message: this.message,
    };

    this.http.post('/portfolio/kontakt.php', payload).subscribe({
      next: () => {
        this.triggerOverlay(this.translate.instant('CONTACT.SUCCESS'));
        form.resetForm();
      },
      error: () => {
        this.triggerOverlay(this.translate.instant('CONTACT.ERROR'));
      },
    });
  }

  triggerOverlay(message: string) {
    this.overlayMessage = message;
    this.showOverlay = true;
    setTimeout(() => (this.showOverlay = false), 3000);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
