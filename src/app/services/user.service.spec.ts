import { createServiceFactory, SpectatorService } from '@ngneat/spectator';

import { UserService } from './user.service';
import { User } from '../models/user-model';
import { Wallet } from '../models/wallet-model';

describe('UserService', () => {
  let spectator: SpectatorService<UserService>;
  const createService = createServiceFactory({
    service: UserService
  });

  beforeEach(() => (spectator = createService()));

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });

  it('should be created', () => {
    const cashMock = 15;
    const userMock = new User('Jaś Kot', 'kot@gmail.com', new Wallet(150));
    const expectUserWallet = userMock.wallet.balance + cashMock;

    spectator.service.addMoneyToWallet(userMock, cashMock);
    expect(userMock.wallet.balance).toEqual(expectUserWallet);
  });
});
