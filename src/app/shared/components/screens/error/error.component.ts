import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
  model: any = {};
  screens: any[] = [];
  index = 0;
  ngOnInit() {
    this.screens = [
  {title: 'No orders available!', subtitle: 'You don\'t have any active orders', description: 'Why not order your favourite food at the online cafe?', titleColor: 'primary', color: 'medium', button: 'ORDER NOW', buttonColor: 'primary' },
    ];
    this.model = this.screens[this.index];
    this.index++;
    this.autoplayScreens();
  }

  autoplayScreens() {
    if(this.index == this.screens.length) this.index = 0;
    setTimeout(() => {
      this.model = this.screens[this.index];
      this.index++;
      this.autoplayScreens();
    }, 5000);
  }

}
