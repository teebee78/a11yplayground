import {Component, inject} from '@angular/core';
import {BucketStore} from '../bucket-store';

@Component({
  selector: 'app-bucket',
  imports: [],
  templateUrl: './bucket.component.html',
  styleUrl: './bucket.component.css',
})
export class BucketComponent {

  readonly bucketStore = inject(BucketStore);

}
