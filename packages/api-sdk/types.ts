import * as ExpressCore from 'express-serve-static-core';

export interface Config {
  NODE_ENV: string;
  PORT: string;

  AWS_ACCESS_KEY_ID: string | null;
  AWS_SECRET_ACCESS_KEY: string | null;
  AWS_REGION: string | null;
  AWS_ENDPOINT: string | null;

  DYNAMO_ENDPOINT: string | null;

  // Secrets configuration
  SECRETS_PROVIDER: string;
  API_KEYS_SECRET: string | null;
  MAIN_DB_SECRET: string | null;

  // Release information
  GIT_SHA: string | null;
  BUILD_NUM: string | null;
  SEM_VER: string | null;
  BUILD_URL: string | null;
}

export type Request<Params extends Record<string, any> = Record<string, any>, ResBody = any, ReqBody = any> = ExpressCore.Request<
  Params,
  ResBody,
  ReqBody
>;

export type Response<ResBody = any> = ExpressCore.Response<ResBody>;

export type Next = ExpressCore.NextFunction;

export type Middleware = (req: Request, res: Response, next: Next) => Promise<void>;

export type InstanceMap<T extends Record<string, new (...args: any[]) => any>> = {
  [K in keyof T]: InstanceType<T[K]>;
};
