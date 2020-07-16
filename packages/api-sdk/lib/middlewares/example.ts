import VError from '@voiceflow/verror';

import { Next, Request, Response } from '@/types';

import { AbstractMiddleware, route } from '../utils';

class ExampleMiddleware extends AbstractMiddleware {
  @route()
  async checkExample(req: Request<Record<string, any>, any, { token: string }>, _: Response, next: Next) {
    if (!req.headers.token) {
      throw new VError('Token required', VError.HTTP_STATUS.UNAUTHORIZED);
    }

    return next();
  }
}

export default ExampleMiddleware;
