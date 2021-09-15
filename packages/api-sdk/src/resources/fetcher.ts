import type Fetch from '@/fetch';

type Clazz<Client, Options = undefined> = Options extends undefined ? new (fetch: Fetch) => Client : new (fetch: Fetch, options: Options) => Client;

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

  private endpoint: string;

  private clazzOptions: Options;

  protected readonly fetch: Fetch;

  constructor({ fetch, clazz, endpoint, clazzOptions }: FetcherOptions<Client, Options>) {
    this.fetch = fetch;
    this.clazz = clazz;
    this.endpoint = endpoint;
    this.clazzOptions = clazzOptions as Options;
  }

  protected _getEndpoint(): string {
    return this.endpoint;
  }

  public options(options: Parameters<Fetch['initWithOptions']>[0]): Client {
    const { clazz: Clazz } = this;

    return new Clazz(this.fetch.initWithOptions(options), this.clazzOptions);
  }
}

export default Fetcher;
