export interface IUser {
  email: string;
  password: string;
  name: 'AuthApp';
  type: 'mobileApp' | 'webSite';
}

export interface ISignUpData {
  email: string;
  password: string;
  passwordConfirmation: string;
}
