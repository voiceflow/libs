import { Crypto } from '@voiceflow/common';

import type Fetch from '@/fetch';

import Fetcher from './fetcher';

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

interface IdentifyOptions<T extends Record<string, any>, K extends keyof T> extends HashOptions<K> {
  traits: T;
}

interface AnalyticsOptions {
  encryption?: Crypto.Synchronous;
  batching?: boolean;
}

class Analytics extends Fetcher<Analytics, AnalyticsOptions> {
  private encryption?: Crypto.Synchronous;

  private queue: Record<string, unknown>[];

  private batching?: boolean;

  private batchPromise: Promise<void> | null;

  constructor(fetch: Fetch, options: AnalyticsOptions = {}) {
    super({ fetch, clazz: Analytics, endpoint: ENDPOINT, clazzOptions: options });

    this.encryption = options.encryption;
    this.queue = [];
    this.batching = options.batching;
    this.batchPromise = null;
  }

  public setBatching(batching: boolean): void {
    this.batching = batching;
  }

  private get shouldEncrypt() {
    return !!this.encryption;
  }

  private encryptedPayload(data: Record<string, unknown> | Record<string, unknown>[]): { message: string } {
    if (!this.encryption) {
      throw new Error('Encryption should be provided!');
    }

    return { message: this.encryption.encryptJSON(data) };
  }

  protected _getEndpoint(): string {
    return this.shouldEncrypt ? ENCRYPTED_ENDPOINT : ENDPOINT;
  }

  private async _enqueue(payload: Record<string, unknown>) {
    this.queue.push(payload);

    if (this.batchPromise) {
      return;
    }

    // we await for Promise.resolve, to push all events that came in the same tick from event loop
    this.batchPromise = Promise.resolve();
    await this.batchPromise;
    this.flushBatched();
    this.batchPromise = null;
  }

  public flushBatched(): Promise<void> {
    const payload = this.queue;
    this.queue = [];

    let promise: Promise<unknown>;

    // can not have async execution on FE window.addEventListener('beforeunload', ...) process thread
    if (this.shouldEncrypt) {
      promise = this.fetch.post(`${this._getEndpoint()}/batch`, this.encryptedPayload(payload));
    } else {
      promise = this.fetch.post(`${this._getEndpoint()}/batch-track`, payload);
    }

    return promise
      .then(() => undefined)
      .catch(() => {
        this.queue.push(...payload);
      });
  }

  public track<P extends Record<string, any>, K extends keyof P>(
    event: string,
    { envIDs, hashed, teamhashed, properties = {} as P }: TrackOptions<P, K> = {}
  ): void {
    if (!event) {
      return;
    }

    if (this.batching) {
      this._enqueue({ event, envIDs, hashed, teamhashed, properties });
    } else {
      this._send(event, { envIDs, hashed, teamhashed, properties });
    }
  }

  private _send<P extends Record<string, any>, K extends keyof P>(
    event: string,
    { envIDs, hashed, teamhashed, properties = {} as P }: TrackOptions<P, K> = {}
  ): Promise<void> {
    const payload = { event, envIDs, hashed, teamhashed, properties };

    // can not have async execution on FE window.addEventListener('beforeunload', ...) process thread
    if (this.shouldEncrypt) {
      return this.fetch.post(`${this._getEndpoint()}`, this.encryptedPayload(payload)).then(() => undefined);
    }
    return this.fetch.post(`${this._getEndpoint()}/track`, payload).then(() => undefined);
  }

  public async identify<T extends Record<string, any>, K extends keyof T>({
    envIDs,
    traits,
    hashed,
    teamhashed,
  }: IdentifyOptions<T, K>): Promise<void> {
    const payload = { traits, envIDs, hashed, teamhashed };

    if (this.shouldEncrypt) {
      await this.fetch.post(`${this._getEndpoint()}/user`, this.encryptedPayload(payload));
    } else {
      await this.fetch.post(`${this._getEndpoint()}/identify`, payload);
    }
  }

  public async identifyWorkspace<T extends { name: string }>(id: string, properties: T): Promise<void> {
    const payload = { ...properties, id };

    if (this.shouldEncrypt) {
      await this.fetch.post(`${this._getEndpoint()}/workspace`, this.encryptedPayload(payload));
    } else {
      await this.fetch.post(`${this._getEndpoint()}/workspace/identify`, payload);
    }
  }
}

export default Analytics;
