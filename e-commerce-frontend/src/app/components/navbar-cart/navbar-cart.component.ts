import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-navbar-cart',
  standalone: true,
  imports: [],
  templateUrl: './navbar-cart.component.html',
  styleUrl: './navbar-cart.component.scss'
})
export class NavbarCartComponent {

  @Output() closeCart = new EventEmitter<void>();
  onClose() {
    this.closeCart.emit();
  }
}
