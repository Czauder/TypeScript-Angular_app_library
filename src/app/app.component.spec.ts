import {
  Spectator,
  createComponentFactory,
  mockProvider
} from '@ngneat/spectator';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { BookstoreService } from './services/bookstore.service';
import { RestApiService } from './services/rest-api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('app-root', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent,
    providers: [
      UserService,
      BookstoreService,
      RestApiService,
      mockProvider(HttpClient)
    ]
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});
