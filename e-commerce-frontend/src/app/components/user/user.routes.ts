import {Routes} from '@angular/router';
import {UserComponent} from "./pages/user.component";
import {AddressComponent} from "./components/address/address.component";
import {FavoriteProductComponent} from "./components/favorite-product/favorite-product.component";
import {PastorderComponent} from "./components/pastorder/pastorder.component";
import {CreditCardComponent} from "./components/credit-card/credit-card.component";


export const routes: Routes = [
  {path: '', component: UserComponent, children: [
      {path: '', redirectTo: 'favorite-products', pathMatch: 'full'},
      {path: 'address', component: AddressComponent},
      {path: 'favorite-products', component: FavoriteProductComponent},
      {path: 'orders', component: PastorderComponent},
      {path: 'credit-cards', component: CreditCardComponent},
    ], title: "User | Hyper Company"
  },
];
