import { UserModel } from './user.model';
export class LoginResponseModel {
  public user: UserModel;
  public error: string;
}
