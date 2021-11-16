export enum Environment {
  PRODUCTION = 'production',
  DEVELOPMENT = 'development',
  LOCAL = 'local',
  E2E = 'e2e',
  TEST = 'test',
  /** @deprecated Voiceflow dev envs now use {@link Environment.DEVELOPMENT}  */
  STAGING = 'staging',
}
