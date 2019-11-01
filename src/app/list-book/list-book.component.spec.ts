import {
  createComponentFactory,
  mockProvider,
  Spectator
} from '@ngneat/spectator';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import { ListBookComponent } from './list-book.component';

let store: any;

describe('app-list-book', () => {
  let spectator: Spectator<ListBookComponent>;
  const createComponent = createComponentFactory({
    component: ListBookComponent,
    imports: [],
    providers: [mockProvider(Store)]
  });

  beforeEach(() => {
    spectator = createComponent();
    store = spectator.get(Store);
    console.log(store);

    store.dispatch.and.callThrough();

    store.select.and.returnValue(of([]));

    spectator.component.books = [];
  });

  it('should create', () => {
    spectator.detectChanges();
    expect(spectator.component).toBeDefined();
  });
});
