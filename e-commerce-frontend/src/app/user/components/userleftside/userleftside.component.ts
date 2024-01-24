import { Component } from '@angular/core';
import {MatDivider} from "@angular/material/divider";
import {MatIcon} from "@angular/material/icon";
import {ChangeuserdetailsComponent} from "../changeuserdetails/changeuserdetails.component";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-userleftside',
  standalone: true,
  imports: [
    MatDivider,
    MatIcon,
    ChangeuserdetailsComponent,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './userleftside.component.html',
  styleUrl: './userleftside.component.scss'
})
export class UserleftsideComponent {

}
