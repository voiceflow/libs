import { ResponseBuilder } from '@voiceflow/backend-utils';
import secretsProvider from '@voiceflow/secrets-provider';

import { buildClients, buildControllers, buildMiddleware, buildServices, ClientMap, ControllerMap, MiddlewareMap, ServiceMap } from '@/lib';
import { Config } from '@/types';

class ServiceManager {
  responseBuilder = new ResponseBuilder();

  clients: ClientMap;

  services: ServiceMap;

  middlewares: MiddlewareMap;

  controllers: ControllerMap;

  constructor(public config: Config) {
    // Clients
    const clients = buildClients(config);

    // Services
    const services = buildServices({ config, clients });

    // Middleware
    const middlewares = buildMiddleware({ clients, config, services, responseBuilder: this.responseBuilder });

    // Controllers
    const controllers = buildControllers({ clients, config, services, responseBuilder: this.responseBuilder });

    this.clients = clients;
    this.services = services;
    this.middlewares = middlewares;
    this.controllers = controllers;
  }

  /**
   * Start services
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async start() {}

  /**
   * Stop services
   */
  async stop() {
    await secretsProvider.stop();
  }
}

export default ServiceManager;
