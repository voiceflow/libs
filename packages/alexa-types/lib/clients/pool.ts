import secretsProvider from '@voiceflow/secrets-provider';
import pg from 'pg';

const Pool = () => {
  const mainDbConfig = secretsProvider.get('MAIN_DB');

  return new pg.Pool({
    user: mainDbConfig.username,
    host: mainDbConfig.host,
    database: mainDbConfig.dbname,
    password: mainDbConfig.password,
    port: mainDbConfig.port,
  });
};

export default Pool;
