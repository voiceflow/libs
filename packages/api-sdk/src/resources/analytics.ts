import type Fetch from '@/fetch';

import Fetcher from './fetcher';

const ENDPOINT = 'analytics';

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

class Analytics extends Fetcher<Analytics> {
  constructor(fetch: Fetch) {
    super({ fetch, clazz: Analytics, endpoint: ENDPOINT });
  }

  public async track<P extends Record<string, any>, K extends keyof P>(
    event: string,
    { envIDs, hashed, teamhashed, properties = {} as P }: TrackOptions<P, K> = {}
  ): Promise<void> {
    await this.fetch.post(`${this._getEndpoint()}/track`, { event, envIDs, hashed, teamhashed, properties });
  }

  public async identify<T extends Record<string, any>, K extends keyof T>({
    envIDs,
    traits,
    hashed,
    teamhashed,
  }: IdentifyOptions<T, K>): Promise<void> {
    await this.fetch.post(`${this._getEndpoint()}/identify`, { traits, envIDs, hashed, teamhashed });
  }

  public async identifyWorkspace<T extends { name: string }>(id: string, properties: T): Promise<void> {
    await this.fetch.post(`${this._getEndpoint()}/workspace/identify`, { ...properties, id });
  }
}

export default Analytics;
