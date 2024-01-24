import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatBadgeModule} from "@angular/material/badge";
import {MatIcon} from "@angular/material/icon";

import {AsyncPipe} from "@angular/common";

import {NavbarCartComponent} from "../../../cart/components/navbar-cart/navbar-cart.component";

import {CartItems} from "../../../home/models/cartItems";
import {ClickOutsideDirective} from "../../directives/click-outside.directive";
import {UserDetail} from "../../../user/models/userDetail";
import {AuthService} from "../../../auth/services/auth.service";
import {UserService} from "../../../admin/services/user.service";
import {TokenService} from "../../../auth/services/token.service";


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, ClickOutsideDirective, NavbarCartComponent, MatBadgeModule, MatIcon, AsyncPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit{
  protected readonly CartItems = CartItems;
  isMenuVisible: boolean = false;
  isCartVisible: boolean = false;
  user:UserDetail;


  constructor(public  authService:AuthService,private userService:UserService,private tokenService:TokenService) {
  }

  ngOnInit(): void {
    const user = this.tokenService.getUserDetailsFromToken().sub
    this.getUserDetails(user)


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

  getUserDetails(username:string){
    this.userService.getUserDetails(username).subscribe({
      next: (response:UserDetail) =>{
        this.user = response;
      },
      error: (error) =>{
        console.log("User detayı çekilemedi",error)
      }
    })
  }

}
