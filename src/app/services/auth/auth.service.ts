import { Injectable } from '@angular/core';
import {
  Auth, createUserWithEmailAndPassword,
  onAuthStateChanged, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';
import { StorageService } from '../storage.service';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const user_key = 'maza_eats_user_id';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _fireAuth: Auth,
    private _firestore: Firestore,
    private storage: StorageService
  ) { }

  async register(formValue) {
    try {
      // eslint-disable-next-line no-underscore-dangle
      const registeredUser = await createUserWithEmailAndPassword(this._fireAuth, formValue.email, formValue.password);
      console.log('registered user: ', registeredUser);
      const uid = registeredUser.user.uid;
      // eslint-disable-next-line no-underscore-dangle
      const dataRef = doc(this._firestore, `users/${uid}`);
      await setDoc(dataRef, formValue);
      await this.storage.setStorage(user_key, uid);
      return uid;
    } catch(e) {
      throw(e);
    }
  }

  async login(formValue) {
    try {
      // eslint-disable-next-line no-underscore-dangle
      const response = await signInWithEmailAndPassword(this._fireAuth, formValue.email, formValue.password);
      console.log('login user: ', response);
      if(response?.user) {
        const uid = response.user.uid;
        await this.storage.setStorage(user_key, uid);
        return uid;
      } else {
        return false;
      }
    } catch(e) {
      throw(e);
    }
  }

  checkAuth() {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line no-underscore-dangle
      onAuthStateChanged(this._fireAuth, user => {
        console.log(user);
        if(user) {resolve(true);}
        resolve(false);
      });
    });
  }

  async logout() {
    try {
      // eslint-disable-next-line no-underscore-dangle
      await signOut(this._fireAuth);
      await this.storage.removeStorage(user_key);
      return true;
    } catch(e) {
      throw(e);
    }
  }
}