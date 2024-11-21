import { Component, HostListener } from '@angular/core';
import { MobileNavComponent } from '../mobile-nav/mobile-nav.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MobileNavComponent, CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  currentLang: string;

  constructor(private router: Router, private translate: TranslateService) {
    this.currentLang = this.translate.currentLang || 'en';
  }
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

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
  }

  backToMain(){
    this.router.navigateByUrl('/');
    window.scrollTo(0, 0);
  }
}
