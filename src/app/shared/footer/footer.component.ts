import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private router: Router) {}

  isLegalNoticeRoute = false;

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.isLegalNoticeRoute = this.router.url === '/legal-notice';
    });
  }
}
