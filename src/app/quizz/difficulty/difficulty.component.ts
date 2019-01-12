import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import Difficulty from './difficulty.interface';

const difficulties: Difficulty[] = [
  {
    name: 'easy',
    points: 5,
    color: 'secondary'
  },
  {
    name: 'medium',
    points: 10,
    color: ''
  },
  {
    name: 'hard',
    points: 20,
    color: 'danger'
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

  getNameDifficulties() {
    return difficulties.map((difficulty) => {
        return difficulty.name;
    });
  }

  onSelectDifficulty(difficulty: Difficulty) {
    this.difficultyChosen.emit(difficulty);
  }
}
