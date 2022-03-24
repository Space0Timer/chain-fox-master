import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  @Output() childEvent: EventEmitter<any> = new EventEmitter();
  newMsg = '';
  constructor(private modalController: ModalController) { }

  ngOnInit() {}


  addNote() {


  }
  async back() {
    await this.modalController.dismiss();
  }
}
