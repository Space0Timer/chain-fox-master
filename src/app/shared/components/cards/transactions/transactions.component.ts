import {Component, Input, OnInit} from '@angular/core';
import {StoreSalesPage} from "../../../../pages/store-sales/store-sales.page";
import {TransactionDetailsComponent} from "../../modal/transaction-details/transaction-details.component";
import {IonRouterOutlet, ModalController} from "@ionic/angular";
import {IrohaService} from "../../../../services/iroha.service";

export interface Transactions {
  from: string;
  to: string;
  amount: string;
  date: string;
  currency: string;
  message: string;
}

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  @Input() transactions: Transactions;
  constructor(private modalCtrl: ModalController,
              private routerOutlet: IonRouterOutlet,
              private iroha: IrohaService) { }

  ngOnInit() {}

  async openTransactionModal(msg) {
    await this.setTransactionDetails(msg);
    const modal = await this.modalCtrl.create({
      component: TransactionDetailsComponent,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    return await modal.present();
  }

  setTransactionDetails(msg) {
    this.iroha.transactionMsg = msg;
    this.iroha.transactionFrom = this.transactions.from;
    this.iroha.transactionTo = this.transactions.to;
    this.iroha.transactionAmount = this.transactions.amount;
    this.iroha.transactionDate= this.transactions.date;
  }


}
