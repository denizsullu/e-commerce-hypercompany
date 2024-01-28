import { Component } from '@angular/core';

import {FavoriteProductComponent} from "../favorite-product/favorite-product.component";
import {PastorderComponent} from "../pastorder/pastorder.component";
import {ChangeuserdetailsComponent} from "../changeuserdetails/changeuserdetails.component";
import {AddressComponent} from "../address/address.component";

@Component({
  selector: 'app-usercontent',
  standalone: true,
  imports: [AddressComponent, FavoriteProductComponent, PastorderComponent, ChangeuserdetailsComponent],
  templateUrl: './usercontent.component.html',
  styleUrl: './usercontent.component.scss'
})
export class UsercontentComponent {

}
