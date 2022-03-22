import {Component, Input, OnInit} from '@angular/core';


export interface IFavCard {
  name: string;
  owner: string;
  price: number;
  image: string;
  id: string;
}

@Component({
  selector: 'app-fav-card',
  templateUrl: './fav-card.component.html',
  styleUrls: ['./fav-card.component.scss'],
})

export class FavCardComponent implements OnInit {
  @Input() fav: IFavCard;
  constructor() { }

  ngOnInit() {}

}
