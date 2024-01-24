import {Component, OnInit} from '@angular/core';
import {CurrencyPipe, NgIf} from "@angular/common";
import {Product} from "../../../products/models/product";
import {ProductService} from "../../../products/services/product.service";



@Component({
  selector: 'app-favorite-products',
  standalone: true,
  imports: [
    CurrencyPipe],
  templateUrl: './favorite-products.component.html',
  styleUrl: './favorite-products.component.scss'
})
export class FavoriteProductsComponent implements OnInit {

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

