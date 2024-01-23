import {Component} from '@angular/core';
import {SidebarCategoryComponent} from "../../components/products/sidebar-category/sidebar-category.component";
import {ProductMainComponent} from "../../components/products/product-main/product-main.component";
import {SearchBarComponent} from "../../components/products/search-bar/search-bar.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [SidebarCategoryComponent,ProductMainComponent,SearchBarComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

}
