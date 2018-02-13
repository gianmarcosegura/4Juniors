

export class User {
  constructor(
    public firstname: string,
    public lastname: string
  ) {}

  fullName() {
    return `${this.firstname} ${this.lastname}`;
  }
}
