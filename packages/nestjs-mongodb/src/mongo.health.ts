import { Injectable } from '@nestjs/common';
import type { HealthIndicatorResult } from '@nestjs/terminus';
import { HealthCheckError, HealthIndicator } from '@nestjs/terminus';
import { HealthCheckErrorDto } from '@voiceflow/nestjs-common';
import { Document } from 'mongodb';

import { MongoService } from './mongo.service';

@Injectable()
export class MongoHealthIndicator extends HealthIndicator {
  constructor(private readonly mongoService: MongoService) {
    super();
  }

  async isHealthy(key: string): Promise<HealthIndicatorResult> {
    let isHealthy: boolean;
    let data: { response: Document } | HealthCheckErrorDto;

    try {
      const pingResponse = await this.mongoService.db.stats();

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

    throw new HealthCheckError('Mongo health check failed', result);
  }
}
