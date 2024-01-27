import {Routes} from '@angular/router';
import {ProductComponent} from "./products/pages/product.component";

import {LoginComponent} from "./auth/components/login/login.component";
import {loginGuard} from "./admin/guards/login.guard";

import {RegisterComponent} from "./auth/components/register/register.component";
import {HomeComponent} from "./home/pages/home.component";
import {ProductDetailsComponent} from "./products/components/product-details/product-details.component";
import {ProductAddComponent} from "./products/components/product-add/product-add.component";
import {CartComponent} from "./cart/cart.component";
import {CheckoutComponent} from "./cart/components/checkout/checkout.component";
import {adminGuard} from "./admin/guards/admin.guard";




export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admin', loadComponent: () => import("./admin/pages/admin.component").then(m => m.AdminComponent), canActivate: [loginGuard]},
  {path: 'products', loadComponent: () => import("./products/pages/product.component").then(m => m.ProductComponent)},
  {path: 'product/:productId', component: ProductDetailsComponent},
  {path: 'products/category/:categoryId', component: ProductComponent},
  {path: 'products/add', component: ProductAddComponent, canActivate: [adminGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'cart', component: CartComponent},
  {path: 'user', loadChildren: () => import('./user/user.routes').then(m => m.routes),canActivate:[loginGuard]},
  {path: 'checkout',component:CheckoutComponent},
  {path: '**', loadComponent:() => import('./shared/components/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)},
];


