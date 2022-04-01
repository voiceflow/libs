import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { MetadataService } from './metadata.service';

@Module({
  imports: [ConfigModule],
  providers: [MetadataService],
  exports: [MetadataService],
})
export class MetadataModule {}
