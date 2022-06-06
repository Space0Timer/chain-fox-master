import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IFoodCard} from '../food-card/food-card.component';
import {AuthService} from '../../../../services/auth/auth.service';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {AlertController, IonRouterOutlet, ModalController} from '@ionic/angular';
import {EditItemComponent} from "../../modal/edit-item/edit-item.component";
import {ProductService} from '../../../../services/store/product.service';
import {doc, Firestore, getDoc} from "@angular/fire/firestore";

@Component({
  selector: 'app-update-store-component',
  templateUrl: './update-store.component.html',
  styleUrls: ['./update-store.component.scss'],
})
export class UpdateStoreComponent{
  @Input() food: IFoodCard;
  @Output() childEvent: EventEmitter<any> = new EventEmitter();
  private id = this.ionicAuthService.getUid();

  constructor(private ionicAuthService: AuthService,
              private afs: AngularFirestore,
              private modalCtrl: ModalController,
              private routerOutlet: IonRouterOutlet,
              private product: ProductService,
              private _firestore: Firestore,
              private alertController: AlertController) {
  }

  async openEditItemModal(id, name, price, category, description) {
    this.product.editItemId = id;
    this.product.editItemName = name;
    this.product.editItemPrice = price;
    this.product.editItemCategory = category;
    this.product.editItemDescription= description;
    const modal = await this.modalCtrl.create({
      component: EditItemComponent,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    return await modal.present();
  }

  async soldOut(id) {
    await this.afs.collection(`stores/${(this.id)}/items`).doc(id).update({
      status: 'sold out'
    });
  }

  async restock(id) {
    await this.afs.collection(`stores/${(this.id)}/items`).doc(id).update({
      status: 'available'
    });
  }

  async delete(id) {
    await this.afs.collection(`stores/${(this.id)}/items`).doc(id).delete();
    setTimeout(() => {
      this.childEvent.emit();
    }, 500);
  }

  async showAlertDelete(header, message, id) {
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
            await this.delete(id);
          }
        }
      ]
    });
    await alert.present();
  }

  async showAlertSoldOut(header, message, id) {
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
            await this.soldOut(id);
          }
        }
      ]
    });
    await alert.present();
  }

  async showAlertAvailable(header, message, id) {
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
            await this.restock(id);
          }
        }
      ]
    });
    await alert.present();
  }
}
