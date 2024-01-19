import {Component, EventEmitter, Output} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faBars, faGlobe, faShoppingCart, faSignOutAlt, faUser, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import {RouterLink} from "@angular/router";
import {ClickOutsideDirective} from "../../directives/click-outside.directive";
import {NavbarCartComponent} from "../navbar-cart/navbar-cart.component";



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, ClickOutsideDirective,NavbarCartComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  faGlobe = faGlobe;
  faUser = faUser;
  faUserPlus = faUserPlus;
  faBars = faBars;
  faSignOutAlt = faSignOutAlt;
  faShoppingCart = faShoppingCart;

  isUserLoggedIn: boolean = true;
  isMenuVisible: boolean = false;
  isCartVisible:boolean = false;

  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }
  toggleCart():void{
    this.isCartVisible = !this.isCartVisible
  }


}
