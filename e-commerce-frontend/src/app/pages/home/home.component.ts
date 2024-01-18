import { Component } from '@angular/core';
import {HeroSectionComponent} from "../../hero-section/hero-section.component";
import {CategoriesComponent} from "../../categories/categories.component";
import {CampaignsComponent} from "../../campaigns/campaigns.component";
import {ProductsCardComponent} from "../../products-card/products-card.component";
import {MobileAppComponent} from "../../mobile-app/mobile-app.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent,CategoriesComponent,CampaignsComponent,ProductsCardComponent,MobileAppComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
