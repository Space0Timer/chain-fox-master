import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import {Auth, user} from '@angular/fire/auth';
import {AuthService} from "../auth/auth.service";

@Injectable({
  providedIn: 'root',
})
export class FirebaseUploadService {
  location = 'uploads/';
  private uid = this.ionicAuthService.getUid();
  constructor(private angularFireStorage: AngularFireStorage,
              private ionicAuthService: AuthService) {}

  /* Image name generator time */
  imageName() {
    const newTime = Math.floor(Date.now() / 1000);
    return Math.floor(Math.random() * 20) + newTime;
  }

  async storeImage(imageData: any) {
    try {
      const imageName = this.imageName();
      return new Promise((resolve, reject) => {
        const pictureRef = this.angularFireStorage.ref(this.location + `${this.uid}` + imageName);
        pictureRef
          .put(imageData)
          // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
          .then(function() {
            pictureRef.getDownloadURL().subscribe((url: any) => {
              resolve(url);
            });
          })
          .catch((error) => {
            reject(error);
          });
      });
    } catch (e) {}
  }
}
