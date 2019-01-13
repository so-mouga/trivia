import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/providers/user/user.service';
import {AlertController, NavController} from '@ionic/angular';
import User from '../user/user.interface';
import Difficulty from './difficulty/difficulty.interface';
import Quizz from '../shared/class/quizz';


@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.page.html',
  styleUrls: ['./quizz.page.scss'],
})
export class QuizzPage implements OnInit {

  user: User;
  difficulty: Difficulty = null;
  quizzPartie = new Quizz();
  partieFinished = false;

  constructor(private userProvider: UserService, private alertCtrl: AlertController, private navController: NavController) {
    this.userProvider.getUser<User>().then((user) => {
        if (null === user) {
            this.navController.navigateRoot(['/home']);
        }
        this.user = user;
        this.quizzPartie.avatar = this.user.avatar;
        this.quizzPartie.nickname = this.user.nickname;
    });
  }

  ngOnInit() {
  }

  difficultyChosen(difficulty: Difficulty) {
    this.difficulty = difficulty;
  }

  quizzPartieFinished(isFinished: boolean) {
    this.partieFinished = isFinished;
  }

  quitQuizz() {
    this.navController.navigateRoot(['/home']);
    // location.reload();
  }

  logout() {
    const alert = this.alertCtrl.create({
      message: 'Do you want to exit the game?',
      buttons: [
        {
          text: 'Exit',
          role: 'exit',
          handler: () => {
            this.navController.navigateRoot(['/home']);
          }
        },
        {
          text: 'continue'
        }
      ]
    });
    alert.then((p) => p.present());
  }
}
