import {HttpInterceptorFn, HttpRequest} from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const securedRoutes = ['/profile', '/checkout', '/my-orders'];
  if (!req.url.includes('/login')) {
    let token = localStorage.getItem('token');
    if (token) {
      req = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + token)
      });
    }
  }

  return next(req);
};
