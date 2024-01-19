import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {ProductService} from "../../services/product.service";
import {CurrencyPipe} from "@angular/common";
import {ActivatedRoute, RouterLink} from "@angular/router";

@Component({
  selector: 'app-product-main',
  standalone: true,
  imports: [
    CurrencyPipe,
    RouterLink
  ],
  templateUrl: './product-main.component.html',
  styleUrl: './product-main.component.scss'
})
export class ProductMainComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService
    , private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["categoryId"]) {
        this.getAllByCategoryId(params["categoryId"])
      } else {
        this.getProduct()
      }
    })

  }

  getProduct() {
    this.productService.getProducts().subscribe(response => {
      this.products = response;
    })
  }

  getAllByCategoryId(categoryId: number) {
    this.productService.getProductsByCategory(categoryId).subscribe(response => {
      this.products = response;
    })
  }

}
