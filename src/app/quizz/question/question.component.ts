import {Component, Input, OnInit} from '@angular/core';
import {OpentdbService} from '../../shared/clients/opentdb/opentdb.service';
import {QuestionOpentdbInterface} from '../../shared/clients/opentdb/questionOpentdb.interface';
import {Question} from '../../shared/class/question';
import {difficulties} from '../difficulty/difficulty.component';
import Difficulty from '../difficulty/difficulty.interface';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  questions: Array<Question>;
  currentQuestion: Question;
  @Input() difficulty: Difficulty;

  constructor(private opentdb: OpentdbService) {
    this
      .opentdb
      .getQuestions<QuestionOpentdbInterface>()
      .subscribe((data) => {
        this.questions = data.results;
        this.nextQuestion();
    });
  }

  ngOnInit() {
      console.log(this.difficulty);
  }

  nextQuestion() {
    this.currentQuestion = this.questions.shift();
    this.generateRandomAnswers();
  }

  answerUser(answer: String) {
    console.log(answer);
    this.nextQuestion();
  }

  generateRandomAnswers() {
    this.currentQuestion.all_answers = this.currentQuestion.incorrect_answers;
    this.currentQuestion.all_answers.push(this.currentQuestion.correct_answer);
    this.shuffle(this.currentQuestion.all_answers);
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
}
