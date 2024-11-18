import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [],
  templateUrl: './mobile-nav.component.html',
  styleUrl: './mobile-nav.component.scss',
})
export class MobileNavComponent {
  isMobileNavOpen: boolean = false;

  toggleMobileNav(): void {
    this.isMobileNavOpen = !this.isMobileNavOpen;
    if (this.isMobileNavOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }
}
