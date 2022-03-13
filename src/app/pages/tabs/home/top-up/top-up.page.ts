import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ModalController, ToastController} from '@ionic/angular';
import {AuthService} from 'src/app/services/auth/auth.service';
import {doc, Firestore, getDoc} from '@angular/fire/firestore';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IrohaService} from '../../../../services/iroha.service';

@Component({
  selector: 'app-top-up',
  templateUrl: './top-up.page.html',
  styleUrls: ['./top-up.page.scss'],
})

export class TopUpPage implements OnInit {

  form: FormGroup;
  type = false;
  isLoading: boolean;

  private uid = this.ionicAuthService.getUid();
  private id: any;

  constructor(
              private modalCtrl: ModalController,
              private toastCtrl: ToastController,
              private router: Router,
              private _firestore: Firestore,
              private ionicAuthService: AuthService,
              private iroha: IrohaService)
  {
    this.initForm();
  }

  ngOnInit() {
  }

  initForm() {
    this.form = new FormGroup({
      amount: new FormControl(null, {validators: [Validators.required]}),
   });
  }

  async submitRequest() {
    if(!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log(this.form.value);
    await this.transferMoney();
  }

  back() {
    this.router.navigateByUrl('/tabs', {replaceUrl: true});
  }

  async transferMoney() {
    // eslint-disable-next-line no-underscore-dangle
    const docRef = doc(this._firestore, 'users', this.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log(docSnap.data().username.concat('@test'));
      this.id = docSnap.data().username.concat('@test');
      // eslint-disable-next-line max-len
      this.iroha.setName(this.id);
      this.iroha.topUp(this.id, '', this.form.value.amount);
    }
    else {
      console.log('Error! No such account.');
    }
  }




}
