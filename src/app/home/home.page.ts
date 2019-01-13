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
            .getUser()
            .subscribe(user => {
                this.user = user;
            });
    }

    deleteUser() {
      if (null !== this.user) {
        this.userService.deleteUser().then(() => this.user = null);
      }
    }

    startGame() {
      if (null !== this.user) {
        this.router.navigate(['/quizz']);
        return;
      }
      this.router.navigate(['/login']);
    }

    dashboard() {
      this.router.navigate(['/board']);
    }
}
