import { Injectable } from '@angular/core';
import Quizz from '../../class/quizz';
import {Lp1Service} from '../../clients/lp1/lp1.service';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  constructor(private lp1Service: Lp1Service) { }

  shareQuizz(quizz: Quizz): Promise<any> {
      return this.lp1Service.sendQuizz(quizz);
  }
}
