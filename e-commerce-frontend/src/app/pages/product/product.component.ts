import { Component } from '@angular/core';
import {SidebarCategoryComponent} from "../../components/sidebar-category/sidebar-category.component";
import {ProductMainComponent} from "../../components/product-main/product-main.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [SidebarCategoryComponent,ProductMainComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

}
