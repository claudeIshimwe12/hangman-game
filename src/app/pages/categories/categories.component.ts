import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Category } from '../../models/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  constructor(private dataService: DataService, private router: Router) {}
  categories: Category[] = [];
  ngOnInit(): void {
    this.dataService.getData().subscribe((res) => {
      this.categories = res;
    });
  }

  onCategory(category: string) {
    this.router.navigate(['/categories', category]);
  }
}
