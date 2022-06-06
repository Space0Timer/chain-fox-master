import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/services/auth/auth.service';
import {AlertController, IonSearchbar, NavController, NavParams} from '@ionic/angular';
import {collection, doc, Firestore, getDoc, getDocs, query} from '@angular/fire/firestore';
import {IrohaService} from '../../../services/iroha/iroha.service';
import {StorageService} from "../../../services/storage/storage.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})

export class SearchPage implements OnInit {

  @ViewChild('search', { static: false }) search: IonSearchbar;
  fav =[];
  private uid = this.ionicAuthService.getUid();
  private id: any;
  private errorMsg: string;
  private successMsg: string;
  private spinner = false;
  private notFound = false;
  constructor(
    private router: Router,
    private ionicAuthService: AuthService,
    private _firestore: Firestore,
    public navCtrl: NavController,
    public navParams: NavParams,
    public iroha: IrohaService,
    public storage: StorageService,
    private alertController: AlertController
  ) {
  }

  async ngOnInit() {
    const docRef = doc(this._firestore, 'users', this.uid);
    const docSnap = await getDoc(docRef);
    this.id = docSnap.data().username.concat('@test');
    this.iroha.wallet.name = '';
    await this.iroha.setName(this.id);
    this.iroha.otherWallet.name = '';
    await this.iroha.getTransactions();
    await this.getList();
    this.fav = [...new Set(this.fav)];
    console.log(this.iroha.wallet.name);
  }

  async getList() {
    this.iroha.txs.forEach(c => {
        this.fav.push(c.to);
      }
    );
  }


  ionViewWillEnter() {
    setTimeout(() => {
      this.search?.setFocus();
    });
  }

  chat() {
    this.router.navigate(['chat-list']);
  }

  frequentReceivers(fav) {
    this.iroha.otherWallet.name = fav;
    console.log(this.iroha.otherWallet.name);
    this.getRoute();
  }

  async _ionChange(event) {
    this.notFound = false;
    const val = event.target.value.toLowerCase();
    if (val.trim() !== this.iroha.otherWallet.name) {
      this.iroha.otherWallet.name = '';
    }
    if (val && val.trim() !== '') {
      this.spinner = true;
      await this.iroha.setOtherName(val + '@test')
        .then(r=>this.spinner = false)
        .catch(e=>{this.spinner = false;this.notFound = true;});
      this.spinner = false;
    }
  }

  getRoute() {
    this.router.navigate(['user-details']);
  }

  async showAlertLogOut(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'OK',
          handler: async data => {
            this.logOut();
          }
        }
      ]
    });
    await alert.present();
  }

  logOut() {
    this.ionicAuthService.logout()
      .then((response) => {
        this.errorMsg = '';
        this.successMsg = 'Logout successful.';
        this.goToLogin();
      }, error => {
        this.errorMsg = error.message;
        this.successMsg = '';
      });
  }

  goToLogin() {
    this.router.navigate(['auth-screen']);
  }

  qrCode() {
    this.router.navigate(['qr-code']);
  }


}
