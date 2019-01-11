import { Injectable } from '@angular/core';
import User from '../../../user/user.interface';
import {StorageService} from '../storage/storage.service';

const apiAdorableAvatar = 'https://api.adorable.io/avatars/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private storageService: StorageService) { }

  saveUser(user: User): void {
    this.storageService.set('user', user);
  }

  getUser<T>(): Promise<T> {
    return this.storageService.get('user');
  }

  generateAvatar(sizeImage: string = '185'): string {
    const anysize = 3;
    const charset = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < anysize; i++ ) {
        result += charset[Math.floor(Math.random() * charset.length)];
    }

    return `${apiAdorableAvatar}${sizeImage}/${result}.png`;
  }
}
