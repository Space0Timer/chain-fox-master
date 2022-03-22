import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {IrohaService} from '../../services/iroha.service';
import {Firestore} from '@angular/fire/firestore';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.page.html',
  styleUrls: ['./qr-code.page.scss'],
})
export class QrCodePage implements OnInit {


  uid = this.ionicAuthService.getUid();
  id = this.iroha.wallet.name;

  constructor(
    private router: Router,
    private iroha: IrohaService,
    private _firestore: Firestore,
    private ionicAuthService: AuthService
  ) { }

  ngOnInit() {
  }

  back() {
    this.router.navigateByUrl('tabs/home', {replaceUrl: true});
  }
}
