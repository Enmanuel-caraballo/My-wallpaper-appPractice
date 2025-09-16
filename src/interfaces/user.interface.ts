export interface IUser{
  uid: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
}

export interface IAuth extends Pick<IUser, 'email' | 'password'>{}

export interface IUserCreate extends Omit<IUser, 'uid'>{}
