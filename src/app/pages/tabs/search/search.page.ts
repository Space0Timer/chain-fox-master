import { Component, OnInit, ViewChild } from '@angular/core';
import {commands, queries} from 'iroha-helpers';
import {
  CommandService_v1Client as CommandService,
  QueryService_v1Client as QueryService
} from 'iroha-helpers/lib/proto/endpoint_pb_service';
import {NavigationExtras, Router} from '@angular/router';
import {AuthService} from 'src/app/services/auth/auth.service';
import {IonSearchbar, NavController, NavParams} from '@ionic/angular';
import {doc, Firestore, getDoc} from '@angular/fire/firestore';
import {StorageService} from '../../../services/storage.service';
import {IrohaService} from "../../../services/iroha.service";

const IROHA_ADDRESS = 'http://localhost:8081';

const queryService = new QueryService(
  IROHA_ADDRESS,
);

const QUERY_OPTIONS = {
  privateKey: 'e2e3c49be71ae0e1721b1a573f3d49756b87fce58679243dd4bbe09008158cf0',
  creatorAccountId: 'admin@test',
  queryService,
  timeoutLimit: 5000
};

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

  async _ionChange(event) {
    const val = event.target.value;
    // eslint-disable-next-line eqeqeq
    if (val && val.trim() != '') {
      this.iroha.setOtherName(val + '@test');
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
