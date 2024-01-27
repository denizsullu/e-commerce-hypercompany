import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatBadgeModule} from "@angular/material/badge";
import {MatIcon} from "@angular/material/icon";

import {AsyncPipe} from "@angular/common";

import {NavbarCartComponent} from "../../../cart/components/navbar-cart/navbar-cart.component";

import {ClickOutsideDirective} from "../../directives/click-outside.directive";
import {UserDetail} from "../../../user/models/userDetail";
import {AuthService} from "../../../auth/services/auth.service";
import {CartService} from "../../../cart/services/cart.service";


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, ClickOutsideDirective, NavbarCartComponent, MatBadgeModule, MatIcon, AsyncPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {

  isMenuVisible: boolean = false;
  isCartVisible: boolean = false;
  currentUser: UserDetail | null = null;
  totalItemCount: number = 0;
  constructor(public authService: AuthService,private cartService:CartService) {}

  ngOnInit() {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;

    });
    this.cartService.cartItems$.subscribe(cartItems=>{
      this.totalItemCount = cartItems.length
    })
  }



  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }

  toggleCart(): void {
    this.isCartVisible = !this.isCartVisible
  }

  logout() {
    this.authService.logout();
    this.isMenuVisible = false
    this.isCartVisible = false;
  }


}
