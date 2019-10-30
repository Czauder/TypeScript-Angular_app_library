import { HttpClient } from '@angular/common/http';
import { createComponentFactory, mockProvider, Spectator } from '@ngneat/spectator';
import { MockComponent } from 'ng-mocks';

import { AppComponent } from './app.component';
import { FormBookComponent } from './form-book/form-book.component';
import { BookstoreService } from './services/bookstore.service';
import { RestApiService } from './services/rest-api.service';
import { UserService } from './services/user.service';

describe('app-root', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent,
    providers: [
      UserService,
      BookstoreService,
      RestApiService,
      mockProvider(HttpClient)
    ],
    declarations: [MockComponent(FormBookComponent)]
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});
