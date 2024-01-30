import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CartItem} from "../../../../models/cart/cartItem";

import {RouterLink} from "@angular/router";
import {CurrencyPipe} from "@angular/common";
import {CartService} from "../../../../services/cart.service";
import {AuthService} from "../../../../services/auth/auth.service";
import {ToastrService} from "ngx-toastr";
import {MatIcon} from "@angular/material/icon";
import {TurkishLiraPipe} from "../../../../pipes/turkish-lira.pipe";


@Component({
  selector: 'app-navbar-cart',
  standalone: true,
  imports: [
    RouterLink,
    CurrencyPipe,
    MatIcon,
    TurkishLiraPipe
  ],
  templateUrl: './navbar-cart.component.html',
  styleUrl: './navbar-cart.component.scss'
})
export class NavbarCartComponent implements OnInit{
  cartItems: CartItem[];
  totalCartAmount: number | null = 0;
  @Output() closeCart = new EventEmitter<void>();
  constructor(private cartService:CartService, private authService:AuthService, private toastService:ToastrService) {}

  ngOnInit() {
    const userId = this.authService.getCurrentUserId();
    if (userId !== null) {
      this.cartService.loadCartItems(userId);
      this.cartService.cartItems$.subscribe(cartItems => {
        this.cartItems = cartItems;
          if (cartItems && cartItems.length > 0) {
              this.totalCartAmount = cartItems[0].productTotalPrice;
          }

      });
    }
  }


  onDeleteCartItem(cartItemId: number) {
    this.cartService.deleteCartItem(cartItemId).subscribe(() => {
      const userId = this.authService.getCurrentUserId();
      if (userId !== null) {
        this.cartService.loadCartItems(userId);
      }
      this.toastService.info("Ürün sepetten silindi");
    });
  }

  onClose() {
    this.closeCart.emit();
  }


}
