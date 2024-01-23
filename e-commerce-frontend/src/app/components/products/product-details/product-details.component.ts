import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../../models/product";
import {CurrencyPipe} from "@angular/common";

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

  constructor(private productService: ProductService
    , private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      if(params["productId"]){
        this.getProductDetail(params["productId"])
      }
    })
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
