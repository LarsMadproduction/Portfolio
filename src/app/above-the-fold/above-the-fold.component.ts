import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AtfPortraitComponent } from '../atf-portrait/atf-portrait.component';
import { AtfContentComponent } from '../atf-content/atf-content.component';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [
    TranslateModule,
    AtfPortraitComponent,
    AtfContentComponent,
    AtfPortraitComponent,
  ],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss',
})
export class AboveTheFoldComponent {}
