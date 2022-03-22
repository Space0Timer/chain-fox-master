import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/services/auth/auth.service';
import {IonSearchbar, NavController, NavParams} from '@ionic/angular';
import {Firestore} from '@angular/fire/firestore';
import {IrohaService} from '../../../services/iroha.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})

export class SearchPage implements OnInit {

  @ViewChild('search', { static: false }) search: IonSearchbar;
  private errorMsg: string;
  private successMsg: string;

  constructor(
    private router: Router,
    private ionicAuthService: AuthService,
    private _firestore: Firestore,
    public navCtrl: NavController,
    public navParams: NavParams,
    public iroha: IrohaService
  ) {
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    setTimeout(() => {
      this.search?.setFocus();
    });
  }

  chat() {
    this.router.navigate(['chat-list']);
  }

  async _ionChange(event) {
    const val = event.target.value.toLowerCase();
    if (val && val.trim() !== '') {
      await this.iroha.setOtherName(val + '@test');
    }
    if (val.trim() !== this.iroha.otherWallet.name) {
      this.iroha.otherWallet.name = '';
    }
  }

  getRoute(route) {
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
