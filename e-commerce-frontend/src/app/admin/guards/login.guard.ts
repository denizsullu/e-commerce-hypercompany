import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../../auth/services/auth.service";
import {ToastrService} from "ngx-toastr";

export const loginGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService)
  const toastrService = inject(ToastrService)
  const router = inject(Router);
  if(auth.isAuthenticated()){
    return true;
  }
  else {
    router.navigate(["login"])
    toastrService.info("Sisteme giriş yapmalısınız");
    return false;
  }

};
