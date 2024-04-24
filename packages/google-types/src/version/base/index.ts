import type { Locale } from '@google-types/constants';
import type { AnyCommand } from '@google-types/node';
import type { BaseModels, DeepPartialByKey } from '@voiceflow/base-types';

import type { GaDfesSurveyContextExtension } from '../prototype';
import type { SharedBasePublishing } from './publishing';
import { defaultSharedBasePublishing } from './publishing';

export * from '../prototype';
export * from './publishing';

export interface BasePrototype extends BaseModels.Version.Prototype<AnyCommand, Locale, GaDfesSurveyContextExtension> {}

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
