import { BaseModels, DeepPartialByKey } from '@voiceflow/base-types';

import { Locale } from '@/constants';
import { AnyCommand } from '@/node';

import { defaultSharedBasePublishing, SharedBasePublishing } from './publishing';

export * from './publishing';

export interface BasePrototype extends BaseModels.Version.Prototype<AnyCommand, Locale> {}

export enum Stage {
  DEV = 'DEV',
  LIVE = 'LIVE',
  REVIEW = 'REVIEW',
}

export interface SharedBasePlatformData {
  status: { stage: Stage };
  publishing: SharedBasePublishing;
  modelVersion: 1;
}

export const defaultSharedBasePlatformData = ({
  status: { stage = Stage.DEV } = { stage: Stage.DEV },
  publishing,
}: DeepPartialByKey<SharedBasePlatformData, 'publishing'>): SharedBasePlatformData => ({
  status: { stage },
  publishing: defaultSharedBasePublishing(publishing),
  modelVersion: 1,
});
