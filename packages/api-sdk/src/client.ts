import { ClientOptions, PublicClient } from './public-Client';
import { User } from './resources';

export class Client extends PublicClient {
  public user: User;

  constructor(options: Omit<ClientOptions, 'authorization'> & { authorization: string }) {
    super(options);

    this.user = new User(options.authorization);
  }
}
