import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IOrderCard} from '../../shared';
import {AuthService} from '../../services/auth/auth.service';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {ProductService} from '../../services/cafe/product.service';
import {collection, Firestore, getDocs} from '@angular/fire/firestore';

@Component({
  selector: 'app-my-orders',
  templateUrl: './order-history.page.html',
  styleUrls: ['./order-history.page.scss'],
})
export class OrderHistoryPage implements OnInit {
  order: IOrderCard [] = [
  ];
  owner = '';
  private id = this.ionicAuthService.getUid();
  constructor(
    private router: Router,
    private ionicAuthService: AuthService,
    private afs: AngularFirestore,
    private product: ProductService,
    private _firestore: Firestore
  ) { }

  async ngOnInit() {
    await this.addItemsToOrder();
  }

  async addItemsToOrder() {
    const q = collection(this._firestore, `users/${(this.id)}/activeOrders`);
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
          status: docs.data().status
        },
      );
    });
  }

  back() {
    this.router.navigateByUrl('tabs/account', {replaceUrl: true});
  }
}
