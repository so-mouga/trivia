import { Injectable } from '@angular/core';
import {HttpService} from '../../providers/http/http.service';
import {Observable} from 'rxjs';
import {QuestionOpentdbInterface} from './questionOpentdb.interface';
import { Question } from '../../class/question';
import { map } from 'rxjs/operators';

const urlAPI = 'https://opentdb.com/api.php';

@Injectable({
  providedIn: 'root'
})
export class OpentdbService {

  constructor(private httpService: HttpService) { }

  getQuestions(amout: string = '20', difficulty: string = 'easy', category: string = ''): Observable<Question[]> {
      return this
          .httpService
          .get(`${urlAPI}?amount=${amout}&difficulty=${difficulty}&category=${category}`)
          .pipe(
            map(
              (data: QuestionOpentdbInterface) => {
                const { results } = data;
                return results.map((item: any) => {
                  return Object.assign(new Question(), item);
                })
              }
            )
          );
  }
}
