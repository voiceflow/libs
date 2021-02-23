import atob from 'atob';

import { CreatorID } from '@/models';
import { getWindow } from '@/utils';

export const parseJWT = <S>(token: string): S => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    (getWindow()?.atob || atob)(base64)
      .split('')
      .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join('')
  );

  return JSON.parse(jsonPayload);
};

type UserToken = {
  id: number;
  name: string;
  email: string;
  admin: number;
};

class User {
  public creatorID: CreatorID = 0;

  public name = '';

  public email = '';

  isAPIKey(authorization: string): boolean {
    return authorization.startsWith('VF.');
  }

  constructor(authorization: string) {
    if (!this.isAPIKey(authorization)) {
      const { id, name, email } = parseJWT<UserToken>(authorization);

      this.creatorID = id;
      this.name = name;
      this.email = email;
    }
  }
}

export default User;
