import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {form, FormField, required} from '@angular/forms/signals';
import {BucketStore} from '../bucket-store';

interface BucketItem {
  name: string
}

@Component({
  selector: 'app-bucket-filler',
  imports: [
    FormField
  ],
  templateUrl: './bucket-filler.component.html',
  styleUrl: './bucket-filler.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BucketFillerComponent {

  bucketItemModel = signal<BucketItem>({name: ''});
  bucketItemForm = form(this.bucketItemModel, (fieldPath) => {
    required(fieldPath.name, {message: 'Name is required'})
  });
  bucketStore = inject(BucketStore);


  onAddItem(event: Event) {
    console.log('>>>>> on Add Item', event);
    event.preventDefault();
    this.bucketStore.addItem(this.bucketItemModel().name);
  }
}
