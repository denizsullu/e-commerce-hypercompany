import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {ClickOutsideDirective} from "../../directives/click-outside.directive";
import {NavbarCartComponent} from "../navbar-cart/navbar-cart.component";
import {MatBadgeModule} from "@angular/material/badge";
import {MatIcon} from "@angular/material/icon";
import {CartItems} from "../../models/cartItems";
import {AuthService} from "../../services/auth.service";
import {AsyncPipe} from "@angular/common";
import {UserDetail} from "../../models/userDetail";
import {UserService} from "../../services/user.service";
import {TokenService} from "../../services/token.service";
import {strict} from "node:assert";


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
