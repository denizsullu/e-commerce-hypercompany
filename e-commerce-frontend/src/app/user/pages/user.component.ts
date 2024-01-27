import { Component } from '@angular/core';

import {RouterOutlet} from "@angular/router";
import {UserleftsideComponent} from "../components/userleftside/userleftside.component";
import {UsercontentComponent} from "../components/usercontent/usercontent.component";


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [UserleftsideComponent, UsercontentComponent, RouterOutlet],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {


}
