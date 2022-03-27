import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import {AuthService} from '../../../../services/auth/auth.service';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {FirebaseUploadService} from '../../../../services/cafe/firebase-upload.service';
import {Router} from '@angular/router';
import {Firestore} from '@angular/fire/firestore';
import {ProductService} from '../../../../services/cafe/product.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AlertController, ModalController} from '@ionic/angular';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss'],
})
export class EditItemComponent implements OnInit {
  barStatus = false;
  errorMessage = '';
  imageUploads = [];
  name = '';
  form: FormGroup;
  type = false;
  isLoading: boolean;
  imageUrl = '';
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

  async ngOnInit() {
  }

  async showAlert(header,message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  uploadPhoto(event) {
    this.barStatus = true;
    this.firebaseUploadService.storeImage(event.target.files[0]).then(
      (res: any) => {
        if (res) {
          console.log(res);
          this.imageUrl = res;
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
    this.errorMessage = '';
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
    this.edit(this.product.editItemId);
    await this.showAlert('Editing Item', 'Item successfully edited.');
    this.isLoading = false;
  }

  edit(id) {
    this.afs.collection(`stores/${(this.uid)}/items`).doc(id).update({
      name: this.form.value.name,
      price:this.form.value.price,
      category: this.form.value.category,
      description: this.form.value.description,
      image: this.imageUrl,
      lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
    });
  }

  async back() {
    await this.modalController.dismiss();
  }
}
