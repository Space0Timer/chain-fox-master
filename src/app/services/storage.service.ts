import {Injectable} from '@angular/core';
import {Storage} from '@capacitor/storage';

export interface Keys {
  prk: string;
}


@Injectable({
  providedIn: 'root'
})

export class StorageService {

  constructor() {
  }

  public async set(key: string, value: any) {
    await Storage.set({
      key,
      value,
    });
  }

  public async get(key) {
    const value = await Storage.get({key});
    return value.value;
  }
}
