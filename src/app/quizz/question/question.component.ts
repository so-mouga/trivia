import { Component, OnInit } from '@angular/core';
import {OpentdbService} from '../../shared/clients/opentdb/opentdb.service';
import {QuestionOpentdbInterface, Question} from '../../shared/clients/opentdb/questionOpentdb.interface';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  questions: Array<Question>;
  currentQuestion: Question;
  currentRandomAnswers: Array<string>;

  constructor(private opentdb: OpentdbService) {
    this
      .opentdb
      .getQuestions<QuestionOpentdbInterface>()
      .subscribe((data) => {
        this.questions = data.results;
        this.nextQuestion();
        // this.currentQuestion = this.questions.shift();
    });
  }

  ngOnInit() {
  }

  nextQuestion() {
    this.currentQuestion = this.questions.shift();

    this.currentRandomAnswers = this.currentQuestion.incorrect_answers;
    this.currentRandomAnswers.push(this.currentQuestion.correct_answer);
    console.log(this.currentRandomAnswers);
      console.log(this.currentQuestion.correct_answer);
      console.log(this.currentQuestion.incorrect_answers);
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
}
