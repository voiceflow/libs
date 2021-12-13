import getPort from 'get-port';

/**
 * Create a base config for the metrics class with a random free port & a `test` `NODE_ENV`.
 * @returns A base config object for the metrics class
 */
export const createBaseConfig = async (): Promise<{ PORT_METRICS: string; NODE_ENV: 'test' }> => ({
  PORT_METRICS: (await getPort()).toString(),
  NODE_ENV: 'test',
});
