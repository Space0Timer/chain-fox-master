import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import '@capacitor-community/http';
@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.page.html',
  styleUrls: ['./qr-code.page.scss'],
})
export class QrCodePage implements OnInit {


  constructor(
    private router: Router,
    public barcodeScanner: BarcodeScanner
  ) { }

  ngOnInit() {
  }


  back() {
    this.router.navigateByUrl('tabs/home', {replaceUrl: true});
  }
}
