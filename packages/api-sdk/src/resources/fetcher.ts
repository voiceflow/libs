import type Fetch from '@api-sdk/fetch';

type Clazz<Client, Options = undefined> = Options extends undefined
  ? new (fetch: Fetch) => Client
  : new (fetch: Fetch, options: Options) => Client;

interface BaseFetcherOptions<Client, Options = undefined> {
  fetch: Fetch;
  clazz: Clazz<Client, Options>;
  endpoint: string;
}

export type FetcherOptions<Client, Options = undefined> = Options extends undefined
  ? BaseFetcherOptions<Client> & { clazzOptions?: never }
  : BaseFetcherOptions<Client, Options> & { clazzOptions: Options };

class Fetcher<Client, Options = undefined> {
  private readonly clazz: Clazz<Client, Options>;

  private readonly clazzOptions: Options;

  private readonly _endpoint: string;

  protected get endpoint(): string {
    return this._endpoint;
  }

  protected readonly fetch: Fetch;

  constructor({ fetch, clazz, endpoint, clazzOptions }: FetcherOptions<Client, Options>) {
    this.fetch = fetch;
    this.clazz = clazz as Clazz<Client, Options>;
    this._endpoint = endpoint;
    this.clazzOptions = clazzOptions as Options;
  }

  public options(options: Parameters<Fetch['initWithOptions']>[0]): Client {
    const { clazz: Clazz } = this;

    return new Clazz(this.fetch.initWithOptions(options), this.clazzOptions);
  }
}

export default Fetcher;
