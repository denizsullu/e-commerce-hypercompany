import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faBars, faGlobe, faUser, faUserPlus} from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  faGlobe = faGlobe;
  faUser = faUser;
  faUserPlus = faUserPlus;
  isMenuOpen = false;
  faBars = faBars;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }


}
