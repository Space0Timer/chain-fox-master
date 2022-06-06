import {Component, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {OnInit} from '@angular/core';

import { IFoodCard } from 'src/app/shared';
import {collection, doc, Firestore, getDoc, getDocs, query} from '@angular/fire/firestore';
import {AngularFirestore, DocumentData} from '@angular/fire/compat/firestore';
import {ProductService} from '../../services/store/product.service';
import {IonSearchbar, MenuController} from '@ionic/angular';
import {ChatService} from "../../services/chat/chat.service";

@Component({
  selector: 'app-store',
  templateUrl: 'store.page.html',
  styleUrls: ['store.page.scss'],
})

export class StorePage implements OnInit {
  @ViewChild('search', { static: false }) search: IonSearchbar;
  foodOptions: IFoodCard[] = [
  ];
  drawerOptions: { name: string; type: 'sectionHeader' }[] = [
  ];
  name = '';
  category = 'All';
  foodList = [];
  storeName = '';
  private searchedItem: IFoodCard[] = [
  ];

  constructor(
    private router: Router,
    private afs: AngularFirestore,
    private _firestore: Firestore,
    private product: ProductService,
    private menu: MenuController,
    private chatService: ChatService) {
    this.menu.enable(false);
  }
  async ionViewDidLeave() {
    await this.menu.enable(true);
  }

  async ngOnInit() {
    await this.getStoreName();
    await this.setCategory();
    await this.addItemToStoreInit();
    this.searchedItem = this.foodOptions;
  }

  _ionChange(event) {
    const val = event.target.value;
    if (val && val.trim() !== '') {
      this.searchedItem = this.searchedItem.filter((item: any) => (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1));
    }
    // this.search.getInputElement().then(item => console.log(item))
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
    this.searchedItem = this.foodOptions;
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
    this.searchedItem = this.foodOptions;
  }

  ionViewWillEnter() {
    setTimeout(() => {
      this.search?.setFocus();
    });
  }

  async selectCategory(name) {
    if (name === 'All') {
      this.foodOptions = [];
      this.category = 'All';
      await this.addItemToStoreInit();
    }
    else {
      this.foodList = [];
      let data: DocumentData;
      const itemIdRef = doc(this._firestore, 'stores/' + this.product.store.name + '/categories/' + name);
      await getDoc(itemIdRef)
        .then(snap => {data = snap.data(); console.log(data, this.product.store.name, name);delete data.name;});
      for (const key in data) {
        console.log(key);
        this.foodList.push(key);
      }
      this.category = name;
      this.foodOptions = [];
      await this.addItemToStore();
    }
  }

  itemDetails(id, name, price, description, owner, image, status) {
    console.log(id, name, price, description, owner, image, status);
    this.product.item.id = id;
    this.product.item.name = name;
    this.product.item.price = price;
    this.product.item.owner = owner;
    this.product.item.description = description;
    this.product.item.image = image;
    this.product.item.status = status;
    this.router.navigateByUrl('/item-details', {replaceUrl: true});
  }

  async chat() {
    this.chatService.otherId = this.product.store.name;
    const docRef = doc(this._firestore, 'users', this.chatService.otherId);
    const docSnap = await getDoc(docRef);
    this.chatService.chatName = docSnap.data().username;
    await this.router.navigate(['chat']);
  }

}
