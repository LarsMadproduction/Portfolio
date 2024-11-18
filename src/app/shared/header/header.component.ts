import { Component, HostListener } from '@angular/core';
import { MobileNavComponent } from '../mobile-nav/mobile-nav.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MobileNavComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  constructor(private router: Router) {}
  activeSection: string = '';

  isLegalNoticeRoute = false;

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
    });
  }
}
