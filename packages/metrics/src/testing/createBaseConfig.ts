import getPort from 'get-port';

export interface BaseConfig {
  PORT_METRICS: string;
  NODE_ENV: 'test';
  SERVICE_NAME: string;
}

/** Doing this once in module scope is fine since only 1 service will be running tests, there is no realistic risk of collision. */
const DEFAULT_SERVICE_NAME = `test-${Math.random().toString(36).slice(2)}`;

/**
 * Create a base config for the metrics class with a random free port & a `test` `NODE_ENV`.
 * @returns A base config object for the metrics class
 */
export const createBaseConfig = async (): Promise<BaseConfig> => ({
  PORT_METRICS: (await getPort()).toString(),
  NODE_ENV: 'test',
  SERVICE_NAME: DEFAULT_SERVICE_NAME,
});
