import { Component, OnInit } from '@angular/core';
import User from '../user.interface';

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

  constructor() { }

  ngOnInit() {
  }

  createUser() {
    if (null !== this.user.nickname) {
      this.user.avatar = this.generateAvatar();
    }
  }

  startGame() {
    console.log('toto');
  }

  private generateAvatar(size: string = '185'): string {
    const anysize = 3;
    const charset = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < anysize; i++ ) {
      result += charset[Math.floor(Math.random() * charset.length)];
    }

    return `${apiAdorableAvatar}${size}/${result}.png`;
  }

}
