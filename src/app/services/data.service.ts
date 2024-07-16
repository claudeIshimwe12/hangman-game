import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data: Category[] = [];

  constructor(private http: HttpClient) {
    this.http.get<Category[]>('./assets/db.data.json').subscribe((res) => {
      this.data = res;
    });
  }

  getData() {
    return this.data;
  }

  getWord(str: string) {
    const randomNumber = Math.floor(Math.random() * 3);
    return this.data.filter((res) => res.category == str);
  }
}
