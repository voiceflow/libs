import Fetcher, { FetcherOptions } from './fetcher';

export type Fields = readonly string[];

export type BaseResourceOptions<Client extends Record<string, any>> = FetcherOptions<Client>;

class BaseResource<Client extends Record<string, any>> extends Fetcher<Client> {
  constructor(options: BaseResourceOptions<Client>) {
    super(options);
  }

  protected _getFieldsQuery(fields?: Fields): string {
    return fields ? `?fields=${fields.join(',')}` : '';
  }

  protected _getIDsQuery(ids: string[]): string {
    if (ids.length > 0) {
      // eslint-disable-next-line prefer-template
      return '?' + ids.map((id) => `diagramID=${id}`).join('&');
    }
    return '';
  }
}

export default BaseResource;
