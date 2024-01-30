import {Routes} from '@angular/router';
import {loginGuard} from "./guards/login.guard";
import {CheckoutComponent} from "./components/cart/components/checkout/checkout.component";
import {adminGuard} from "./guards/admin.guard";
import {HomeComponent} from "./components/home/pages/home.component";


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {
        path: 'admin',
        loadChildren: () => import("./components/admin/admin.routes").then(m => m.routes),
        canActivate: [adminGuard]
    },
    {
        path: 'user',
        loadChildren: () => import('./components/user/user.routes').then(m => m.routes),
        canActivate: [loginGuard]
    },
    {
        path: 'products',
        loadComponent: () => import("./components/products/pages/product.component").then(m => m.ProductComponent)
    },
    {path: 'product/:productId',
        loadComponent: () => import("./components/products/components/product-details/product-details.component").then(m => m.ProductDetailsComponent)},
    {path: 'products/category/:categoryId',
        loadComponent: () => import("./components/products/pages/product.component").then(m => m.ProductComponent)},
    {path: 'login',
        loadComponent: () => import("./components/auth/components/login/login.component").then(m => m.LoginComponent)},
    {path: 'register',
        loadComponent: () => import("./components/auth/components/register/register.component").then(m => m.RegisterComponent)},
    {path: 'cart',
        loadComponent: () => import("./components/cart/cart.component").then(m => m.CartComponent)},

    {path: 'checkout', component: CheckoutComponent, canActivate: [loginGuard]},
    {
        path: '**',
        loadComponent: () => import('./components/shared/components/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)
    },
];


