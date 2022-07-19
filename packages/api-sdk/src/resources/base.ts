import type { AnyRecord } from '@voiceflow/common';

import Fetcher, { FetcherOptions } from './fetcher';

export type Fields = readonly string[];

export type BaseResourceOptions<Client extends AnyRecord, Options = undefined> = FetcherOptions<Client, Options>;

class BaseResource<Client extends AnyRecord, Options = undefined> extends Fetcher<Client, Options> {
  constructor(options: BaseResourceOptions<Client, Options>) {
    super(options);
  }

  protected _getFieldsQuery(fields?: Fields): string {
    return fields ? `?fields=${fields.join(',')}` : '';
  }

  protected _getIDsQuery(name: string, ids: string[]): string {
    if (!ids.length) return '';

    // eslint-disable-next-line sonarjs/no-nested-template-literals
    return `?${ids.map((id) => `${name}=${id}`).join('&')}`;
  }
}

export default BaseResource;
