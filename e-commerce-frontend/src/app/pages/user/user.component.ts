import { Component } from '@angular/core';
import {UserleftsideComponent} from "../../components/userleftside/userleftside.component";
import {UsercontentComponent} from "../../components/usercontent/usercontent.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [UserleftsideComponent, UsercontentComponent, RouterOutlet],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

}
