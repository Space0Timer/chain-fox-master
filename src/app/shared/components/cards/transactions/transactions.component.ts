import {Component, Input, OnInit} from '@angular/core';

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
  constructor() { }

  ngOnInit() {}

}
