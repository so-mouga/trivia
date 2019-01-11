import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  set<T>(key: string, value: any): Promise<T> {
      return this.storage.set(key, value);
  }

  get<T>(key: string): Promise<T> {
    return this.storage.get(key);
  }

  remove<T>(key: string): Promise<T> {
    return this.storage.remove(key);
  }
}
