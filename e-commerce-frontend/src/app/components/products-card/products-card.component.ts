import {Component, OnInit} from '@angular/core';
import {CurrencyPipe, NgIf} from "@angular/common";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {Product} from "../../models/product";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-products-card',
  standalone: true,
  imports: [
    CurrencyPipe, FontAwesomeModule, NgIf
  ],
  templateUrl: './products-card.component.html',
  styleUrl: './products-card.component.scss'
})
export class ProductsCardComponent implements OnInit {
  faPlus = faPlus;
  products: Product[];
  dataLoaded = false;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.productService.getProducts().subscribe(response => {
      this.products = response;
      this.dataLoaded = true;
    })

  }


}

