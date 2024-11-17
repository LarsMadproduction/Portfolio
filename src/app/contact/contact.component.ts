import { Component } from '@angular/core';
import { ContactFromComponent } from '../contact-from/contact-from.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFromComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
