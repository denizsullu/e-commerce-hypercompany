import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CartItem} from "../../model/cartItem";

import {RouterLink} from "@angular/router";
import {CurrencyPipe} from "@angular/common";
import {CartService} from "../../services/cart.service";
import {AuthService} from "../../../auth/services/auth.service";
import {of, switchMap, take} from "rxjs";
import {Product} from "../../../products/models/product";
import {ToastrService} from "ngx-toastr";
import {MatIcon} from "@angular/material/icon";
import {TurkishLiraPipe} from "../../../shared/pipes/turkish-lira.pipe";



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
  @Output() closeCart = new EventEmitter<void>();
  constructor(private cartService:CartService, private authService:AuthService, private toastService:ToastrService) {}

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

  onDeleteCartItem(cartItemId: number) {
    this.cartService.deleteCartItem(cartItemId).subscribe(() => {
      this.authService.currentUser$.pipe(take(1)).subscribe(user => {
        if (user && user.id) {
          this.cartService.loadCartItems(user.id);
          this.toastService.info("Ürün sepetten silindi")
        }
      });
    });
  }
  onClose() {
    this.closeCart.emit();
  }


}
