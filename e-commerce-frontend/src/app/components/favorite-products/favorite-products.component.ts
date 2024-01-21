import {Component, OnInit} from '@angular/core';
import {CurrencyPipe, NgIf} from "@angular/common";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {Product} from "../../models/product";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-favorite-products',
  standalone: true,
  imports: [
    CurrencyPipe, FontAwesomeModule, NgIf
  ],
  templateUrl: './favorite-products.component.html',
  styleUrl: './favorite-products.component.scss'
})
export class FavoriteProductsComponent implements OnInit {
  faPlus = faPlus;
  products: Product[];
  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getProduct();

  }

  getProduct() {
    this.productService.getProducts().subscribe({
      next: (response) => {
        this.products = response;
      },
      error: (error) => {
        console.error('Ürünler yüklenirken bir hata oluştu:', error);
      },
      complete: () => {
      }
    });


  }


}

