import Fetcher, { FetcherOptions } from './fetcher';

export type Fields = string[] | ReadonlyArray<string>;

export type BaseResourceOptions<C extends Record<string, any>> = FetcherOptions<C>;

class BaseResource<C extends Record<string, any>> extends Fetcher<C> {
  constructor(options: BaseResourceOptions<C>) {
    super(options);
  }

  // eslint-disable-next-line class-methods-use-this
  protected _getFieldsQuery(fields?: Fields): string {
    return fields ? `?fields=${fields.join(',')}` : '';
  }
}

export default BaseResource;
