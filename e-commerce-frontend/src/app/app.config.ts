import {ApplicationConfig} from '@angular/core';
import {provideRouter, withComponentInputBinding, withPreloading} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {provideHttpClient, withFetch} from "@angular/common/http";
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideToastr} from "ngx-toastr";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,withComponentInputBinding()), provideClientHydration(),
    provideHttpClient(withFetch()), provideAnimations(),
    provideToastr({
      positionClass: "toast-top-right",
    }),


  ]
};
