import { Component } from '@angular/core';
import {HeroSectionComponent} from "../../components/hero-section/hero-section.component";
import {CategoriesComponent} from "../../components/categories/categories.component";
import {CampaignsComponent} from "../../components/campaigns/campaigns.component";
import {ProductsCardComponent} from "../../components/products-card/products-card.component";
import {MobileAppComponent} from "../../components/mobile-app/mobile-app.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent,CategoriesComponent,CampaignsComponent,ProductsCardComponent,MobileAppComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
