import { ResponseBuilder } from '@voiceflow/backend-utils';

import { buildRoutes } from '@/lib/utils';
import { Config } from '@/types';

import { ClientMap } from '../clients';
import { ServiceMap } from '../services';
import Example from './example';

type Options = {
  config: Config;
  clients: ClientMap;
  services: ServiceMap;
  responseBuilder: ResponseBuilder;
};

/**
 * Build all middlewares
 */
const buildMiddleware = ({ config, clients, services, responseBuilder }: Options) => {
  const middlewares = {
    example: new Example({ config, clients, services }),
  };

  buildRoutes(middlewares, responseBuilder);

  return middlewares;
};

export default buildMiddleware;

export type MiddlewareMap = ReturnType<typeof buildMiddleware>;
