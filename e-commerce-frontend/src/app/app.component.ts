import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HeroSectionComponent} from './components/hero-section/hero-section.component';
import {CategoriesComponent} from './components/categories/categories.component';
import {CampaignsComponent} from "./components/campaigns/campaigns.component";
import {FavoriteProductsComponent} from "./components/favorite-products/favorite-products.component";
import {MobileAppComponent} from "./components/mobile-app/mobile-app.component";
import {FooterComponent} from "./components/footer/footer.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NavbarComponent,HeroSectionComponent,CategoriesComponent,CampaignsComponent,FavoriteProductsComponent,
  MobileAppComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'e-commerce-frontend';
}
