import { Inject, Injectable } from '@nestjs/common';
import { RedisConnection, RedisService } from '@voiceflow/nestjs-redis';
import { RateLimiterRedis, RateLimiterRes, RateLimiterStoreAbstract } from 'rate-limiter-flexible';

import { Providers } from './constants';
import { Ok } from './interfaces/ok.interface';
import { RateLimitOptions } from './interfaces/rate-limit-options.interface';
import { TooManyRequests } from './interfaces/too-many-requests.interface';

@Injectable()
export class RateLimitService {
  private readonly rateLimiter: RateLimiterStoreAbstract;

  constructor(
    @Inject(Providers.RATE_LIMIT_OPTIONS) private readonly config: RateLimitOptions,
    redis: RedisService
  ) {
    const storeClient: RedisConnection = redis.connection;

    this.rateLimiter = new RateLimiterRedis({
      points: config.points,
      duration: config.duration,
      keyPrefix: config.serviceName,
      storeClient,
    });
  }

  async consume(token: string): Promise<Ok | TooManyRequests> {
    try {
      const successResult = await this.rateLimiter.consume(token);

      const result: Ok = {
        kind: 'ok',

        limit: this.config.points,
        limitRemaining: successResult.remainingPoints,
        resetsAt: new Date(Date.now() + successResult.msBeforeNext),
      };

      return result;
    } catch (error) {
      if (error instanceof RateLimiterRes) {
        const result: TooManyRequests = {
          kind: 'too-many-requests',

          retryAfterSeconds: Math.floor(error.msBeforeNext / 1000),
        };

        return result;
      }

      throw error;
    }
  }
}
