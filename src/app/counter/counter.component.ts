import {Component} from '@angular/core';
import {patchState, signalState} from '@ngrx/signals';

type CounterState = { currentCount: number };

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {

  counterState = signalState<CounterState>({currentCount: 0});

  increment() {
    console.log('increment');
    patchState(this.counterState, (state) => ({
      currentCount: state.currentCount + 1
    }));
  }

  decrement() {
    patchState(this.counterState, (state) => ({
      currentCount: state.currentCount > 0 ? state.currentCount - 1 : 0
    }));
  }

  reset(): void {
    patchState(this.counterState, () => ({
      currentCount: 0
    }));

  }
}
