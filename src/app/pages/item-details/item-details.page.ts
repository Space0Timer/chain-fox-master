import { Component, OnInit } from '@angular/core';
import {AnimationController } from '@ionic/angular';
import {Router} from '@angular/router';
import {collection, doc, Firestore, getDocs, query} from "@angular/fire/firestore";
import {ProductService} from "../../services/product.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage implements OnInit {
  selectedSize: number;
  selectedColor: number;
  activeVariation: string;


  option = {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay:true,
  };

  name: string;
  price: string;
  description: string;
  id: string;
  owner: string;

  constructor(
    private animatioCntrl: AnimationController,
    private router: Router,
    private afs: AngularFirestore,
    private _firestore: Firestore,
    private product: ProductService,
  ) {

  }

  ngOnInit() {
    this.activeVariation = 'size';
  }

  addToCart(id, owner) {
    this.product.addToCart(id, owner);
  }

  getItemDetails() {
    this.name = this.product.item.name;
    this.price = this.product.item.price;
    this.description = this.product.item.description;
    this.owner = this.product.item.owner;
    this.id = this.product.item.id;
  }

  async addStoreToCafe() {
    const pushKey = this.afs.createId();
    // eslint-disable-next-line no-underscore-dangle
    const dataRef = collection(this._firestore, 'stores');
    const q = query(dataRef);
    const querySnapshot = await getDocs(q);
    // eslint-disable-next-line @typescript-eslint/no-shadow
    querySnapshot.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data());
      const data = doc.data();

    });
  }

  segmentChanged(e: any) {
    this.activeVariation = e.detail.value;

    if (this.activeVariation == 'color') {
      this.animatioCntrl.create()
      .addElement(document.querySelector('.sizes'))
      .duration(500)
      .iterations(1)
      .fromTo('transform', 'translateX(0px)', 'translateX(100%)')
      .fromTo('opacity', '1', '0.2')
      .play();

      this.animatioCntrl.create()
      .addElement(document.querySelector('.colors'))
      .duration(500)
      .iterations(1)
      .fromTo('transform', 'translateX(-100%)', 'translateX(0)')
      .fromTo('opacity', '0.2', '1')
      .play();
    } else {
      this.animatioCntrl.create()
      .addElement(document.querySelector('.sizes'))
      .duration(500)
      .iterations(1)
      .fromTo('transform', 'translateX(100%)', 'translateX(0)')
      .fromTo('opacity', '0.2', '1')
      .play();

      this.animatioCntrl.create()
      .addElement(document.querySelector('.colors'))
      .duration(500)
      .iterations(1)
      .fromTo('transform', 'translateX(0px)', 'translateX(-100%)')
      .fromTo('opacity', '1', '0.2')
      .play();
    }
  }

  changeSize(size: number) {
    this.selectedSize = size;
  }

  changeColor(color: number) {
    this.selectedColor = color;
  }
  back() {
    this.router.navigateByUrl('/lunch', {replaceUrl: true});
  }
}
