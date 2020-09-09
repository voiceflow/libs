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
 * Build all controllers
 */
const buildControllers = ({ config, clients, services, responseBuilder }: Options) => {
  const controllers = {
    example: new Example({ config, clients, services }),
  };

  buildRoutes(controllers, responseBuilder);

  return controllers;
};

export default buildControllers;

export type ControllerMap = ReturnType<typeof buildControllers>;
