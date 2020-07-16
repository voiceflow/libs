declare module '@voiceflow/backend-utils' {
  // eslint-disable-next-line import/no-extraneous-dependencies
  import { HttpStatus } from 'http-status';
  import * as ExpressValidator from 'express-validator';
  import { Request, Response, NextFunction } from 'express';

  type AsyncMiddleware = (request: Request, response: Response, next: NextFunction) => Promise<void>;
  type Route = (...args: any[]) => Route | Route[] | AsyncMiddleware;

  type RawRoute = AsyncMiddleware & {
    callback?: boolean;
    validations?: Record<string, ExpressValidator.ValidationChain>;
    validationsApplied?: boolean;
  };

  type ServiceManager = {
    middlewares: {};
    controllers: {};
  };

  export type FixtureExpect<C extends {}, M extends {}> = {
    controllers?: { [key in keyof C]?: { [methodKey in keyof C[key]]?: number } };
    middlewares?: { [key in keyof M]?: { [methodKey in keyof M[key]]?: number } };
    validations: {
      controllers?: { [key in keyof C]?: { [methodKey in keyof C[key]]?: Record<string, number> } };
      middlewares?: { [key in keyof M]?: { [methodKey in keyof M[key]]?: Record<string, number> } };
    };
  };

  export class ResponseBuilder {
    route(rawRoute: RawRoute, successCodeOverride?: HttpStatus, failureCodeOverride?: HttpStatus): Route;

    validationResult(req: Record<string, any>, res?: Record<string, any>, next?: Function): void;
  }

  export class FixtureGenerator {
    static checkFixture<T extends ServiceManager>(serviceManager: T, expected: FixtureExpect<T['controllers'], T['middlewares']>): null;

    static createFixture<T extends ServiceManager>(serviceManager: T): T;
  }

  export const Validator: typeof ExpressValidator;
}
