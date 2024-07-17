import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../models/category';
import { Categor } from '../models/categor';

type Data = {
  categories: {
    Movies: Categor;
    'TV Shows': Categor;
    Countries: Categor;
    'Capital Cities': Categor;
    Animals: Categor;
    Sports: Categor;
  };
};
type Categories = {
  Movies: Categor;
  'TV Shows': Categor;
  Countries: Categor;
  'Capital Cities': Categor;
  Animals: Categor;
  Sports: Categor;
};
@Injectable({
  providedIn: 'root',
})
export class DataService {
  data: Category[] = [];
  categories: Categories = {
    Movies: [{ name: '', selected: false }],
    'TV Shows': [{ name: '', selected: false }],
    Countries: [{ name: '', selected: false }],
    'Capital Cities': [{ name: '', selected: false }],
    Animals: [{ name: '', selected: false }],
    Sports: [{ name: '', selected: false }],
  };
  newData: Data = {
    categories: {
      Movies: [{ name: '', selected: false }],
      'TV Shows': [{ name: '', selected: false }],
      Countries: [{ name: '', selected: false }],
      'Capital Cities': [{ name: '', selected: false }],
      Animals: [{ name: '', selected: false }],
      Sports: [{ name: '', selected: false }],
    },
  };

  constructor(private http: HttpClient) {
    this.http.get<Category[]>('./assets/db.data.json').subscribe((res) => {
      this.data = res;
    });
  }

  getData() {
    return this.http.get<Category[]>('./assets/db.data.json');
  }

  fetchData() {
    this.http.get<Data>('./assets/data.json').subscribe((res) => {
      this.newData = res;
    });
  }

  getWord(str: string) {
    const randomNumber = Math.floor(Math.random() * 3);
    return this.data.filter((res) => res.category == str);
  }
  getRandomWord(cat: string): Observable<string> {
    const randomNumber = Math.floor(Math.random() * 30);
    let randomWord: string = '';
    switch (cat) {
      case 'Movies': {
        // cate = this.newData.categories.Movies[randomNumber].name;
        randomWord = this.newData.categories.Movies[randomNumber]?.name;
        break;
      }
      case 'TV Shows': {
        randomWord = this.newData.categories['TV Shows'][randomNumber]?.name;
        break;
      }
      case 'Countries': {
        randomWord = this.newData.categories.Countries[randomNumber]?.name;
        break;
      }
      case 'Capital Cities': {
        randomWord =
          this.newData.categories['Capital Cities'][randomNumber]?.name;
        break;
      }
      case 'Animals': {
        randomWord = this.newData.categories.Animals[randomNumber]?.name;
        break;
      }
      case 'Sports': {
        randomWord = this.newData.categories.Sports[randomNumber]?.name;
        break;
      }
      default: {
        console.log('Could not find the word for that category');
      }
    }
    return of(randomWord);
  }
}
