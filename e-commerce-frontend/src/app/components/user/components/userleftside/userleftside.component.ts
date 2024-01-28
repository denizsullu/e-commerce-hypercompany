import { Component } from '@angular/core';
import {MatDivider} from "@angular/material/divider";
import {MatIcon} from "@angular/material/icon";
import {ChangeuserdetailsComponent} from "../changeuserdetails/changeuserdetails.component";
import {RouterLink, RouterLinkActive} from "@angular/router";

import {TitleCasePipe} from "@angular/common";
import {UserDetail} from "../../../../models/user/userDetail";
import {AuthService} from "../../../../services/auth/auth.service";

@Component({
  selector: 'app-userleftside',
  standalone: true,
  imports: [
    MatDivider,
    MatIcon,
    ChangeuserdetailsComponent,
    RouterLink,
    RouterLinkActive,
    TitleCasePipe
  ],
  templateUrl: './userleftside.component.html',
  styleUrl: './userleftside.component.scss'
})
export class UserleftsideComponent {
  currentUser:UserDetail | null;
constructor(private authService:AuthService) {}
  ngOnInit(){
  this.authService.currentUser$.subscribe(user =>{
    this.currentUser = user;
  })
  }
}
