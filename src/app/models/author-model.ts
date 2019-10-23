import { Guid } from 'guid-typescript';

export class Author {
  public id: Guid;
  public firstName: string;
  public lastName: string;

  public constructor(firstName: string, lastName: string) {
    this.id = Guid.create();
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
