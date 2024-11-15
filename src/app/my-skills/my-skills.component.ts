import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent {
  skillStack = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'Rest-Api',
    'Firebase',
    'Git',
    'Material-Design',
    'Scrum',
    'CSS',
    'HTML',
    'Continually-Learning',
  ];
}
