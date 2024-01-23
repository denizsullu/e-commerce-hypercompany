import {Component, OnInit} from '@angular/core';
import {Category} from "../../../models/category";
import {CategoryService} from "../../../services/category.service";
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent implements OnInit {
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
      complete: () => {
      }
    });

  }


}

