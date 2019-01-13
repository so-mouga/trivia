import { Injectable } from '@angular/core';
import {HttpService} from '../../providers/http/http.service';
import {Observable} from 'rxjs';
import {QuestionOpentdbInterface} from './questionOpentdb.interface';

const urlAPI = 'https://opentdb.com/api.php';

@Injectable({
  providedIn: 'root'
})
export class OpentdbService {

  constructor(private httpService: HttpService) { }

  getQuestions(amout: string = '20', difficulty: string = 'easy', category: string = ''): Observable<QuestionOpentdbInterface> {
      return this
          .httpService
          .get<QuestionOpentdbInterface>(`${urlAPI}?amount=${amout}&difficulty=${difficulty}&category=${category}`)
      ;
  }
}
