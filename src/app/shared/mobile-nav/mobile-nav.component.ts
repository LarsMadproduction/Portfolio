import { Component, HostListener } from '@angular/core';
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

  activeSection: string = '';

  isLegalNoticeRoute = false;
  isPrivacyPolicyRoute = false;

  isMobileNavOpen: boolean = false;

  toggleMobileNav(): void {
    this.isMobileNavOpen = !this.isMobileNavOpen;
    if (this.isMobileNavOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    let sections = document.querySelectorAll('section');
    let scrollY = window.scrollY + window.innerHeight / 2;
    sections.forEach((section: Element) => {
      let offsetTop = section.getBoundingClientRect().top + window.scrollY;
      let offsetBottom = offsetTop + section.clientHeight;
      if (scrollY >= offsetTop && scrollY <= offsetBottom) {
        this.activeSection = section.getAttribute('id') || '';
      }
    });
  }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.isLegalNoticeRoute = this.router.url === '/legal-notice';
      this.isPrivacyPolicyRoute = this.router.url === '/privacy-policy';
    });
  }
}
