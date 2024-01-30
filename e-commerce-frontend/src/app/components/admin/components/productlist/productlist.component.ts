import { Component } from '@angular/core';
import {ProductService} from "../../../../services/product.service";
import {Product} from "../../../../models/product/product";
import {TurkishLiraPipe} from "../../../../pipes/turkish-lira.pipe";
import {RouterLink} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {CreateProductRequest} from "../../../../models/product/createProductRequest";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {UpdateproductComponent} from "./updateproduct/updateproduct.component";

@Component({
  selector: 'app-productlist',
  standalone: true,
    imports: [
        TurkishLiraPipe,
        RouterLink,
        FormsModule,
        ReactiveFormsModule,
        UpdateproductComponent
    ],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.scss'
})
export class ProductlistComponent {
    products: Product[] = [];
    showPopup = false;
    productAddForm: FormGroup;
    showPopupUpdate = false;
    togglePopup() {
        this.showPopup = !this.showPopup;
    }
    togglePopupUpdate() {
        this.showPopupUpdate = !this.showPopupUpdate;
    }

    constructor(private productService: ProductService,
                private toastService:ToastrService,
                private formBuilder:FormBuilder,
                private toastrService:ToastrService

    ) {}

    ngOnInit(): void {
        this.getProductList();
        this.createProductAddForm();
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
    add() {
        if (this.productAddForm.valid) {
            let productRequest = Object.assign({}, this.productAddForm.value)
            this.productService.add(productRequest).subscribe({
                next: (response) => {
                    console.log(response);
                    this.getProductList();
                    this.toastrService.success(response.message, "Başarılı");
                    this.productAddForm.reset();
                    this.showPopup = false;
                },
                error: (responseError) => {
                    console.error(responseError);
                    this.toastrService.error('İşlem başarısız', 'Hata');
                },
                complete: () => {

                }
            });

        } else {
            this.toastrService.error("Lütfen Alanları Dikkatlice Doldurun")
        }


    }
    createProductAddForm() {
        this.productAddForm = this.formBuilder.group({
            productName: ["", Validators.required],
            productDescription: ["", Validators.required],
            productPrice: ["", Validators.required],
            productImage: ["", Validators.required],
            stock: ["", Validators.required],
            brandId: ["", Validators.required],
            categoryId: ["", Validators.required],
        })
    }

}
