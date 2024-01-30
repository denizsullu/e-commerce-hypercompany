import {Routes} from '@angular/router';


import {LoginComponent} from "./components/auth/components/login/login.component";
import {loginGuard} from "./guards/login.guard";

import {RegisterComponent} from "./components/auth/components/register/register.component";

import {CartComponent} from "./components/cart/cart.component";
import {CheckoutComponent} from "./components/cart/components/checkout/checkout.component";
import {adminGuard} from "./guards/admin.guard";
import {HomeComponent} from "./components/home/pages/home.component";
import {ProductDetailsComponent} from "./components/products/components/product-details/product-details.component";
import {ProductComponent} from "./components/products/pages/product.component";


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


