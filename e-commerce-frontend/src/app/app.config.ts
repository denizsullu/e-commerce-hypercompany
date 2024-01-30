import {ApplicationConfig} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideToastr} from "ngx-toastr";
import {authInterceptor} from "./interceptors/auth.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,withComponentInputBinding()), provideClientHydration(),
    provideHttpClient(withInterceptors([authInterceptor])), provideAnimations(),
    provideToastr({
      positionClass: "toast-top-right",
    }),





  ]
};
