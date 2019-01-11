import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/providers/user/user.service';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import User from '../user/user.interface';
import Difficulty from './difficulty/difficulty.interface';


@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.page.html',
  styleUrls: ['./quizz.page.scss'],
})
export class QuizzPage implements OnInit {

  user: User;
  difficulty: Difficulty = null;
  constructor(private userProvider: UserService, private router: Router, private alertCtrl: AlertController) {
    this.userProvider.getUser<User>().then((user) => {
        if (null === user) {
            router.navigate(['/home']);
        }
        this.user = user;
    });
  }
  ngOnInit() {
  }

  difficultyChosen(difficulty: Difficulty) {
    this.difficulty = difficulty;
  }

  logout() {
    const alert = this.alertCtrl.create({
      message: 'Do you want to exit the game?',
      buttons: [
        {
          text: 'Exit',
          role: 'exit',
          handler: () => {
            this.userProvider.deleteUser().then(() => this.router.navigate(['/home']));
          }
        },
        {
          text: 'continue',
          handler: () => {
          }
        }
      ]
    });
    alert.then((p) => p.present());
  }
}
