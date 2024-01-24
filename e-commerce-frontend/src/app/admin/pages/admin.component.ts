import { Component } from '@angular/core';
import {HomeComponent} from "../../home/pages/home.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    HomeComponent
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
