import { Component } from '@angular/core';
import {HeroSectionComponent} from "../../components/home/hero-section/hero-section.component";
import {CategoriesComponent} from "../../components/home/categories/categories.component";
import {CampaignsComponent} from "../../components/home/campaigns/campaigns.component";
import {FavoriteProductsComponent} from "../../components/home/favorite-products/favorite-products.component";
import {MobileAppComponent} from "../../components/home/mobile-app/mobile-app.component";
import {FeatureCardGridComponent} from "../../components/home/feature-card-grid/feature-card-grid.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent,CategoriesComponent,CampaignsComponent,FavoriteProductsComponent,MobileAppComponent,FeatureCardGridComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
