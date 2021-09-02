import type Fetch from '@/fetch';

export interface FetcherOptions<C> {
  fetch: Fetch;
  clazz: new (fetch: Fetch) => C;
  endpoint: string;
}

class Fetcher<C> {
  private readonly clazz: new (fetch: Fetch) => C;

  private endpoint: string;

  protected readonly fetch: Fetch;

  constructor({ fetch, clazz, endpoint }: FetcherOptions<C>) {
    this.fetch = fetch;
    this.clazz = clazz;
    this.endpoint = endpoint;
  }

  protected _getEndpoint(): string {
    return this.endpoint;
  }

  public options(options: Parameters<Fetch['initWithOptions']>[0]): C {
    const { clazz: Clazz } = this;

    return new Clazz(this.fetch.initWithOptions(options));
  }
}

export default Fetcher;
