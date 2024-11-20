import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PortfolioSingleListComponent } from '../portfolio-single-list/portfolio-single-list.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio-list',
  standalone: true,
  imports: [CommonModule, PortfolioSingleListComponent, TranslateModule],
  templateUrl: './portfolio-list.component.html',
  styleUrl: './portfolio-list.component.scss'
})
export class PortfolioListComponent {

}
