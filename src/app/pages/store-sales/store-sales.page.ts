import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-store-sales',
  templateUrl: './store-sales.page.html',
  styleUrls: ['./store-sales.page.scss'],
})

export class StoreSalesPage implements OnInit {
  @Output() childEvent: EventEmitter<any> = new EventEmitter();
  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {}

  async closeModal() {
    await this.modalCtrl.dismiss();
  }
}
