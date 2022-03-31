import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AlertController, LoadingController, ModalController, Platform, ToastController} from '@ionic/angular';
import {AuthService} from 'src/app/services/auth/auth.service';
import {doc, Firestore, getDoc} from '@angular/fire/firestore';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IrohaService} from '../../../../services/iroha.service';
import {BarcodeScanner, SupportedFormat} from '@capacitor-community/barcode-scanner';
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-top-up',
  templateUrl: './top-up.page.html',
  styleUrls: ['./top-up.page.scss'],
})

export class TopUpPage implements OnInit, AfterViewInit, OnDestroy {

  form: FormGroup;
  type = false;
  isLoading = false;
  private loading;
  private uid = this.ionicAuthService.getUid();
  private id: any;
  private scanActive= false;
  private result: string;
  private prk: any;
  private amount: any;

  constructor(
              private modalCtrl: ModalController,
              private toastCtrl: ToastController,
              private router: Router,
              private _firestore: Firestore,
              private ionicAuthService: AuthService,
              private iroha: IrohaService,
              private alertController: AlertController,
              private loadingController: LoadingController,
              private platform: Platform,
              private afs: AngularFirestore)
  {
    this.initForm();
  }

  ngOnInit() {
  }
  ngAfterViewInit(){
  }
  async ionViewDidEnter() {
    await this.platform.ready().then(() => {
      document.body.classList.toggle('dark', false);
    });
  }

  ngOnDestroy(){
    this.stopScanner();
  }

  async startScanner() {
    const allowed = await this.checkPermissions();
    if (allowed) {
      this.scanActive = true;
      const result = await BarcodeScanner.startScan({ targetedFormats: [SupportedFormat.QR_CODE] });
      if (result.hasContent) {
        this.result = result.content;
        this.scanActive = false;
        await this.topUp();
      }
    }
  }

  async checkPermissions() {
    return new Promise(async (resolve, reject) => {
      const status = await BarcodeScanner.checkPermission({force: true});
      if (status.granted) {
        resolve(true);
      }
      else if(status.denied) {
        const alert = await this.alertController.create({
          header: 'No permissions',
          message: 'Please enable camera in your settings.',
          buttons: [{
            text: 'No',
            role: 'cancel'
          },
            {
              text: 'Open Settings',
              handler: () => {
                resolve(false);
                BarcodeScanner.openAppSettings();
              }
            }]
        });
      }
      else {
        resolve(false);
      }
    });
  }

  stopScanner() {
    BarcodeScanner.stopScan();
    this.scanActive = false;
  }
  initForm() {
    this.form = new FormGroup({
      amount: new FormControl(null, {validators: [Validators.required, Validators.pattern('^[0-9]*$')]}),
   });
  }

  async submitRequest() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    await BarcodeScanner.prepare();
    await this.startScanner();
  }

  async topUp(){
    this.loadingController.create({
      message: 'Collecting coins...',
    }).then(async overlay => {
      this.loading = overlay;
      this.loading.present();
      console.log(this.form.value);
      await this.transferMoney();
      this.iroha.wallet.name = '';
      await this.iroha.setName(this.id);
      this.iroha.wallet.balance = 0;
      await this.iroha.setBalance(this.id);
    });
  }

  back() {
    this.router.navigateByUrl('/tabs', {replaceUrl: true});
  }

  async getFirebaseData(key) {
    const dataRef = doc(this._firestore, `keys/${(key)}`);
    const dataSnap = await getDoc(dataRef);
    this.prk = dataSnap.data().prk;
    this.amount = dataSnap.data().amount;
    console.log(this.prk, this.amount);
    await this.afs.collection(`keys`).doc(key).delete();
  }

  async transferMoney() {
    // eslint-disable-next-line no-underscore-dangle
    const docRef = doc(this._firestore, 'users', this.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log(docSnap.data().username.concat('@test'));
      this.id = docSnap.data().username.concat('@test');
      // eslint-disable-next-line max-len
      await this.iroha.addSignatory(this.result);
      await this.getFirebaseData(this.result);
      if (this.amount !== this.form.value.amount) {
        this.loading.dismiss();
        await this.showAlert('You entered the wrong amount!', 'Top Up Failed');
      }
      else {
        await this.iroha.topUp(this.id, '', this.form.value.amount, this.prk).then(async d => {
            await this.iroha.removeSignatory(this.result);
            this.loading.dismiss();
            await this.showAlert('RM' + this.form.value.amount + ' has been added to your balance.', 'Top Up Success');
          }
        ).catch(e => {
          this.loading.dismiss();
          this.showAlert(e, 'Top Up Failed');
        });
      }
    }
    else {
      this.loading.dismiss();
      console.log('Error! No such account.');
    }
  }

  async showAlert(message, header) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }



}
