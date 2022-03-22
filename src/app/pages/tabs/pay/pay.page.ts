import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {BarcodeScanner, SupportedFormat} from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-home',
  templateUrl: 'pay.page.html',
  styleUrls: ['pay.page.scss'],
})
export class PayPage implements AfterViewInit, OnDestroy{
  scanActive = false;
  result = null;
  constructor(private router: Router,
              private alertCtrl: AlertController) {}

  ngAfterViewInit(){
    BarcodeScanner.prepare();
    this.startScanner();
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
        const alert = await this.alertCtrl.create({
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
  back() {
    this.router.navigateByUrl('/tabs', {replaceUrl: true});
  }


}
