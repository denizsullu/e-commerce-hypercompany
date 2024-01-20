import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CartItem} from "../../models/cartItem";
import {CartService} from "../../services/cart.service";
import {RouterLink} from "@angular/router";
import {CurrencyPipe} from "@angular/common";
import {Product} from "../../models/product";

@Component({
  selector: 'app-navbar-cart',
  standalone: true,
  imports: [
    RouterLink,
    CurrencyPipe
  ],
  templateUrl: './navbar-cart.component.html',
  styleUrl: './navbar-cart.component.scss'
})
export class NavbarCartComponent implements OnInit{
cartItems: CartItem[];
  @Output() closeCart = new EventEmitter<void>();
  constructor(private cartService:CartService) {}

  ngOnInit(): void {
        this.getCart();
    }


  onClose() {
    this.closeCart.emit();
  }

  getCart(){
    this.cartItems = this.cartService.list();
  }
  removeFromCart(product:Product) {
    this.cartService.removeFromCart(product)
  }

}
