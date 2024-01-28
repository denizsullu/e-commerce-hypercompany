import { Component } from '@angular/core';
import {ProductService} from "../../../../services/product.service";
import {Product} from "../../../../models/product/product";
import {TurkishLiraPipe} from "../../../../pipes/turkish-lira.pipe";
import {RouterLink} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-productlist',
  standalone: true,
    imports: [
        TurkishLiraPipe,
        RouterLink
    ],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.scss'
})
export class ProductlistComponent {
    products: Product[] = [];
    constructor(private productService: ProductService,private toastService:ToastrService) {}

    ngOnInit(): void {
        this.getProductList();
    }
    getProductList():void{
        this.productService.getProducts().subscribe(response => {
            this.products  = response;
        });
    }
    deleteProduct(productId: number): void {
        this.productService.delete(productId).subscribe(response => {
            this.getProductList();
            this.toastService.success("Ürün Silindi","Başarılı");
        });
    }


}
