import { Component, OnInit } from '@angular/core';
import {QuizzService} from '../shared/providers/quizz/quizz.service';
import {Lp1Interface} from '../shared/clients/lp1/lp1.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.page.html',
  styleUrls: ['./board.page.scss'],
})
export class BoardPage implements OnInit {
  users: Lp1Interface[];
  constructor(private quizzService: QuizzService, private router: Router) {
    this
      .quizzService
      .getScoresUsers()
      .subscribe((users) => this.users = users);
  }

  ngOnInit() {
  }

  home() {
    this.router.navigate(['/home']);
  }
}
