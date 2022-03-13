import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { IrohaService } from 'src/app/services/iroha.service';
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})

export class SignUpComponent implements OnInit {

  form: FormGroup;
  type = false;
  isLoading: boolean;
  private id = this.ionicAuthService.getUid();
  constructor(
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController,
    private iroha: IrohaService,
    private ionicAuthService: AuthService,
    private afs: AngularFirestore
    ) {
    this.initForm();
  }

  ngOnInit() {}

  initForm() {
    this.form = new FormGroup({
      username: new FormControl(null, {validators: [Validators.required]}),
      email: new FormControl(null, {validators: [Validators.required, Validators.email]}), // added email validator also
      password: new FormControl(null, {validators: [Validators.required, Validators.minLength(8)]})
    });
  }

  changeType() {
    this.type = !this.type;
  }

  async createCart() {
    await this.afs.collection('carts').add({
      id: this.id
    });
  }

  async createFav() {
    await this.afs.collection('favourites').add({
      id: this.id
    });
  }

  async createOrders() {
    await this.afs.collection('orders').add({
      id: this.id
    });
  }



  onSubmit() {
    if(!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    console.log(this.form.value);
    this.authService.register(this.form.value).then(async (data) => {
      console.log(data);
      await this.iroha.createAccount(this.form.value.username);
      await this.createCart();
      await this.createFav();
      await this.createOrders();
      await this.router.navigateByUrl('/tabs', {replaceUrl: true});
      this.isLoading = false;
      this.form.reset();
    })
    .catch(e => {
      console.log(e);
      this.isLoading = false;
      let msg = 'Could not sign up, please try again';
      if(e.code == 'auth/email-already-in-use') {
        msg = 'Email is already in use, try signup with some other email id';
      }
      this.showAlert(msg);
    });
  }

  async showAlert(message) {
    const alert = await this.alertController.create({
      header: 'Authentication Failed',
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }


}
