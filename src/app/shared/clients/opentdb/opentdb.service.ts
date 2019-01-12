import { Injectable } from '@angular/core';
import {HttpService} from '../../providers/http/http.service';
import {Observable} from 'rxjs';

const urlAPI = 'https://opentdb.com/api.php';

@Injectable({
  providedIn: 'root'
})
export class OpentdbService {

  constructor(private httpService: HttpService) { }

  getQuestions<T>(amout: string = '4', difficulty: string = 'easy', category: string = ''): Observable<T> {
      return this
          .httpService
          .get<any>(`${urlAPI}?amount=${amout}&difficulty=${difficulty}&category=${category}`)
      ;
  }
}
