import {Injectable} from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';
import {collection, doc, Firestore, getDocs, query, setDoc, where} from '@angular/fire/firestore';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import firebase from "firebase/compat/app";
import {tryCatch} from "rxjs/internal-compatibility";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {ControlContainer} from "@angular/forms";
import {LoadingController} from "@ionic/angular";
import {StorageService} from "../storage.service";

export interface AccData {
  mywallet: string;
  mypuk: string;
  myprk: string;
  mywalletIsEncrypted: boolean;
  assets: any;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  cur_assetId: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  cur_assetId_decimal: any;
}

export interface WalletDataTo {
  wallet: string;
  amount: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  uid = '';
  currentUser:any;
  private id: string;

  constructor(
    private _fireAuth: Auth,
    private _firestore: Firestore,
    private afAuth: AngularFireAuth,
    private router: Router,
    private loading: LoadingController,
    private storage: StorageService
  ) {     this.afAuth.onAuthStateChanged(user => {
    this.currentUser = user;
  });}

  // Creating a firebase account
  async register(formValue) {
    try {
      const registeredUser = await createUserWithEmailAndPassword(this._fireAuth, formValue.email, formValue.password)
        .then(result => {
          this.uploadFirestore(formValue.username, formValue.email);
          this.storage.set(formValue.username, formValue.password);
          this.loading.dismiss();
          this.sendVerificationMail();
        });
    } catch(e) {
      throw(e);
    }
  }

  sendVerificationMail() {
    return this.afAuth.currentUser
      .then((user) => user.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email-address']);
      });
  }
  async uploadFirestore(username, email) {
    const dataRef = doc(this._firestore, `users/${this.currentUser.uid}`);
    await setDoc(dataRef, {
      username,
      email,
      verify: false
    });
  }
  // Login Firebase User
  async login(formValue) {
    try {
      // eslint-disable-next-line no-underscore-dangle
      const response = await signInWithEmailAndPassword(this._fireAuth, formValue.email, formValue.password);
      console.log('login user: ', response);
      if(response?.user) {
        return response.user.uid;
      } else {
        return false;
      }
    } catch(e) {
      throw(e);
    }
  }

  // Check whether the firebase user is login or not
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

  checkVerify() {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line no-underscore-dangle
      onAuthStateChanged(this._fireAuth, user => {
        if(  firebase.auth().currentUser.emailVerified) {resolve(true);}
        resolve(false);
      });
    });
  }

  // Get the current user uid for querying purposes
  getUid() {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions,no-underscore-dangle
    this.id = this._fireAuth.currentUser.uid;
    return this.id;
  }

  // Logout, self-explanatory
  async logout() {
    try {
      // eslint-disable-next-line no-underscore-dangle
      await signOut(this._fireAuth);
      return true;
    } catch(e) {
      throw(e);
    }
  }
}
