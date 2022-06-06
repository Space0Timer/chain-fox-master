import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FirebaseUploadService} from '../../../../services/utils/firebase-upload.service';
import {Router} from '@angular/router';
import {collection, doc, Firestore, getDocs, query, setDoc} from '@angular/fire/firestore';
import {AuthService} from '../../../../services/auth/auth.service';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {AlertController, ModalController} from '@ionic/angular';
import {IFoodCard} from '../../cards';
import {CustomiseOrderPage} from '../customise-order/customise-order.page';
import {ProductService} from '../../../../services/store/product.service';
import {StorageService} from '../../../../services/storage/storage.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {

  barStatus = false;
  errorMessage = '';
  imageUploads = [];
  name = '';
  form: FormGroup;
  type = false;
  isLoading: boolean;
  imageUrl = '';
  foodStore: IFoodCard[] = [
  ];
  object = Object;
  private uid = this.ionicAuthService.getUid();


  constructor(private firebaseUploadService: FirebaseUploadService,
              private router: Router,
              private _firestore: Firestore,
              private ionicAuthService: AuthService,
              private afs: AngularFirestore,
              private modalController: ModalController,
              private alertController: AlertController,
              private product: ProductService,
              private storage: StorageService) {
    this.initForm();
  }

  ngOnInit() {
    this.product.customOptions = [];
    this.product.customOption = [];
  }

  async openCustomiseOrderModal(nameInput) {
    const name = nameInput;
    for (const key in this.product.customOptions) {
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
    return await modal.present();
  }

  uploadPhoto(event) {
    this.barStatus = true;
    this.firebaseUploadService.storeImage(event.target.files[0]).then(
      (res: any) => {
        if (res) {
          console.log(res);
          this.imageUrl = res;
          this.imageUploads = [];
          this.imageUploads.unshift(res);
          this.barStatus = false;
        }
      },
      (error: any) => {
        this.errorMessage = 'File size exceeded. Maximum file size 1 MB';
        this.barStatus = false;
      }
    );
  }

  initForm() {
    this.form = new FormGroup({
      name: new FormControl(null, {validators: [Validators.required]}),
      price: new FormControl(null, {validators: [Validators.required]}), // added email validator also
      category: new FormControl(null, {validators: [Validators.required]}), // added email validator also
      description: new FormControl(null, {validators: [Validators.required]}), // added email validator also
    });
  }

  changeType() {
    this.type = !this.type;
  }

  async onSubmit() {
    if(!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    if(this.imageUrl === '') {
      this.errorMessage = 'You must upload an image for your item to proceed.';
      return;
    }
    this.isLoading = true;
    console.log(this.form.value);
    await this.uploadStoreDetails(this.form.value);
    await this.showAlert('Adding Item', 'Item successfully added.');
    this.isLoading = false;
    await this.modalController.dismiss();
  }

  async uploadStoreDetails(formValue) {
    // eslint-disable-next-line no-underscore-dangle
    const pushKey = this.afs.createId();
    let dataRef = doc(this._firestore, `stores/${(this.uid)}/items/${(pushKey)}`);
    await setDoc(dataRef, {
      name: formValue.name,
      price: formValue.price,
      category: formValue.category,
      description: formValue.description,
      imageUrl: this.imageUrl,
      status: 'available',
      id: pushKey
    });
    dataRef = doc(this._firestore, `idOwner/${(pushKey)}`);
    await setDoc(dataRef, {
      owner: this.uid,
    });
    // create categories
    dataRef = doc(this._firestore, `stores/${(this.uid)}/categories/${(formValue.category)}`);
    await setDoc(dataRef, {
      name: formValue.category,
    });
    // add items to categories
    await this.afs.collection(`stores/${(this.uid)}/categories/`).doc(formValue.category).update({
      [pushKey]: 1,
    });
    dataRef = doc(this._firestore, `idOwner/${(pushKey)}`);
    await setDoc(dataRef, {
      owner: this.uid,
    });
    dataRef = doc(this._firestore, `stores/${(this.uid)}/items/${(pushKey)}/options/default`);
    await setDoc(dataRef, {
      1: 'original',
      name: 'default',
    });
    dataRef = doc(this._firestore, `stores/${(this.uid)}/items/${(pushKey)}/optionPrice/defaultoriginal`);
    await setDoc(dataRef, {
      price: 0
    });
  }

  async back() {
    await this.modalController.dismiss();
  }

  async showAlert(header,message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
