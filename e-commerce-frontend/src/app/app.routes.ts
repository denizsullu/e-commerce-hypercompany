import {Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {ProductsCardComponent} from "./components/products-card/products-card.component";
import {ProductComponent} from "./pages/product/product.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductComponent},
  {path: 'products/category/:categoryId', component: ProductComponent},
  {path: 'product/:productId', component: ProductDetailsComponent},
  // {path: '**', component: PageNotFoundComponent}
];


