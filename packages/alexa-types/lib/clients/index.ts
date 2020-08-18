import secretsProvider from '@voiceflow/secrets-provider';

import { Config } from '@/types';

import DocClient from './docClient';
import Pool from './pool';
import Static from './static';

/**
 * Build all clients
 */
const buildClients = (config: Config) => {
  const pool = Pool();
  const docClient = DocClient(config);

  return {
    ...Static,
    pool,
    docClient,
    secretsProvider,
  };
};

export default buildClients;

export type ClientMap = ReturnType<typeof buildClients>;
