import {Component, OnInit} from '@angular/core';
import {Category} from "../../models/category";
import {CategoryService} from "../../services/category.service";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-sidebar-category',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar-category.component.html',
  styleUrl: './sidebar-category.component.scss'
})
export class SidebarCategoryComponent implements OnInit{
  categories: Category[];
  currentCategory: Category;
  constructor(private categoryService: CategoryService) {
  }
  ngOnInit(): void {
    this.getCategories();
  }
  getCategories() {
    this.categoryService.getCategories().subscribe(response => {
      this.categories = response;
    })
  }

  setCurrentCategory(category: Category) {
    this.currentCategory = category
  }

  getAllCategoryClass(){
    if(!this.currentCategory){
      return "w-full text-left active"
    }
    else{
      return "w-full text-left"
    }
  }


}
