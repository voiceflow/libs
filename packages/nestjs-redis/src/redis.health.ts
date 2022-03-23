import { Injectable } from '@nestjs/common';
import type { HealthIndicatorResult } from '@nestjs/terminus';
import { HealthCheckError, HealthIndicator } from '@nestjs/terminus';
import { HealthCheckErrorDto } from '@voiceflow/nestjs-common'

import { RedisService } from './redis.service';

@Injectable()
export class RedisHealthIndicator extends HealthIndicator {
  constructor(private readonly redisService: RedisService) {
    super();
  }

  async isHealthy(key: string): Promise<HealthIndicatorResult> {
    let isHealthy: boolean;
    let data: { response: string } | HealthCheckErrorDto;

    try {
      const pingResponse = await this.redisService.connection.ping();

      isHealthy = true;
      data = { response: pingResponse };
    } catch (error) {
      isHealthy = false;

      data = new HealthCheckErrorDto(error);
    }

    const result = this.getStatus(key, isHealthy, data);

    if (isHealthy) {
      return result;
    }

    throw new HealthCheckError('Redis health check failed', result);
  }
}
