import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslations } from './app/translate.providers';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    ...provideTranslations(),
    ...appConfig.providers,
  ],
}).catch((err) => console.error(err));
