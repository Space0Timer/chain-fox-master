import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {IrohaService} from "../../../../services/iroha/iroha.service";

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss'],
})
export class TransactionDetailsComponent implements OnInit {

  constructor(private modalController: ModalController,
              private iroha: IrohaService) { }

  ngOnInit() {}
  async back() {
    await this.modalController.dismiss();
  }
}
