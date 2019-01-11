import { Component, OnInit } from '@angular/core';
import User from '../user.interface';
import {UserService} from '../../shared/providers/user/user.service';
import {CanActivate, Router} from '@angular/router';

const apiAdorableAvatar = 'https://api.adorable.io/avatars/';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  user: User = {
    nickname: null,
    avatar: null
  };

  constructor(private userProvider: UserService, private router: Router) {
    this.userProvider.getUser()
    .then((user) => {
      if (null !== user) {
        this.router.navigate(['/quizz']);
      }
    });
  }

  ngOnInit() {
  }

  generateUser(): void {
    if (null !== this.user.nickname) {
        this.user.avatar = this.userProvider.generateAvatar();
    }
  }

  public startGame(): void {
    if (null !== this.user.nickname && null !== this.user.avatar) {
      this.userProvider.saveUser<User>(this.user)
        .then(() => this.router.navigate(['/quizz']));
    }
  }
}
