import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {OnInit} from '@angular/core';

import {staggerFadeAnimation } from 'src/app/services/animations';
import { IFoodCard } from 'src/app/shared';
import {StorageService} from 'src/app/services/storage.service';

@Component({
  selector: 'app-lunch',
  templateUrl: 'lunch.page.html',
  styleUrls: ['lunch.page.scss'],
  animations: [staggerFadeAnimation],
})
export class LunchPage implements OnInit {
  foodOptions: IFoodCard[] = [
    {
      name: 'Nice Food',
      description: 'Some description',
      image: 'assets/images/chinese-Chicken Rice.png',
    },
    {
      name: 'More Nice Food',
      description: 'Some description',
      image: 'assets/images/food-avocado.png',
    },
    {
      name: 'Even More Nice Food',
      description: 'Some description',
      image: 'assets/images/food-rice-shrimp.png',
    },
  ];

  name = '';

  constructor(
    private router: Router,
    private storage: StorageService) {}

  ngOnInit() {
  }
  back() {
    this.router.navigateByUrl('/tabs/cafe', {replaceUrl: true});
  }

  firebaseImage() {
    this.getImage();

  }
  getImage() {
    this.storage.getStorage('path').then(
      value => this.name = Object.values(value)[0]
    );
  }

  createItem() {
  //obj.p
  }

}
