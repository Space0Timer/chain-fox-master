import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FirebaseUploadService} from "../../services/firebase-upload.service";
import {Router} from "@angular/router";
import {doc, Firestore, setDoc} from "@angular/fire/firestore";
import {AuthService, user_key} from "../../services/auth/auth.service";
import {StorageService} from "../../services/storage.service";
import {uploadString} from "@angular/fire/storage";

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
  private uid = this.ionicAuthService.getUid();
  constructor(private firebaseUploadService: FirebaseUploadService,
              private router: Router,
              private _firestore: Firestore,
              private storage: StorageService,
              private ionicAuthService: AuthService) {
    this.initForm();
  }

  ngOnInit() {
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
    this.isLoading = true;
    console.log(this.form.value);
    await this.uploadStoreDetails(this.form.value);
    this.isLoading = false;
  }

  async uploadStoreDetails(formValue) {
    // eslint-disable-next-line no-underscore-dangle
    const dataRef = doc(this._firestore, `stores/${(this.uid)}`);
    await setDoc(dataRef, {
      name: formValue.name,
      imageUrl: this.imageUrl
    });
  }


  back() {
    this.router.navigateByUrl('tabs/account', {replaceUrl: true});
  }
}
