import type Fetch from '@/fetch';

import ProgramResource from './program';

const ENDPOINT = 'prototype-programs';

class PrototypeProgramResource extends ProgramResource {
  constructor(fetch: Fetch) {
    super(fetch, { resourceEndpoint: ENDPOINT });
  }
}

export default PrototypeProgramResource;
