import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../../../../services/store/product.service";
import {Router} from "@angular/router";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AuthService} from "../../../../services/auth/auth.service";
import {IrohaService} from "../../../../services/iroha/iroha.service";
import {AlertController} from "@ionic/angular";
import {collection, Firestore, getDocs} from "@angular/fire/firestore";

export interface ITrackOrderCard {
  name: string;
  user: string;
  price: number;
  time: string;
  id: string;
  status: string;
  amountPaid: string;
  userId: string;
  deliverTime: string;
  message: string;
}

@Component({
  selector: 'app-track-orders',
  templateUrl: './track-orders.component.html',
  styleUrls: ['./track-orders.component.scss'],
})

export class TrackOrdersComponent implements OnInit {
  @Input() trackOrder: ITrackOrderCard;
  option = [];
  options = [];
  isLoading = false;
  private id = this.ionicAuthService.getUid();
  constructor(private product: ProductService,
              private router: Router,
              private afs: AngularFirestore,
              private ionicAuthService: AuthService,
              private iroha: IrohaService,
              private alertController: AlertController,
              private _firestore: Firestore) { }

  async ngOnInit() {
    await this.getOptions();
  }

  async goToCheckStatusStore(name, id, price, user, status, userId, deliveryTime) {
    this.product.orderName = name;
    this.product.orderId = id;
    this.product.price = price;
    this.product.user = user;
    this.product.status = status;
    this.product.userId = userId;
    this.product.deliveryTime = deliveryTime;
    await this.product.changeStatus('status');
    await this.router.navigate(['check-status-store']);
  }

  async cancelOrder(id, user, userId, paid) {
    this.isLoading = true;
    await this.iroha.payment(user, 'refund', paid).then(async r => {
        await this.afs.collection(`users/${(userId)}/activeOrders`).doc(id).update({
          status: 'cancelled',
        });
        setTimeout(async () => {
          await this.afs.collection(`users/${(userId)}/activeOrders`).doc(id).delete();
        }, 3000);
        await this.afs.collection(`users/${(userId)}/activeOrders`).doc(id).delete();
        await this.afs.collection(`users/${(userId)}/allOrders`).doc(id).update({
          status: 'cancelled',
        });
        await this.afs.collection(`trackOrders/${(this.id)}/activeOrders`).doc(id).update({
          status: 'cancelled',
        });
        await this.afs.collection(`trackOrders/${(this.id)}/activeOrders`).doc(id).delete();
        await this.afs.collection(`trackOrders/${(this.id)}/allOrders`).doc(id).update({
          status: 'cancelled',
        });

        await this.showAlert('Order cancelled.', 'This order has been cancelled. Money has been refunded to the customer.');
        this.isLoading = false;
        this.router.navigate(['account']);
      }
    )
      .catch( async e => await this.showAlert('Cancellation failed', e));

  }
  async getOptions() {
      const opt = collection(this._firestore, `trackOrders/${(this.id)}/activeOrders/${(this.trackOrder.id)}/options`);
      const optSnapshot = await getDocs(opt);
      optSnapshot.forEach((docs) => {
        console.log(docs.id, ' => ', docs.data());
        this.options.push(
          {
            data: docs.data()
          },
        );
      });
      for (const i in this.options) {
        const key = Object.keys(this.options[i].data);
        const value = Object.values(this.options[i].data);
        this.option.push(
          {
            name: key,
            value: value
          }
        );
      }
  }
  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async showAlertCancel(header, message, id, user, userId, paid) {
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
            await this.cancelOrder(id, user, userId, paid);
          }
        }
      ]
    });
    await alert.present();
  }
}
