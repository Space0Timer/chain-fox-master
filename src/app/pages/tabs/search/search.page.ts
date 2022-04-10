import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/services/auth/auth.service';
import {IonSearchbar, NavController, NavParams} from '@ionic/angular';
import {Firestore} from '@angular/fire/firestore';
import {IrohaService} from '../../../services/iroha.service';
import {StorageService} from "../../../services/storage.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})

export class SearchPage implements OnInit {

  fav = [];

  @ViewChild('search', { static: false }) search: IonSearchbar;
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
    public storage: StorageService
  ) {
  }

  async ngOnInit() {
    this.fav = [await this.storage.get('favperson')];
    this.iroha.otherWallet.name = '';
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
