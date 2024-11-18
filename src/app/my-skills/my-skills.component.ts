import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent implements OnInit, AfterViewInit {
  skillSet = [
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

  animatedSkills = false;

  ngOnInit() {}

  ngAfterViewInit() {
    this.observeSkills();
  }

  observeSkills() {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          this.animatedSkills = true;
          observer.unobserve(entry.target);
        }
      });
    }, options);
    let skillElements = document.querySelectorAll('.skill-stack span');
    skillElements.forEach((el) => observer.observe(el));
  }
}
