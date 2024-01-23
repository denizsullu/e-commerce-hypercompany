import {Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ProductComponent} from "./pages/product/product.component";
import {ProductDetailsComponent} from "./components/products/product-details/product-details.component";
import {ProductAddComponent} from "./components/products/product-add/product-add.component";
import {LoginComponent} from "./components/login/login.component";
import {loginGuard} from "./guards/login.guard";
import {CartComponent} from "./components/home/cart/cart.component";
import {RegisterComponent} from "./components/register/register.component";
import {NgModule} from "@angular/core";
import {UserComponent} from "./pages/user/user.component";
import {AddressComponent} from "./components/user/address/address.component";
import {FavoriteProductComponent} from "./components/user/favorite-product/favorite-product.component";
import {PastorderComponent} from "./components/user/pastorder/pastorder.component";
import {AdminComponent} from "./pages/admin/admin.component";
import {isAdminGuardGuard} from "./guards/is-admin-guard.guard";



export const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: '', component: AdminComponent, canMatch:[isAdminGuardGuard]},
  {path: 'products', component: ProductComponent},
  {path: 'product/:productId', component: ProductDetailsComponent},
  {path: 'products/category/:categoryId', component: ProductComponent},
  {path: 'products/add', component:ProductAddComponent, canActivate: [loginGuard]},
  {path: 'login', component:LoginComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'cart', component:CartComponent},
  {path: 'userdetails', component:UserComponent,canActivate: [loginGuard],children:[
      {path: '', redirectTo:'favorite-products', pathMatch:'full'},
      {path: 'address', component:AddressComponent},
      {path: 'favorite-products',component:FavoriteProductComponent},
      {path: 'orders', component:PastorderComponent}
    ]}
  // {path: '**', component: PageNotFoundComponent}
];


