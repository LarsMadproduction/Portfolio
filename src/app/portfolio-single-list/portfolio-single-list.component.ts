import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio-single-list',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './portfolio-single-list.component.html',
  styleUrl: './portfolio-single-list.component.scss',
})
export class PortfolioSingleListComponent {
  projects = [
    {
      image: 'join.png',
      name: 'Join',
      skills: 'JavaScript | HTML | CSS | Firebase',
      descriptionKey: 'portfolio.join.description',
      linkProject: 'https://join.lars-schumacher.com',
      linkGit: 'https://github.com/LarsMadproduction/Join',
    },
    {
      image: 'medieval-hunt.png',
      name: 'Medieval Hunt',
      skills: 'JavaScript | HTML | CSS',
      descriptionKey: 'portfolio.medieval_hunt.description',
      linkProject: 'https://medieval-hunt.lars-schumacher.com',
      linkGit: 'https://github.com/LarsMadproduction/Medieval-Hunt',
    },
    {
      image: 'dabubble.png',
      name: 'DABubble',
      skills: 'Angular | TypeScript | SCSS | Firebase',
      descriptionKey: 'portfolio.dabubble.description',
      linkProject: 'https://dabubble.lars-schumacher.com',
      linkGit: 'https://github.com/LarsMadproduction/DABubble',
    },
    {
      image: 'default-frame.png',
      name: 'Management-Tool',
      skills: 'Angular | TypeScript | SCSS | Django | Python',
      descriptionKey: 'portfolio.management_tool.description',
      linkProject: 'https://management-tool.lars-schumacher.com',
      linkGit: 'https://github.com/LarsMadproduction/management-tool',
    },
  ];

  isDisabled(link: string): boolean {
    return link === 'https://management-tool.lars-schumacher.com';
  }

  preventNavigation(event: Event, link: string): void {
    if (this.isDisabled(link)) {
      event.preventDefault();
    }
  }
}
