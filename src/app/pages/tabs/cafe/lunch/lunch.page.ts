import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {OnInit} from '@angular/core';

import {staggerFadeAnimation } from 'src/app/services/animations';
import { IFoodCard } from 'src/app/shared';
import {StorageService} from 'src/app/services/storage.service';
import {collection, Firestore, getDocs, query} from '@angular/fire/firestore';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {ProductService} from '../../../../services/product.service';

@Component({
  selector: 'app-lunch',
  templateUrl: 'lunch.page.html',
  styleUrls: ['lunch.page.scss'],
  animations: [staggerFadeAnimation],
})
export class LunchPage implements OnInit {
  foodOptions: IFoodCard[] = [
  ];

  name = '';

  constructor(
    private router: Router,
    private storage: StorageService,
    private afs: AngularFirestore,
    private _firestore: Firestore,
    private product: ProductService) {}

  ngOnInit() {
    this.addItemToStore();
  }

  back() {
    this.router.navigateByUrl('/tabs/cafe', {replaceUrl: true});
  }

  async addItemToStore() {
    // eslint-disable-next-line no-underscore-dangle
    const dataRef = collection(this._firestore, 'stores/'+this.product.store.name+'/items');
    const q = query(dataRef);
    const querySnapshot = await getDocs(q);
    // eslint-disable-next-line @typescript-eslint/no-shadow
    querySnapshot.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data());
      const data = doc.data();
      this.foodOptions.push(
        {
          owner: this.product.store.name,
          name: data.name,
          description: data.description,
          image: data.imageUrl,
          price: data.price,
          id: data.id
        },
      );
    });
  }

  itemDetails(id, name, price, description, owner) {
    this.product.item.id = id;
    this.product.item.name = name;
    this.product.item.price = price;
    this.product.item.owner = owner;
    this.product.item.description = description;
    this.router.navigateByUrl('/item-details', {replaceUrl: true});
  }
}
