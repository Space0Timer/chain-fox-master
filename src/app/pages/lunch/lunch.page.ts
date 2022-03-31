import {Component, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {OnInit} from '@angular/core';

import { IFoodCard } from 'src/app/shared';
import {collection, doc, Firestore, getDoc, getDocs, query} from '@angular/fire/firestore';
import {AngularFirestore, DocumentData} from '@angular/fire/compat/firestore';
import {ProductService} from '../../services/cafe/product.service';
import {IonSearchbar} from "@ionic/angular";

@Component({
  selector: 'app-lunch',
  templateUrl: 'lunch.page.html',
  styleUrls: ['lunch.page.scss'],
})

export class LunchPage implements OnInit {
  @ViewChild('search', { static: false }) search: IonSearchbar;
  foodOptions: IFoodCard[] = [
  ];
  drawerOptions: { name: string; type: 'sectionHeader' }[] = [
  ];
  name = '';
  category = 'All';
  foodList = [];
  private storeName = '';

  constructor(
    private router: Router,
    private afs: AngularFirestore,
    private _firestore: Firestore,
    private product: ProductService) {}

  async ngOnInit() {
    await this.getStoreName();
    await this.setCategory();
    await this.addItemToStoreInit();
  }

  back() {
    this.router.navigateByUrl('/tabs/cafe', {replaceUrl: true});
  }

  async getStoreName() {
    const ownerRef = doc(this._firestore, `stores/${(this.product.store.name)}`);
    const ownerSnap = await getDoc(ownerRef);
    const ownerName = ownerSnap.data();
    this.storeName = ownerName.name;
  }

  async setCategory() {
    this.drawerOptions.push(
      {
        name: 'All',
        type: 'sectionHeader'
      });
    const dataRef = collection(this._firestore, 'stores/' + this.product.store.name + '/categories');
    const q = query(dataRef);
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((docu) => {
      const data = docu.data();
      this.drawerOptions.push(
        {
          name: data.name,
          type: 'sectionHeader'
        },
      );
    });
  }


  async addItemToStoreInit() {
    const dataRef = collection(this._firestore, 'stores/'+this.product.store.name+'/items');
    const q = query(dataRef);
    const querySnapshot = await getDocs(q);
    // eslint-disable-next-line @typescript-eslint/no-shadow
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      this.foodOptions.push(
        {
          owner: this.product.store.name,
          name: data.name,
          description: data.description,
          image: data.imageUrl,
          price: data.price,
          id: data.id,
          category: data.category,
          status: data.status
        },
      );
    });
  }

  async addItemToStore() {

    // eslint-disable-next-line no-underscore-dangle
    for (const entry of this.foodList) {
      console.log(entry);
      const dataRef = collection(this._firestore, 'stores/'+this.product.store.name+'/items');
      const q = query(dataRef);
      const querySnapshot = await getDocs(q);
      // eslint-disable-next-line @typescript-eslint/no-shadow
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.id === entry) {
          this.foodOptions.push(
            {
              owner: this.product.store.name,
              name: data.name,
              description: data.description,
              image: data.imageUrl,
              price: data.price,
              id: data.id,
              category: data.category,
              status: data.status
            },
          );
        }
      });
    }
  }
  // search
  async _ionChange(event) {
    const val = event.target.value;
    if (val && val.trim() !== '') {
      this.name = val;
      console.log(val);
    }
  }

  ionViewWillEnter() {
    setTimeout(() => {
      this.search?.setFocus();
    });
  }

  async selectCategory(name) {
    if (name === 'All') {
      this.category = 'All';
      await this.addItemToStoreInit();
    }
    else {
      this.foodList = [];
      let data: DocumentData;
      const itemIdRef = doc(this._firestore, 'stores/' + this.product.store.name + '/categories/' + name);
      await getDoc(itemIdRef)
        .then(snap => {data = snap.data(); delete data.name;});
      for (const key in data) {
        console.log(key);
        this.foodList.push(key);
        console.log(this.foodList);
      }
      this.category = name;
      this.foodOptions = [];
      await this.addItemToStore();
    }
  }

  itemDetails(id, name, price, description, owner, image, status) {
    this.product.item.id = id;
    this.product.item.name = name;
    this.product.item.price = price;
    this.product.item.owner = owner;
    this.product.item.description = description;
    this.product.item.image = image;
    this.product.item.status = status;
    this.router.navigateByUrl('/item-details', {replaceUrl: true});
  }

  chat() {
    this.router.navigate(['chat']);
  }

}
