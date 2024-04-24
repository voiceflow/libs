import type { CanActivate, ExecutionContext } from '@nestjs/common';
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import assert from 'assert/strict';
import type { Request, Response } from 'express';

import { Providers } from './constants';
import type { RateLimitOptions } from './interfaces/rate-limit-options.interface';
import type { TokenExtractor } from './interfaces/token-extractor.interface';
import type { RateLimitService } from './rate-limit.service';

@Injectable()
export class RateLimitGuard implements CanActivate {
  private static extractTokenFromHeadersOrCookies(executionContext: ExecutionContext): string | undefined {
    const request = executionContext.switchToHttp().getRequest<Request>();

    return request.headers.authorization || request.cookies?.auth_vf;
  }

  private readonly tokenExtractor: TokenExtractor;

  constructor(
    private readonly service: RateLimitService,
    @Inject(Providers.RATE_LIMIT_OPTIONS) options: RateLimitOptions
  ) {
    this.tokenExtractor = options.tokenExtractor || RateLimitGuard.extractTokenFromHeadersOrCookies;
  }

  async canActivate(context: ExecutionContext): Promise<true> {
    const httpContext = context.switchToHttp();
    const response = httpContext.getResponse<Response<never>>();

    const token = this.tokenExtractor(context);
    assert(token, 'Expected request token to be defined, you must run the auth guard before this one');

    const result = await this.service.consume(token);

    if (result.kind === 'ok') {
      response.setHeader('X-RateLimit-Limit', result.limit);
      response.setHeader('X-RateLimit-Remaining', result.limitRemaining);
      response.setHeader('X-RateLimit-Reset', result.resetsAt.toString());

      return true;
    }

    response.setHeader('Retry-After', result.retryAfterSeconds);
    throw new HttpException('You have sent too many requests and are being ratelimited', HttpStatus.TOO_MANY_REQUESTS);
  }
}
