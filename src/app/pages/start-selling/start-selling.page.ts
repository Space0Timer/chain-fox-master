import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FirebaseUploadService} from "../../services/cafe/firebase-upload.service";
import {Router} from "@angular/router";
import {doc, Firestore, setDoc} from "@angular/fire/firestore";
import {AuthService} from "../../services/auth/auth.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-start-selling',
  templateUrl: './start-selling.page.html',
  styleUrls: ['./start-selling.page.scss'],
})

export class StartSellingPage implements OnInit {

  barStatus = false;
  errorMessage = '';
  imageUploads = [];
  name = '';
  imageUrl = '';

  form: FormGroup;
  type = false;
  isLoading: boolean;
  imageUploaded: boolean;

  private id = this.ionicAuthService.getUid();

  private uid = this.ionicAuthService.getUid();
  constructor(private firebaseUploadService: FirebaseUploadService,
              private router: Router,
              private _firestore: Firestore,
              private ionicAuthService: AuthService,
              private afs: AngularFirestore) {
    this.initForm();
  }

  ngOnInit() {
  }

  // Upload photo
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
      this.errorMessage = 'You must upload an image for your storefront to proceed.';
      return;
    }
    this.isLoading = true;
    console.log(this.form.value);
    await this.uploadStoreDetails(this.form.value);
    await this.createTrackSales();
    await this.createTrackOrders();
    this.isLoading = false;
  }

  async uploadStoreDetails(formValue) {
    // eslint-disable-next-line no-underscore-dangle
    const dataRef = doc(this._firestore, `stores/${(this.uid)}`);
    await setDoc(dataRef, {
      name: formValue.name,
      imageUrl: this.imageUrl,
      id: this.uid,
    });
  }

  async createTrackSales() {
    const dataRef = doc(this._firestore, `trackSales/${(this.uid)}`);
    await setDoc(dataRef, {
      id: this.uid,
    });
  }

  async createTrackOrders() {
    const dataRef = doc(this._firestore, `trackOrders/${(this.uid)}`);
    await setDoc(dataRef, {
      id: this.uid,
    });
  }

  back() {
    this.router.navigateByUrl('tabs/account', {replaceUrl: true});
  }
}
