import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {ToastrService} from "ngx-toastr";
import {AuthService} from "../services/auth/auth.service";

export const adminGuard: CanActivateFn = (route, state) => {
    const router = inject(Router);
    const toastrService = inject(ToastrService);
    const authService = inject(AuthService);
    if (authService.isAdmin()) {
        return true;
    } else {
        router.navigate(['']);
        toastrService.info('Bu sayfaya erişim yetkiniz bulunmamaktadır');
        return false;
    }
};
