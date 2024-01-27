import { Component } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {CartItem} from "../../model/cartItem";
import {AuthService} from "../../../auth/services/auth.service";
import {ToastrService} from "ngx-toastr";
import {switchMap, take} from "rxjs";

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  cartItems: CartItem[];
  constructor(private cartService:CartService,private authService:AuthService, private toastService:ToastrService) {}

  ngOnInit() {
    this.authService.currentUser$.pipe(
      take(1),
      switchMap(user => {
        if (user && user.id) {
          this.cartService.loadCartItems(user.id);
        }
        return this.cartService.cartItems$;
      })
    ).subscribe(cartItems => {
      this.cartItems = cartItems;
    });
  }



}
