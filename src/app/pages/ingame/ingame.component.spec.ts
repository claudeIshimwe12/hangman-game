import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngameComponent } from './ingame.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import exp from 'constants';

describe('IngameComponent', () => {
  let component: IngameComponent;
  let fixture: ComponentFixture<IngameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [IngameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IngameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return void when getWord is called', () => {
    expect(component.getWord()).toBeUndefined();
  });

  it('should set the guess word array to an empty array when called', () => {
    let guessWord: [] | undefined;

    component.getWord();

    expect(component.guessWord.length).toBe(1);
  });
});
