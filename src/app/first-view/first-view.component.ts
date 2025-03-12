import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-first-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-view.component.html',
  styleUrl: './first-view.component.scss',
})
export class FirstViewComponent {
  isHidden = false;
  isRemoved = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.disableScroll();
  }

  close() {
    this.isHidden = true;
    this.enableScroll();
    setTimeout(() => {
      this.isRemoved = true;
    }, 500);
  }

  disableScroll() {
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }

  enableScroll() {
    this.renderer.setStyle(document.body, 'overflow', 'auto');
    this.renderer.setStyle(document.body, 'overflow-x', 'hidden');
  }
}
