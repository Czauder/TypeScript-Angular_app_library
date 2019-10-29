import { Injectable } from '@angular/core';

import { User } from '../models/user-model';
import { BookstoreService } from './bookstore.service';
import { RestApiService } from './rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  Users: any = [];

  public constructor(private restApi: RestApiService) {}

  public addMoneyToWallet(user: User, cash: number): void {
    user.wallet.balance += cash;
    console.log('added monay from bank');
  }

  // public loadUsersFromServer() {
  //   this.restApi.getUser().subscribe((data: {}) => {
  //     this.Users = data;
  //     console.log(this.Users);
  //   });
  // }

  // public sendUserToServer(user: User) {
  //   this.restApi.addUser(user).subscribe((data: {}) => {
  //     console.log(data);
  //     console.log('create user')
  //   });
  // }
}
