import * as t from 'io-ts';

import type Fetch from '@/fetch';
import { omit, validate } from '@/utils';

class BaseResource<P extends Record<string, t.Mixed>, K extends keyof P> {
  private readonly id: t.NumberC | t.StringC;

  private readonly modalIDKey: K;

  private readonly updateBody: t.PartialC<P>;

  private readonly createBody: t.TypeC<Omit<P, K>>;

  protected readonly fetch: Fetch;

  private readonly resourceEndpoint: string;

  constructor({
    id,
    props,
    fetch,
    modalIDKey,
    resourceEndpoint,
  }: {
    id: t.NumberC | t.StringC;
    props: P;
    fetch: Fetch;
    modalIDKey: K;
    resourceEndpoint: string;
  }) {
    this.id = id;
    this.fetch = fetch;
    this.modalIDKey = modalIDKey;
    this.resourceEndpoint = resourceEndpoint;

    this.updateBody = t.partial(props);
    this.createBody = t.type(omit(props, this.modalIDKey, 'created' as K));
  }

  protected validateID(id: t.TypeOf<P[K]>): void {
    validate(this.id.decode(id));
  }

  protected validateUpdateBody(body: Partial<t.TypeOfProps<P>>): void {
    validate(this.updateBody.decode(body));
  }

  protected validateCreatBody(body: Omit<t.TypeOfProps<P>, K | 'created'>): void {
    validate(this.createBody.decode(body));
  }

  protected getEndpoint(): string {
    return this.resourceEndpoint;
  }
}

export default BaseResource;
