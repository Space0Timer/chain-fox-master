import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../../services/auth/auth.service';
import {doc, Firestore, getDoc, setDoc} from '@angular/fire/firestore';
import {IrohaService} from '../../services/iroha/iroha.service';
import {StorageService} from '../../services/storage/storage.service';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {AlertController, LoadingController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class VerifyGuard implements CanActivate {
  private loading: any;

  constructor(
    private auth: AuthService,
    private router: Router,
    private iroha: IrohaService,
    private storage: StorageService,
    private _firestore: Firestore,
    private afs: AngularFirestore,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) {}
  // check if the email used verified
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // firebase check account verification
    return this.auth.checkVerify().then(async response => {
      const docRef = doc(this._firestore, 'users', this.auth.currentUser.uid);
      const docSnap = await getDoc(docRef);
        if (response) {
          // this is always false for first time users
          if (docSnap.data().verify === false) {
            // create iroha account
              await this.iroha.createAccount(docSnap.data().username).then(async p => {
                // create cart, favourites and message path for the user
                await this.createCart();
                await this.createFav();
                await this.afs.collection('messages').doc(this.auth.currentUser.uid).set({});
                // update verification status. Indicate the account is not a first time user
                await this.afs.collection('users').doc(this.auth.currentUser.uid).update({
                  verify: true
                });
              });
              return true;
          }
          // not first time user comes here and go to the home page
          if (docSnap.data().verify === true) {
            return true;
          }
        }
        // Firebase states not verified, send user to verify email page
        else {
          this.verifyEmail();
          return false;
        }
    })
      .catch(e => {
        this.goToLogin();
        return false;
      });
  }

  verifyEmail() {
    this.router.navigateByUrl('/verify-email-address', {replaceUrl: true});
  }

  goToHome(){
    this.router.navigateByUrl('/tabs', {replaceUrl: true});
  }

  goToLogin(){
    this.router.navigateByUrl('/auth-screen', {replaceUrl: true});
  }

  async createCart() {
    // eslint-disable-next-line no-underscore-dangle
    const dataRef = doc(this._firestore, `carts/${(this.auth.currentUser.uid)}`);
    await setDoc(dataRef, {
      id: this.auth.currentUser.uid,
    });
  }

  async createFav() {
    // eslint-disable-next-line no-underscore-dangle
    const dataRef = doc(this._firestore, `favourites/${(this.auth.currentUser.uid)}`);
    await setDoc(dataRef, {
      id: this.auth.currentUser.uid,
    });
  }

  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }

}
