import { ClientOptions, PublicClient } from '@/publicclient';
import { User } from '@/resources';

export class Client extends PublicClient {
  public user: User;

  constructor({ clientKey, apiEndpoint, authorization, options }: Omit<ClientOptions, 'authorization'> & { authorization: string }) {
    super({ clientKey, apiEndpoint, authorization, options });

    this.user = new User(authorization);
  }
}
