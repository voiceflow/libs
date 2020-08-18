import { ResponseBuilder } from '@voiceflow/backend-utils';
import { ValidationChain } from 'express-validator';
import { Middleware } from 'express-validator/src/base';

import { Config, Next, Request, Response } from '@/types';

import { ClientMap } from './clients';
import { ServiceMap } from './services';

const ROUTES_KEY = Symbol('routes-key');

type RouteValidations = Record<string, ValidationChain>;

type AbstractControlOptions<T extends object = object> = {
  utils?: T;
  config: Config;
  clients: ClientMap;
  services: ServiceMap;
};

abstract class AbstractControl<T extends object = object> {
  static VALIDATIONS = {};

  public utils: T;

  public config: Config;

  public clients: ClientMap;

  public services: ServiceMap;

  constructor({ utils = {} as T, config, clients, services }: AbstractControlOptions<T>) {
    this.utils = utils;
    this.config = config;
    this.clients = clients;
    this.services = services;
  }
}

export interface Route<P extends Record<string, any> = {}, T = void> {
  (req: Request<P>, res: Response, next: Next): Promise<T>;

  route?: unknown;
  callback?: boolean;
  validations?: RouteValidations;
}

export abstract class AbstractManager<T extends object = object> extends AbstractControl<T> {
  static CONSTANTS = {};
}

export abstract class AbstractController<T extends object = object> extends AbstractControl<T> {
  [ROUTES_KEY]: string[];
}

export abstract class AbstractMiddleware<T extends object = object> extends AbstractControl<T> {
  [ROUTES_KEY]: string[];
}

export const route = (validations?: RouteValidations) => (
  target: AbstractController | AbstractMiddleware,
  propertyName: string,
  propertyDescriptor: PropertyDescriptor
): PropertyDescriptor => {
  target[ROUTES_KEY] = target[ROUTES_KEY] || [];

  const routes = target[ROUTES_KEY];

  routes.push(propertyName);

  propertyDescriptor.value = Object.assign(propertyDescriptor.value, { validations });

  return propertyDescriptor;
};

export const factory = (): any => (_target: () => Middleware, _key: string, descriptor: PropertyDescriptor) => {
  descriptor.value = Object.assign(descriptor.value, { callback: true });

  return descriptor;
};

export const buildRoutes = <T extends Record<string, AbstractController | AbstractMiddleware>>(routers: T, responseBuilder: ResponseBuilder) => {
  Object.values(routers).forEach((routes) => {
    const methods = routes[ROUTES_KEY];

    /* eslint-disable @typescript-eslint/ban-ts-ignore */
    methods.forEach((key) => {
      // @ts-ignore
      const rowRoute = routes[key];

      const routeHandler = rowRoute.bind(routes);

      routeHandler.callback = rowRoute.callback;
      routeHandler.validations = rowRoute.validations;

      // @ts-ignore
      routes[key] = responseBuilder.route(routeHandler);
    });
    /* eslint-enable @typescript-eslint/ban-ts-ignore */
  });
};
