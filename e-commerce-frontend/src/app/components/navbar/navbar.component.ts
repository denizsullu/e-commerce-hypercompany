import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {ClickOutsideDirective} from "../../directives/click-outside.directive";
import {NavbarCartComponent} from "../navbar-cart/navbar-cart.component";
import {MatBadgeModule} from "@angular/material/badge";
import {MatIcon} from "@angular/material/icon";
import {CartItems} from "../../models/cartItems";
import {AuthService} from "../../services/auth.service";
import {AsyncPipe} from "@angular/common";


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

  constructor(public  authService:AuthService) {
  }

  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }

  toggleCart(): void {
    this.isCartVisible = !this.isCartVisible
  }
  logout() {
    this.authService.logout();
    this.isMenuVisible =false
    this.isCartVisible = false;
  }

  protected readonly CartItems = CartItems;
}
