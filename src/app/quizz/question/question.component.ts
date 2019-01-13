import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OpentdbService} from '../../shared/clients/opentdb/opentdb.service';
import {QuestionOpentdbInterface} from '../../shared/clients/opentdb/questionOpentdb.interface';
import {Question} from '../../shared/class/question';
import Difficulty from '../difficulty/difficulty.interface';
import Quizz from '../../shared/class/quizz';
import {QuizzService} from '../../shared/providers/quizz/quizz.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  questions: Array<Question>;
  currentQuestion: Question;
  countAllQuestions: number;
  quizzStartedAt: Date;
  quizzFinishedAt: Date;

  @Input() difficulty: Difficulty;
  @Input() quizzPartie: Quizz;
  @Output() quizzPartieFinished = new EventEmitter();

  constructor(private quizzService: QuizzService) {
    this
      .quizzService
      .getQuestions()
      .subscribe((data) => {
        this.questions = data.results;
        this.countAllQuestions = this.questions.length; // save count question before shift in nextQuestion()
        this.quizzStartedAt = new Date();
        this.nextQuestion();
    });
  }

  ngOnInit() {
  }

  nextQuestion() {
    this.currentQuestion = this.questions.shift(); // generate one question one by page
    if (this.currentQuestion === undefined) {
        this.calculeDurationTimeQuizz();
        this.quizzPartieFinished.emit(true);
        return;
    }
    this.generateRandomAnswers();
  }

  calculeDurationTimeQuizz() {
    this.quizzFinishedAt = new Date();
    const duration = this.quizzFinishedAt.getTime() - this.quizzStartedAt.getTime();
    this.quizzPartie.time = Math.round(duration / 1000);
  }

  answerUser(answer: string) {
    this.addOrRemovePoint(answer);
    this.nextQuestion();
  }

  addOrRemovePoint(answer: string): void {
    if (answer === this.currentQuestion.correct_answer) {
      this.quizzPartie.score += this.difficulty.points;
      return;
    }
    this.quizzPartie.score -= this.difficulty.points;
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
  }
}
