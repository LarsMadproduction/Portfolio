import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-single-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-single-list.component.html',
  styleUrl: './portfolio-single-list.component.scss',
})
export class PortfolioSingleListComponent {

  projects = [
    {
      image: 'join.png',
      name: 'Join',
      skills: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    },
    {
      image: 'medieval-hunt.png',
      name: 'Medieval Hunt',
      skills: 'JavaScript | HTML | CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help the magician collect the coins and make his way to the end. Watch your mana otherwise it will be difficult to defeat the boss.',
    },
  ];
}
