import { Models } from '@voiceflow/base-types';
import jwtDecode from 'jwt-decode';

export const parseJWT = <S>(token: string): S => {
  let user = jwtDecode(token.substring(16));

  // try again without assuming the userHash is there
  if (!user) {
    user = jwtDecode(token);
  }

  if (!user) {
    throw new RangeError('Invalid JWT');
  }

  return user as unknown as S;
};

type UserToken = {
  id: number;
  name: string;
  email: string;
  admin: number;
};

class User {
  public creatorID: Models.CreatorID = 0;

  public name = '';

  public email = '';

  constructor(authorization: string) {
    if (!this.isAPIKey(authorization)) {
      const { id, name, email } = parseJWT<UserToken>(authorization);

      this.creatorID = id;
      this.name = name;
      this.email = email;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  isAPIKey(authorization: string): boolean {
    return authorization.startsWith('VF.');
  }
}

export default User;
