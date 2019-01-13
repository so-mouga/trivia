import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import Difficulty from './difficulty.interface';

export const difficulties: Difficulty[] = [
  {
    name: 'easy',
    points: 5,
    colorBtn: 'secondary',
  },
  {
    name: 'medium',
    points: 10,
    colorBtn: '',
  },
  {
    name: 'hard',
    points: 20,
    colorBtn: 'danger',
  },
];

@Component({
  selector: 'app-difficulty',
  templateUrl: './difficulty.component.html',
  styleUrls: ['./difficulty.component.scss']
})
export class DifficultyComponent implements OnInit {
  difficulties: Difficulty[];
  @Output() difficultyChosen = new EventEmitter();

  constructor() {
    this.difficulties = difficulties;
  }

  ngOnInit() {
  }

  onSelectDifficulty(difficulty: Difficulty) {
    this.difficultyChosen.emit(difficulty);
  }
}
