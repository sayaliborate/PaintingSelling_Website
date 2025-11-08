import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideToastr } from 'ngx-toastr';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // ✅ Sets up Angular Routing
    provideHttpClient(),   // ✅ Enables API Calls
    provideAnimations(),   // ✅ Required for Toastr
    provideToastr(),       // ✅ Enables Toastr Notifications
    provideRouter(routes, withComponentInputBinding()) // ✅ Ensure Router is provided

  ],
};


