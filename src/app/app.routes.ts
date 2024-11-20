import { Routes } from '@angular/router';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PrivacyPoliceComponent } from './privacy-police/privacy-police.component';


export const routes: Routes = [
    { path: 'legal-notice', component: LegalNoticeComponent },
    { path: 'privacy-policy', component: PrivacyPoliceComponent },
];
