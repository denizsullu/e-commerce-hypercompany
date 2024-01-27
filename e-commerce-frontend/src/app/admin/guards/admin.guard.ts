import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {ToastrService} from "ngx-toastr";
import {UserRole} from "../../auth/models/userRole";

export const adminGuard: CanActivateFn = (route, state) => {
  const toastrService = inject(ToastrService)
  const router = inject(Router);
  let isAuthenticated: boolean;
  let role: string = localStorage.getItem('role') || '';
  if(role === UserRole.Admin){
    return true;
  }
  else{
    router.navigate(['login']);
    toastrService.info('Bu sayfaya erişim yetkiniz bulunmamaktadır');
    return false;
  }
};
