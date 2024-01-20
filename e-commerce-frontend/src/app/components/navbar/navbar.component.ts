import {Component, EventEmitter, Output} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faBars, faGlobe, faShoppingCart, faSignOutAlt, faUser, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import {RouterLink} from "@angular/router";
import {ClickOutsideDirective} from "../../directives/click-outside.directive";
import {NavbarCartComponent} from "../navbar-cart/navbar-cart.component";
import {MatBadgeModule} from "@angular/material/badge";
import {MatIcon} from "@angular/material/icon";
import {CartService} from "../../services/cart.service";
import {CartItems} from "../../models/cartItems";



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, ClickOutsideDirective, NavbarCartComponent, MatBadgeModule, MatIcon],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  faGlobe = faGlobe;
  faUser = faUser;
  faUserPlus = faUserPlus;
  faBars = faBars;
  faShoppingCart = faShoppingCart;

  isUserLoggedIn: boolean = true;
  isMenuVisible: boolean = false;
  isCartVisible:boolean = false;
  constructor() {
  }

  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }
  toggleCart():void{
    this.isCartVisible = !this.isCartVisible
  }


  protected readonly CartItems = CartItems;
}
