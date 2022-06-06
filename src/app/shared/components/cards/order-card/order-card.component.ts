import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../../../../services/store/product.service';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {AuthService} from '../../../../services/auth/auth.service';
import {IrohaService} from '../../../../services/iroha/iroha.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import {collection, doc, Firestore, getDoc, getDocs} from "@angular/fire/firestore";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export interface IOrderCard {
  name: string;
  owner: string;
  price: number;
  image: string;
  id: string;
  status: string;
  itemId: string;
  ownerId: string;
  amountPaid: string;
  orderTime: string;
  deliverTime: string;
  message: string;
  quantity: string;
}

@Component({
  selector: 'app-order-card',
  templateUrl: 'order-card.component.html',
})
export class OrderCardComponent implements OnInit{
  @Input() order: IOrderCard;
  public option = [];
  public options = [];
  private uid = this.ionicAuthService.getUid();
  constructor(private router: Router,
              private product: ProductService,
              private afs: AngularFirestore,
              private ionicAuthService: AuthService,
              private _firestore: Firestore) {
  }

  async ngOnInit() {
    await this.getOptions();
    console.log(this.options[0].data);
  }

  goToCheckStatusUser(name, id, price, owner, ownerId, deliveryTime) {
    this.product.orderName = name;
    this.product.orderId = id;
    this.product.price = price;
    this.product.owner = owner;
    this.product.ownerId = ownerId;
    this.product.deliveryTime = deliveryTime;
    this.router.navigate(['check-status-user']);
  }


  async getOptions() {
    if (this.product.orderHistory == false) {
      const opt = collection(this._firestore, `users/${(this.uid)}/activeOrders/${(this.order.id)}/options`);
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
    else {
      const opt = collection(this._firestore, `users/${(this.uid)}/allOrders/${(this.order.id)}/options`);
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
  }
}
