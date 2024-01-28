import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatBadgeModule} from "@angular/material/badge";
import {MatIcon} from "@angular/material/icon";

import {AsyncPipe} from "@angular/common";

import {NavbarCartComponent} from "../../../cart/components/navbar-cart/navbar-cart.component";

import {ClickOutsideDirective} from "../../../../directives/click-outside.directive";
import {UserDetail} from "../../../../models/user/userDetail";
import {AuthService} from "../../../../services/auth/auth.service";
import {CartService} from "../../../../services/cart.service";
import {Subject, takeUntil} from "rxjs";


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

    private destroy$ = new Subject<void>();

    ngOnInit() {
        this.authService.currentUser$.pipe(
            takeUntil(this.destroy$)
        ).subscribe(user => {
            this.currentUser = user;
        });

        this.cartService.cartItems$.pipe(
            takeUntil(this.destroy$)
        ).subscribe(cartItems => {
            this.totalItemCount = cartItems.length;
        });
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
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
