import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { BookstoreService } from './services/bookstore.service';

describe('app-root', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent,
    providers: [UserService, BookstoreService]
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});
