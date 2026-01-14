import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Category } from '../home/types/category';
import { CategoryService } from '../home/services/category-service';
import { CommonModule } from '@angular/common';

const MODULES = [
  FontAwesomeModule,
  CommonModule
]

@Component({
  selector: 'app-side-navigation',
  standalone: true,
  imports: [...MODULES],
  templateUrl: './side-navigation.html',
  styleUrl: './side-navigation.css',
})
export class SideNavigation {
  faAngleDown = faAngleDown;
  categories: Category[] = [];

  constructor(categoryService: CategoryService){
    this.categories = categoryService.getAllCategories();
    console.log(this.categories)
  }

  getCategories(parentCategoryId?: number): Category[]{
    return this.categories.filter((category) => category.parent_category_id === parentCategoryId)
  }
}
