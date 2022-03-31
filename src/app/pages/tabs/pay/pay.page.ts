import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {AlertController, IonRouterOutlet, ModalController, Platform} from '@ionic/angular';
import {BarcodeScanner, SupportedFormat} from '@capacitor-community/barcode-scanner';
import {IrohaService} from '../../../services/iroha.service';
import {ProductService} from "../../../services/cafe/product.service";

@Component({
  selector: 'app-home',
  templateUrl: 'pay.page.html',
  styleUrls: ['pay.page.scss'],
})
export class PayPage implements AfterViewInit, OnDestroy{
  scanActive = false;
  result = null;
  constructor(private router: Router,
              private platform: Platform,
              private iroha: IrohaService,
              private alertController: AlertController){}

  ngAfterViewInit(){
    BarcodeScanner.prepare();
    this.startScanner();
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
        this.iroha.result = result.content;
        this.scanActive = false;
        console.log(this.iroha.result);
        await this.router.navigate(['scan-pay']);
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


  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['Ok'],
    });

    await alert.present();
  }

  back() {
    this.router.navigateByUrl('/tabs', {replaceUrl: true});
  }


}
