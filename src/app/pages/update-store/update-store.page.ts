import { Component, OnInit } from '@angular/core';
import {FirebaseUploadService} from '../../services/firebase-upload.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {doc, setDoc} from "@angular/fire/firestore";
import {user_key} from "../../services/auth/auth.service";

@Component({
  selector: 'app-update-store',
  templateUrl: './update-store.page.html',
  styleUrls: ['./update-store.page.scss'],
})
export class UpdateStorePage implements OnInit {

  barStatus = false;
  errorMessage = '';
  imageUploads = [];
  name = '';
  form: FormGroup;
  type = false;
  isLoading: boolean;
  constructor(private firebaseUploadService: FirebaseUploadService,
              private router: Router) {
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
    console.log(this.form.value);
    this.isLoading = true;
    this.isLoading = false;
  }
  back() {
    this.router.navigateByUrl('tabs/account', {replaceUrl: true});
  }
}
