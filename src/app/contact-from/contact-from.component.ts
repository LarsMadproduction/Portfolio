import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-from',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './contact-from.component.html',
  styleUrl: './contact-from.component.scss',
})
export class ContactFromComponent {
  http = inject(HttpClient);
  contactData = {
    name: '',
    email: '',
    message: '',
    checkbox: false,
  };

  checkboxTouched = false;
  mailTest = true;
  messageSent: boolean = false;

  toggleCheckbox() {
    this.contactData.checkbox = !this.contactData.checkbox;
    this.checkboxTouched = true;
  }

  post = {
    endPoint: 'https://lars-schumacher.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            setTimeout(() => {
            this.messageSent = true;
          }, 1500);
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }
}
