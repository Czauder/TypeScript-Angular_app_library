import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { BookstoreService } from './bookstore.service';


describe('BookstoreService', () => {
  let spectator: SpectatorService<BookstoreService>;
  const createService = createServiceFactory(BookstoreService);

  beforeEach(() => spectator = createService());
})