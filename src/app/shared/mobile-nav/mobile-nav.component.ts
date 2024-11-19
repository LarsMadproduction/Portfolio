import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './mobile-nav.component.html',
  styleUrl: './mobile-nav.component.scss',
})
export class MobileNavComponent {

  constructor(private router: Router) {}

  isLegalNoticeRoute = false;

  isMobileNavOpen: boolean = false;

  toggleMobileNav(): void {
    this.isMobileNavOpen = !this.isMobileNavOpen;
    if (this.isMobileNavOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.isLegalNoticeRoute = this.router.url === '/legal-notice';
    });
  }
}
