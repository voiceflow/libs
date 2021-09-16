import { Crypto } from '@voiceflow/common';

import { CreatorID } from '@/models';

export const parseJWT = <S>(token: string): S => {
  const base64Url = token.split('.')[1];

  if (!base64Url) {
    throw new RangeError('Invalid JWT');
  }

  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    Crypto.Base64.decode(base64)
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
