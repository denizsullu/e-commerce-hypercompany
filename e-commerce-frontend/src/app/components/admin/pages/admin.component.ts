import {Component} from '@angular/core';

import {RouterOutlet} from "@angular/router";
import {SidebarComponent} from "../components/sidebar/sidebar.component";
import {HomeComponent} from "../../home/pages/home.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    HomeComponent,
    RouterOutlet,
    SidebarComponent
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
