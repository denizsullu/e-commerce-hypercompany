import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from './components/home/navbar/navbar.component';
import {HeroSectionComponent} from './components/home/hero-section/hero-section.component';
import {CategoriesComponent} from './components/home/categories/categories.component';
import {CampaignsComponent} from "./components/home/campaigns/campaigns.component";
import {FavoriteProductsComponent} from "./components/home/favorite-products/favorite-products.component";
import {MobileAppComponent} from "./components/home/mobile-app/mobile-app.component";
import {FooterComponent} from "./components/home/footer/footer.component";


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
