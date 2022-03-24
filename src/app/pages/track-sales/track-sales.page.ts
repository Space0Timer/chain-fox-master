import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {IonRouterOutlet} from "@ionic/angular";
import {format, parseISO} from 'date-fns';
import {collection, Firestore, getDocs} from "@angular/fire/firestore";
import {AuthService} from "../../services/auth/auth.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Labels, ProductService} from "../../services/cafe/product.service";
import {ModalController} from "@ionic/angular";
import {StoreSalesPage} from "../store-sales/store-sales.page";

@Component({
  selector: 'app-track-sales',
  templateUrl: './track-sales.page.html',
  styleUrls: ['./track-sales.page.scss'],
})
export class TrackSalesPage implements OnInit {

  labels: Labels [] = [
  ];
  dayValue = String(new Date().getDate()).replace(/^0+/, '').trim();
  monthValue = String((new Date().getMonth() + 1)).replace(/^0+/, '').trim();
  yearValue = (new Date().getFullYear().toString());

  private id = this.ionicAuthService.getUid();
  constructor(
    private router: Router,
    private ionicAuthService: AuthService,
    private afs: AngularFirestore,
    private product: ProductService,
    private _firestore: Firestore,
    private modalCtrl: ModalController,
    private routerOutlet: IonRouterOutlet,

  ) { }

  ngOnInit(){
  }

  async checkSales() {
    this.labels = [];
    console.log(this.id, this.dayValue, this.monthValue, this.yearValue);
    const q = collection(this._firestore, `trackSales/${(this.id)}/${(this.yearValue)}/${(this.monthValue)}/${(this.dayValue)}/`);
   const querySnapshot = await getDocs(q);
    querySnapshot.forEach((docs) => {
      console.log(docs.id, ' => ', docs.data());
      this.labels.push(
        {
          name: docs.data().itemName,
          price: docs.data().price,
        },
      );
    });
    console.log(this.labels);
    const holder = {};

    this.labels.forEach(d => {
      if (holder.hasOwnProperty(d.name)) {
        holder[d.name] = holder[d.name] + d.price;
      } else {
        holder[d.name] = d.price;
      }
    });

    const data = [];

    for (const prop in holder) {
      data.push({ name: prop, value: holder[prop] });
    }

    this.product.label= [];
    this.product.data = [];

    data.forEach(d => {
      this.product.label.push(d.name);
      this.product.data.push(d.value);
    });
    console.log(this.product.label);
    console.log(this.product.data);
    await this.openStoreSalesModal();
  }

  dateChanges(date) {
    this.dayValue = format(parseISO(date), 'dd').replace(/^0+/, '').trim();
    this.monthValue = format(parseISO(date), 'MM').replace(/^0+/, '').trim();
    this.yearValue = format(parseISO(date), 'yyyy');
  }

  async openStoreSalesModal() {
    const modal = await this.modalCtrl.create({
      component: StoreSalesPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    return await modal.present();
  }

  async closeModal() {
    await this.modalCtrl.dismiss();
  }


  back() {
    this.router.navigateByUrl('tabs/account', {replaceUrl: true});
  }


}
