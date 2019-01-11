import { Component, OnInit } from '@angular/core';
import User from '../user.interface';
import {UserService} from '../../shared/providers/user/user.service';

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

  constructor(private userProvider: UserService) {}

  ngOnInit() {
  }

  generateUser(): void {
    if (null !== this.user.nickname) {
        this.user.avatar = this.userProvider.generateAvatar();
    }
  }

  public startGame(): void {
    if (null !== this.user.nickname && null !== this.user.avatar) {
      this.userProvider.saveUser(this.user);
    }
  }
}
