import { ClientOptions, PublicClient } from '@api-sdk/publicclient';
import { User } from '@api-sdk/resources';

export class Client extends PublicClient {
  public user: User;

  constructor(options: Omit<ClientOptions, 'authorization'> & { authorization: string }) {
    super(options);

    this.user = new User(options.authorization);
  }
}
