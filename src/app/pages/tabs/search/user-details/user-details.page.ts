import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertController, ToastController} from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';

import {
  CommandService_v1Client as CommandService,
  QueryService_v1Client as QueryService
} from 'iroha-helpers/lib/proto/endpoint_pb_service';
import {commands, queries} from 'iroha-helpers';
import {doc, Firestore, getDoc} from '@angular/fire/firestore';
import {StorageService} from '../../../../services/storage.service';
import {IrohaService} from '../../../../services/iroha.service';

const IROHA_ADDRESS = 'http://localhost:8081';

const commandService = new CommandService(
  IROHA_ADDRESS,
);

const queryService = new QueryService(
  IROHA_ADDRESS,
);

const COMMAND_OPTIONS = {
  privateKeys: ['e2e3c49be71ae0e1721b1a573f3d49756b87fce58679243dd4bbe09008158cf0'], // Array of private keys in hex format
  creatorAccountId: 'admin@test', // Account id, ex. admin@test
  quorum: 1,
  commandService,
  timeoutLimit: 5000
};

const QUERY_OPTIONS = {
  privateKey: 'e2e3c49be71ae0e1721b1a573f3d49756b87fce58679243dd4bbe09008158cf0',
  creatorAccountId: 'admin@test',
  queryService,
  timeoutLimit: 5000
};


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})

export class UserDetailsPage implements OnInit {

  form: FormGroup;
  type = false;
  isLoading: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private _firestore: Firestore,
    private ionicAuthService: AuthService,
    private iroha: IrohaService
) {
    this.initForm();
    };

  ngOnInit() {
  }

  initForm() {
    this.form = new FormGroup({
      amount: new FormControl(null, {validators: [Validators.required]}),
      reference: new FormControl(null, {validators: [Validators.required]}), // added email validator also
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
    await this.transferMoney();
    this.isLoading = false;
  }

  async transferMoney() {
    this.iroha.sendMoney(this.form.value.reference, this.form.value.amount);
  }

  back() {
    this.router.navigateByUrl('/tabs/home', {replaceUrl: true});
  }

}

