import {Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {FavoriteProductsComponent} from "./components/favorite-products/favorite-products.component";
import {ProductComponent} from "./pages/product/product.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {ProductAddComponent} from "./components/product-add/product-add.component";
import {LoginComponent} from "./components/login/login.component";
import {loginGuard} from "./guards/login.guard";
import {CartComponent} from "./components/cart/cart.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductComponent},
  {path: 'products/category/:categoryId', component: ProductComponent},
  {path: 'product/:productId', component: ProductDetailsComponent},
  {path: 'products/add', component:ProductAddComponent, canActivate: [loginGuard]},
  {path: 'login', component:LoginComponent},
  {path: 'cart', component:CartComponent}
  // {path: '**', component: PageNotFoundComponent}
];


