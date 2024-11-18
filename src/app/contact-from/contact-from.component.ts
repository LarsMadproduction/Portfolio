import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';



@Component({
  selector: 'app-contact-from',
  standalone: true,
  imports: [FormsModule, CommonModule, MatCheckboxModule],
  templateUrl: './contact-from.component.html',
  styleUrl: './contact-from.component.scss',
})
export class ContactFromComponent {

  http = inject(HttpClient)
  contactData = {
    name: '',
    email: '',
    message: '',
    checkbox: false
  };

  checkboxTouched = false;
  mailTest = true;

  toggleCheckbox() {
    this.contactData.checkbox = !this.contactData.checkbox;
    this.checkboxTouched = true;
  }

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
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
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

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
