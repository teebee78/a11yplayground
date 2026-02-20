import {Component, inject} from '@angular/core';
import {UserService} from '../user-service';
import {BucketFillerComponent} from '../bucket-filler/bucket-filler.component';
import {CounterStore} from '../counter-store';
import {CounterComponent} from '../counter/counter.component';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export default class Dashboard {

  readonly userService = inject(UserService);

}
