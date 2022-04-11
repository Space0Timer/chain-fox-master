import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import {Keyboard} from '@capacitor/keyboard';
import {Badge} from '@robingenz/capacitor-badge';

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

  async ngOnInit() {
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    const clear = async () => {
      await Badge.clear();
    };

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
