import { type default as Fetch } from '@api-sdk/fetch';

import ProgramResource from './program';

const ENDPOINT = 'prototype-programs';

class PrototypeProgramResource extends ProgramResource {
  constructor(fetch: Fetch) {
    super(fetch, { resourceEndpoint: ENDPOINT });
  }
}

export default PrototypeProgramResource;
