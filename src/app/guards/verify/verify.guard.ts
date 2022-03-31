import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../../services/auth/auth.service';
import {doc, Firestore, getDoc, setDoc} from '@angular/fire/firestore';
import {IrohaService} from '../../services/iroha.service';
import {StorageService} from '../../services/storage.service';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {NativeBiometric} from "capacitor-native-biometric";
import {LoadingController} from "@ionic/angular";

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
    private loadingController: LoadingController
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.checkVerify().then(async response => {
        if (response) {
          const docRef = doc(this._firestore, 'users', this.auth.currentUser.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.data().verify === false) {
            const user = await this.storage.get(docSnap.data().username);
            await this.iroha.createAccount(docSnap.data().username);
            this.iroha.wallet.name = '';
            await this.iroha.setName(docSnap.data().username + '@test');
            console.log(docSnap.data().username);
            this.iroha.wallet.balance = 0;
            await this.iroha.topUpVerify(docSnap.data().username + '@test', '', '1');
            await this.iroha.payment('admin', '', '1');
            await this.iroha.setBalance(docSnap.data().username + '@test');
            await this.iroha.setAccDetail(user);
            await this.createCart();
            await this.createFav();
            const docReff = doc(this._firestore, 'users', this.auth.currentUser.uid);
            const docSnapp = await getDoc(docReff);
            if (docSnap.exists()) {
              await this.afs.collection('users').doc(this.auth.currentUser.uid).update({
                verify: true
              });
            }
            return true;
          }
          if (docSnap.data().verify === true) {
            return true;
          }
        } else {
          this.navigate();
          return false;
        }
    })
      .catch(e => {
        this.navigate();
        return false;
      });
  }



  navigate() {
    this.router.navigateByUrl('/verify-email-address', {replaceUrl: true});
  }

  goToHome(){
    this.router.navigateByUrl('/tabs', {replaceUrl: true});
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
}
