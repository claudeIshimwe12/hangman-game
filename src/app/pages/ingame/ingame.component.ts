import {
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-ingame',
  templateUrl: './ingame.component.html',
  styleUrl: './ingame.component.css',
})
export class IngameComponent implements OnInit {
  status: string = 'ingame';
  category: string | null = '';
  word: string[] = [''];
  guessWord: string[] = [''];
  guesses: number = 0;
  keys: string[] = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  clicked: string[] = [''];
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('id');
      this.category = idParam;
    });
    const randomNumber = Math.floor(Math.random() * 5);
    const results = this.dataService.getWord(`${this.category}`);
    const radnomWord: string = results[0]?.words[randomNumber];
    if (radnomWord) {
      this.word = radnomWord.split('');
      this.guessWord = new Array(radnomWord.length);
    }
  }

  onKeyClick(key: string) {
    this.clicked.push(key);
    if (this.word.includes(key.toLowerCase())) {
      this.guessWord[this.word.indexOf(key.toLowerCase())] = key;
    } else {
      if (this.guesses == 5) this.status = 'lost';
      this.guesses++;
    }
    if (this.guessWord.join('').toLowerCase() == this.word.join('')) {
      this.status = 'win';
    }
  }
  onPause() {
    this.status = 'paused';
  }
  onContinue() {
    this.status = 'ingame';
  }
}
