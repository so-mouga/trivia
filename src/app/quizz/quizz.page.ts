import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/providers/user/user.service';
import {AlertController, NavController} from '@ionic/angular';
import User from '../user/user.interface';
import Difficulty from './difficulty/difficulty.interface';
import Quizz from '../shared/class/quizz';
import {QuizzService} from '../shared/providers/quizz/quizz.service';


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

  constructor(private userProvider: UserService,
              private alertCtrl: AlertController,
              private navController: NavController,
              private quizzService: QuizzService) {
    this.userProvider.getUser<User>().then((user) => {
        if (null === user) {
            this.navController.navigateRoot(['/home']);
        }
        this.user = user;
        this.quizzPartie.avatar_url = this.user.avatar_url;
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
  }

  shareQuizz() {
      this.quizzService
          .shareQuizz(this.quizzPartie)
          .then(() => {
              const alert = this.alertCtrl.create({
                  message: 'your score is shared',
                  buttons: [
                      {
                          text: 'Exit',
                          handler: () => {
                              location.reload();
                              this.navController.navigateRoot(['/home']);
                          }
                      },
                      {
                          text: 'Look the dashboard',
                          handler: () => {
                              this.navController.navigateRoot(['/board']);
                          }
                      }
                  ]
              });
              alert.then((p) => p.present());
          });
  }

  logout() {
    const alert = this.alertCtrl.create({
      message: 'Do you want to exit the game?',
      buttons: [
        {
          text: 'Exit',
          role: 'exit',
          handler: () => {
              location.reload();
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
