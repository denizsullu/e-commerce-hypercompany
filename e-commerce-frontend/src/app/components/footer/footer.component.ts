import { Component } from '@angular/core';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons/faHome";


@Component({
  selector: 'app-footer',
  standalone: true,
    imports: [
        FontAwesomeModule
    ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {


  protected readonly faHome = faHome;
}
