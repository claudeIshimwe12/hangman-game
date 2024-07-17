import { Component, OnInit } from '@angular/core';
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
  guesses: number = 8;
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
    const randomWord: string = this.dataService.getRandomWord(
      `${this.category}`
    );
    if (randomWord) {
      this.word = randomWord.toLowerCase().split('');
      this.guessWord = new Array(randomWord.length);
      this.word.forEach((w, i) => {
        if (w == ' ') {
          this.guessWord[i] = ' ';
        }
      });
    }
    const hints: number = Math.floor((Math.random() * this.word.length) / 3);
    for (let i = hints; i >= 0; i--) {
      const random = Math.floor(Math.random() * hints);
      this.guessWord[random] = this.word[random];
    }
  }

  onKeyClick(key: string) {
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
    ) {
      this.status = 'win';
    }
  }
  onPause() {
    this.status = 'paused';
  }
  onContinue() {
    this.status = 'ingame';
  }
  onPlayAgain(): void {
    window.location.reload();
  }
}
