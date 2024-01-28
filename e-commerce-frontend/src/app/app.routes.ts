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
import {ProductAddComponent} from "./components/products/components/product-add/product-add.component";




export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admin', loadChildren: () => import("./components/admin/admin.routes").then(m => m.routes), canActivate: [adminGuard]},
  {path: 'products', loadComponent: () => import("./components/products/pages/product.component").then(m => m.ProductComponent)},
  {path: 'product/:productId', component: ProductDetailsComponent},
  {path: 'products/category/:categoryId', component: ProductComponent},
  {path: 'products/add', component: ProductAddComponent, canActivate: [adminGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'cart', component: CartComponent},
  {path: 'user', loadChildren: () => import('./components/user/user.routes').then(m => m.routes),canActivate:[loginGuard]},
  {path: 'checkout',component:CheckoutComponent, canActivate: [loginGuard]},
  {path: '**', loadComponent:() => import('./components/shared/components/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)},
];


