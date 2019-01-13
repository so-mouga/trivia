import { Injectable } from '@angular/core';
import {HttpService} from '../../providers/http/http.service';
import Quizz from '../../class/quizz';
import {Lp1Interface} from './lp1.interface';

const urlAPI = 'https://leaderboard.lp1.eu';

@Injectable({
  providedIn: 'root'
})
export class Lp1Service {

  constructor(private httpService: HttpService) { }

  sendQuizz(quizz: Quizz): Promise<any> {
      const lp1Interface: Lp1Interface = {
          nickname: quizz.nickname,
          avatar_url: quizz.avatar_url,
          score: quizz.score,
          time: quizz.time,
      };
      return this.httpService.post<any>(`${urlAPI}/api/score`, lp1Interface).toPromise();
  }

}
