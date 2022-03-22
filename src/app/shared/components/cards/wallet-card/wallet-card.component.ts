import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {IrohaService} from "../../../../services/iroha.service";


@Component({
  selector: 'app-wallet-card',
  templateUrl: './wallet-card.component.html',
  styleUrls: ['./wallet-card.component.scss'],
})
export class WalletCardComponent implements OnInit{
  @Output() childEvent: EventEmitter<any> = new EventEmitter();
  name = '';
  balance  =  '';
  constructor(private iroha: IrohaService) { }

  async ngOnInit() {
    await this.childEvent.emit();
    this.name = this.iroha.wallet.name;
    this.balance = this.iroha.wallet.balance;
  }

}
