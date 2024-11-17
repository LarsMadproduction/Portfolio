import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PortfolioSingleListComponent } from '../portfolio-single-list/portfolio-single-list.component';

@Component({
  selector: 'app-portfolio-list',
  standalone: true,
  imports: [CommonModule, PortfolioSingleListComponent],
  templateUrl: './portfolio-list.component.html',
  styleUrl: './portfolio-list.component.scss'
})
export class PortfolioListComponent {

}