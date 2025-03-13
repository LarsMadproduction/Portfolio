import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { ContactComponent } from './contact/contact.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { TranslateService } from '@ngx-translate/core';
import { PrivacyPoliceComponent } from './privacy-police/privacy-police.component';
import { FirstViewComponent } from './first-view/first-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FirstViewComponent,
    HeaderComponent,
    FooterComponent,
    AboveTheFoldComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioListComponent,
    ContactComponent,
    LegalNoticeComponent,
    CommonModule,
    PrivacyPoliceComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  isLegalNoticeRoute = false;
  isPrivacyPolicyRoute = false;

  constructor(private router: Router, private translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.setDefaultLang('de');
    this.translate.use('de');
    this.router.events.subscribe(() => {
    this.isLegalNoticeRoute = this.router.url === '/legal-notice';
    this.isPrivacyPolicyRoute = this.router.url === '/privacy-policy';
    });
  }
}
