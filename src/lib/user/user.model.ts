export class User {
  private firstname: string;

  constructor(firstname: string) {
    this.firstname = firstname;
  }

  getFirstname() {
    return this.firstname;
  }

  static of(firstname: string): User {
    return new User(firstname);
  }
}
