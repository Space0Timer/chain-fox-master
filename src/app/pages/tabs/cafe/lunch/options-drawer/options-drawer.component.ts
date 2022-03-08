import { Component } from '@angular/core';

@Component({
  selector: 'app-options-drawer',
  templateUrl: 'options-drawer.component.html',
})
export class OptionsDrawerComponent {
  drawerOptions: { name: string; type: 'sectionHeader' | 'option' }[] = [
    {
      name: 'Food1',
      type: 'sectionHeader',
    },
    {
      name: 'Food2',
      type: 'option',
    },
    {
      name: 'Food3',
      type: 'option',
    },
    {
      name: 'Food4',
      type: 'sectionHeader',
    },
    {
      name: 'Food5',
      type: 'option',
    },
    {
      name: 'Food6',
      type: 'option',
    },
    {
      name: 'Food7',
      type: 'option',
    },
    {
      name: 'Food8',
      type: 'sectionHeader',
    },
    {
      name: 'Food9',
      type: 'option',
    },
    {
      name: 'Food10',
      type: 'option',
    },
  ];
}
