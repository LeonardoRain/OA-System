export class User {
  constructor(
    public id: number,
    public nickname: string,
    public gender: string,
    public department: string,
    public privilege: string[],
    public username: string,
    public password: string,
    public email: string,
    public phoneNumberPrefix?: string,
    public phoneNumber?: number,
    public agree?: boolean,
  ) { }
}
