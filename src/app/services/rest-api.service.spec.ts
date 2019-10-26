import { createServiceFactory, SpectatorService, mockProvider, HttpMethod } from '@ngneat/spectator';

import { RestApiService } from './rest-api.service';
import { HttpClient } from '@angular/common/http';


describe('restApiService', () => {
  let spectator: SpectatorService<RestApiService>;
  const createService = createServiceFactory({
    providers: [
      mockProvider(HttpClient)
    ],
    service: RestApiService
  });

  beforeEach(() => (spectator = createService()));

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });
});
