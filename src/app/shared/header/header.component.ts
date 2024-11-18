import { Component, HostListener } from '@angular/core';
import { MobileNavComponent } from '../mobile-nav/mobile-nav.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MobileNavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  activeSection: string = '';

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
}
