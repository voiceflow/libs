import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { ServiceMetadata } from './interfaces/service-metadata.interface';

/** Implements {@link ServiceMetadata} by reading environment variables from that follow Voiceflow Dockerfile convention. */
@Injectable()
export class MetadataService implements ServiceMetadata {
  readonly metadata: { version: string; buildNumber: string; gitSha: string };

  constructor(configService: ConfigService) {
    this.metadata = {
      version: configService.get<string>('SEM_VER', 'unknown'),
      buildNumber: configService.get<string>('BUILD_NUM', 'unknown'),
      gitSha: configService.get<string>('GIT_SHA', 'unknown'),
    };
  }
}
