import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {ClickOutsideDirective} from "../../directives/click-outside.directive";
import {NavbarCartComponent} from "../navbar-cart/navbar-cart.component";
import {MatBadgeModule} from "@angular/material/badge";
import {MatIcon} from "@angular/material/icon";
import {CartItems} from "../../models/cartItems";


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, ClickOutsideDirective, NavbarCartComponent, MatBadgeModule, MatIcon],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {

  isUserLoggedIn: boolean = true;
  isMenuVisible: boolean = false;
  isCartVisible: boolean = false;

  constructor() {
  }

  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }

  toggleCart(): void {
    this.isCartVisible = !this.isCartVisible
  }


  protected readonly CartItems = CartItems;
}
