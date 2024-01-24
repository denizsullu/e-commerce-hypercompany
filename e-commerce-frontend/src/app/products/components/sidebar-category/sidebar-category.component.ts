import {Component, OnInit} from '@angular/core';

import {RouterModule} from "@angular/router";
import {Category} from "../../models/category";
import {CategoryService} from "../../services/category.service";


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
    this.categoryService.getCategories().subscribe({
      next: (response) => {
        this.categories = response;
      },
      error: (error) => {
        console.error('Kategoriler yüklenirken bir hata oluştu:', error);

      },
      complete: () => {}
    });

  }

  setCurrentCategory(category: Category) {
    this.currentCategory = category
  }



}
