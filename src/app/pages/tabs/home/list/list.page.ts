import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {doc, Firestore, getDoc} from '@angular/fire/firestore';
import {AuthService} from '../../../../services/auth/auth.service';
import {IrohaService} from '../../../../services/iroha.service';
import {ICartCard} from '../../../../shared';
import {Transactions} from "../../../../shared/components/cards/transactions/transactions.component";
import {format, parseISO} from "date-fns";

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})

export class ListPage implements OnInit {

  transactions: Transactions [] = [
  ];
  constructor(
    private router: Router,
    private ionicAuthService: AuthService,
    private _firestore: Firestore,
    private iroha: IrohaService) {
    }

  async ngOnInit() {
    await this.iroha.getTransactions();
    await this.getList();
  }

  async getList() {
    this.iroha.txs.forEach(c => {
        this.transactions.push(
          {
            date: format(new Date (c.date), 'yyyy-MM-dd HH:mm'),
            message: '',
            currency: c.currency,
            amount: c.amount,
            from: c.from,
            to: c.to,
          },
        );
      }
    );
  }
  back() {
    this.router.navigateByUrl('/tabs', {replaceUrl: true});
  }


}
