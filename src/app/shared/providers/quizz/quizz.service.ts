import { Injectable } from '@angular/core';
import Quizz from '../../class/quizz';
import {Lp1Service} from '../../clients/lp1/lp1.service';
import {Lp1Interface} from '../../clients/lp1/lp1.interface';
import {Observable} from 'rxjs';
import {OpentdbService} from '../../clients/opentdb/opentdb.service';
import {QuestionOpentdbInterface} from '../../clients/opentdb/questionOpentdb.interface';
import { Question } from '../../class/question';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  constructor(private lp1Service: Lp1Service, private opentdb: OpentdbService) { }

  shareQuizz(quizz: Quizz): Promise<any> {
      return this.lp1Service.sendQuizz(quizz);
  }

  getScoresUsers(): Observable<Array<Lp1Interface>> {
    return this.lp1Service.getScoresUsers();
  }

  getQuestions(): Observable<Question[]> {
    return this
      .opentdb.getQuestions();
  }
}
