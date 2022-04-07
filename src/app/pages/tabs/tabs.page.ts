import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import {Keyboard} from '@capacitor/keyboard';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  hide = false;
  @ViewChild('tabs', {static: false}) tabs: IonTabs;
  selectedTab: any;

  constructor() { }

  ngOnInit() {
    Keyboard.addListener('keyboardDidShow', info => {
      this.hide = true;
    });
    Keyboard.addListener('keyboardDidHide', () => {
      this.hide = false;
    });
  }

  setCurrentTab($event: any) {
    this.selectedTab = this.tabs.getSelected();
  }

}
