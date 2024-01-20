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
export class ProductAddComponent implements OnInit{
  productAddForm: FormGroup;
  constructor(private formBuilder:FormBuilder,private productService:ProductService,private toastrService:ToastrService) {}

  ngOnInit(): void {
       this.createProductAddForm();
    }
  createProductAddForm(){
    this.productAddForm = this.formBuilder.group({
      productName:["",Validators.required],
      productDescription:["",Validators.required],
      productPrice: ["",Validators.required],
      productImage: ["",Validators.required],
      productQuantity:["",Validators.required],
      brandId:["",Validators.required],
      categoryId:["",Validators.required],
    })
  }
  add(){
    if(this.productAddForm.valid){
      let productModel = Object.assign({},this.productAddForm.value)
      console.log(productModel)
      this.productService.add(productModel).subscribe(response =>{
        console.log(response)
        this.toastrService.success("Ürün Eklendi","Başarılı")
      })
    }
    else{
    this.toastrService.error("Lütfen Alanları Dikkatlice Doldurun")
    }


  }
}
