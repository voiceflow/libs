import Fetcher, { FetcherOptions } from './fetcher';

export type Fields = readonly string[];
export type IDs = readonly string[];

export type BaseResourceOptions<Client extends Record<string, any>> = FetcherOptions<Client>;

class BaseResource<Client extends Record<string, any>> extends Fetcher<Client> {
  constructor(options: BaseResourceOptions<Client>) {
    super(options);
  }

  protected _getFieldsQuery(fields?: Fields): string {
    return fields ? `?fields=${fields.join(',')}` : '';
  }

  protected _getIDsQuery(ids?: IDs): string {
    return ids ? `?ids=${ids.join(',')}` : '';
  }
}

export default BaseResource;
