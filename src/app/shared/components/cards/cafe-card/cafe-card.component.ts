import { Component, Input } from '@angular/core';

export interface IOption {
  name: string;
  image: string;
  id: string;
}

@Component({
  selector: 'app-cafe-card',
  templateUrl: 'cafe-card.component.html',
  styleUrls: ['./cafe-card.component.scss'],
})

export class CafeCardComponent {
  @Input() option: IOption;
}
