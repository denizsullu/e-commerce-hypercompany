import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../../auth/services/auth.service";
import {ToastrService} from "ngx-toastr";
import {take} from "rxjs";

export const loginGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService)
  const toastrService = inject(ToastrService)
  const router = inject(Router);
  let isAuthenticated: boolean;

  auth.isAuthenticated$.pipe(take(1)).subscribe(isAuth => {
    isAuthenticated = isAuth;
  });

  if (isAuthenticated) {

    return true;
  } else {
    router.navigate(['login']);
    toastrService.info('Sisteme giriş yapmalısınız');
    return false;
  }

};
