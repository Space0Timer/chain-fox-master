import { Component } from '@angular/core';
import {Router} from '@angular/router';

import {
  LayersService,
  NavigationService,
  staggerFadeAnimation,
} from 'src/app/pages/tabs/cafe/core';
import { IFoodCard } from 'src/app/shared';

@Component({
  selector: 'app-lunch',
  templateUrl: 'lunch.page.html',
  styleUrls: ['lunch.page.scss'],
  animations: [staggerFadeAnimation],
})
export class LunchPage {
  foodOptions: IFoodCard[] = [
    {
      name: 'Nice Food',
      description: 'Some description',
      image: 'assets/images/food-bread.png',
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

  constructor(
    private navigationService: NavigationService,
    private layersService: LayersService,
    private router: Router
  ) {}

  back() {
    this.router.navigateByUrl('/auth-screen', {replaceUrl: true});
  }

  openFoodDetailsBottomsheet(): void {
    this.layersService.openFoodDetailsBottomsheet();
  }
}
