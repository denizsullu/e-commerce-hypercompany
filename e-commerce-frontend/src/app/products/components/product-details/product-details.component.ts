import {Component, Input, OnInit} from '@angular/core';
import {CurrencyPipe} from "@angular/common";
import {Product} from "../../models/product";
import {ProductService} from "../../services/product.service";


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{
  product: Product = {productId:1,productDescription:"",productImage:"",categoryName:"",
  productPrice:0, productQuantity:0,productName:"",brandName:""};

  constructor(private productService: ProductService) {}

  //withComponentInputBinding
@Input() productId:number;
  ngOnInit(): void {
    this.getProductDetail(this.productId)
  }
  getProductDetail(productId: number) {
    this.productService.getProductDetail(productId).subscribe({
      next: (response) => {
        this.product = response;
      },
      error: (error) => {
        console.error('Ürün detayı yüklenirken bir hata oluştu:', error);
      },
      complete: () => {
      }
    });

  }


}
