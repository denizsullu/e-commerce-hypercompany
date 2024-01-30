import { Component } from '@angular/core';
import {CategoryService} from "../../../../services/category.service";
import {Category} from "../../../../models/product/category";

@Component({
  selector: 'app-categorylist',
  standalone: true,
  imports: [],
  templateUrl: './categorylist.component.html',
  styleUrl: './categorylist.component.scss'
})
export class CategorylistComponent {
categories:Category[] = [];
    constructor(private categoryList:CategoryService) {
    }

    ngOnInit(): void {
        this.getAllCategoryDetails();
    }
    getAllCategoryDetails():void{
        this.categoryList.getCategories().subscribe(response => {
            this.categories  = response;
        });
    }


}
