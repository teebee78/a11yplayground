import {Component, inject} from '@angular/core';
import {UserService} from '../user-service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export default class Dashboard {

  readonly userService = inject(UserService);

}
