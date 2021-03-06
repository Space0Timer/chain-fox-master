import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import firebase from 'firebase/compat/app';
import {AuthService} from '../../../../services/auth/auth.service';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {FirebaseUploadService} from '../../../../services/utils/firebase-upload.service';
import {Router} from '@angular/router';
import {collection, doc, Firestore, getDoc, getDocs, query, setDoc} from '@angular/fire/firestore';
import {ProductService} from '../../../../services/store/product.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AlertController, ModalController} from '@ionic/angular';
import {CustomiseOrderPage} from '../customise-order/customise-order.page';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss'],
})
export class EditItemComponent{
  barStatus = false;
  errorMessage = '';
  imageUploads = [];
  name = '';
  form: FormGroup;
  type = false;
  isLoading: boolean;
  imageUrl = '';
  object = Object;
  private uid = this.ionicAuthService.getUid();

  constructor(private firebaseUploadService: FirebaseUploadService,
              private router: Router,
              private _firestore: Firestore,
              private ionicAuthService: AuthService,
              private afs: AngularFirestore,
              private product: ProductService,
              private modalController: ModalController,
              private alertController: AlertController) {
    this.initForm();
  }

  async ionViewWillEnter() {
    this.product.customOptions = [];
    this.product.customOption = [];
    await this.getOptionFromFirebase();
  }

  async showAlert(header,message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  initForm() {
    this.form = new FormGroup({
      name: new FormControl(null, {validators: [Validators.required]}),
      price: new FormControl(null, {validators: [Validators.required]}),
      description: new FormControl(null, {validators: [Validators.required]}),
    });
  }

  async getOptionFromFirebase() {
    this.product.customOptions = [];
    this.product.customOption = [];
    const dataRef = collection(this._firestore, 'stores/' + this.uid + '/items/' + this.product.editItemId +'/options');
    const q = query(dataRef);
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((docu) => {
      const data = docu.data();
      console.log(data);
      this.product.customOption = data;
      // delete duplicates
      if (this.product.customOptions.length === 0) {
        this.product.customOptions.push({
          name: this.product.customOption.name,
          data: this.product.customOption,
          checked: false
        });
      }
      else {
        for (const key in this.product.customOptions) {
          if (this.product.customOptions[key].name !== this.product.customOption.name) {
            this.product.customOptions.push({
              name: this.product.customOption.name,
              data: this.product.customOption,
              checked: false
            });
          }
          else {
            this.product.customOptions[key].data = this.product.customOption;
          }
        }
      }
    });
  }

  changeType() {
    this.type = !this.type;
  }

  async deleteCustomisation(id) {
    await this.afs.collection(`stores/${(this.uid)}/items/${(this.product.editItemId)}/options`).doc(id).delete();
    await this.ionViewWillEnter();
  }
  async back() {
    await this.modalController.dismiss();
  }


  async onSubmit() {
    console.log(this.form.value);
    this.errorMessage = '';
    if(!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    await this.edit(this.product.editItemId);
    await this.showAlert('Editing Item', 'Item successfully edited.');
    this.isLoading = false;
    await this.modalController.dismiss();
  }

  async edit(id) {
    await this.afs.collection(`stores/${(this.uid)}/items`).doc(id.split('@')[0]).update({
      name: this.form.value.name,
      price: this.form.value.price,
      description: this.form.value.description,
      lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
    });
  }

  async openCustomiseOrderModal(nameInput) {
    const name = nameInput;
    for (const key in  this.product.customOptions) {
      if (this.product.customOptions[key].name === name) {
        this.product.customOption = this.product.customOptions[key].data;
        console.log(this.product.customOption);
        this.product.customNew = false;
      }
    }
    const modal = await this.modalController.create({
      component: CustomiseOrderPage,
      swipeToClose: true,
      presentingElement: await this.modalController.getTop()
    });
    await modal.present();
    await modal.onDidDismiss().then(r=> {
      this.ionViewWillEnter();
    });
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
            await this.deleteCustomisation(id);
          }
        }
      ]
    });
    await alert.present();
  }
}
