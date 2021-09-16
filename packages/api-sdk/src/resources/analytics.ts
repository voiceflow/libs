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
}

class Analytics extends Fetcher<Analytics, AnalyticsOptions> {
  private encryption?: Crypto.Synchronous;

  constructor(fetch: Fetch, options: AnalyticsOptions = {}) {
    super({ fetch, clazz: Analytics, endpoint: ENDPOINT, clazzOptions: options });

    this.encryption = options.encryption;
  }

  private get shouldEncrypt() {
    return !!this.encryption;
  }

  private encryptedPayload(data: Record<string, unknown>): { message: string } {
    if (!this.encryption) {
      throw new Error('Encryption should be provided!');
    }

    return { message: this.encryption.encryptJSON(data) };
  }

  protected _getEndpoint(): string {
    return this.shouldEncrypt ? ENCRYPTED_ENDPOINT : ENDPOINT;
  }

  public async track<P extends Record<string, any>, K extends keyof P>(
    event: string,
    { envIDs, hashed, teamhashed, properties = {} as P }: TrackOptions<P, K> = {}
  ): Promise<void> {
    const payload = { event, envIDs, hashed, teamhashed, properties };

    if (this.shouldEncrypt) {
      await this.fetch.post(`${this._getEndpoint()}`, this.encryptedPayload(payload));
    } else {
      await this.fetch.post(`${this._getEndpoint()}/track`, payload);
    }
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
