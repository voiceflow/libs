import * as undici from 'undici';

import type { ClientConfiguration } from './client-configuration.interface';
import { FetchClient as BaseFetchClient } from './fetch.client';

export * from './client-configuration.interface';
export * from './fetch.interface';
export * from './http-method.enum';
export * from './request-options.interface';

export class FetchClient extends BaseFetchClient<undici.RequestInit, URL | undici.Request, undici.Response> {
  constructor(config: ClientConfiguration = {}) {
    super(undici.fetch, config);
  }
}
