import { CreatorID } from '@/models';
import atob from 'atob';

export const parseJWT = <S>(token: string): S => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

type UserToken = {
  id: number,
  name: string,
  email: string,
  admin: number
};

class User {
  public creatorID: CreatorID;
  public name: string;
  public email: string;

  constructor(authorization: string) {
    const { id, name, email } = parseJWT<UserToken>(authorization);

    this.creatorID = id;
    this.name = name;
    this.email = email;
  }
}

export default User;
