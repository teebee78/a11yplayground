import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-combobox',
  imports: [],
  templateUrl: './combobox.component.html',
  styleUrl: './combobox.component.scss',
  host: {
    '[class.is-expanded]': 'this.isExpanded()',
    'role': 'combobox'
  }
})
export class ComboboxComponent {

  isExpanded = signal(false);
  selectedItem = signal('combo works');

  expand(): void {
    this.isExpanded.set(!this.isExpanded());
    console.log('expand')
  }

  select(item: string): void {
    this.selectedItem.set(item);
    this.isExpanded.set(false);
  }
}
