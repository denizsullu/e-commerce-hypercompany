import {Component} from '@angular/core';
import {CategoryService} from "../../../../services/category.service";
import {Category} from "../../../../models/product/category";
import {CreateCategory} from "../../../../models/product/createCategory";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-categorylist',
  standalone: true,
  imports: [],
  templateUrl: './categorylist.component.html',
  styleUrl: './categorylist.component.scss'
})
export class CategorylistComponent {
categories:Category[] = [];
    constructor(private categoryList:CategoryService,private toastrService:ToastrService) {
    }

    ngOnInit(): void {
        this.getAllCategoryDetails();
    }
    getAllCategoryDetails():void{
        this.categoryList.getCategories().subscribe(response => {
            this.categories  = response;
        });
    }
   addCategory(createCategory:CreateCategory):void{
        this.categoryList.addCategory(createCategory).subscribe(response => {
            this.toastrService.info("Categori eklendi","Başarılı");
            this.getAllCategoryDetails();
        })
   }
    updateCategory():void{

    }
    deleteCategory(categoryId:number):void{
        this.categoryList.deleteCategory(categoryId).subscribe(response => {
            this.getAllCategoryDetails();
        });

    }


}
