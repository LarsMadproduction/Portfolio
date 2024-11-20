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
      skills: 'Angular | TypeScript | HTML | CSS | Firebase',
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
  ];
}
