import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AlertController, LoadingController} from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { IrohaService } from 'src/app/services/iroha.service';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {collection, doc, Firestore, getDoc, getDocs, query, setDoc, where} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {NativeBiometric} from 'capacitor-native-biometric';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})

export class SignUpComponent implements OnInit {

  form: FormGroup;
  type = false;
  isLoading: boolean;
  username = '';
  loading: any;
  private currentUser: any;
  constructor(
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController,
    private iroha: IrohaService,
    private ionicAuthService: AuthService,
    private afs: AngularFirestore,
    private _firestore: Firestore,
    private loadingController: LoadingController,
    private afAuth: AngularFireAuth
    ) {
    this.initForm();
    this.afAuth.onAuthStateChanged(user => {
      this.currentUser = user;
    });
  }

  ngOnInit(
  ) {}

  initForm() {
    this.form = new FormGroup({
      username: new FormControl(null, {validators: [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.maxLength(10), Validators.minLength(6)]}),
      email: new FormControl(null, {validators: [Validators.required, Validators.email]}), // added email validator also
      // eslint-disable-next-line max-len
      password: new FormControl(null, {validators: [Validators.required, Validators.minLength(8), Validators.maxLength(15),Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\\s).{8,}$'),]})
    });
  }

  changeType() {
    this.type = !this.type;
  }

  async createCart() {
    // eslint-disable-next-line no-underscore-dangle
    const dataRef = doc(this._firestore, `carts/${(this.ionicAuthService.getUid())}`);
    await setDoc(dataRef, {
      id: this.ionicAuthService.getUid(),
    });
  }

  async createFav() {
    // eslint-disable-next-line no-underscore-dangle
    const dataRef = doc(this._firestore, `favourites/${(this.ionicAuthService.getUid())}`);
    await setDoc(dataRef, {
      id: this.ionicAuthService.getUid(),
    });
  }

  async checkUsernameExists(username) {
    // eslint-disable-next-line no-underscore-dangle
    const usernameRef = collection(this._firestore, 'users');
    const q = query(usernameRef, where('username', '==', username));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((d) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(d.id, ' => ', d.data().username);
      this.username = d.data().username;
    });
    if (this.username !== '') {
      await this.showAlert('This username is taken.');
      this.username='';
      return true;
    }
    else {
      return false;
    }
  }



  async onSubmit() {
    console.log('tes');
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    let auth = true;
    this.form.value.username.toLowerCase();
    console.log(this.form.value.username.toLowerCase());
    await this.checkUsernameExists(this.form.value.username).then(bool => {
      if (bool === true) {
        auth = false;
      }
    });
    if (auth) {
      this.loadingController.create({
        message: 'Signing up...',
      }).then(async overlay => {
        this.loading = overlay;
        this.loading.present();
        this.authService.register(this.form.value).then(async (data) => {
        })
          .catch(e => {
            console.log(e);
            this.isLoading = false;
            let msg = e;
            if (e.code === 'auth/email-already-in-use') {
              msg = 'Email is already in use.';
            }
            this.loading.dismiss();
            this.showAlert(msg);
          });
      });
    }
  }

  async showAlert(message) {
    const alert = await this.alertController.create({
      header: 'Authentication Failed',
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }


}
