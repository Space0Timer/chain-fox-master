import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IOrderCard} from '../../shared';
import {AuthService} from "../../services/auth/auth.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {ProductService} from "../../services/cafe/product.service";
import {collection, Firestore, getDocs, orderBy, query} from "@angular/fire/firestore";
import {format, parseISO} from 'date-fns';
import {MenuController} from "@ionic/angular";
@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit{
  order: IOrderCard [] = [
  ];
  owner = '';
  isEmpty = true;
  private id = this.ionicAuthService.getUid();
  private searchedItem: any;
  constructor(
    private router: Router,
    private ionicAuthService: AuthService,
    private afs: AngularFirestore,
    private product: ProductService,
    private _firestore: Firestore,
    private menu: MenuController
  ) {
    this.menu.enable(false);
  }
  async ionViewDidLeave() {
    await this.menu.enable(true);
  }

  async ionViewWillEnter() {
    this.order = [];
    await this.addItemsToOrder();
    this.searchedItem = this.order;
  }

  _ionChange(event) {
    const val = event.target.value;
    this.searchedItem = this.order;
    if (val && val.trim() !== '') {
      this.searchedItem = this.searchedItem.filter((item: any) => (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1));
    }
    // this.search.getInputElement().then(item => console.log(item))
  }

  async addItemsToOrder() {
    const q = query(collection(this._firestore, `users/${(this.id)}/activeOrders`), orderBy('deliverTime', 'desc'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((docs) => {
      console.log(docs.id, ' => ', docs.data());
      this.order.push(
        {
          name: docs.data().itemName,
          owner: docs.data().owner,
          price: docs.data().price,
          image: docs.data().imageUrl,
          id: docs.data().orderId,
          itemId: docs.data().itemId,
          status: docs.data().status,
          ownerId: docs.data().ownerId,
          amountPaid: docs.data().amountPaid,
          deliverTime: docs.data().deliverTime,
          orderTime: docs.data().orderTime,
          quantity: docs.data().quantity
        },
      );
      this.isEmpty = false;
    });


  }

  back() {
    this.router.navigateByUrl('tabs/account', {replaceUrl: true});
  }

  ngOnInit(): void {
  }
}
