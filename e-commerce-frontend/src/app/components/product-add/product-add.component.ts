import {Component, OnInit} from '@angular/core';
import {ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import {Product} from "../../models/product";
import {ProductService} from "../../services/product.service";
import {ToastrService} from "ngx-toastr";

@Component({
    selector: 'app-product-add',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './product-add.component.html',
    styleUrl: './product-add.component.scss'
})
export class ProductAddComponent implements OnInit {
    productAddForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private productService: ProductService, private toastrService: ToastrService) {
    }

    ngOnInit(): void {
        this.createProductAddForm();
    }

    createProductAddForm() {
        this.productAddForm = this.formBuilder.group({
            productName: ["", Validators.required],
            productDescription: ["", Validators.required],
            productPrice: ["", Validators.required],
            productImage: ["", Validators.required],
            productQuantity: ["", Validators.required],
            brandId: ["", Validators.required],
            categoryId: ["", Validators.required],
        })
    }

    add() {
        if (this.productAddForm.valid) {
            let productModel = Object.assign({}, this.productAddForm.value)
            this.productService.add(productModel).subscribe({
                next: (response) => {
                    console.log(response);
                    this.toastrService.success(response.message, "Başarılı");
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
}
