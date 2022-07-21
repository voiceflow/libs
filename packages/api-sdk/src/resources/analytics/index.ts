import type Fetch from '@api-sdk/fetch';
import { Crypto } from '@voiceflow/common';

import Fetcher from '../fetcher';
import Queue from './queue';

const ENDPOINT = 'analytics';
const ENCRYPTED_ENDPOINT = 'vf-ping';

interface HashOptions<K> {
  envIDs?: K[];
  hashed?: K[];
  teamhashed?: K[];
}

interface TrackOptions<P extends Record<string, any>, K extends keyof P> extends HashOptions<K> {
  properties?: P;
}

interface PublicTrackOptions<P extends Record<string, any>, K extends keyof P> extends TrackOptions<P, K> {
  anonymousID?: string;
}

interface IdentifyOptions<T extends Record<string, any>, K extends keyof T> extends HashOptions<K> {
  traits: T;
}

interface AnalyticsOptions {
  encryption?: Crypto.Synchronous;
  batching?: boolean;
}

// can not have async execution on FE window.addEventListener('beforeunload', ...) process thread

class Analytics extends Fetcher<Analytics, AnalyticsOptions> {
  private batching?: boolean;

  private encryption?: Crypto.Synchronous;

  private publicQueue: Queue;

  private privateQueue: Queue;

  constructor(fetch: Fetch, options: AnalyticsOptions = {}) {
    super({ fetch, clazz: Analytics, endpoint: ENDPOINT, clazzOptions: options });

    this.batching = options.batching;
    this.encryption = options.encryption;
    this.publicQueue = new Queue(this.onFlushPublic);
    this.privateQueue = new Queue(this.onFlushPrivate);
  }

  protected get endpoint() {
    return this.encrypted ? ENCRYPTED_ENDPOINT : ENDPOINT;
  }

  private get encrypted() {
    return !!this.encryption;
  }

  private encryptedPayload(data: Record<string, unknown> | Record<string, unknown>[]): { message: string } {
    if (!this.encryption) {
      throw new Error('Encryption should be provided!');
    }

    return { message: this.encryption.encryptJSON(data) };
  }

  private onFlushPublic = (payload: Record<string, unknown>[]): Promise<unknown> => {
    if (this.encrypted) {
      return this.fetch.post(`${this.endpoint}/batch`, this.encryptedPayload(payload));
    }

    return this.fetch.post(`${this.endpoint}/batch-track`, payload);
  };

  private onFlushPrivate = (payload: Record<string, unknown>[]): Promise<unknown> => {
    if (this.encrypted) {
      return this.fetch.post(`${this.endpoint}/private-batch`, this.encryptedPayload(payload));
    }

    return this.fetch.post(`${this.endpoint}/private-batch-track`, payload);
  };

  public setBatching(batching: boolean): void {
    this.batching = batching;
  }

  public flush(): Promise<void> {
    return Promise.all([this.publicQueue.flush(), this.privateQueue.flush()]).then(Queue.voidFunc);
  }

  public track<P extends Record<string, any>, K extends keyof P>(
    event: string,
    { envIDs, hashed, teamhashed, properties = {} as P }: TrackOptions<P, K> = {}
  ): Promise<void> {
    if (!event) {
      return Promise.resolve();
    }

    const payload = { event, envIDs, hashed, teamhashed, properties };

    if (this.batching) {
      return this.privateQueue.enqueue(payload);
    }

    if (this.encrypted) {
      return this.fetch.post(`${this.endpoint}/private`, this.encryptedPayload(payload)).then(Queue.voidFunc);
    }

    return this.fetch.post(`${this.endpoint}/private-track`, payload).then(Queue.voidFunc);
  }

  public trackPublic<P extends Record<string, any>, K extends keyof P>(
    event: string,
    { envIDs, hashed, teamhashed, anonymousID, properties = {} as P }: PublicTrackOptions<P, K> = {}
  ): Promise<void> {
    if (!event) {
      return Promise.resolve();
    }

    const payload = { event, envIDs, hashed, teamhashed, properties, anonymousID };

    if (this.batching) {
      return this.publicQueue.enqueue(payload);
    }

    if (this.encrypted) {
      return this.fetch.post(`${this.endpoint}`, this.encryptedPayload(payload)).then(Queue.voidFunc);
    }

    return this.fetch.post(`${this.endpoint}/track`, payload).then(Queue.voidFunc);
  }

  public async identify<T extends Record<string, any>, K extends keyof T>({
    envIDs,
    traits,
    hashed,
    teamhashed,
  }: IdentifyOptions<T, K>): Promise<void> {
    const payload = { traits, envIDs, hashed, teamhashed };

    if (this.encrypted) {
      return this.fetch.post(`${this.endpoint}/user`, this.encryptedPayload(payload)).then(Queue.voidFunc);
    }

    return this.fetch.post(`${this.endpoint}/identify`, payload).then(Queue.voidFunc);
  }

  public async identifyWorkspace<T extends { name: string }>(id: string, properties: T): Promise<void> {
    const payload = { ...properties, id };

    if (this.encrypted) {
      return this.fetch.post(`${this.endpoint}/workspace`, this.encryptedPayload(payload)).then(Queue.voidFunc);
    }

    return this.fetch.post(`${this.endpoint}/workspace/identify`, payload).then(Queue.voidFunc);
  }
}

export default Analytics;
