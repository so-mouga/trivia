import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../shared/providers/user/user.service';
import User from '../user/user.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    user: User;
    constructor(private router: Router, private userService: UserService) {
      this.userService
        .getUserObservable()
        .subscribe((user) => {
          if (null !== user) {
            this.user = user;
          }
        });
    }

    deleteUser() {
      if (null !== this.user) {
        this
          .userService
          .deleteUser()
          .then(() => this.user = null)
          .catch(error => console.error(error));
      }
    }

    startGame() {
      if (null === this.user || undefined === this.user) {
        this.router.navigate(['/login']);
        return;
      }
      this.router.navigate(['/quizz']);
    }

    dashboard() {
      this.router.navigate(['/board']);
    }
}
