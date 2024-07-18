import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-ingame',
  templateUrl: './ingame.component.html',
  styleUrl: './ingame.component.css',
})
export class IngameComponent implements OnInit, AfterViewInit {
  status: string = 'ingame';
  category: string | null = '';
  word: string[] = [''];
  foundWord: string = '';
  guessWord: string[] = [];
  randomWord: string = '';
  guesses: number = 9;
  keys: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');

  clicked: string[] = [''];
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}
  ngOnInit() {
    this.dataService.fetchData();
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('id');
      this.category = idParam;
    });

    this.dataService
      .getRandomWord(`${this.category}`)
      .subscribe((res: string) => {
        this.randomWord = res;
      });
    if (this.randomWord) {
      this.word = this.randomWord.toLowerCase().split('');
      this.guessWord = new Array(this.randomWord.length);
      this.word.forEach((w, i) => {
        if (w == ' ') {
          this.guessWord[i] = ' ';
        }
      });
    }

    for (
      let i = Math.floor((Math.random() * this.word.length) / 3);
      i >= 0;
      i--
    ) {
      const random = Math.floor(
        Math.random() * Math.floor((Math.random() * this.word.length) / 3)
      );
      this.guessWord[random] = this.word[random];
    }
  }

  ngAfterViewInit(): void {
    this.getWord();
  }

  onKeyClick(key: string) {
    if (this.word.length == 1) {
      this.getWord();
    }
    this.clicked.push(key);

    if (this.word.includes(key.toLowerCase())) {
      // Loop through the word and
      this.word.forEach((char, index) => {
        if (char == key.toLowerCase()) {
          this.guessWord[index] = this.word[index];
        }
      });
    } else {
      this.guesses--;
      if (this.guesses == 0) this.status = 'lost';
    }
    if (
      this.guessWord
        .filter((element) => element !== ' ')
        .join('')
        .toLowerCase() ==
      this.word
        .filter((element) => element !== ' ')
        .join('')
        .toLowerCase()
    )
      this.status = 'win';
  }

  onPause() {
    this.status = 'paused';
  }
  onContinue() {
    this.status = 'ingame';
  }
  onPlayAgain(): void {
    this.status = '';
    this.clicked = [''];
    this.guesses = 8;
    this.getWord();
  }
  getWord(): void {
    let randWord: string = '';
    this.dataService.getRandomWord(`${this.category}`).subscribe((res) => {
      randWord = res;
    });
    this.word = randWord.toLowerCase().split('');
    this.guessWord = new Array(this.word.length);
    this.word.forEach((w, i) => {
      if (w == ' ') {
        this.guessWord[i] = ' ';
      }
    });

    for (
      let i = Math.floor((Math.random() * this.word.length) / 3);
      i >= 0;
      i--
    ) {
      const random = Math.floor(
        Math.random() * Math.floor((Math.random() * this.word.length) / 3)
      );
      this.guessWord[random] = this.word[random];
    }
  }
}
