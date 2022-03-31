import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AlertController, ModalController} from "@ionic/angular";
import {ProductService} from "../../../../services/cafe/product.service";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  @Output() childEvent: EventEmitter<any> = new EventEmitter();
  newMsg = '';
  constructor(private modalController: ModalController,
              private product: ProductService,
              private alertController: AlertController) { }

  ngOnInit() {}

  async addNote() {
    if (this.newMsg !== '' && this.newMsg.length > 63) {
      await this.showAlert('Message too long.', 'Your message must not exceed 63 characters');
      await this.back();
    }
    else {
      await this.product.addNote(this.product.noteId, this.newMsg);
      await this.back();
    }

  }
  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }
  async back() {
    await this.modalController.dismiss();
  }
}
