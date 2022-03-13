import { Component, Input } from '@angular/core';

export interface IFoodCard {
  name: string;
  description: string;
  image: string;
  price: string;
  owner: string;
  id: string;
}

@Component({
  selector: 'app-food-card',
  templateUrl: 'food-card.component.html',
})
export class FoodCardComponent {
  @Input() food: IFoodCard;
}
