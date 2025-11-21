import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ComboboxComponent} from './combobox/combobox.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComboboxComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('a11yplayground');
}
