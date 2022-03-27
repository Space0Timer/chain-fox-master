import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IFoodCard} from '../food-card/food-card.component';
import {AuthService} from '../../../../services/auth/auth.service';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {IonRouterOutlet, ModalController} from '@ionic/angular';
import {EditItemComponent} from "../../modal/edit-item/edit-item.component";
import {ProductService} from '../../../../services/cafe/product.service';

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
              private product: ProductService) {

  }

  async openEditItemModal(id) {
    this.product.editItemId = id;
    const modal = await this.modalCtrl.create({
      component: EditItemComponent,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    return await modal.present();
  }



  async delete(id) {
    await this.afs.collection(`stores/${(this.id)}/items`).doc(id).delete();
    setTimeout(() => {
      this.childEvent.emit();
    }, 500);
  }
}
